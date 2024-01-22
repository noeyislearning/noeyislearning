import Image from "next/image";
import Link from "next/link";
/** Interfaces */
import { MetadataProps } from "@/libs/interfaces";

export default function ProjectCard({
  slug,
  name,
  description,
  is_active,
  thumbnail_URL,
  dev_date,
  folder
}: MetadataProps) {
  return (
    <Link href={`/${folder}/${slug}`} className="group flex w-full cursor-pointer flex-col gap-2">
      <div className="h-64 w-full overflow-hidden border border-dashed border-zinc-800">
        <Image
          src={thumbnail_URL}
          alt={name}
          quality={100}
          width={1000}
          height={1000}
          fetchPriority="high"
          className="h-64 w-full scale-100 overflow-hidden object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-105"
          priority
          unoptimized
        />
      </div>
      <div className="group-hover:border-zic-600 flex w-full flex-row items-start justify-between gap-8 border border-dashed border-zinc-800 p-2">
        <div className="flex flex-col items-start">
          <h1 className=" w-full whitespace-normal text-sm uppercase leading-4 text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white md:whitespace-normal lg:whitespace-nowrap">
            {name}
          </h1>
          <p className={`text-xs ${is_active ? "text-emerald-600" : "white text-red-800"} whitespace-nowrap`}>
            {is_active ? "Active" : "Not active"}
          </p>
        </div>
        <div className="flex w-full flex-col items-end">
          <span className="line-clamp-2 text-xs text-zinc-500 transition-all duration-300 ease-in-out">
            {description}
          </span>
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
