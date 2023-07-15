import React from "react";

export default function EmailButton({ text }: { text: string }) {
  return (
  <>
    <a href={"mailto:hello@noeyislearning.dev"}>
      <div className="px-4 py-2 text-black text-sm text-center font-medium bg-gray-100 border border-gray-500 rounded-xl cursor-pointer">
        {text}
      </div>
    </a>
  </>
  )
}
