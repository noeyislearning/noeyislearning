import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <>
      <div className="max-w-screen">
        <div className="flex flex-col gap-5">
          <Link href={"https://kittohau.com/"} target={"_blank"}>
            <Image
                className="w-full object-cover rounded-lg"
                src={"https://i.imgur.com/IBlcNs0.png"}
                alt="blog-photo"
                width={500}
                height={500}
                priority
            />
          </Link>
          <div className="flex flex-row gap-6 justify-between items-baseline">
            <div className="flex gap-2 items-baseline">
              <div className="font-medium underline underline-offset-4">
                <Link href={"https://kittohau.com/"} target={"_blank"}>
                  KITTO
                </Link>
              </div>
              <div className="font-base text-sm text-gray-400 text-startv">HAU</div>
            </div>
            <div className="text-sm text-gray-400 text-end">Database management system for tracking engineering projects.</div>
          </div>
        </div>
      </div>
    </>
  );
};
