import clsx from 'clsx'

export function Header() {
  return (
    <header className={clsx('header')}>
      <h1>🐸 W-CALC</h1>
      <p>
        A calculator to help us all understand the potential returns from
        staking{' '}
        <a
          className={clsx('link')}
          href="https://www.coingecko.com/en/coins/wonderland"
        >
          $TIME
        </a>{' '}
        at{' '}
        <a className={clsx('link')} href="https://app.wonderland.money">
          wonderland.money
        </a>.
      </p>
    </header>
  )
}
