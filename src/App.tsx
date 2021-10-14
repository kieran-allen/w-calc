import clsx from 'clsx'
import { Chart } from './components/Chart'
import { DataContainer } from './components/DataContainer'
import { Form } from './components/Form'
import { Header } from './components/Header'

export function App() {
  return (
    <div className={clsx('container')}>
      <Header />
      <Form />
      <DataContainer />
      <Chart />
    </div>
  )
}
