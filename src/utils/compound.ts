import { Compound } from '../types/CompoundContext'
import { minusPercent } from './minusPercent'

type CompoundProps = {
  compound: Compound
  reward: number
  days: number
}

const newHead = (r: number, h: number) => (h / 100) * r + h

export function compound({
  compound: {
    less0: [head, ...tail],
    less21: [l21Head, ...l21Tail],
    less55: [l55Head, ...l55Tail],
  },
  reward,
  days,
}: CompoundProps): Compound {
  if (days === 1) {
    return {
      less0: [head, ...tail].reverse(),
      less21: [l21Head, ...l21Tail].reverse(),
      less55: [l55Head, ...l55Tail].reverse(),
    }
  }

  return compound({
    compound: {
      less0: [newHead(reward, head), head, ...tail],
      less21: [newHead(minusPercent(20, reward), l21Head), l21Head, ...l21Tail],
      less55: [newHead(minusPercent(50, reward), l55Head), l55Head, ...l55Tail],
    },
    reward,
    days: days - 1,
  })
}
