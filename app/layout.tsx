import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "SaaS checklist",
  description: "SaaS, SaaS cehcklist ,Customer Acquision",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`box-border ${inter.className}`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
