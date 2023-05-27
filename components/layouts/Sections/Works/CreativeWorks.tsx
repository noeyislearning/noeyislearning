import React from "react";

/** --- Components --- */
import SectionTitleTexts from "@/components/common/Texts/SectionTitleTexts";
import ArtworkCard from "@/components/common/Cards/ArtworkCard";

export default function CreativeWorks() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <SectionTitleTexts title={"Creative Artworks"}/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ArtworkCard />
            <ArtworkCard />
            <ArtworkCard />
            <ArtworkCard />
            <ArtworkCard />
            <ArtworkCard />
          </div>
        </div>
      </section>
    </>
  );
};
