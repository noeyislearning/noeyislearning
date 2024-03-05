"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function EducationTimeline() {
  const { educations } = useSelector((state: RootState) => state.education)

  return (
    <ol className="relative border-s border-gray-200">
      {educations.map((education, index: number) => (
        <li key={index} className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            {education.graduated}
          </time>
          <h3 className="font-gelica text-lg text-gray-900">
            {education.degree}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            {education.school}
          </p>
          <p className="text-base font-normal text-gray-500">
            {education.achievements}
          </p>
        </li>
      ))}
    </ol>
  )
}
