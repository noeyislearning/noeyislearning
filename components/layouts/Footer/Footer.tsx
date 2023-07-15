"use client";
import React from "react";
import Link from "next/link";

/** Heroicons */
import { EnvelopeIcon } from "@heroicons/react/24/outline";

/** Redux */
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export default function Footer() {

  const explores = useSelector((state: RootState) => state.menu.explore);
  const legals = useSelector((state: RootState) => state.menu.legal);
  const connects = useSelector((state: RootState) => state.menu.connect);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="p-4 mb-12 lg:mb-24 max-w-screen-sm mx-auto text-white justify-center">
        <hr className="my-6 border-gray-500 mx-auto" />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className="grid grid-cols-3 gap-8">
          
            {/* Explore Tab */}
            <div>
              <h2 className="mb-2 text-base font-medium text-white">Explore</h2>
              <ul className="flex flex-col gap-2 text-gray-500">
                {explores.map((explore) => (
                  <li key={explore.id}>
                    {explore.isAllowed ? (
                        <Link href={explore.url}>
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex text-sm hover:text-gray-100 whitespace-nowrap">
                            {explore.name}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex text-sm whitespace-nowrap">
                            {explore.name}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Tab */}
            <div>
              <h2 className="mb-2 text-base font-medium text-white">Be in Touch</h2>
              <ul className="flex flex-col gap-2 text-gray-500">
                {connects.map((connect) => (
                  <li key={connect.id}>
                    {connect.isAllowed ? (
                        <Link href={connect.url} target={"_blank"}>
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex text-sm hover:text-gray-100 whitespace-nowrap">
                            {connect.name}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex text-sm whitespace-nowrap">
                            {connect.name}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Tab */}
            <div>
              <h2 className="mb-2 text-base font-medium text-white">Legal</h2>
              <ul className="flex flex-col gap-2 text-gray-500">
                {legals.map((legal) => (
                  <li key={legal.id}>
                  {legal.isAllowed ? (
                      <Link href={legal.url}>
                      <div className="flex flex-row gap-2 items-center">
                      <div className="flex text-sm hover:text-gray-100">
                          {legal.name}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="cursor-not-allowed">
                      <div className="flex flex-row gap-1 lg:gap-2 items-center">
                        <div className="flex text-sm whitespace-nowrap">
                          {legal.name}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="mt-8 lg:mt-0 flex self-center lg:self-start">
            <div className="flex flex-col gap-2 items-center lg:items-end">
              <div className="text-sm">&copy; {currentYear} Noey Ignacio</div>
              <Link href={"mailto:hello@noeyislearning.dev"}>
                <div className="flex flex-row gap-2 items-center text-gray-500 hover:text-white">
                  <EnvelopeIcon className="w-3 h-3"/>
                  <p className="text-xs font-medium">hello@noeyislearning.dev</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>    
    </>
  )
}
