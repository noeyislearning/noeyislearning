import React from "react";
import Link from "next/link";

/** Types */
import type { Social } from "@/redux/socials/reducer";

interface Props {
  social: Social;
}

export default function SocialButton({ social }: Props) {
  let hoverBorderColor = "border-gray-500";

  switch (social.name) {
    case "Instagram":
      hoverBorderColor = "hover:border-orange-500";
      break;
    case "Twitter":
      hoverBorderColor = "hover:border-blue-400";
      break;
    case "LinkedIn":
      hoverBorderColor = "hover:border-blue-500";
      break;
    case "Threads":
      hoverBorderColor = "hover:border-red-500";
      break;
    case "GitHub":
      hoverBorderColor = "hover:border-gray-200";
      break;
    default:
      break;
  } 

  return (
    <>
      <Link href={social.url} target={"_blank"}>
        <div className={`px-4 py-1 hover:px-6 text-sm border border-gray-500 ${hoverBorderColor} rounded-lg duration-300`}>
          {social.name}
        </div>
      </Link>
    </>
  )
} 