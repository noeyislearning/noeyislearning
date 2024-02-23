/** Data */
import educationsData from "@/data/educations.json"
/** Interfaces */
import { Education } from "@/types/Education"

export default function EducationTimeline() {
  const { educations } = educationsData

  return (
    <ol className="relative border-s border-gray-200">
      {educations.map((education: Education, index: number) => (
        <li key={index} className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            {education.graduated}
          </time>
          <h3 className="text-lg font-semibold text-gray-900">
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
