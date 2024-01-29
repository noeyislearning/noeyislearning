/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import ProjectCard from "@/components/common/Cards/ProjectCard";
import PageHeader from "@/components/common/Headers/PageHeader";
/** Functions */
import { getProjectMetadata } from "@/libs/helper/post";

export default function DataSpaceProjectsPage() {
  const folder = "data-space";
  const metadata = getProjectMetadata(`src/assets/contents/${folder}/`);

  const projects = metadata
    .sort((a, b) => a.slug.localeCompare(b.name))
    .map((codingChallenge) => <ProjectCard key={codingChallenge.slug} folder={folder} {...codingChallenge} />);

  return (
    <div className="flex w-full flex-col">
      <PageHeader title="Data Space" description="Visualizing, analyzing, and predicting" />
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">{projects}</div>
      </TranslateYOpacity>
    </div>
  );
}
