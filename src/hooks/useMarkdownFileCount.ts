import { useState, useEffect } from "react"
import axios from "axios"

const useMarkdownFileCount = (path: string) => {
  const [fileCount, setFileCount] = useState(0)

  useEffect(() => {
    const fetchFileCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/noeyislearning/markdowns/contents/${path}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            },
          }
        )
        const markdownFiles = response.data.filter(
          (file: any) => file.type === "file" && file.name.endsWith(".md")
        )
        setFileCount(markdownFiles.length)
      } catch (error) {
        console.error("Error fetching file count:", error)
      }
    }

    fetchFileCount()
  }, [path])

  return fileCount
}

export default useMarkdownFileCount
