import clsx from 'clsx'

import { DataContainer } from '../components/DataContainer'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Graph } from '../components/Graph'
import { Header } from '../components/Header'

export function App() {
  return (
    <div className={clsx('container')}>
      <Header />
      <Form />
      <DataContainer />
      <Graph />
      <Footer />
    </div>
  )
}
