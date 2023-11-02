"use client";
import React from "react";

/** Components */
import AboutHero from "@/components/layouts/Hero/AboutHero";
import ProfilesSocials from "@/components/layouts/Sections/ProfilesSocials";
import ProfilesCodingChallenges from "@/components/layouts/Sections/ProfilesCodingChallenges";
import Educations from "@/components/layouts/Sections/Educations";
import Experiences from "@/components/layouts/Sections/Experiences";
import Certifications from "@/components/layouts/Sections/Certifications";

export default function AboutPage() {

  

  return (
    <div className="p-8 md:p-8 lg:p-16 mx-auto w-full h-full flex flex-col items-center">
      <div className="pb-24 flex flex-row w-full max-w-5xl justify-between items-center">
        <div className="flex flex-col w-full gap-4 text-center md:text-start lg:text-start items-center md:items-start lg:items-start">
          <AboutHero />
          <ProfilesSocials />
          <ProfilesCodingChallenges />
          <Educations />
          <Experiences />
          <Certifications />
        </div>
      </div>
    </div>
  )
}
