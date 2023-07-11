import React from 'react'
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="pt-36 bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">Oops! It seems you&apos;ve reached a dead end.</p>
            <p className="text-lg font-light text-gray-400">The page you are looking for cannot be found.</p>
            <Link href={"/"}>
              <div className="text-lg font-medium text-gray-400 hover:underline underline-offset-4">Don&apos;t worry, though – let&apos;s get you back on track!</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}