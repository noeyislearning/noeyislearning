"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import RecentWorkCard from "@/components/common/Cards/RecentWorkCard";

export default function RecentWorks() {
  const works = useSelector((state: RootState) => state.work.works);

  return (
    <div className="mt-16 flex">
      <div className="flex flex-col items-center gap-8">
        {works.map((work) => (
          <RecentWorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
