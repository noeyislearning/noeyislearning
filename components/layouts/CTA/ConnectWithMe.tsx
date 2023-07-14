"use client";
import React from "react";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

/** Components */
import SocialButton from "@/components/common/Buttons/SocialLinkButton";

export default function ConnectWithMe() {

  const connectWithMeCTA = useSelector((state: RootState) => state.text.connectWithMeCTA);
  const socials = useSelector((state: RootState) => state.social.socials);

  return (
    <>
      <div className="mt-24 max-w-screen-sm mx-auto text-white">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-sm lg:text-base text-gray-500">{connectWithMeCTA}</p>
          <div className="flex flex-row flex-wrap gap-2 items-center">
            {socials.map((social) => (
              <SocialButton key={social.id} social={social} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}