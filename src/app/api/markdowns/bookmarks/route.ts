import { NextRequest as Request } from "next/server"
import { getNumberOfDirectories } from "@/utils/markdown"

export const GET = async (request: Request) => {
  try {
    const dir = request.nextUrl.searchParams.get("dir")
    if (dir === null) {
      return new Response("Missing 'dir' query parameter", { status: 400 })
    }

    const directories = getNumberOfDirectories(dir)
    return new Response(JSON.stringify({ directories }), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch directories", { status: 500 })
  }
}
