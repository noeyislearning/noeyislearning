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

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mb-24 max-w-screen-sm mx-auto text-white justify-center">
        <hr className="my-6 border-gray-500 mx-auto" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="grid grid-cols-2 gap-4">
            
              {/* Explore Tab */}
              <div>
                <h2 className="mb-6 text-sm font-medium text-white">Explore</h2>
                <ul className="flex flex-col gap-2 text-gray-500">
                  {explores.map((explore) => (
                    <li key={explore.id}>
                      {explore.isAllowed ? (
                         <Link href={explore.url}>
                         <div className="flex flex-row gap-2 items-center">
                           <div className="flex hover:text-gray-100">
                             {explore.name}
                           </div>
                         </div>
                       </Link>
                      ) : (
                        <div className="cursor-not-allowed">
                          <div className="flex flex-row gap-2 items-center">
                            <div className="flex">
                              {explore.name}
                            </div>
                            <span className="px-2 py-0.5 text-blue-600 text-xs font-light border border-blue-600 rounded-lg">Soon</span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Tab */}
              <div>
                <h2 className="mb-6 text-sm font-medium text-white">Legal</h2>
                <ul className="flex flex-col gap-2 text-gray-500">
                  {legals.map((legal) => (
                    <li key={legal.id}>
                    {legal.isAllowed ? (
                       <Link href={legal.url}>
                       <div className="flex flex-row gap-2 items-center">
                         <div className="flex hover:text-gray-100">
                           {legal.name}
                         </div>
                       </div>
                     </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex">
                            {legal.name}
                          </div>
                          <span className="px-2 py-0.5 text-blue-600 text-xs font-light border border-blue-600 rounded-lg">Soon</span>
                        </div>
                      </div>
                    )}
                  </li>
                  ))}
                </ul>
              </div>

            </div>
            <div className="flex">
              <div className="flex flex-col gap-2 items-end">
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
        </div>
      </footer>    
    </>
  )
}
