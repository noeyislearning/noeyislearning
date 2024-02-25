import { useState, useEffect } from "react"
import axios from "axios"

const useMarkdownFileName = (path: string) => {
  const [markdownFiles, setMarkdownFiles] = useState<any[]>([])

  useEffect(() => {
    const fetchMarkdownFiles = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/noeyislearning/markdowns/contents/${path}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            },
          }
        )

        const files = response.data.filter(
          (file: any) => file.type === "file" && file.name.endsWith(".md")
        )

        const fileName = files.map((file: any) => ({
          name: file.name,
        }))

        setMarkdownFiles(fileName)
      } catch (error) {
        console.error("Error fetching Markdown files:", error)
      }
    }

    fetchMarkdownFiles()
  }, [path])

  return markdownFiles
}

export default useMarkdownFileName
