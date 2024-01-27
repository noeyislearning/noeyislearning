/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import MenuButton from "@/components/common/Buttons/MenuButton";
import ProjectCard from "@/components/common/Cards/ProjectCard";
/** Functions */
import { getProjectMetadata } from "@/libs/helper/post";

export default function DataSpaceProjectsPage() {
  const folder = "data-space";
  const metadata = getProjectMetadata(`src/assets/contents/${folder}/`);

  const projects = metadata
    .sort((a, b) => a.slug.localeCompare(b.name))
    .map((codingChallenge) => <ProjectCard key={codingChallenge.slug} folder={folder} {...codingChallenge} />);

  return (
    <main className="flex w-full flex-col">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex w-full flex-row items-center justify-between gap-2">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center lg:flex-row lg:items-center">
            <div className="flex flex-row items-center gap-2">
              <MenuButton />
              <h1 className="text-sm uppercase">Data Space</h1>
            </div>
            <p className="hidden text-xs uppercase text-zinc-500 md:flex lg:flex">
              Visualizing, analyzing, and predicting
            </p>
          </div>
          <a
            href={"mailto:noeyislearning@gmail.com"}
            className="group flex flex-row items-center gap-2 text-sm uppercase transition-all duration-300 ease-in-out"
          >
            Hire me
            <EnvelopeIcon className="block h-4 w-4 transition-all duration-500 ease-in-out group-hover:hidden" />
            <EnvelopeOpenIcon className="hidden h-4 w-4 transition-all duration-500 ease-in-out group-hover:block" />
          </a>
        </div>
      </div>
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">{projects}</div>
      </TranslateYOpacity>
    </main>
  );
}
