import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pb-8 flex flex-row w-full max-w-5xl justify-between items-center">
      <div className="flex flex-col gap-4 text-center md:text-start lg:text-start items-center md:items-start lg:items-start">
        <h3 className="max-w-lg text-xl leading-6">
          I am a software developer based on Philippines transitioning into <span className="text-yellow-400 underline underline-offset-4">data science domain</span> 🚀, also computer engineering instructor, college, at <Link href={"https://www.hau.edu.ph"} target={"_blank"} ><span className="text-yellow-400 underline underline-offset-4">@holyangeluniversity</span> 🏫</Link>, and a freelance developer at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@teamkooest</span>⭐</Link>.
        </h3>
        <Link href={"/"}><button className="text-xl text-yellow-400 underline underline-offset-4">Know more about me.</button></Link>
      </div>
    </div>
  )
}
