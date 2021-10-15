import { ContractInterface, ethers } from 'ethers'
import React, { createContext, useContext } from 'react'
import { EthersContext } from './EthersContext'

type ContractContextType = {
  contract: undefined | ethers.Contract
}

type Props = {
  children: React.ReactNode
  contractAddress: string
  contractABI: ContractInterface
}

export const ContractContext = createContext<ContractContextType>({
  contract: undefined,
})

export function ContractProvider({
  children,
  contractABI,
  contractAddress,
}: Props) {
  const { provider } = useContext(EthersContext)
  const contract = new ethers.Contract(contractAddress, contractABI, provider)
  return (
    <ContractContext.Provider value={{ contract }}>
      {children}
    </ContractContext.Provider>
  )
}
