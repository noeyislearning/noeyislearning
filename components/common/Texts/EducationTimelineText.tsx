"use client";
import React, { Fragment } from "react";

/** Types */
import type { Educations } from "@/redux/educations/reducer";

/** Interfaces/Props */
interface Props {
  educ: Educations;
  last: boolean;
}

export default function EducationTimelineText({ educ, last }: Props) {
  return (
    <>
      <div className="flex flex-col">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
          <li className={last ? "ml-4 flex flex-col" : "mb-10 ml-4 flex flex-col"}>
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-0.5 -left-1.5 border border-gray-700"></div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 items-center">
                <time className="text-sm font-normal leading-none text-gray-400">{educ.year.started} - {educ.year.ended ? educ.year.ended : "Present"}</time>
              </div>
              <div className="mt-2 flex flex-col">
                <h3 className="text-lg font-semibold text-white">{educ.degree}</h3>
                <p className="-mt-1 text-sm text-gray-500">{educ.schoolName} - {educ.schoolLocation}</p>
              </div>
              <p className="mt-2 text-base font-normal text-gray-400">{educ.description}</p>
              <div className="mt-2 flex flex-row flex-wrap gap-1 items-center">
                {educ.skills.map((skill, index) => (
                  <Fragment key={index}>
                    <p className="text-xs">{skill}</p>
                    {index !== educ.skills.length - 1 && <div key={`div-${index}`}>•</div>}
                  </Fragment>
                ))}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  )
}
