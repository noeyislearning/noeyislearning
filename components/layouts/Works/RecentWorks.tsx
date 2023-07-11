"use client";
import React from "react";
import RecentWorksCard from '@/components/common/Cards/RecentWorksCard';

export default function RecentWorks() {
  return (
    <div className="flex mt-16">
      <div className="flex flex-col gap-8 items-center">
        <RecentWorksCard />
      </div>
    </div>
  );
}