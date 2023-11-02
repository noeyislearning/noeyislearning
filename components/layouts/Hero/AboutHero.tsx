import React, { Fragment } from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <Fragment>
      <h3 className="pt-8 max-w-2xl text-xl leading-6">Hello, Hola! 👋</h3>
      <h3 className="max-w-2xl text-xl leading-6">
        I am Francis &apos;Noey&apos; Ignacio, a freelance software developer at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@teamkooest</span> ⭐</Link>, an esteemed organization in the technology industry. In parallel, I hold the position of a computer engineering college instructor at <Link href={"https://kooest.com"} target={"_blank"}><span className="text-yellow-400 underline underline-offset-4">@holyangeluniversity</span> 🏫</Link>, contributing to the academic growth and development of aspiring computer engineers.
      </h3>
      <h3 className="max-w-2xl text-xl leading-6">
        My professional journey has been imbued with a profound enthusiasm for the captivating realm of data science. Currently, I am diligently engaged in a transformative pursuit as I transition into the role of a <span className="text-yellow-400 underline underline-offset-4">data scientist</span>.
      </h3>
    </Fragment>
  )
}
