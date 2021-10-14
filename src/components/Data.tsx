import clsx from 'clsx'
import { DataPoint } from './DataPoint'

type Props = {
  data: number[]
  label: string
}

export function Data({ data, label }: Props) {
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
          value={Intl.NumberFormat(navigator.language, {
            style: 'currency',
            currency: 'MIM',
          }).format(data[data.length - 1] * 7000)}
          label={`MIM Value after ${data.length / 3} days`}
        />
      </div>
    </div>
  ) : null
}
