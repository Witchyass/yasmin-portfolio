import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Yasmin Sebei - Portfolio',
  description: 'Computer Engineering Student | DevOps Enthusiast | AI & Cloud Specialist',
  keywords: ['Yasmin Sebei', 'Portfolio', 'DevOps', 'AI', 'Cloud Computing', 'Computer Engineering'],
  authors: [{ name: 'Yasmin Sebei' }],
  openGraph: {
    title: 'Yasmin Sebei -Portfolio',
    description: 'Computer Engineering Student specializing in DevOps, AI, and Cloud Technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
