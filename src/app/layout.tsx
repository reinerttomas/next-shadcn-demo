import '@/app/globals.css'
import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/libs/fonts'
import { cn } from '@/libs/utils'
import Providers from '@/components/providers'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <TailwindIndicator />
          </div>
        </Providers>
      </body>
    </html>
  )
}
