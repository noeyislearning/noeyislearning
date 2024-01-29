import { getHighlighter } from "shiki/bundle/web";

export default async function CodingSyntaxHighlighterCard({ children }: { children: any }) {
  const language = children.props.className?.replace("language-", "")?.replace("lang-", "");

  const code = children.props.children;

  const highlighter = await getHighlighter({
    langs: ["html", "css", "js", "python", "java", "c", "cpp", "php", "sql", "json", "xml", "markdown", "bash"],
    themes: ["ayu-dark"]
  });

  const highlightedCode = highlighter.codeToHtml(code, { lang: language, theme: "ayu-dark" });

  return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}
