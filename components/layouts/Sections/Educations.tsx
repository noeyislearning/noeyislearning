import React, { Fragment } from "react";

/** Redux related */
import type { Educ } from "@/redux/educations/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Educations() {

  // Get educations from redux store
  const educs = useSelector<RootState, Educ[]>(state => state.educ.educations);

  return (
    <Fragment>
      <div className="pt-8 text-2xl md:text-3xl lg:text-3xl">✏️ Educations</div>
      <ol className="relative ml-3 border-l border-yellow-400 flex flex-col text-start items-start">
        { educs.map((edu, index) => (
          <li key={edu.id} className={`ml-4 ${index !== educs.length - 1 ? 'mb-10' : 'mb-2'}`}>
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5"></div>
            {/* Start and End Date */}
            <time className="mb-1 text-sm font-normal leading-none text-gray-300">{edu.start_date} - {edu.end_date}</time>
            {/* Position */}
            <h3 className="text-2xl font-semibold text-white">{edu.degree_course}</h3>
            {/* Company, Location */}
            <p className="mb-2 1text-base font-normal text-gray-300">{edu.school_name} • {edu.location}</p>
            {/* Descs */}
            <div className="mb-4 text-base flex flex-col items-start">
              {edu.desc.map((desc, index) => (
                  <p key={index} className="font-normal text-gray-300">{desc}</p>
              ))}
            </div>
            {/* Skills */}
            <div className="flex flex-row flex-wrap gap-1 items-center">
              {edu.skills.map((skill, index) => (
                  <button key={index} className="py-1 px-4 text-xs text-gray-300 border border-dashed border-gray-300 rounded-full">{skill}</button>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Fragment>
  )
}
