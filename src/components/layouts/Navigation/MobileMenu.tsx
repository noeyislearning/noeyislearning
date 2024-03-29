"use client";
import React from "react";
import { usePathname } from "next/navigation";
/** Components */
import MobileMenuCard from "@/components/common/Cards/MobileMenuCard";
/** Data */
import menuData from "@/assets/data/menus.json";
/** Redux */
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/buttons/reducer";

export default function MobileMenu() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  /** Destructure */
  const { menus } = menuData;

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const categories = Array.from(new Set(menus.map((menu) => menu.category)));

  return (
    <div className="flex w-full flex-col items-start gap-4 py-8">
      {categories.map((category) => (
        <div key={category} className="flex w-full flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs uppercase text-zinc-500">{category || "Others"}</span>
            <span className="w-full border border-b-0 border-dashed border-zinc-800"></span>
          </div>
          {menus
            .filter((menu) => menu.category === category)
            .map((menu) => (
              <MobileMenuCard key={menu.id} is_active={menu.link === pathname} {...menu} onClick={handleMenuClick} />
            ))}
        </div>
      ))}
    </div>
  );
}
