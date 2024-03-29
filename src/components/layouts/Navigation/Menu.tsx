"use client";
import React from "react";
import { usePathname } from "next/navigation";
/** Components */
import MenuCard from "@/components/common/Cards/MenuCard";
/** Data */
import menuData from "@/assets/data/menus.json";

export default function Menu() {
  const pathname = usePathname();

  /** Destructure */
  const { menus } = menuData;

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
              <MenuCard key={menu.id} is_active={menu.link === pathname} {...menu} />
            ))}
        </div>
      ))}
    </div>
  );
}
