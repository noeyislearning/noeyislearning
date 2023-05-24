import React from 'react'

/** --- Components --- */
import LandingPageHero from "@/components/layouts/Hero/LandingPageHero";
import RecentProjects from "@/components/layouts/Sections/Home/Projects/RecentProjects";
import LatestBlogs from "@/components/layouts/Sections/Home/Blogs/LatestBlogs";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <RecentProjects />
      <LatestBlogs />
    </>
  )
};
