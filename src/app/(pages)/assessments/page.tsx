import { parseISO } from "date-fns";
/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import ProjectCard from "@/components/common/Cards/ProjectCard";
import PageHeader from "@/components/common/Headers/PageHeader";
/** Functions */
import { getProjectMetadata } from "@/libs/helper/post";

export default function AssessmentProjectsPage() {
  const folder = "assessments";
  const metadata = getProjectMetadata(`src/assets/contents/${folder}/`);

  const projects = metadata
    .sort((a, b) => parseISO(b.dev_date.end).getTime() - parseISO(a.dev_date.end).getTime())
    .map((project) => <ProjectCard key={project.slug} folder={folder} {...project} />);

  return (
    <div className="flex w-full flex-col">
      <PageHeader title="Assessment" description="Access company assessment projects." />
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-1 lg:grid-cols-3">{projects}</div>
      </TranslateYOpacity>
    </div>
  );
}
