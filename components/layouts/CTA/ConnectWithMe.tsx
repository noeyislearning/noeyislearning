"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import GeneralButton from "@/components/common/Buttons/GeneralButton";

export default function ConnectWithMe() {
  const connectWithMeCTA = useSelector(
    (state: RootState) => state.text.connectWithMeCTA,
  );

  return (
    <>
      <div className="mx-auto mt-24 max-w-screen-sm text-white">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-gray-500 lg:text-base">
            {connectWithMeCTA}
          </p>
          <GeneralButton
            name="Let's get it touch!"
            link="mailto:hello@noeyislearning.dev"
          />
        </div>
      </div>
    </>
  );
}
