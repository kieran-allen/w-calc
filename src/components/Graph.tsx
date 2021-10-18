import clsx from 'clsx'
import { useContext } from 'react'
import { VictoryLine, VictoryChart } from 'victory'
import { CompoundContext } from '../context/CompoundContext'

export function Graph() {
  const {
    compound: { less0 },
  } = useContext(CompoundContext)

  const data = less0.map((y, x) => ({
    x,
    y,
  }))

  return less0.length ? (
    <div className={clsx('bg-gray-700', 'rounded', 'mt-12')}>
      <VictoryChart>
        <VictoryLine
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          interpolation="natural"
          style={{ labels: { fontSize: 1 }, parent: { fontSize: 1 } }}
        />
      </VictoryChart>
    </div>
  ) : null
}
