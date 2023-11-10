import React, { Fragment } from "react";
import Link from "next/link";

/** Redux related */
import type { Social } from "@/redux/socials/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ProfilesSocials() {

  // Get socials from redux store
  const socialsLearnings = useSelector<RootState, Social[]>(state => state.social.learnings);

  return (
    <Fragment>
      <div className="pt-8 text-2xl md:text-3xl lg:text-3xl">🌱 Profiles/Learnings</div>
      <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start lg:justify-start">
      { socialsLearnings.map((social) => (
        <div key={social.id} className="flex flex-row gap-2 items-center">
          <Link href={social.redirect_url} target={"_blank"} className="py-1 px-6 border border-dashed rounded-full hover:text-black hover:border-yellow-500 hover:bg-yellow-500">
            <span>{social.name}</span>
          </Link>
        </div>
      ))}
      </div>
    </Fragment>
  )
}
