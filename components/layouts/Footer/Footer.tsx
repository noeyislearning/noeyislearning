import React from "react";
import Link from "next/link";

/** Heroicons */
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="mb-24 max-w-screen-sm mx-auto text-white justify-center">
        <hr className="my-6 border-gray-500 mx-auto" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="grid grid-cols-3 gap-4">
            
              {/* Explore (Menu) */}
              <div>
                <h2 className="mb-6 text-sm font-medium text-white">Explore</h2>
                <ul className="flex flex-col gap-2 text-gray-500">
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        About
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Blogs
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Works
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Open Sources
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className="mb-6 text-sm font-medium text-white">Legal</h2>
                <ul className="flex flex-col gap-2 text-gray-500">
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Legal Notice
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Terms & Condition
                      </div>
                    </Link>
                  </li>
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
