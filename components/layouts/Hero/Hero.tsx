import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-center lg:gap-8">
        <h1 className="text-4xl font-bold lg:text-6xl">
          A software developer driven by his <span className="text-indigo-500">passion</span> and <span className="text-amber-500">curiosity</span>.
        </h1>
        <p className="text-sm text-gray-500 lg:text-base">
          Fuelled by relentless curiosity, a fierce passion for technology, and
          a wealth of experience earned from my extensive freelancing journey, I
          &apos;ve honed my skills in a diverse range of tech stacks. I pride
          myself on crafting comprehensive, bespoke software solutions that
          seamlessly align with your unique needs.
        </p>
      </div>
    </>
  );
}
