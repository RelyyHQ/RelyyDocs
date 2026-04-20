"use client"

import { createContext, useContext, type ReactNode } from 'react'
import type { PageMapItem } from 'nextra'

type RelyycastPageMapContextValue = {
  pageMap: PageMapItem[]
}

const RelyycastPageMapContext = createContext<RelyycastPageMapContextValue>({
  pageMap: []
})

type RelyycastPageMapProviderProps = {
  pageMap: PageMapItem[]
  children: ReactNode
}

export function RelyycastPageMapProvider({ pageMap, children }: RelyycastPageMapProviderProps) {
  return (
    <RelyycastPageMapContext.Provider value={{ pageMap }}>
      {children}
    </RelyycastPageMapContext.Provider>
  )
}

export function useRelyycastPageMap() {
  return useContext(RelyycastPageMapContext)
}
