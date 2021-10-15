import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { CompoundContext } from '../context/CompoundContext'
import { useGetMemoContractDataQuery } from '../hooks/useGetMemoContractDataQuery'
import { useGetStakingEpochYieldQuery } from '../hooks/useGetStakingEpochYieldQuery'
import type { Form } from '../types/Form'
import { compound } from '../utils/compound'
import { FormInput } from './FormInput'

export function Form() {
  const { address } = useParams<{ address: string }>()
  const { data: memo } = useGetMemoContractDataQuery(address)
  const { data: yee } = useGetStakingEpochYieldQuery(address)
  const form = useForm<Form>({
    defaultValues: {
      currentMemo: memo?.balance ?? 0,
      rewardYieldPerEpoch: yee ?? 0,
      days: 365,
    },
  })

  useEffect(() => {
    form.setValue('currentMemo', memo?.balance ?? 0)
    form.setValue('rewardYieldPerEpoch', yee ?? 0)
  }, [memo?.balance, yee])

  const { setCompound } = useContext(CompoundContext)

  function onSubmit({ currentMemo, rewardYieldPerEpoch, days }: Form) {
    setCompound(
      compound({
        compound: {
          less0: [currentMemo],
          less21: [currentMemo],
          less55: [currentMemo],
        },
        reward: rewardYieldPerEpoch,
        days: days * 3,
      }),
    )
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput label="Current MEMO" name="currentMemo" />
        <FormInput label="Reward Yield/Epoch %" name="rewardYieldPerEpoch" />
        <FormInput label="Days" name="days" />
        <input type="submit" value="Calculate" />
      </form>
    </FormProvider>
  )
}
