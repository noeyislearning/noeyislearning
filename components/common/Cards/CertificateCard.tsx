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
        <div className="w-full rounded-lg bg-gray-950 px-6 py-4 hover:bg-slate-900 lg:px-8">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="h-14 w-14 rounded-full object-contain"
              src={cert.issuerLogoImageURL}
              alt="Rounded avatar"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Link href={cert.credentialURL} target={"_blank"}>
                  <div className="flex flex-row items-center gap-1">
                    <div className="text-lg hover:underline">
                      {cert.title}
                    </div>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" />
                  </div>
                </Link>
                <div className="-mt-1 whitespace-nowrap text-sm text-gray-500">
                  Issued on <span className="font-bold">{cert.issueDate}</span>{" "}
                  by <span className="font-bold">{cert.issuerName}</span>
                </div>
              </div>
              <div className="-mt-1 whitespace-nowrap text-sm uppercase text-gray-500">
                {cert.credentialID}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
