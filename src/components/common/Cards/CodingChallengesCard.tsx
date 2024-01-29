import Link from "next/link";
/** Interfaces */
import { CodingChallengeMetadataProps } from "@/libs/interfaces/metadata";

export default function CodingChallengeCard({
  slug,
  name,
  difficulty,
  platform,
  language,
  folder
}: CodingChallengeMetadataProps) {
  /** Changing the color of the difficulty */
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-100 bg-green-600";
      case "Medium":
        return "text-yellow-100 bg-yellow-600";
      case "Hard":
        return "text-red-100 bg-red-600";
      default:
        return "text-zinc-100 bg-zinc-600";
    }
  };

  return (
    <Link
      href={`/${folder}/${slug}`}
      className="group flex w-full cursor-pointer flex-col gap-2 border border-dashed border-zinc-800 p-4 transition-all duration-300 ease-in-out hover:border-zinc-500"
    >
      <div className="group-hover:border-zic-600 flex w-full flex-row items-start justify-between gap-8">
        <div className="flex flex-col items-start gap-1">
          <h1 className="w-full  text-sm uppercase leading-4 text-zinc-300 transition-all duration-300 ease-in-out group-hover:text-white">
            {name}
          </h1>
          <span className={`px-2 py-1 text-xs font-bold leading-none ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm text-zinc-500">{language}</span>
          <p className="text-sm text-indigo-500">{platform}</p>
        </div>
      </div>
    </Link>
  );
}
