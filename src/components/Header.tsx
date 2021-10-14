import clsx from 'clsx'
import { useGetWonderlandDataQuery } from '../hooks/useGetWonderlandDataQuery'

export function Header() {
  const { data: priceInMIM = 0 } = useGetWonderlandDataQuery()
  return (
    <header className={clsx('header')}>
      <div className={clsx('flex', 'items-center', 'justify-between', 'flex-col', 'lg:flex-row', 'gap-3', 'lg:gap-0')}>
        <h1>W-CALC</h1>
        <span className={clsx('bg-green-600', 'px-3', 'py-1', 'rounded', 'shadow-lg', 'text-white')}>
          {Intl.NumberFormat(navigator.language).format(1)} MIM ={' '}
          {Intl.NumberFormat(navigator.language).format(priceInMIM)} MEMO
        </span>
      </div>
      <p>
        A calculator to help us all understand the potential returns from
        staking{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={clsx('link')}
          href="https://www.coingecko.com/en/coins/wonderland"
        >
          $TIME
        </a>{' '}
        at{' '}
        <a
          className={clsx('link')}
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.wonderland.money"
        >
          wonderland.money
        </a>
        .
      </p>
    </header>
  )
}
