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
      <footer className="mx-auto mb-12 max-w-screen-sm justify-center p-4 text-white lg:mb-24">
        <hr className="mx-auto my-6 border-gray-500" />
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
          <div className="grid grid-cols-3 gap-8">
            {/* Explore Tab */}
            <div>
              <h2 className="mb-2 text-base font-medium text-white">Explore</h2>
              <ul className="flex flex-col gap-2 text-gray-500">
                {explores.map((explore) => (
                  <li key={explore.id}>
                    {explore.isAllowed ? (
                      <Link href={explore.url}>
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex whitespace-nowrap text-sm hover:text-gray-100">
                            {explore.name}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex whitespace-nowrap text-sm">
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
              <h2 className="mb-2 text-base font-medium text-white">
                Be in Touch
              </h2>
              <ul className="flex flex-col gap-2 text-gray-500">
                {connects.map((connect) => (
                  <li key={connect.id}>
                    {connect.isAllowed ? (
                      <Link href={connect.url} target={"_blank"}>
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex whitespace-nowrap text-sm hover:text-gray-100">
                            {connect.name}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex whitespace-nowrap text-sm">
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
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex text-sm hover:text-gray-100">
                            {legal.name}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="cursor-not-allowed">
                        <div className="flex flex-row items-center gap-1 lg:gap-2">
                          <div className="flex whitespace-nowrap text-sm">
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
          <div className="mt-8 flex self-center lg:mt-0 lg:self-start">
            <div className="flex flex-col items-center gap-2 lg:items-end">
              <div className="text-sm">&copy; {currentYear} Noey Ignacio</div>
              <a href={"mailto:hello@noeyislearning.dev"}>
                <div className="flex flex-row items-center gap-2 text-gray-500 hover:text-white">
                  <EnvelopeIcon className="h-3 w-3" />
                  <p className="text-xs font-medium">
                    hello@noeyislearning.dev
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
