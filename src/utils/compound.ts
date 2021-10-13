type CompoundProps = {
  compound: number[]
  reward: number
  desired: number
}

export function compound({
  compound: [head, ...tail],
  reward,
  desired,
}: CompoundProps): number[] {
  if (!reward || !head || !desired) {
    return []
  }

  if (head >= desired) {
    return [head, ...tail].reverse()
  }

  return compound({
    compound: [(head / 100) * reward + head, head, ...tail],
    reward,
    desired,
  })
}
