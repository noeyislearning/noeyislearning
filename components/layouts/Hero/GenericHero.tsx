import React from 'react'

/** --- Interfaces/Props --- */
import { GenericHeroProps } from "@/assets/ts/interfaces/hero";

export default function GenericHero({ title, description }: GenericHeroProps ) {
  return (
    <section className="px-6 md:px-12 lg:px-36 pt-36 pb-24">
      <div className="text-center">
        <div className="flex flex-col gap-6">
          <div className="text-4xl font-medium">
            {title}
          </div>
          <div className="text-sm">
            {description}
          </div>
        </div>
      </div>
    </section>
  )
}
