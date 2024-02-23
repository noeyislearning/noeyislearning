// ExperienceTimeline.tsx
import experiencesData from "@/data/experiences.json"
import { Experience } from "@/types/Experience"

export default function ExperienceTimeline() {
  const { experiences } = experiencesData

  return (
    <ol className="relative border-s border-zinc-200">
      {experiences.map((experience: Experience, index: number) => (
        <li key={index} className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-400">
            {experience.dates.start} - {experience.dates.end || "Present"}
          </time>
          <h3 className="text-lg font-semibold text-zinc-900">
            {experience.position}
          </h3>
          <p className="text-base font-normal text-zinc-500">
            {experience.company} ({experience.employment_type})
          </p>
          <p className="mb-4 text-base font-normal text-zinc-400">
            {experience.location} • {experience.setup}
          </p>
        </li>
      ))}
    </ol>
  )
}
