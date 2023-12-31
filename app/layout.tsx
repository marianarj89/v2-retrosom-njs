import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Som Retrô - V2 Projeto Final NextJS + JAMstack',
  description: 'Som Retrô - Mariana Sá Ribas',
  keywords: ['música', 'playlists', 'music'],
}

export const dynamic = 'auto'

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}> 
      
      {children}</body>
    </html>
  )
}
