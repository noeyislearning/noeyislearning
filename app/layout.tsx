import React from "react";
import { Metadata } from "next";

/** Configuration */
import { siteConfig } from "@/config/site";

/** Stylesheets */
import "@/assets/css/globals.css"

/** Global Font COnfiguration */
import { DM_Sans } from "next/font/google";
const globalFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
})

/** Metadata */
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
      "Personal Portfolio",
      "Portfolio",
      "Noey Ignacio",
      "Noey",
      "Personal Projects",
      "Showcase",
      "Software Developer",
      "Software Engineer",
      "Web Developer",
  ],
  authors: [
    {
      name: "DBuilders",
      url: siteConfig.url,
    }
  ],
  creator: "Noey Ignacio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.fbOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
      {
        url: siteConfig.messOgImage,
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
      {
        url: siteConfig.ogImage,
        width: 1800,
        height: 1600,
        alt: siteConfig.name,
      },
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 600,
        alt: siteConfig.name,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@noeyislearning",
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: "/favicon.ico",
  }
}

/** Components */
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";
import ConnectWithMe from "@/components/layouts/CTA/ConnectWithMe";

/** Providers */
import { Providers } from "@/redux/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${globalFont.className} bg-black`}>
        <Providers>
          <Navbar />
          {children}
          <ConnectWithMe />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
