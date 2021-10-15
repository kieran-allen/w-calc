import { BigNumber } from '@ethersproject/bignumber'
import { ethers } from 'ethers'
import { useContext } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { ContractContext } from '../context/ContractContext'
import stakingContractABI from '../constants/StakingContract.json'
import { EthersContext } from '../context/EthersContext'

type Response = {
  stakingContract: string
  balance: number
  circulatingSupply: number
}

export function useGetMemoContractDataQuery(address: string): UseQueryResult<
  Response,
  unknown
> {
  const { provider } = useContext(EthersContext)
  const { getContract, setContract } = useContext(ContractContext)
  const contract = getContract('MemoContract')
  return useQuery(
    'get-memo-balance',
    async () => {
      const stakingContract: string = contract?.stakingContract()
      const balance: BigNumber = contract?.balanceOf(
        address,
      )
      const circulatingSupply: BigNumber = contract?.circulatingSupply()
      return Promise.all([stakingContract, balance, circulatingSupply])
    },
    {
      enabled: !!contract,
      select: ([stakingContract, balance, circulatingSupply]) => {
        return {
          stakingContract,
          balance: Number(ethers.utils.formatUnits(balance, 9)),
          circulatingSupply: Number(
            ethers.utils.formatUnits(circulatingSupply, 'wei'),
          ),
        }
      },
      onSuccess: ({ stakingContract }) => {
        setContract(
          'StakingContract',
          new ethers.Contract(
            stakingContract,
            stakingContractABI.abi,
            provider,
          ),
        )
      },
    },
  )
}
