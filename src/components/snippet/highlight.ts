import type { SnippetToken, SnippetTokenType } from "./type.js";

const KEYWORDS = [
  "as",
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "false",
  "for",
  "from",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "of",
  "readonly",
  "return",
  "satisfies",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "type",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "yield",
];

const PATTERNS: readonly { type: SnippetTokenType; source: string }[] = [
  { type: "comment", source: "\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/" },
  { type: "string", source: "\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`" },
  { type: "tag", source: "<\\/?[A-Za-z][\\w.$]*" },
  { type: "keyword", source: `\\b(?:${KEYWORDS.join("|")})\\b` },
  { type: "number", source: "\\b\\d+(?:\\.\\d+)?\\b" },
  { type: "attr", source: "\\b[A-Za-z_$][\\w$]*(?=\\s*[=:](?!=))" },
  { type: "fn", source: "\\b[A-Za-z_$][\\w$]*(?=\\s*\\()" },
  { type: "type", source: "\\b[A-Z][\\w$]*\\b" },
  { type: "punct", source: "[{}()\\[\\]<>=;,.:!?|&+\\-*/]" },
];

const TOKENIZER = new RegExp(PATTERNS.map((pattern) => `(${pattern.source})`).join("|"), "g");

export const snippetHighlight = (code: string): SnippetToken[] => {
  const tokens: SnippetToken[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  TOKENIZER.lastIndex = 0;

  while ((match = TOKENIZER.exec(code)) !== null) {
    if (match.index > cursor) tokens.push({ type: "plain", value: code.slice(cursor, match.index) });

    const groupIndex = PATTERNS.findIndex((_, index) => match![index + 1] !== undefined);

    tokens.push({ type: PATTERNS[groupIndex].type, value: match[0] });
    cursor = match.index + match[0].length;
  }

  if (cursor < code.length) tokens.push({ type: "plain", value: code.slice(cursor) });

  return tokens;
};
