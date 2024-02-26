"use server"
import {
  getNumberOfMarkdownFiles as _getNumberOfMarkdownFiles,
  getMetadataOfMarkdownFiles as _getMetadataOfMarkdownFiles,
  getMarkdownContent as _getMarkdownContent,
} from "../../utils/markdown"

export const getNumberOfMarkdownFiles = _getNumberOfMarkdownFiles
export const getMetadataOfMarkdownFiles = _getMetadataOfMarkdownFiles
export const getMarkdownContent = _getMarkdownContent
