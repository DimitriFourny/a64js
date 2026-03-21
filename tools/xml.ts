export type XmlChild = XmlNode | string;

export type XmlNode = {
  name: string;
  attrs: Record<string, string>;
  children: XmlChild[];
};

function decodeEntities(text: string): string {
  return text
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

export function parseXml(source: string): XmlNode {
  const syntheticRoot: XmlNode = { name: "#document", attrs: {}, children: [] };
  const stack: XmlNode[] = [syntheticRoot];
  let index = 0;

  while (index < source.length) {
    const lt = source.indexOf("<", index);
    if (lt === -1) {
      const tail = decodeEntities(source.slice(index));
      if (tail.trim()) {
        stack[stack.length - 1].children.push(tail);
      }
      break;
    }

    const text = decodeEntities(source.slice(index, lt));
    if (text.trim()) {
      stack[stack.length - 1].children.push(text);
    }

    if (source.startsWith("<!--", lt)) {
      const end = source.indexOf("-->", lt + 4);
      index = end + 3;
      continue;
    }
    if (source.startsWith("<?", lt)) {
      const end = source.indexOf("?>", lt + 2);
      index = end + 2;
      continue;
    }
    if (source.startsWith("<!DOCTYPE", lt) || source.startsWith("<!doctype", lt)) {
      const end = source.indexOf(">", lt + 2);
      index = end + 1;
      continue;
    }

    const gt = source.indexOf(">", lt + 1);
    const rawTag = source.slice(lt + 1, gt);
    if (rawTag.startsWith("/")) {
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

  const root = syntheticRoot.children.find((child): child is XmlNode => typeof child !== "string");
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
