export interface FontProviderProps {
  initialFont?: string
}

export interface FontContextBag {
  font: string
  setFont: (font: string) => void
}