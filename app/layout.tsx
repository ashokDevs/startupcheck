import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS checklist",
  description: "SaaS chechklist to convert your mvp to full product",
  twitter :{
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Free SaaS Checklist</title>
        <meta name="title" content="Free SaaS Checklist" />
        <meta
          name="description"
          content="A Free SaaS checklist to help you plan, build and grow your Startup."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://startupcheck.vercel.app/" />
        <meta property="og:title" content="A Free SaaS Checklist" />
        <meta
          property="og:description"
          content="A Free SaaS checklist to help you plan, build and grow your Startup."
        />
        <meta
          property="og:image"
          content="/opengraph-image.png"
        />
        <meta property="og:image:alt" content="A Free SaaS Checklist" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://startupcheck.vercel.app/"
        />
        <meta property="twitter:title" content="A Free SaaS Checklist" />
        <meta
          property="twitter:description"
          content="A Free SaaS checklist to help you plan, build and grow your Startup."
        />
        <meta
          property="twitter:image"
          content="/opengraph-image.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`box-border ${inter.className}`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
