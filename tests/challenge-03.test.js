const { findSafestPath } = require('../src/challenge-03.js')

describe('findSafestPath', () => {
  it('Test #01 - should return type number', () => {
    const result = findSafestPath([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
    expect(typeof result).toBe('number')
  })

  it('Test #02 - findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])', () => {
    expect(
      findSafestPath([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ])
    ).toBe(7)
  })

  it('Test #03 - findSafestPath([[5, 9], [4, 2]])', () => {
    expect(
      findSafestPath([
        [5, 9],
        [4, 2],
      ])
    ).toBe(11)
  })

  it('Test #04 - findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]])', () => {
    expect(
      findSafestPath([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ])
    ).toBe(5)
  })

  it('Test #05 - findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]])', () => {
    expect(
      findSafestPath([
        [1, 2, 3],
        [3, 2, 1],
        [4, 4, 4],
      ])
    ).toBe(10)
  })

  it('Test #06 - findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]])', () => {
    expect(
      findSafestPath([
        [1, 2],
        [3, 4],
        [6, 5],
        [7, 8],
      ])
    ).toBe(20)
  })

  it('Test #07 - findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
    expect(
      findSafestPath([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toBe(21)
  })
})
