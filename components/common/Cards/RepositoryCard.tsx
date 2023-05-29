import React from 'react'
import Link from "next/link";

export default function RepositoryCard() {
  return (
    <>
      <div className="max-w-screen">
        <div className="p-6 bg-white border border-gray-200 rounded-lg">
          <Link href={"https://github.com/noeyislearning/hackerrank-python"} target={"_blank"}>
            <h5 className="mb-2 text-2xl font-semibold text-blue-600 hover:underline underline-offset-2">hackerrank-python</h5>
          </Link>
          <p className="mb-3 text-sm text-gray-400 line-clamp-3">HackerRank Python is a repository contains solutions to Python coding challenges on HackerRank. This will help you improve your coding skills and prepare for technical interviews using Python.</p>
          <div className="flex flex-wrap gap-1 items-center font-medium text-xs text-blue-500">
            <p className="py-1 px-3 rounded-full border border-blue-300 bg-blue-100">solutions</p>
            <p className="py-1 px-3 rounded-full border border-blue-300 bg-blue-100">python3</p>
            <p className="py-1 px-3 rounded-full border border-blue-300 bg-blue-100">+1</p>
          </div>
        </div>
      </div>
    </>
  )
}
