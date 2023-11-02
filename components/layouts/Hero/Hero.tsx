import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pb-8 flex flex-row w-full max-w-5xl justify-between items-center">
      <div className="flex flex-col gap-4 text-center md:text-start lg:text-start items-center md:items-start lg:items-start">
        <div className="px-1 text-base text-black bg-yellow-400 ">#100dayscodingchallenge</div>
        <h3 className="-mt-4 max-w-lg text-xl leading-6">
         A software developer based on Philippines transitioning into <span className="text-yellow-400 underline underline-offset-4">data science domain</span> 🚀, also computer engineering instructor, college, at <Link href={"https://www.hau.edu.ph"} target={"_blank"} ><span className="text-yellow-400 underline underline-offset-4">@holyangeluniversity</span> 🏫</Link>, and a freelance developer at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@teamkooest</span>⭐</Link>.
        </h3>
        <Link href={"/about"} className="text-xl"><button className="text-yellow-400 underline underline-offset-4">Who am I tho?</button></Link>
      </div>
    </div>
  )
}
