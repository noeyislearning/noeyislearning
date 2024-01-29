"use client";
import Image from "next/image";
import Link from "next/link";
/** Interfaces */
import { ProjectMetadataProps } from "@/libs/interfaces/metadata";

export default function ProjectCard({
  slug,
  name,
  description,
  is_active,
  thumbnail_URL,
  is_repository_only,
  dev_date,
  folder
}: ProjectMetadataProps) {
  return (
    <Link
      href={`/${folder}/${slug}`}
      className="group flex w-full cursor-pointer flex-col border border-dashed border-zinc-800 transition-all duration-300 ease-in-out hover:border-zinc-500"
    >
      <div className="h-64 w-full overflow-hidden ">
        <Image
          src={thumbnail_URL}
          alt={name}
          quality={100}
          width={1000}
          height={1000}
          fetchPriority="high"
          className=" h-64 w-full scale-105 overflow-hidden object-cover object-top brightness-75 filter transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-100 group-hover:grayscale-0"
          priority
          unoptimized
        />
      </div>
      <div className="group-hover:border-zic-600 flex w-full flex-row items-start justify-between gap-8 p-2">
        <div className="flex w-full flex-col items-start">
          <h1 className="flex text-sm uppercase leading-4 text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {name}
          </h1>
          <span className="line-clamp-2 text-xs text-zinc-600 transition-all duration-300 ease-in-out">
            {description}
          </span>
        </div>
        <div className="flex w-fit flex-col items-end">
          <span className="text-sm text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {new Date(dev_date.end).getFullYear()}
          </span>
          <p
            className={`-mt-1 text-xs ${is_active ? "text-emerald-600" : is_repository_only ? "text-indigo-500" : "white text-red-800"} whitespace-nowrap`}
          >
            {is_active ? "Active" : is_repository_only ? "In repository" : "Not active"}
          </p>
        </div>
      </div>
    </Link>
  );
}
