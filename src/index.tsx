import { render } from 'react-dom'
import { App } from './App'
import { CompoundContextProvider } from './context/CompoundContext'

import './style.css'

const anchor = document.getElementById('app')

render(
  <CompoundContextProvider>
    <App />
  </CompoundContextProvider>,
  anchor,
)
