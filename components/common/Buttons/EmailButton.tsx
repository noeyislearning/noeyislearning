import React from "react";

export default function EmailButton({ text }: { text: string }) {
  return (
    <>
      <a href={"mailto:hello@noeyislearning.dev"}>
        <div className="cursor-pointer rounded-xl border border-gray-500 bg-gray-100 px-4 py-2 text-center text-sm font-medium text-black">
          {text}
        </div>
      </a>
    </>
  );
}
