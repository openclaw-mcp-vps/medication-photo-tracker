import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSnap – Track Medications by Photo',
  description: 'Photograph your pill bottles and let OCR automatically build your medication schedule and send reminders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="afcdedc8-a545-4c1a-863b-ebe105d31636"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
