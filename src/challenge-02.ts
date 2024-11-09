export function battleHorde(zombies: string, humans: string) {
  // Code here
  let accumulatedZombiePoints = 0
  let accumulatedHumanPoints = 0
  for (let i = 0; i < zombies.length; i++) {
    const zBattlePoints = Number(zombies[i]) + accumulatedZombiePoints
    const hBattlePoints = Number(humans[i]) + accumulatedHumanPoints
    const battleResult = Math.abs(zBattlePoints - hBattlePoints)
    accumulatedZombiePoints = 0
    accumulatedHumanPoints = 0
    if (zBattlePoints > hBattlePoints) {
      accumulatedZombiePoints += battleResult
    } else if (zBattlePoints < hBattlePoints) {
      accumulatedHumanPoints += battleResult
    }
  }
  if (accumulatedZombiePoints === accumulatedHumanPoints) return 'x'
  if (accumulatedZombiePoints > accumulatedHumanPoints) {
    return `${accumulatedZombiePoints}z`
  }
  return `${accumulatedHumanPoints}h`
}
