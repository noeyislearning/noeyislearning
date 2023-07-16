import React from "react";
import Link from "next/link";
import Image from "next/image";

/** Heroicons */
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

/** Interfaces/Props */
import type { Certificates } from "@/redux/certificates/reducer";

interface Props {
  cert: Certificates;
}

export default function CertificateCard({ cert }: Props) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-full px-6 lg:px-8 py-4 bg-gray-950 hover:bg-slate-900 rounded-lg">
          <div className="flex flex-row gap-2 items-center">
            <Image 
              className="w-14 h-14 rounded-full object-contain" 
              src={cert.issuerLogoImageURL} 
              alt="Rounded avatar"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Link href={cert.credentialURL} target={"_blank"}>
                  <div className="flex flex-row gap-1 items-center">
                    <div className="text-lg hover:underline">
                      {cert.title}
                    lLink</div>
                    <ArrowUpRightIcon className="w-4 h-4 text-white"/>
                  </div>
                </Link>
                <div className="-mt-1 text-sm text-gray-500 whitespace-nowrap">
                  Issued on <span className="font-bold">{cert.issueDate}</span> by <span className="font-bold">{cert.issuerName}</span>
                </div>
              </div>
              <div className="-mt-1 text-sm text-gray-500 whitespace-nowrap uppercase">
                {cert.credentialID}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}