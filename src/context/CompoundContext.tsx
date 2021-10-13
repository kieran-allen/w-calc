import React, { createContext, useState } from 'react'

export type CompoundContextType = {
  compound: number[]
  setCompound: React.Dispatch<React.SetStateAction<number[]>>
}

export const CompoundContext = createContext<CompoundContextType>({
  compound: [],
  setCompound: n => null,
})

export function CompoundContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [compound, setCompound] = useState<number[]>([])
  return (
    <CompoundContext.Provider value={{ compound, setCompound }}>
      {children}
    </CompoundContext.Provider>
  )
}
