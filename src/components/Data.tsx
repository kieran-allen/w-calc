import clsx from 'clsx'
import { useContext } from 'react'
import { CompoundContext } from '../context/CompoundContext'

export function Data() {
  const { compound } = useContext(CompoundContext)
  console.info(compound)
  return compound.length ? (
    <div className={clsx('data')}>
      <div className={clsx('data-point')}>
        <h3 className={clsx('font-bold')}>Days</h3>
        <h4>{Math.ceil(compound.length / 3)}</h4>
      </div>
      <div className={clsx('data-point')}>
        <h3 className={clsx('font-bold')}>Epoch</h3>
        <h4>{compound.length}</h4>
      </div>
      <div className={clsx('data-point')}>
        <h3 className={clsx('font-bold')}>MEMO at epoch {compound.length}</h3>
        <h4>{compound[compound.length - 1].toFixed(4)}</h4>
      </div>
      <div className={clsx('data-point')}>
        <h3 className={clsx('font-bold')}>USD Value at epoch {compound.length}</h3>
        <h4>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(compound[compound.length - 1] * 7000)}
        </h4>
      </div>
    </div>
  ) : null
}
