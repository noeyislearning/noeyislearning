import React from "react";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import PageHeader from "@/components/common/Headers/PageHeader";

export default function DBMSPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader title="DBMS" description="Database management notes, assignments, etc." />
      <TranslateYOpacity>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-3xl text-zinc-300">DBMS</h1>
          <p className="text-zinc-300">Will be posting about database management system. For now it&apos;s empty.</p>
        </div>
      </TranslateYOpacity>
    </div>
  );
}
