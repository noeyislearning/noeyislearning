import React from "react";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";
import PageHeader from "@/components/common/Headers/PageHeader";

export default function MePage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader title="Who am I?" description="Let's get to know each other better." />
      <TranslateYOpacity>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-3xl text-zinc-300">Who am I?</h1>
          <p className="max-w-xs text-center text-sm text-zinc-500">
            Will be posting bout myself. For now it&apos;s empty.
          </p>
        </div>
      </TranslateYOpacity>
    </div>
  );
}
