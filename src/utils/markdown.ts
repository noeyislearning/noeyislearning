"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getNumberOfMarkdownFiles(dir: string): Promise<number> {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/data/markdowns", dir)
  )
  return files.filter((file) => file.endsWith(".md")).length
}

export async function getMetadataOfMarkdownFiles(
  dir: string
): Promise<Record<string, any>[]> {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/data/markdowns", dir)
  )
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const fullPath = path.join(
      process.cwd(),
      "src/data/markdowns",
      dir,
      `${slug}.md`
    )
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return {
      slug,
      ...data,
    }
  })
}

export async function getMarkdownContent(
  dir: string,
  slug: string
): Promise<string> {
  const fullPath = path.join(
    process.cwd(),
    "src/data/markdowns",
    dir,
    `${slug}.md`
  )
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content } = matter(fileContents)
  return content
}
