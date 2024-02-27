import fs from "fs"
import path from "path"
import matter from "gray-matter"

const MARKDOWN_DIRECTORY = path.join(process.cwd(), "public/markdowns")

export function getNumberOfMarkdownFiles(dir: string): number {
  const files = fs.readdirSync(path.join(MARKDOWN_DIRECTORY, dir))
  return files.filter((file) => file.endsWith(".md")).length
}
