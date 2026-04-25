import type { Metadata } from 'next'
import '../global.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {Inter, Montserrat } from 'next/font/google';






export const metadata: Metadata = {
  title: 'Robert Hollander - Portfolio',
  description: 'Null',
}






const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen square-pattern ${montserrat.className}`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
