import React from "react";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import PageHeader from "@/components/common/Headers/PageHeader";

export default function NotesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader title="Notes" description="Software dev., data space, and etc." />
      <TranslateYOpacity>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-3xl text-zinc-300">Notes</h1>
          <p className="max-w-xs text-center text-sm text-zinc-500">
            Will be posting notes here. For now it&apos;s empty.
          </p>
        </div>
      </TranslateYOpacity>
    </div>
  );
}
