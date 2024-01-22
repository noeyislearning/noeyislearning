import React, { ReactNode } from "react";
import type { Metadata } from "next";
/** Configuration */
import { siteConfig } from "@/config/site";
/** Stylesheets */
import "@/assets/css/globals.css";
/** Global Font */
import { JetBrains_Mono } from "next/font/google";
const globalFont = JetBrains_Mono({ subsets: ["latin"] });
/** Components */
import { Providers } from "@/redux/Providers";
import SideNav from "@/components/layouts/Navigation/SideNav";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Personal Portfolio",
    "Portfolio",
    "Noey Ignacio",
    "Noey",
    "Data Scientist",
    "Data Science",
    "Personal Projects",
    "Showcase",
    "Software Developer",
    "Software Engineer",
    "Web Developer"
  ],
  authors: [
    {
      name: "Noey Ignacio",
      url: siteConfig.url
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
        alt: siteConfig.name
      },
      {
        url: siteConfig.messOgImage,
        width: 512,
        height: 512,
        alt: siteConfig.name
      },
      {
        url: siteConfig.ogImage,
        width: 1800,
        height: 1600,
        alt: siteConfig.name
      },
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 600,
        alt: siteConfig.name
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
    icon: "/favicon.ico"
  }
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`h-full w-full text-white ${globalFont.className} bg-zinc-950 font-semibold tracking-tighter antialiased`}
      >
        <Providers>
          <div className="flex h-screen w-full overflow-hidden">
            <SideNav />
            <div className="w-full flex-grow overflow-y-scroll">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
