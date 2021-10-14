import React, { createContext, useState } from 'react'
import type { Compound, CompoundContextType } from '../types/CompoundContext'

export const CompoundContext = createContext<CompoundContextType>({
  compound: {
    less0: [],
    less21: [],
    less55: [],
  },
  setCompound: () => null,
})

export function CompoundContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [compound, setCompound] = useState<Compound>({
    less0: [],
    less21: [],
    less55: [],
  })
  return (
    <CompoundContext.Provider value={{ compound, setCompound }}>
      {children}
    </CompoundContext.Provider>
  )
}
