import React from "react";
import Link from "next/link";

/** --- Components --- */
import BlogCard from "@/components/common/Cards/BlogCard";

export default function Blogs() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-36 pt-12 pb-24">
        <div className="flex flex-col gap-2">
          <div className="pb-12">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-base">Latest Blogs</div>
              <Link href={"/"}>
                <div className="text-sm font-base underline underline-offset-4">Read more</div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};
