"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import SocialButton from "@/components/common/Buttons/SocialButton";

export default function ConnectWithMe() {

  const connectWithMeCTA = useSelector((state: RootState) => state.text.connectWithMeCTA);

  return (
    <>
      <div className="my-24 max-w-screen-sm mx-auto text-white justify-center">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-base text-gray-500">{connectWithMeCTA}</p>
          <div className="flex flex-row gap-2 items-center">
            <SocialButton />
            <SocialButton />
          </div>
        </div>
      </div>
    </>
  )
}