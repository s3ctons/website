import type { Metadata } from "next"
import { Anonymous_Pro } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sectons",
  description: "Ton smart contract audit contests platform",
}

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--anonymous-pro",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${anonymousPro.variable} flex h-dvh flex-col subpixel-antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
