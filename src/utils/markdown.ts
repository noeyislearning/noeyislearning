"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getNumberOfMarkdownFiles(
  menuPath: string
): Promise<number> {
  try {
    const response = await fetch(`/markdowns/${menuPath}`)
    if (!response.ok) {
      throw new Error("Failed to fetch markdown files")
    }
    const files = await response.json()
    const markdownFiles = files.filter((file: string) => file.endsWith(".md"))
    return markdownFiles.length
  } catch (error) {
    console.error("Error fetching markdown files:", error)
    return 0
  }
}

export async function getMetadataOfMarkdownFiles(
  menuPath: string
): Promise<{ [key: string]: any }> {
  try {
    // Fetch the markdown file content from the public directory
    const response = await fetch(`/markdowns/${menuPath}`)

    if (!response.ok) {
      throw new Error("Failed to fetch markdown file")
    }

    // Read the response text
    const fileContent = await response.text()

    // Parse the markdown file content using gray-matter
    const { data } = matter(fileContent)

    // Return the metadata
    return data
  } catch (error) {
    console.error("Error fetching markdown content:", error)
    return {}
  }
}

export async function getMarkdownContent(
  menuPath: string
): Promise<string | null> {
  try {
    const response = await fetch(`/markdowns/${menuPath}`)
    if (!response.ok) {
      throw new Error("Failed to fetch markdown content")
    }
    const fileContent = await response.text()
    const { data, content } = matter(fileContent)
    const slug = data.slug
    return content
  } catch (error) {
    console.error("Error reading markdown content:", error)
    return null
  }
}
