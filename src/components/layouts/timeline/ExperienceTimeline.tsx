"use client"

import ExperienceIcon from "@/components/common/icons/ExperienceIcon"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function ExperienceTimeline() {
  const { experiences } = useSelector((state: RootState) => state.experience)

  return (
    <ol className="relative border-s border-zinc-200">
      {experiences.map((experience, index: number) => (
        <li key={index} className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-400">
            {experience.dates.start} - {experience.dates.end || "Present"}
          </time>
          <h3 className="font-gelica text-lg text-zinc-900">
            {experience.position}
          </h3>
          <div className="flex flex-row items-center text-base font-normal text-zinc-500">
            <ExperienceIcon companyType={experience.company_type} />
            <p className="ml-2">{experience.company}</p>
            <span className="ml-1 text-xs">({experience.employment_type})</span>
          </div>
          <div className="mb-4 flex flex-row items-center gap-1 text-base font-normal text-zinc-400">
            {experience.location}
            <span className="rounded-full bg-zinc-400 p-0.5"></span>
            {experience.setup}
          </div>
        </li>
      ))}
    </ol>
  )
}
