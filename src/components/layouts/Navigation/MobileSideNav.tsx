"use client";
import React from "react";
/** Framer Motion */
import { motion, AnimatePresence } from "framer-motion";
/** Components */
import Logo from "@/components/common/Logos/Logo";
import MobileMenu from "./MobileMenu";
import MenuButton from "@/components/common/Buttons/MenuButton";
/** Redux */
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function MobileSideNav() {
  const isMenuOpen = useSelector((state: RootState) => state.menuButton.isMenuOpen);
  /** Functions */
  const getCurrentYear = new Date().getFullYear();

  console.log("Rendering MobileSideNav", isMenuOpen);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.aside
          className={`absolute left-0 right-0 z-50 h-full w-full flex-col items-start overflow-y-scroll border border-r border-dashed border-zinc-800 bg-zinc-950 p-4 md:flex lg:flex `}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          <div className="flex w-full flex-row items-start justify-between">
            <Logo />
            <MenuButton />
          </div>
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
          <MobileMenu />
          <div className="mt-auto flex flex-col items-start">
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold">© {getCurrentYear} Noey Ignacio.</p>
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
