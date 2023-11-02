import React, { Fragment } from "react";
import Link from "next/link";

/** Heroicons */
import { StarIcon, SparklesIcon } from "@heroicons/react/24/solid";

/** Redux related */
import type { Cert } from "@/redux/certifications/reducer";
interface CertificationCardProps {
  cert: Cert;
}

export default function CertificationCard({ cert }: CertificationCardProps) {

  // Show only first 8 and last 6 element in cert_cred_id, replace the rest with ***, and if the cert_cred_id is null, show default value of "Not Available"
  const certCred = cert.cert_cred_id ? cert.cert_cred_id.slice(0, 6) + "******" + cert.cert_cred_id.slice(-6) : "Not Available";

  return (
    <Link href={cert.cert_url} target={"_blank"} className="p-4 w-full h-full flex flex-col gap-2 bg-indigo-800 border border-dashed rounded-md shadow-lg group relative hover:border-yellow-400">
      <div className="absolute -top-6 left-0 m-2 w-full flex flex-row gap-2 items-center">
        <div className="py-1 px-4 text-xs tracking-normal border border-dashed bg-indigo-700 rounded-full group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-indigo-800">
          {cert.cert_issuer}
        </div>
        { cert.is_course_track && (
            <div className=" py-1 px-4 text-xs bg-gray-700 border border-dashed rounded-full group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-indigo-800">
              <span>I Crash Course</span>
            </div>
        )}
        { cert.is_skill_track && (
          <div className=" py-1 px-4 text-xs bg-teal-700 border border-dashed rounded-full group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-indigo-800">
            <span>II Skill Track</span>
          </div>
        )}
        { cert.is_career_track && (
          <div className=" py-1 px-4 text-xs bg-red-700 border border-dashed rounded-full group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-indigo-800">
            <span>III Career Track</span>
          </div>
        )}
        { cert.is_degree_track && (
          <div className=" py-1 px-4 text-xs bg-yellow-700 border border-dashed rounded-full group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-indigo-800">
            <span>IV Degree/Diploma</span>
          </div>
        )}
      </div>
      <span className="w-full text-sm text-center font-light text-gray-400 md:text-start lg:text-start">{cert.cert_type}</span>

      <h1 className="text-xl text-center font-semibold text-white md:text-start lg:text-start">{cert.cert_name}</h1>

      <div className="mt-auto flex flex-row gap-2 items-center text-gray-200">
        <span>Credential ID:</span>
        <span className="text-sm text-yellow-300 hover:underline text-ellipsis line-clamp-1 group-hover:underline group-hover:underline-offset-4 tracking-normal uppercase" role="link">{certCred}</span>
      </div>
    </Link>
  )
}
