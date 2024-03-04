import { NextRequest as Request } from "next/server"
import { getNumberOfDirectoriesInBookmarks } from "@/utils/markdown" // Changed import

export const GET = async (request: Request) => {
  try {
    const directories = getNumberOfDirectoriesInBookmarks() // Using the new function
    return new Response(JSON.stringify({ directories }), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch directories", { status: 500 })
  }
}
