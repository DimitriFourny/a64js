export type XmlChild = XmlNode | string;

export type XmlNode = {
  name: string;
  attrs: Record<string, string>;
  children: XmlChild[];
};

function decodeEntities(text: string): string {
  return text
    .replace(/&#(x[0-9a-fA-F]+|[0-9]+);/g, (_, entity: string) => {
      const value = entity.startsWith("x") ? Number.parseInt(entity.slice(1), 16) : Number(entity);
      if (value > 0x10ffff || value >= 0xd800 && value <= 0xdfff) throw new Error(`invalid XML character entity: ${entity}`);
      return String.fromCodePoint(value);
    })
    .replaceAll("&quot;", "\"")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function parseTag(raw: string): { name: string; attrs: Record<string, string>; selfClosing: boolean } {
  const selfClosing = raw.endsWith("/");
  const body = selfClosing ? raw.slice(0, -1).trim() : raw.trim();
  const nameMatch = /^([^\s/>]+)/.exec(body);
  if (!nameMatch) {
    throw new Error(`invalid tag: ${raw}`);
  }
  const name = nameMatch[1];
  const attrs: Record<string, string> = {};
  const attrSource = body.slice(name.length);
  const attrRegex = /([A-Za-z0-9_:\-]+)\s*=\s*("([^"]*)"|'([^']*)')/g;
  let match: RegExpExecArray | null;
  while ((match = attrRegex.exec(attrSource)) !== null) {
    attrs[match[1]] = decodeEntities(match[3] ?? match[4] ?? "");
  }
  return { name, attrs, selfClosing };
}

function markupEnd(source: string, start: number): number {
  let quote = "";
  let bracketDepth = 0;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) { if (char === quote) quote = ""; continue; }
    if (char === "'" || char === '\"') { quote = char; continue; }
    if (char === "[") bracketDepth += 1;
    if (char === "]") bracketDepth -= 1;
    if (char === ">" && bracketDepth === 0) return index;
  }
  throw new Error("unterminated XML tag");
}

export function parseXml(source: string): XmlNode {
  const syntheticRoot: XmlNode = { name: "#document", attrs: {}, children: [] };
  const stack: XmlNode[] = [syntheticRoot];
  let index = 0;

  while (index < source.length) {
    const lt = source.indexOf("<", index);
    if (lt === -1) {
      const tail = decodeEntities(source.slice(index));
      if (tail) {
        stack[stack.length - 1].children.push(tail);
      }
      break;
    }

    const text = decodeEntities(source.slice(index, lt));
    if (text) {
      stack[stack.length - 1].children.push(text);
    }

    if (source.startsWith("<!--", lt)) {
      const end = source.indexOf("-->", lt + 4);
      if (end < 0) throw new Error("unterminated XML comment");
      index = end + 3;
      continue;
    }
    if (source.startsWith("<?", lt)) {
      const end = source.indexOf("?>", lt + 2);
      if (end < 0) throw new Error("unterminated XML processing instruction");
      index = end + 2;
      continue;
    }
    if (source.startsWith("<![CDATA[", lt)) {
      const end = source.indexOf("]]>", lt + 9);
      if (end < 0) throw new Error("unterminated XML CDATA");
      stack[stack.length - 1].children.push(source.slice(lt + 9, end));
      index = end + 3;
      continue;
    }
    const gt = markupEnd(source, lt + 1);
    if (source.startsWith("<!DOCTYPE", lt) || source.startsWith("<!doctype", lt)) {
      index = gt + 1;
      continue;
    }

    const rawTag = source.slice(lt + 1, gt);
    if (rawTag.startsWith("/")) {
      const name = rawTag.slice(1).trim();
      if (stack.length === 1 || stack[stack.length - 1].name !== name) throw new Error(`mismatched XML closing tag: ${name}`);
      stack.pop();
      index = gt + 1;
      continue;
    }

    const tag = parseTag(rawTag);
    const node: XmlNode = { name: tag.name, attrs: tag.attrs, children: [] };
    stack[stack.length - 1].children.push(node);
    if (!tag.selfClosing) {
      stack.push(node);
    }
    index = gt + 1;
  }

  if (stack.length !== 1) throw new Error(`unclosed XML element: ${stack[stack.length - 1].name}`);
  const roots = syntheticRoot.children.filter((child): child is XmlNode => typeof child !== "string");
  if (roots.length > 1 || syntheticRoot.children.some((child) => typeof child === "string" && child.trim())) throw new Error("multiple XML root elements or text outside root");
  const root = roots[0];
  if (!root) {
    throw new Error("missing XML root element");
  }
  return root;
}

export function children(node: XmlNode, name?: string): XmlNode[] {
  return node.children.filter((child): child is XmlNode => typeof child !== "string" && (!name || child.name === name));
}

export function firstChild(node: XmlNode, name: string): XmlNode | undefined {
  return children(node, name)[0];
}

export function textContent(node: XmlNode): string {
  return node.children
    .map((child) => (typeof child === "string" ? child : textContent(child)))
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

/** Preserve line breaks and text nested inside pseudocode cross-reference links. */
export function rawTextContent(node: XmlNode | undefined): string {
  return node?.children.map((child) => typeof child === "string" ? child : rawTextContent(child)).join("") ?? "";
}
