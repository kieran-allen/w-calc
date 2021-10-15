import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getWonderlandData } from './api/getWonderlandData'
import { App } from './routes/App'
import { CompoundContextProvider } from './context/CompoundContext'
import { EthersProvider } from './context/EthersContext'

import MemoContract from './constants/MemoContract.json'

import './style.css'
import { ContractProvider } from './context/ContractContext'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './routes/Home'

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
    <EthersProvider>
      <ContractProvider
        contractAddress={MemoContract.address}
        contractABI={MemoContract.abi}
        contractKey="MemoContract"
      >
        <CompoundContextProvider>
          <BrowserRouter>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/:address" render={() => <App />} />
          </BrowserRouter>
        </CompoundContextProvider>
      </ContractProvider>
    </EthersProvider>
  </QueryClientProvider>,
  anchor,
)
