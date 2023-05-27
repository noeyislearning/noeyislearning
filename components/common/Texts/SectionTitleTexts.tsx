import React from 'react'

/** --- Dependencies --- */
import { RxArrowBottomRight } from "react-icons/rx";

/** --- Interfaces/Props --- */
import { SectionTitleTextsProps } from "@/assets/ts/interfaces/texts";

export default function SectionTitleTexts({ title }: SectionTitleTextsProps) {
  return (
    <>
      <div className="flex gap-1 items-stretch">
        <div className="text-2xl font-base">{title}</div>
        <RxArrowBottomRight className="w-7 h-7"/>
      </div>
    </>
  )
}
