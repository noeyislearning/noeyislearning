import React, { ReactNode } from "react";

export default function PagesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <main className="flex h-full w-full flex-row">{children}</main>;
}
