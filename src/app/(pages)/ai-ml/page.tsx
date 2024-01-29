import { parseISO } from "date-fns";
/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import ProjectCard from "@/components/common/Cards/ProjectCard";
import PageHeader from "@/components/common/Headers/PageHeader";
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
      <PageHeader title="AI/ML" description="ai & machine learning related projects" />
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-3">{projects}</div>
      </TranslateYOpacity>
    </main>
  );
}
