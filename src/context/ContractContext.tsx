import { ContractInterface, ethers } from 'ethers'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ContractNames } from '../types/ContractNames'
import { EthersContext } from './EthersContext'

type ContractContextType = {
  getContract: (key: ContractNames) => ethers.Contract | undefined
  setContract: (key: ContractNames, contract: ethers.Contract) => void
}

type Props = {
  contractKey?: ContractNames
  children: React.ReactNode
  contractAddress?: string
  contractABI?: ContractInterface
}

export const ContractContext = createContext<ContractContextType>({
  getContract: () => undefined,
  setContract: () => undefined,
})

export function ContractProvider({
  children,
  contractKey,
  contractABI,
  contractAddress,
}: Props) {
  const [contracts, _setContracts] = useState<{
    [key: string]: ethers.Contract
  }>({})
  const { provider } = useContext(EthersContext)

  useEffect(() => {
    if (contractKey && contractABI && contractAddress) {
      _setContracts({
        ...contracts,
        [contractKey]: new ethers.Contract(contractAddress, contractABI, provider),
      })
    }
  }, [contractKey, contractAddress, contractABI])

  function getContract(k: ContractNames) {
    return contracts?.[k]
  }

  function setContract(k: ContractNames, c: ethers.Contract) {
    _setContracts({
      ...contracts,
      [k]: c,
    })
  }

  return (
    <ContractContext.Provider value={{ getContract, setContract }}>
      {children}
    </ContractContext.Provider>
  )
}
