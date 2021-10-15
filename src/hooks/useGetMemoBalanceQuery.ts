import { BigNumber } from '@ethersproject/bignumber'
import { ethers } from 'ethers'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { ContractContext } from '../context/ContractContext'

type BalanceResponse = BigNumber[]

export function useGetMemoBalanceQuery() {
  const { contract } = useContext(ContractContext)
  return useQuery(
    'get-memo-balance',
    async () => {
      const [balance]: BalanceResponse = await contract?.functions.balanceOf(
        '0xA14f7BC0f35B73E91588aceb437CFD9fd0fDB999',
      )
      return balance
    },
    {
      enabled: !!contract,
      select: balance => Number(ethers.utils.formatUnits(balance, 9)) ?? 0,
    },
  )
}
