import React, { ReactNode } from "react";

export default function PagesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="flex h-full w-full flex-row">{children}</div>;
}
