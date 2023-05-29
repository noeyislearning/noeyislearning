import React from "react";
import Link from "next/link";

/** --- Dependencies --- */
import { RxArrowTopRight } from "react-icons/rx";

/** --- Components --- */
import SectionTitleTexts from "@/components/common/Texts/SectionTitleTexts";
import RepositoryCard from "@/components/common/Cards/RepositoryCard";

export default function PublicRepositories() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24 border-b border-black">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <div className="flex justify-between items-center">
              <SectionTitleTexts title={"Public Repositories"}/>
              <Link href={"https://github.com/noeyislearning?tab=repositories"} target={"_blank"}>
                <div className="flex gap-1 items-end">
                  <div className="text-sm font-base underline underline-offset-4">See more</div>
                  <RxArrowTopRight className="w-5 h-5"/>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
          </div>
        </div>
      </section>
    </>
  );
};
