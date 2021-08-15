export function getStoredState<S = any>(key: string): S | undefined {
  const extendedKey = `taskboard:${key}--${process.env.VERSION}`
  const serializedValue = localStorage.getItem(extendedKey)
  return serializedValue ? JSON.parse(serializedValue) as S : undefined
} 
