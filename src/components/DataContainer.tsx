import clsx from 'clsx'
import { useContext } from 'react'
import { CompoundContext } from '../context/CompoundContext'
import { Data } from './Data'

export function DataContainer() {
  const {
    compound: { less0, less21, less55 },
  } = useContext(CompoundContext)

  return (
    <div className={clsx('data-container')}>
      <Data data={less0} label="At current rate" />
      <Data data={less21} label="At -21% current rate" />
      <Data data={less55} label="At -55% current rate" />
    </div>
  )
}
