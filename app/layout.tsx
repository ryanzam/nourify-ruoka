import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import QueryProvider from './providers/QueryProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NourifyRuoka',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <AuthProvider>
          <QueryProvider>
            <div className="flex flex-col h-screen">
              <Nav />
              <div className="container mx-auto flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
