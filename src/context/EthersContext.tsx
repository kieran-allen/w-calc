import { ethers } from 'ethers'
import React, { createContext } from 'react'

export type EthersContextType = {
  provider: ethers.providers.JsonRpcProvider | undefined
}

export const EthersContext = createContext<EthersContextType>({
  provider: undefined,
})

export type Props = {
  children: React.ReactNode
}

export function EthersProvider({ children }: Props) {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://api.avax.network/ext/bc/C/rpc',
  )

  return (
    <EthersContext.Provider value={{ provider }}>
      {children}
    </EthersContext.Provider>
  )
}
