import { NextRequest as Request } from "next/server"

import { getMetadataOfMarkdownFiles } from "@/utils/markdown"

export const GET = async (request: Request) => {
  const dir = request.nextUrl.searchParams.get("dir")

  try {
    if (dir === null) {
      return new Response("Missing 'dir' query parameter", { status: 400 })
    }

    const metadata = getMetadataOfMarkdownFiles(dir)
    return new Response(JSON.stringify(metadata), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch markdown metadata", { status: 500 })
  }
}
