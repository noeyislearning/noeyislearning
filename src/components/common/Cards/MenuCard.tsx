import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Interface @ Reducer */
import { Menu } from "@/redux/menus/reducer";

export default function MenuCard({ name, description, link, menu_img_URL }: Menu) {
  const pathname = usePathname();

  const is_active =
    (link === "/" && pathname.startsWith("/web")) || pathname === link || pathname.startsWith(`${link}/`);

  /** Functions */
  const activeBorder = is_active ? "border-zinc-300" : "border-zinc-700";
  const activeFont = is_active ? "text-white" : "text-zinc-400";

  return (
    <Link
      href={link}
      className={`group flex w-full cursor-pointer flex-row items-center gap-4 hover:border-zinc-300 ${activeBorder} scale-100 border border-dashed p-4 transition-all duration-300 ease-in-out hover:scale-105`}
    >
      <div className="relative h-10 w-10">
        <Image
          src={menu_img_URL}
          alt={name}
          width={40}
          height={40}
          className="rounded-md object-fill transition-all duration-300 ease-in-out"
          priority
        />
      </div>
      <div className="flex flex-col items-start">
        <h3
          className={`text-sm font-semibold uppercase transition-all duration-300 ease-in-out ${activeFont} group-hover:text-white`}
        >
          {name}
        </h3>
        <p className="line-clamp-1 text-xs font-semibold text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
