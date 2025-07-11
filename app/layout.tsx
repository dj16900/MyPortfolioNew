import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mr. Debjit Ghosh',
  description: 'Created by Debjit Ghosh',
  authors: [{ name: 'Debjit Ghosh' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
