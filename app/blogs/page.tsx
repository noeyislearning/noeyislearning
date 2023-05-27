import React from 'react'

/** --- Components --- */
import GenericHero from "@/components/layouts/Hero/GenericHero";
import MasonryBlogs from "@/components/layouts/Sections/Blogs/MasonryBlogs";

export default function BlogsPage() {
  return (
    <>
      <GenericHero title={"Blogs"} description={"Thoughts on motivation, productivity, and technology."}/>
      <MasonryBlogs />
    </>
  )
}
