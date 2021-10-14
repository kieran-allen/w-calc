import clsx from 'clsx'
import { useContext } from 'react'
import { CompoundContext } from '../context/CompoundContext'
import { useGetWonderlandDataQuery } from '../hooks/useGetWonderlandDataQuery'
import { Data } from './Data'

export function DataContainer() {
  const {
    compound: { less0, less21, less55 },
  } = useContext(CompoundContext)
  const { data: priceInMIM = 0 } = useGetWonderlandDataQuery()

  return (
    <div className={clsx('data-container')}>
      <Data priceInMIM={priceInMIM} data={less0} label="At current rate" />
      <Data
        priceInMIM={priceInMIM}
        data={less21}
        label="At -21% current rate"
      />
      <Data
        priceInMIM={priceInMIM}
        data={less55}
        label="At -55% current rate"
      />
    </div>
  )
}
