"use client"

import HighlightLink from "@/components/common/links/HighlightLink"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function Highlights() {
  const { highlights } = useSelector((state: RootState) => state.highlight)
  return (
    <ul className="space-y-1 font-medium">
      {highlights.map((highlight, index: number) => (
        <li key={index}>
          <HighlightLink
            highlight={highlight}
            description={highlight.description}
            url={highlight.url}
            logo_img_URL={highlight.logo_img_URL}
          />
        </li>
      ))}
    </ul>
  )
}
