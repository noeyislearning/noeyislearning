import { useState, useEffect } from "react"
import axios from "axios"
import matter from "gray-matter"

interface FileDetails {
  content: string
  metadata: any
}

const useMarkdownFileDetails = (
  name: string,
  path: string
): FileDetails | null => {
  // Accept both name and path as parameters
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null)

  useEffect(() => {
    const fetchMarkdownFileDetails = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/noeyislearning/markdowns/main/${path}/${name}`, // Use both name and path in the URL
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            },
          }
        )
        const { data } = response
        const { content, data: metadata } = matter(data)
        setFileDetails({ content, metadata })
      } catch (error) {
        console.error("Error fetching Markdown file details:", error)
      }
    }

    fetchMarkdownFileDetails()
  }, [name, path])

  return fileDetails
}

export default useMarkdownFileDetails
