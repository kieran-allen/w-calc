import { useQuery } from 'react-query'
import { getWonderlandData } from '../api/getWonderlandData'

export function useGetWonderlandDataQuery() {
  return useQuery('wonderland-data', getWonderlandData, {
    select: data => data.market_data.current_price['usd'] ?? 0,
  })
}
