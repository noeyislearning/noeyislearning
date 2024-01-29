import Link from "next/link";
/** Interfaces */
import { CodingChallengeMetadataProps } from "@/libs/interfaces/metadata";

export default function CodingChallengeCard({ slug, name, platform, language, folder }: CodingChallengeMetadataProps) {
  return (
    <Link
      href={`/${folder}/${slug}`}
      className="group flex w-full cursor-pointer flex-col gap-2 border border-dashed border-zinc-800 p-4 transition-all duration-300 ease-in-out hover:border-zinc-500"
    >
      <div className="group-hover:border-zic-600 flex w-full flex-row items-start justify-between gap-8">
        <div className="flex flex-col items-start">
          <h1 className="w-full  text-sm uppercase leading-4 text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {name}
          </h1>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {language}
          </span>
          <p className="text-sm text-indigo-500">{platform}</p>
        </div>
      </div>
    </Link>
  );
}
