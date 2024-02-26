"use server"
import fs from "fs"
import path from "path"
import axios from "axios"
import matter from "gray-matter"

const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME
const REPO = process.env.NEXT_PUBLIC_GITHUB_REPO
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN

let etag: string | null = null

export async function getNumberOfMarkdownFiles(path: string): Promise<number> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${USERNAME}/${REPO}/contents${path}`,
      {
        headers: {
          "If-None-Match": etag,
        },
      }
    )

    if (response.status === 304) {
      return 0
    }

    etag = response.headers.etag

    const markdownFiles = response.data.filter(
      (file: any) => file.type === "file" && file.name.endsWith(".md")
    )

    return markdownFiles.length
  } catch (error) {
    console.error("Error fetching files from GitHub:", error)
    throw error
  }
}

export async function getMetadataOfMarkdownFiles(
  path: string
): Promise<Record<string, any>[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "If-None-Match": etag,
        },
      }
    )

    if (response.status === 304) {
      return []
    }

    etag = response.headers.etag

    const files = response.data
    const metadataPromises = files.map(async (file: any) => {
      if (file.name.endsWith(".md")) {
        const fileResponse = await axios.get(
          `https://raw.githubusercontent.com/${USERNAME}/${REPO}/main/${path}/${file.name}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "If-None-Match": etag,
            },
          }
        )

        if (fileResponse.status === 304) {
          return null
        }

        etag = fileResponse.headers.etag

        const fileContents = fileResponse.data
        const { data } = matter(fileContents)

        return { slug: file.name.replace(/\.md$/, ""), ...data }
      }
    })

    const metadata = await Promise.all(metadataPromises)
    return metadata.filter(Boolean)
  } catch (error) {
    console.error("Error fetching file:", error)
    return []
  }
}

export async function getMarkdownContent(
  dir: string,
  slug: string
): Promise<string> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${USERNAME}/${REPO}/contents/src/data/markdowns/${dir}/${slug}.md`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )

    if (response.status === 200) {
      const fileContents = Buffer.from(
        response.data.content,
        "base64"
      ).toString()
      const { content } = matter(fileContents)
      return content
    } else {
      throw new Error(
        `Failed to fetch markdown content: ${response.statusText}`
      )
    }
  } catch (error) {
    console.error("Error fetching markdown content:", error)
    throw error
  }
}
