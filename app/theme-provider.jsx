'use client'

import { ThemeProvider } from 'next-themes'

export function AppThemeProvider({ children }) {
  return (
    <ThemeProvider
    
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
