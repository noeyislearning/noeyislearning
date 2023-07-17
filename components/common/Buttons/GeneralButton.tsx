import React from "react";
import Link from "next/link";

interface Props {
  name: string;
  link: string;
}

export default function GeneralButton({ name, link }: Props) {
  if (link.includes("mailto:")) {
    return (
      <a href={link}>
        <div className="rounded-lg border border-gray-500 px-4 py-1 text-sm duration-300 hover:border-gray-100">
          {name}
        </div>
      </a>
    );
  } else {
    return (
      <Link href={link}>
        <div className="rounded-lg border border-gray-500 px-4 py-1 text-sm duration-300 hover:border-gray-100">
          {name}
        </div>
      </Link>
    );
  }
}
