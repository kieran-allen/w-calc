import clsx from 'clsx'

import { DataPoint } from './DataPoint'

type Props = {
  data: number[]
  label: string
  priceInMIM: number
}

export function Data({ data, label, priceInMIM }: Props) {
  return data.length ? (
    <div>
      <h2 className={clsx('mb-3')}>{label}</h2>
      <div className={clsx('data')}>
        <DataPoint value={Math.ceil(data.length / 3)} label="Days" />
        <DataPoint value={data.length} label="Number of epochs" />
        <DataPoint
          value={data[data.length - 1].toFixed(4)}
          label={`MEMO after ${data.length / 3} days`}
        />
        <DataPoint
          value={Intl.NumberFormat(navigator.language).format(
            data[data.length - 1] * priceInMIM,
          )}
          label={`MIM Value after ${data.length / 3} days`}
        />
      </div>
    </div>
  ) : null
}
