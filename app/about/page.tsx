"use client";
import React from "react";
import Link from "next/link";

/** Redux related */
import type { Social } from "@/redux/socials/reducer";
import type { Exp } from "@/redux/experiences/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AboutPage() {

  // Get socials from redux store
  const socialsLearnings = useSelector<RootState, Social[]>(state => state.social.learnings);
  const socialsCodingChallenges = useSelector<RootState, Social[]>(state => state.social.coding_challenges);
  // Get exps from redux store
  const exps = useSelector<RootState, Exp[]>(state => state.exp.exps);

  return (
    <div className="p-8 md:p-8 lg:p-16 mx-auto w-full h-full flex flex-col items-center">
      <div className="pb-24 flex flex-row w-full max-w-5xl justify-between items-center">
        <div className="flex flex-col gap-4 text-center md:text-start lg:text-start items-center md:items-start lg:items-start">

          {/* Introduction */}
          <h3 className="pt-8 max-w-lg text-xl leading-6">
            Hello, Hola, 안녕하세요! 👋
          </h3>
          <h3 className="max-w-lg text-xl leading-6">
            I am Francis &apos;Noey&apos; Ignacio, a freelance software developer at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@teamkooest</span> ⭐</Link>, an esteemed organization in the technology industry. In parallel, I hold the esteemed position of a computer engineering instructor at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@holyangeluniversity</span> 🏫</Link>, contributing to the academic growth and development of aspiring computer engineers.
          </h3>
          <h3 className="max-w-lg text-xl leading-6">
            My professional journey has been imbued with a profound enthusiasm for the captivating realm of data science. Currently, I am diligently engaged in a transformative pursuit as I transition into the role of a data scientist.
          </h3>

          {/* Profiles/Learnings */}
          <div className="pt-8 text-xl">🌱 Profiles/Learnings</div>
          <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start lg:justify-start">
          { socialsLearnings.map((social) => (
            <div key={social.id} className="flex flex-row gap-2 items-center">
              <Link href={social.redirect_url} target={"_blank"} className="py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500">
                <span>{social.name}</span>
              </Link>
            </div>
          ))}
          </div>

          {/* Profiles/Coding Challenges */}
          <div className="pt-8 text-xl">💪 Profiles/Coding Challenges</div>
          <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start lg:justify-start">
          { socialsCodingChallenges.map((social) => (
            <div key={social.id} className="flex flex-row gap-2 items-center">
              <Link href={social.redirect_url} target={"_blank"} className="py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500">
                <span>{social.name}</span>
              </Link>
            </div>
          ))}
          </div>

          {/* Experiences */}
          <div className="pt-8 text-xl">💼 Professional Experiences</div>
          <ol className="relative ml-3 border-l border-yellow-400">   
            {exps.map((exp, index) => (
              <li key={exp.id} className={`ml-4 ${index !== exps.length - 1 ? 'mb-10' : 'mb-2'}`}>
                <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5"></div>
                {/* Start and End Date */}
                <time className="mb-1 text-sm font-normal leading-none text-gray-300">{exp.start_date} - {exp.end_date}</time>
                {/* Position */}
                <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                {/* Company, Location */}
                <p className="mb-2 1text-base font-normal text-gray-300">{exp.company} • {exp.location}</p>
                {/* Descs */}
                <div className="mb-4 text-base flex flex-col items-start">
                  {exp.desc.map((desc, index) => (
                    <p key={index} className="font-normal text-gray-300">• {desc}</p>
                  ))}
                </div>
                {/* Skills */}
                <div className="flex flex-row flex-wrap gap-1 items-center">
                  {exp.skills.map((skill, index) => (
                    <button key={index} className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">{skill}</button>
                  ))}
                </div>
              </li>
            ))} 
          </ol>

        </div>
      </div>
    </div>
  )
}
