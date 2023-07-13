"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import RecentWorkCard from '@/components/common/Cards/RecentWorkCard';

export default function RecentWorks() {
  
  const works = useSelector((state: RootState) => state.work.works);

  return (
    <div className="flex mt-16">
      <div className="flex flex-col gap-8 items-center">
        {works.map((work) => (
          <RecentWorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}