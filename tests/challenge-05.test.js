const { escapePyramidHead } = require('../src/challenge-05.js')

describe('escapePyramidHead', () => {
  it('Test #01 - should return type number', () => {
    const result = escapePyramidHead([
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#'],
    ])
    expect(typeof result).toBe('number')
  })

  it("Test #02 - escapePyramidHead([['T', '.', '#', '.'], ['.', '.', '.', '.'], ['▲', '.', '.', '#'], ['.', '#', '#', '#']])", () => {
    expect(
      escapePyramidHead([
        ['T', '.', '#', '.'],
        ['.', '.', '.', '.'],
        ['▲', '.', '.', '#'],
        ['.', '#', '#', '#'],
      ])
    ).toBe(2)
  })

  it("Test #03 - escapePyramidHead([['.', '.', '#', '.', '▲'], ['#', '.', '#', '.', '#'], ['.', '.', '.', '.', '.'], ['#', '#', '#', '.', '#'], ['T', '.', '.', '.', '.']])", () => {
    expect(
      escapePyramidHead([
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
      ])
    ).toBe(8)
  })

  it("Test #04 - escapePyramidHead([['#', '#', '#'], ['▲', '.', '#'], ['.', '#', 'T']])", () => {
    expect(
      escapePyramidHead([
        ['#', '#', '#'],
        ['▲', '.', '#'],
        ['.', '#', 'T'],
      ])
    ).toBe(-1)
  })

  it("Test #05 - escapePyramidHead([['#', '#'], ['▲', 'T']])", () => {
    expect(
      escapePyramidHead([
        ['#', '#'],
        ['▲', 'T'],
      ])
    ).toBe(1)
  })

  it("Test #06 - escapePyramidHead([['.', '.', '.'], ['T', '▲', '.'], ['.', '.', '.']])", () => {
    expect(
      escapePyramidHead([
        ['.', '.', '.'],
        ['T', '▲', '.'],
        ['.', '.', '.'],
      ])
    ).toBe(1)
  })
})
