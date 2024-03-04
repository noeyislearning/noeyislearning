import fs from "fs"
import path from "path"
import matter from "gray-matter"

const MARKDOWN_DIRECTORY = path.join(process.cwd(), "/data/markdowns")
const BOOKMARKS_DIRECTORY = path.join(MARKDOWN_DIRECTORY, "bookmarks")

export function getNumberOfMarkdownFiles(dir: string): number {
  const files = fs.readdirSync(path.join(MARKDOWN_DIRECTORY, dir))
  return files.filter((file) => file.endsWith(".md")).length
}

export function getNumberOfDirectoriesInBookmarks(): number {
  const bookmarksDir = path.join(MARKDOWN_DIRECTORY, "bookmarks")
  const files = fs.readdirSync(bookmarksDir)
  let count = 0
  files.forEach((file) => {
    const filePath = path.join(bookmarksDir, file)
    if (fs.statSync(filePath).isDirectory()) {
      count++
    }
  })
  return count
}

export function getDirectoryNames(): string[] {
  const bookmarksDir = path.join(MARKDOWN_DIRECTORY, "bookmarks")
  const files = fs.readdirSync(bookmarksDir)
  const directories = files.filter((file) =>
    fs.statSync(path.join(bookmarksDir, file)).isDirectory()
  )
  return directories
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

export function getBookmarkMetadataOfMarkdownFiles(
  dir: string
): Record<string, any>[] {
  const files = fs.readdirSync(path.join(BOOKMARKS_DIRECTORY, dir))
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const fullPath = path.join(BOOKMARKS_DIRECTORY, dir, `${slug}.md`)
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
