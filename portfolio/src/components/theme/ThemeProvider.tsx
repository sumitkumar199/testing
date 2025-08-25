import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  useEffect(() => {
    // Ensure initial theme class exists for SSR/CSR parity
    const root = document.documentElement
    if (!root.classList.contains('light') && !root.classList.contains('dark')) {
      root.classList.add('dark')
    }
  }, [])
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}

