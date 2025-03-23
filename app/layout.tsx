import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Revolution | Танцевальный коллектив",
  description: 'Официальный сайт танцевального коллектива "Revolution". Присоединяйтесь к нашей дружной команде!',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="font-montserrat">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'