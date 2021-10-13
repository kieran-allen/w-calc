import clsx from 'clsx'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CompoundContext } from '../context/CompoundContext'
import type { Form } from '../types/Form'
import { compound } from '../utils/compound'

export function Form() {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      currentMemo: 2.7,
      rewardYieldPerEpoch: 0.5684,
      desiredMemo: 1000,
    },
  })
  const { setCompound } = useContext(CompoundContext)

  function onSubmit({ currentMemo, rewardYieldPerEpoch, desiredMemo }: Form) {
    setCompound(
      compound({
        compound: [currentMemo],
        reward: rewardYieldPerEpoch,
        desired: desiredMemo,
      }),
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx('input-container')}>
        <label htmlFor="current-memo">Current MEMO</label>
        <input
          id="current-memo"
          {...register('currentMemo', { valueAsNumber: true })}
        />
      </div>
      <div className={clsx('input-container')}>
        <label htmlFor="memo-epoch">Reward Yield/Epoch</label>
        <input
          id="memo-epoch"
          {...register('rewardYieldPerEpoch', { valueAsNumber: true })}
        />
      </div>
      <div className={clsx('input-container')}>
        <label htmlFor="desired-memo">Desired MEMO</label>
        <input
          id="desired-memo"
          {...register('desiredMemo', { valueAsNumber: true })}
        />
      </div>
      <input type="submit" value="Calculate" />
    </form>
  )
}
