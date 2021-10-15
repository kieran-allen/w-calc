import { BigNumber } from '@ethersproject/bignumber'
import { ethers } from 'ethers'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { ContractContext } from '../context/ContractContext'
import { useGetMemoContractDataQuery } from './useGetMemoContractDataQuery'

export function useGetStakingEpochYieldQuery(address: string) {
  const { getContract } = useContext(ContractContext)
  const { isSuccess, data } = useGetMemoContractDataQuery(address)
  const contract = getContract('StakingContract')

  return useQuery(
    `get-epoch-${address}`,
    async () => {
      const { distribute }: { [key: string]: BigNumber } =
        await contract?.epoch()
      return distribute
    },
    {
      enabled: !!contract && isSuccess,
      select: distribute => {
        const circ = data?.circulatingSupply ?? 0
        const d = Number(ethers.utils.formatUnits(distribute, 'wei'))

        if (!circ) return 0

        return (d / circ) * 100
      },
    },
  )
}
