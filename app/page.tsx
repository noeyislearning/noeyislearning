import React from 'react'

/** --- Components --- */
import Hero from "@/components/layouts/Hero/Hero";
import Projects from "@/components/layouts/Sections/Home/Projects/Projects";
import Blogs from "@/components/layouts/Sections/Home/Blogs/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
    </>
  )
};
