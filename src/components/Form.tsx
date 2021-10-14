import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CompoundContext } from '../context/CompoundContext'
import type { Form } from '../types/Form'
import { compound } from '../utils/compound'
import { FormInput } from './FormInput'

export function Form() {
  const form = useForm<Form>({
    defaultValues: {
      currentMemo: 0,
      rewardYieldPerEpoch: 0,
      days: 0,
    },
  })
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
        <FormInput label="Reward Yield/Epoch" name="rewardYieldPerEpoch" />
        <FormInput label="Days" name="days" />
        <input type="submit" value="Calculate" />
      </form>
    </FormProvider>
  )
}
