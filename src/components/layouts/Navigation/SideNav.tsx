import React from "react";

/** Components */
import Logo from "@/components/common/Logos/Logo";
import Menu from "./Menu";

export default function SideNav() {
  /** Functions */
  const getCurrentYear = new Date().getFullYear();

  return (
    <aside className="flex h-screen w-96 flex-col items-start border border-r border-dashed border-zinc-800 p-4">
      <Logo />
      <p className="mt-8 text-xs font-semibold">
        Level 24, software developer based on PH (🇵🇭) hoping into data space, a computer engineering instructor at{" "}
        <a href={"https://www.hau.edu.ph/"} target={"_blank"} className="text-yellow-500 underline">
          HAU
        </a>
        , and a developer at{" "}
        <a href={"https://kooest.com/"} target={"_blank"} className="text-indigo-500 underline">
          @teamkooest
        </a>
        .
      </p>
      <Menu />
      <div className="mt-auto flex flex-col items-start">
        <div className="flex flex-col items-start">
          <p className="text-xs font-semibold">© {getCurrentYear} Noey Ignacio</p>
          <p className="text-xs font-semibold">All rights reserved.</p>
        </div>
        <div className="mt-2 flex flex-row items-center gap-2">
          <a
            href={"https://www.linkedin.com/in/noeyislearning/"}
            target={"_blank"}
            className="text-sm font-semibold text-indigo-500 underline"
          >
            LinkedIn
          </a>
          <a
            href={"https://www.github.com/noeyislearning"}
            target={"_blank"}
            className="text-sm font-semibold text-indigo-500 underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
}
