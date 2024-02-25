"use server"
// import { getNumberOfMarkdownFiles as _getNumberOfMarkdownFiles } from "@/utils/markdown"
// import { getMetadataOfMarkdownFiles as _getMetadataOfMarkdownFiles } from "@/utils/markdown"
// import { getMarkdownContent as _getMarkdownContent } from "@/utils/markdown"

// export const getNumberOfMarkdownFiles = _getNumberOfMarkdownFiles
// export const getMetadataOfMarkdownFiles = _getMetadataOfMarkdownFiles
// export const getMarkdownContent = _getMarkdownContent

import { getMetadataOfMarkdownFiles } from "@/utils/markdown"

export async function fetchMetadata(pathname: string) {
  return await getMetadataOfMarkdownFiles(pathname)
}
