import clsx from 'clsx'
import { Data } from './components/Data'
import { Form } from './components/Form'
import { Header } from './components/Header'

export function App() {
  return (
    <div className={clsx('container')}>
      <Header />
      <Form />
      <Data />
    </div>
  )
}
