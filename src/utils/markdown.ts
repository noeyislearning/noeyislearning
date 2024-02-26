"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

const MARKDOWN_DIRECTORY = "public/markdowns"

export async function getNumberOfMarkdownFiles(
  menuPath: string
): Promise<number> {
  let markdownDir: string

  if (process.env.NEXT_PUBLIC_STAGE === "prod") {
    markdownDir = path.join(__dirname, MARKDOWN_DIRECTORY, menuPath)
  } else {
    markdownDir = path.join(MARKDOWN_DIRECTORY, menuPath)
  }
  console.log("markdownDir", markdownDir)
  const files = await fs.promises.readdir(markdownDir)
  const markdownFiles = files.filter((file) => path.extname(file) === ".md")
  return markdownFiles.length
}

export async function getMetadataOfMarkdownFiles(
  menuPath: string
): Promise<any[]> {
  let markdownDir: string

  if (process.env.NEXT_PUBLIC_STAGE === "prod") {
    markdownDir = path.join(__dirname, MARKDOWN_DIRECTORY, menuPath)
  } else {
    markdownDir = path.join(MARKDOWN_DIRECTORY, menuPath)
  }
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
    let markdownDir: string

    if (process.env.NEXT_PUBLIC_STAGE === "prod") {
      markdownDir = path.join(__dirname, MARKDOWN_DIRECTORY, menuPath)
    } else {
      markdownDir = path.join(MARKDOWN_DIRECTORY, menuPath)
    }
    const files = await fs.promises.readdir(markdownDir)

    const filePath = path.join(markdownDir, files[0])
    const fileContent = await fs.promises.readFile(filePath, "utf-8")
    const { content } = matter(fileContent)

    return content
  } catch (error) {
    console.error("Error reading markdown content:", error)
    return null
  }
}
