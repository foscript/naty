import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/shadcn/utils"
import { env } from "@/lib/env"
import "@/app/index.css"

// Shadcn Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: env.name,
  description: 'The easiest-to-use template ecosystem'
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", inter.variable)}
    >
      <body className="min-h-screen bg-background text-foreground w-screen">{children}</body>
    </html>
  )
}
