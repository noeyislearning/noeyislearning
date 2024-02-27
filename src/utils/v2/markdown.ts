import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"

const MARKDOWN_DIRECTORY = path.join(process.cwd(), "public/markdowns")

export function getNumberOfMarkdownFiles(dir: string): number {
  const files = fs.readdirSync(path.join(MARKDOWN_DIRECTORY, dir))
  return files.filter((file) => file.endsWith(".md")).length
}

export function getMetadataOfMarkdownFiles(dir: string): Record<string, any>[] {
  const files = fs.readdirSync(path.join(MARKDOWN_DIRECTORY, dir))
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const fullPath = path.join(MARKDOWN_DIRECTORY, dir, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return {
      slug,
      ...data,
    }
  })
}

export function getMarkdownContent(dir: string, slug: string): string {
  const fullPath = path.join(MARKDOWN_DIRECTORY, dir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content } = matter(fileContents)
  return content
}
