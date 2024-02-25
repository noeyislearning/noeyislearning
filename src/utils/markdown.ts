import "server-only"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getNumberOfMarkdownFiles(
  menuPath: string
): Promise<number> {
  const markdownDir = path.join(process.cwd(), "src/data/markdowns", menuPath)
  const files = await fs.promises.readdir(markdownDir)
  const markdownFiles = files.filter((file) => path.extname(file) === ".md")
  return markdownFiles.length
}

export async function getMetadataOfMarkdownFiles(
  menuPath: string
): Promise<any[]> {
  const markdownDir = path.join(process.cwd(), "src/data/markdowns", menuPath)
  const files = await fs.promises.readdir(markdownDir)
  const markdownFiles = files.filter((file) => path.extname(file) === ".md")

  const metadataList = await Promise.all(
    markdownFiles.map(async (file) => {
      const filePath = path.join(markdownDir, file)
      const fileContent = await fs.promises.readFile(filePath, "utf-8")
      const { data } = matter(fileContent)
      return data
    })
  )

  return metadataList
}

export async function getMarkdownContent(
  menuPath: string
): Promise<string | null> {
  try {
    const markdownDir = path.join(process.cwd(), "src/data/markdowns", menuPath)
    const files = await fs.promises.readdir(markdownDir)

    // Assuming there's only one markdown file per menuPath
    const filePath = path.join(markdownDir, files[0])
    const fileContent = await fs.promises.readFile(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    // Extract slug from metadata
    const slug = data.slug

    return content
  } catch (error) {
    console.error("Error reading markdown content:", error)
    return null
  }
}
