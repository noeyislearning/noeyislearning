import React from 'react'
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-36 pb-24 border-b border-black ">
        <div className="mx-auto md:max-w-screen-2xl lg:max-w-screen-3xl flex flex-col md:flex-col lg:flex-row gap-6 justify-between items-end">
          <div className="text-5xl md:text-6xl lg:text-7xl font-medium">Freelance software developer based on Philippines.</div>
          <div>Finally, from anywhere into building software which made me a highly motivated <span className="font-medium italic underline underline-offset-4">computer engineer</span>, graduated from <Link href={"https://www.hau.edu.ph/"} target={"_blank"} className="font-medium underline underline-offset-4">HAU</Link>, with a passion for building innovative software solutions.</div>
        </div>
      </section>
    </>
  )
}
