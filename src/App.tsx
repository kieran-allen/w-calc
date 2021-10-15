import clsx from 'clsx'

import { DataContainer } from './components/DataContainer'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Header } from './components/Header'

export function App() {
  return (
    <div className={clsx('container')}>
      <Header />
      <Form />
      <DataContainer />
      <Footer />
    </div>
  )
}
