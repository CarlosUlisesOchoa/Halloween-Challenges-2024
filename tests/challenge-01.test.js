const { createMagicPotion } = require('../src/challenge-01.js')

describe('createMagicPotion', () => {
  it('Test #01 - should return type array', () => {
    const result = createMagicPotion([13, 5, 6, 2], 8)
    expect(Array.isArray(result)).toBe(true)
  })

  it('Test #02 - createMagicPotion([13, 5, 6, 2], 8)', () => {
    expect(createMagicPotion([13, 5, 6, 2], 8)).toEqual([2, 3])
  })

  it('Test #03 - createMagicPotion([11, 3, 7, 5], 10)', () => {
    expect(createMagicPotion([11, 3, 7, 5], 10)).toEqual([1, 2])
  })

  it('Test #04 - createMagicPotion([4, 3, 2, 3, 4], 6)', () => {
    expect(createMagicPotion([4, 3, 2, 3, 4], 6)).toEqual([0, 2])
  })

  it('Test #05 - createMagicPotion([0, 0, -2, 3], 2)', () => {
    expect(createMagicPotion([0, 0, -2, 3], 2)).toBeUndefined()
  })

  it('Test #06 - createMagicPotion([10, 5, 2, 3, 7, 5], 10)', () => {
    expect(createMagicPotion([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 4])
  })

  it('Test #07 - createMagicPotion([1, 2, 3, 4, 5], 8)', () => {
    expect(createMagicPotion([1, 2, 3, 4, 5], 8)).toEqual([2, 4])
  })

  it('Test #08 - createMagicPotion([5, 1, 4, 6, 2], 9)', () => {
    expect(createMagicPotion([5, 1, 4, 6, 2], 9)).toEqual([0, 2])
  })

  it('Test #09 - createMagicPotion([1, -2, 3, -4, 5], -1)', () => {
    expect(createMagicPotion([1, -2, 3, -4, 5], -1)).toEqual([0, 1])
  })

  it('Test #10 - createMagicPotion([10, 20, 30, 40], 50)', () => {
    expect(createMagicPotion([10, 20, 30, 40], 50)).toEqual([1, 2])
  })

  it('Test #11 - createMagicPotion([], 10)', () => {
    expect(createMagicPotion([], 10)).toBeUndefined()
  })
})
