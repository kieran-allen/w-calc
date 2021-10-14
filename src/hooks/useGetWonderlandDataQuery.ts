import { useQuery } from 'react-query'
import { getWonderlandData } from '../api/getWonderlandData'

export function useGetWonderlandDataQuery() {
  return useQuery('wonderland-data', getWonderlandData)
}
