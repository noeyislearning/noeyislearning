import React from 'react'
import Link from "next/link";
import BlogCard from "@/components/common/Cards/BlogCard";

export default function MasonryBlogs() {
  return (
    <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  )
}
