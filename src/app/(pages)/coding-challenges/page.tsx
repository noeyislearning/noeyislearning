/** Heroicons */
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import CodingChallengeCard from "@/components/common/Cards/CodingChallengesCard";
import PageHeader from "@/components/common/Headers/PageHeader";
/** Functions */
import { getCodingChallengeMetadata } from "@/libs/helper/post";

export default function CodingChallengeProjectsPage() {
  const folder = "coding-challenges";
  const metadata = getCodingChallengeMetadata(`src/assets/contents/${folder}/`);

  const codingChallenges = metadata
    .sort((a, b) => a.slug.localeCompare(b.name))
    .map((codingChallenge) => <CodingChallengeCard key={codingChallenge.slug} folder={folder} {...codingChallenge} />);

  return (
    <div className="flex w-full flex-col">
      <PageHeader title="Coding Challenges" description="Solutions to various challenges" />
      <TranslateYOpacity>
        <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">{codingChallenges}</div>
      </TranslateYOpacity>
    </div>
  );
}
