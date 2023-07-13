"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import RecentWorksCard from '@/components/common/Cards/RecentWorksCard';

export default function RecentWorks() {
  
  const works = useSelector((state: RootState) => state.work.works);

  return (
    <div className="flex mt-16">
      <div className="flex flex-col gap-8 items-center">
        {works.map((work) => (
          <RecentWorksCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}