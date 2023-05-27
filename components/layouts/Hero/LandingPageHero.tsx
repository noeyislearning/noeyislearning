import React from 'react'
import Link from "next/link";

export default function LandingPageHero() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-36 pb-24 border-b border-black">
        <div className="mx-auto md:max-w-screen-2xl lg:max-w-screen-3xl flex flex-col md:flex-col lg:flex-row gap-6 justify-between items-end">
          <div className="text-3xl md:text-5xl lg:text-5xl text-center lg:text-left md:text-6xl lg:text-7xl font-medium">Freelance software developer based on <span className="italic animate-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Philippines</span>.</div>
          <div className="text-sm md:text-base lg:text-lg text-center lg:text-left">Finally, from anywhere into building software which made me a highly motivated <span className="font-medium italic underline underline-offset-4">computer engineer</span>, graduated from <Link href={"https://www.hau.edu.ph/"} target={"_blank"} className="font-medium underline underline-offset-4">HAU</Link>, with a passion for building innovative software solutions.</div>
        </div>
      </section>
    </>
  )
}
