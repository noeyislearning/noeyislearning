import { parseISO } from "date-fns";
/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import ProjectCard from "@/components/common/Cards/ProjectCard";
import MenuButton from "@/components/common/Buttons/MenuButton";
/** Functions */
import { getProjectMetadata } from "@/libs/helper/post";

export default function AIProjectsPage() {
  const folder = "ai-ml";
  const metadata = getProjectMetadata(`src/assets/contents/${folder}/`);

  const projects = metadata
    .sort((a, b) => parseISO(b.dev_date.end).getTime() - parseISO(a.dev_date.end).getTime())
    .map((project) => <ProjectCard key={project.slug} folder={folder} {...project} />);

  return (
    <main className="flex w-full flex-col">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex w-full flex-row items-center justify-between gap-2">
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-4 lg:flex-row lg:items-center lg:gap-4">
            <div className="flex flex-row items-center gap-2">
              <MenuButton />
              <h1 className="text-sm uppercase">AI/ML</h1>
            </div>
            <p className="hidden text-xs uppercase text-zinc-500 md:flex lg:flex">
              ai & machine learning related projects
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
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-3">{projects}</div>
      </TranslateYOpacity>
    </main>
  );
}
