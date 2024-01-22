import { parseISO } from "date-fns";
/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import ProjectCard from "@/components/common/Cards/ProjectCard";
/** Functions */
import { getPostMetadata } from "@/libs/helper/post";

export default function Home() {
  const folder = "web";
  const metadata = getPostMetadata(`src/assets/contents/${folder}/`);

  const projects = metadata
    .sort((a, b) => parseISO(b.dev_date.end).getTime() - parseISO(a.dev_date.end).getTime())
    .map((project) => <ProjectCard key={project.slug} folder={folder} {...project} />);

  return (
    <main className="flex w-full flex-col p-4">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <div className="text-sm uppercase">Client & Self Projects</div>
        <a
          href={"mailto:noeyislearning@gmail.com"}
          className="group flex flex-row items-center gap-2 px-4 py-1 text-sm uppercase transition-all duration-300 ease-in-out"
        >
          Hire me
          <EnvelopeIcon className="ml-1 block h-4 w-4 transition-all duration-500 ease-in-out group-hover:hidden" />
          <EnvelopeOpenIcon className="ml-1 hidden h-4 w-4 transition-all duration-500 ease-in-out group-hover:block" />
        </a>
      </div>
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-2">{projects}</div>
      </TranslateYOpacity>
    </main>
  );
}
