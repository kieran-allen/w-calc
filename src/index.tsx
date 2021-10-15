import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getWonderlandData } from './api/getWonderlandData'
import { App } from './App'
import { CompoundContextProvider } from './context/CompoundContext'
import { EthersProvider } from './context/EthersContext'

import MemoContract from './constants/MemoContract.json'

import './style.css'
import { ContractProvider } from './context/ContractContext'

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
      >
        <CompoundContextProvider>
          <App />
        </CompoundContextProvider>
      </ContractProvider>
    </EthersProvider>
  </QueryClientProvider>,
  anchor,
)
