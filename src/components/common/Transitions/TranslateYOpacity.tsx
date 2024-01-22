"use client";
import React, { useState, useEffect } from "react";

export default function TranslateYOpacity({ children }: Readonly<{ children: React.ReactNode }>) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div
      className={`${inProp ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} h-full w-full transition-all duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
}
