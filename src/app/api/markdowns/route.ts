import { NextRequest as Request } from "next/server"
import { getNumberOfMarkdownFiles } from "@/utils/v2/markdown"

export const GET = async (request: Request) => {
  const dir = request.nextUrl.searchParams.get("dir")

  try {
    if (dir === null) {
      return new Response("Missing 'dir' query parameter", { status: 400 })
    }

    const number = getNumberOfMarkdownFiles(dir)
    return new Response(JSON.stringify({ number }), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch markdown count", { status: 500 })
  }
}
