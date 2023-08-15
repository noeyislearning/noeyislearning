import React from "react";
import Link from "next/link";

export default function IntroductionText() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Hello there,</h1>
        <div className="flex flex-col gap-4 ">
          <h3 className="text-base">
            I&apos;m a software developer with a talent for melding design and functionality into a harmonious symphony. At <Link href={"https://kooest.com/"} target={"_blank"} className="text-blue-500 underline underline-offset-2">Kooest</Link>, <span className="text-gray-400">which is still in development stage (both website & its services)</span>, I&apos;m currently immersing myself in the art of crafting digital masterpieces, taking delight in every pixel and line of code. In my previous endeavors, I&apos;ve brought innovative ideas to life for <Link href={"https://www.hau.edu.ph/"} target={"_blank"} className="text-blue-500 underline underline-offset-2">Holy Angel University</Link> and even spearheaded the management of several government websites. The outcome? Projects that are not just visually captivating, but also operationally flawless.
          </h3>
          <h3 className="text-base">
            But now, as the world of data beckons, I&apos;m on an exhilarating journey, transitioning from a software developer to a <span className="text-blue-500">data analyst</span>, and eventually aiming to carve my niche as a <span className="text-blue-500">data scientist</span>. I&apos;m presently equipping myself with comprehensive courses tailored for these careers, ensuring I&apos;m primed for the challenges and rewards that lie ahead.
          </h3>
          <h3 className="text-base">
            Outside the digital realm, music resonates in my ears and enlightening conversations spark my curiosity. It&apos;s during these moments of respite and reflection that I find a wellspring of inspiration, which inevitably flows into the designs and solutions I concoct.
          </h3>
          <h3 className="text-base italic">
            Excited to create and innovate with you!
          </h3>
        </div>
      </div>
    </>
  );
}
