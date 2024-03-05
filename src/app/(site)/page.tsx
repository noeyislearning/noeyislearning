import Link from "next/link"

import EducationTimeline from "@/components/layouts/timeline/EducationTimeline"
import ExperienceTimeline from "@/components/layouts/timeline/ExperienceTimeline"

export default function HomePage() {
  return (
    <div className="ml-72 h-full overflow-y-scroll">
      <div className="items relative z-10 h-full p-4">
        <div className="text-based mx-auto flex max-w-2xl flex-col items-start space-y-8  py-16">
          <div className="items-start">
            Hello, I&apos;m{" "}
            <span className="text-indigo-500">Francis Ignacio</span>, but you
            can also call me <span className="text-indigo-500">Noey</span>,
            which is my nickname. I&apos;m presently residing in the Philippines
            (🇵🇭); I work as a freelance software developer and aspire to become
            a data scientist. Additionally, I serve as a computer engineering
            professor at{" "}
            <Link
              href={"https://www.hau.edu.ph/"}
              target={"_blank"}
              className="text-indigo-500 underline"
            >
              Holy Angel University
            </Link>
            , specializing in full-stack development and data science.
          </div>
          <div className="items-start">
            Additionally, I&apos;m leading a community initiative called{" "}
            <span className="text-indigo-500">HAU x Haizoen</span> where we aim
            to support students in their learning and growth in the fields of
            software engineering, data science, and personal development.
          </div>
          <div className="items-start space-y-2">
            <div className="text-lg text-zinc-500">Education</div>
            <EducationTimeline />
          </div>
          <div className="items-start space-y-2">
            <div className="text-lg text-zinc-500">Experiences</div>
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </div>
  )
}
