type MarketData = {
  current_price: { [key: string]: number }
}

type WonderlandResponse = {
  market_data: MarketData
}

export async function getWonderlandData() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/wonderland')
  if (!res.ok) throw res
  const json: WonderlandResponse = await res.json()
  return json
}
