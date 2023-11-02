import React from "react";
import Link from "next/link";

export default function BlogsPage() {
  return (
      <>
        <section className="pt-36">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-white lg:text-9xl">
                Stay Tuned!
              </h1>
              <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                This page is still under construction.
              </p>
              <p className="text-lg font-light text-gray-400">
                Me and AIs are still working on this page.
              </p>
              <Link href={"/"}>
                <div className="text-lg font-medium text-gray-400 underline underline-offset-4">
                  Don&apos;t worry, though – let&apos;s get you back on track!
                </div>
              </Link>
            </div>
          </div>
        </section>
      </>
  );
}
