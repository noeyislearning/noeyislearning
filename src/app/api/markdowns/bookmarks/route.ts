import { NextRequest as Request } from "next/server"
import { getDirectoriesInBookmarks } from "@/utils/markdown"

export const GET = async (request: Request) => {
  try {
    const directories = getDirectoriesInBookmarks()
    return new Response(JSON.stringify({ directories }), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch directories", { status: 500 })
  }
}
