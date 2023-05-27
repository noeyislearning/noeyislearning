import React from 'react'

/** --- Components --- */
import GenericHero from "@/components/layouts/Hero/GenericHero";
import IncomingWorks from "@/components/layouts/Sections/Works/IncomingWorks";
import RecentWorks from "@/components/layouts/Sections/Works/RecentWorks";
import CreativeWorks from "@/components/layouts/Sections/Works/CreativeWorks";

export default function WorksPage() {
  return (
    <>
      <GenericHero title={"Works"} description={"Explore a collection of my diverse creative works, including personal projects, recent endeavors, and a variety of artistic expressions."}/>
      <IncomingWorks />
      <RecentWorks />
      <CreativeWorks />
    </>
  )
}
