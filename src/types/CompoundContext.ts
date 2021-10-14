export type Compound = {
  less0: number[]
  less21: number[]
  less55: number[]
}

export type CompoundContextType = {
  compound: Compound
  setCompound: React.Dispatch<
    React.SetStateAction<Compound>
  >
}
