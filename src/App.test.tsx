import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should return "hello world"', () => {
    const { getByText } = render(<App />)
    expect(getByText('Let us begin...')).toBeTruthy()
  })
})
