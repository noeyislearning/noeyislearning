"use client";
import React, { useState, useEffect } from "react";

export default function TranslateOpacity({ children }: Readonly<{ children: React.ReactNode }>) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className={`${inProp ? "opacity-100" : "opacity-0"} w-full transition-all duration-700 ease-in-out`}>
      {children}
    </div>
  );
}
