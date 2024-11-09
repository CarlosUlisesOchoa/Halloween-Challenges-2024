type Potions = number[]
type Target = number
type CreateMagicPotionResult = number[] | undefined

export function createMagicPotion(potions: Potions, target: Target): CreateMagicPotionResult {
  // Code here
  if (!potions || potions.length < 2) {
    return undefined
  }
  const map = new Map<number, number>()

  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i]

    if (map.has(complement)) {
      // If the complement exists, return the indices in the order they appear
      return [map.get(complement)!, i]
    }

    // Store the current potion and its index in the map
    map.set(potions[i], i)
  }

  return undefined
}
