import clsx from 'clsx'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CompoundContext } from '../context/CompoundContext'

type Form = {
  publicAddress: string
}

export function Home() {
  const { register, handleSubmit } = useForm<Form>()
  const { setCompound } = useContext(CompoundContext)
  const history = useHistory()

  function onSubmit(e: Form) {
    setCompound({
      less0: [],
      less21: [],
      less55: [],
    })
    history.push(`/${e.publicAddress}`)
  }

  return (
    <div className={clsx('container')}>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="public-address">
          Public address:
          <p className={clsx('text-xs')}>
            Enter a public address to fetch the memo value for that given
            address. Alternatively, leave the address as is and manually change
            values on the next page.
          </p>
        </label>

        <input
          id="public-address"
          type="text"
          placeholder="0x..."
          {...register('publicAddress', {
            value: '0x0000000000000000000000000000000000000000',
          })}
        />
        <input type="submit" value="Go" />
      </form>

      <Footer />
    </div>
  )
}
