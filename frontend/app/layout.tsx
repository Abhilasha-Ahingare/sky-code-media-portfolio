import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Sky Code Media | Digital Solutions That Transform Businesses",
  description:
    "We build world-class digital solutions including web development, mobile apps, UI/UX design, and digital marketing to transform your business.",
  keywords: ["web development", "digital agency", "mobile apps", "UI/UX design", "digital marketing"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
