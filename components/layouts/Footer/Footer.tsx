import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="my-36 max-w-screen-sm mx-auto text-white justify-center">
        <hr className="my-6 border-gray-500 mx-auto" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="grid grid-cols-3 gap-4">
              {/* Social Links */}
              <div>
                <h2 className="mb-6 text-sm font-medium text-white">Socials</h2>
                <ul className="flex flex-col gap-2 text-gray-500">
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Instagram
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Threads
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"} >
                      <div className="hover:underline">
                        Twitter
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

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
                <div>Noey Ignacio</div>
                <Link href={"/"}>
                  <p className="mb-6 text-xs font-medium text-gray-500 hover:text-white">hello@noeyislearning.dev</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>    
    </>
  )
}
