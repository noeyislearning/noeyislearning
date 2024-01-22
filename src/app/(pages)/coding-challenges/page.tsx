import React from "react";
/** Components */
import TranslateYOpacity from "@/components/common/Transitions/TranslateYOpacity";

export default function CodingChallengesPage() {
  return (
    <>
      <TranslateYOpacity>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-3xl text-zinc-300">Coding Challenges</h1>
          <p className="text-zinc-300">Will be posting coding challenges here. For now it&apos;s empty.</p>
        </div>
      </TranslateYOpacity>
    </>
  );
}
