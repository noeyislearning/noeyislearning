import React from 'react'

/** --- Components --- */
import LandingPageHero from "@/components/layouts/Hero/LandingPageHero";
import RecentWorks from "@/components/layouts/Sections/Home/Works/RecentWorks";
import LatestBlogs from "@/components/layouts/Sections/Home/Blogs/LatestBlogs";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <RecentWorks />
      <LatestBlogs />
    </>
  )
};
