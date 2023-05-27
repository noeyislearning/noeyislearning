import React from "react";
import Link from "next/link";



/** --- Components --- */
import BlogCard from "@/components/common/Cards/BlogCard";
import SectionTitleTexts from "@/components/common/Texts/SectionTitleTexts";

export default function LatestBlogs() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <div className="flex justify-between items-center">
              <SectionTitleTexts title={"Latest Blogs"}/>
              <Link href={"/"}>
                <div className="text-sm font-base underline underline-offset-4">Read more</div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};
