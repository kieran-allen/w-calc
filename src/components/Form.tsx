import { useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CompoundContext } from '../context/CompoundContext'
import { useGetMemoBalanceQuery } from '../hooks/useGetMemoBalanceQuery'
import type { Form } from '../types/Form'
import { compound } from '../utils/compound'
import { FormInput } from './FormInput'

export function Form() {
  const { data } = useGetMemoBalanceQuery()
  const form = useForm<Form>({
    defaultValues: {
      currentMemo: data ?? 0,
      rewardYieldPerEpoch: 0,
      days: 0,
    },
  })

  useEffect(() => {
    form.setValue('currentMemo', data ?? 0)
  }, [data])

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
