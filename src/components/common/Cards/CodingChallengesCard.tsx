"use client";
import Image from "next/image";
import Link from "next/link";
/** Interfaces */
import { CodingChallengeMetadataProps } from "@/libs/interfaces/metadata";

export default function CodingChallengeCard({ slug, name, platform, dev_date, folder }: CodingChallengeMetadataProps) {
  return (
    <Link
      href={`/${folder}/${slug}`}
      className="group flex w-full cursor-pointer flex-col gap-2 border border-dashed border-zinc-800 p-4 transition-all duration-300 ease-in-out hover:border-zinc-500"
    >
      <div className="group-hover:border-zic-600 flex w-full flex-row items-start justify-between gap-8">
        <div className="flex flex-col items-start">
          <h1 className="line-clamp-2 w-full  text-sm uppercase leading-4 text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {name}
          </h1>
          <p className="text-sm text-indigo-500">{platform}</p>
        </div>
        <div className="flex w-fit flex-col items-end">
          <span className="text-sm text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {new Date(dev_date.end).getFullYear()}
          </span>
        </div>
      </div>
    </Link>
  );
}
