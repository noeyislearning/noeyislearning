"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import GeneralButton from "@/components/common/Buttons/GeneralButton";

export default function ConnectWithMe() {

  const connectWithMeCTA = useSelector((state: RootState) => state.text.connectWithMeCTA);

  return (
    <>
      <div className="mt-24 max-w-screen-sm mx-auto text-white">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-sm lg:text-base text-gray-500">{connectWithMeCTA}</p>
          <GeneralButton name="Let's get it touch!" link="mailto:hello@noeyislearning.dev"/>
        </div>
      </div>
    </>
  )
}