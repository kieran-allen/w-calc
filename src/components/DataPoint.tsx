import clsx from 'clsx'

type Props = {
  label: string
  value: string | number
}

export function DataPoint({ label, value }: Props) {
  return (
    <div className={clsx('data-point')}>
      <h3 className={clsx('font-bold')}>{label}</h3>
      <h4>{value}</h4>
    </div>
  )
}
