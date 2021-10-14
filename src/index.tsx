import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getWonderlandData } from './api/getWonderlandData'
import { App } from './App'
import { CompoundContextProvider } from './context/CompoundContext'

import './style.css'

const anchor = document.getElementById('app')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
})

queryClient.prefetchQuery('wonderland-data', getWonderlandData)

render(
  <QueryClientProvider client={queryClient}>
    <CompoundContextProvider>
      <App />
    </CompoundContextProvider>
  </QueryClientProvider>,
  anchor,
)
