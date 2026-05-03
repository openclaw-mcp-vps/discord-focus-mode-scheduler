import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Discord Focus Mode Scheduler — Auto DND for Deep Work",
  description: "Automatically sets Discord status to Do Not Disturb during your deep work hours. Smart scheduling and team sync for remote dev teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ad3f1212-fc74-4a97-b804-eeff794b12f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
