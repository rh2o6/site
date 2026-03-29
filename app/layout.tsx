import type { Metadata } from 'next'
import '../global.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Robert Hollander - Portfolio',
  description: 'COOP 2100',
}

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // optional but recommended
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
