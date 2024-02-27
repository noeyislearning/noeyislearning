import { NextRequest as Request } from "next/server"
import { getMarkdownContent } from "@/utils/v2/markdown"

export const GET = async (request: Request) => {
  const dir = request.nextUrl.searchParams.get("dir")
  const slug = request.nextUrl.searchParams.get("slug")

  try {
    if (dir === null || slug === null) {
      return new Response("Missing 'dir' or 'slug' query parameter", {
        status: 400,
      })
    }

    const content = getMarkdownContent(dir, slug)
    return new Response(content, { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch markdown content", { status: 500 })
  }
}
