import React from "react";

import Navbar from "@/components/layouts/Navbar/Navbar";
import Hero from "@/components/layouts/Hero/Hero";
import Works from "@/components/layouts/Works/Works";

export default function HomePage() {
  return (
    <>
      <div className="p-8 md:p-8 lg:p-16 mx-auto w-full h-full flex flex-col items-center">
        <Hero />
        <Works />
      </div>
    </>
  );
}
