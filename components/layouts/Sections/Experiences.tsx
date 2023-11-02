import React, { Fragment } from "react";

/** Redux related */
import type { Exp } from "@/redux/experiences/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Experiences() {

  // Get exps from redux store
  const exps = useSelector<RootState, Exp[]>(state => state.exp.exps);

  return (
    <Fragment>
      <div className="pt-8 text-xl">💼 Professional Experiences</div>
      <ol className="relative ml-3 border-l border-yellow-400 flex flex-col text-start items-start">   
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
                <p key={index} className="font-normal text-gray-300">{desc}</p>
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
    </Fragment>
  )
}
