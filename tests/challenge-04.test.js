const { findTheKiller } = require('../src/challenge-04.js')

describe('findTheKiller', () => {
  it('Test #01 - should return type string', () => {
    const result = findTheKiller('d~~~~~a', [
      'Dracula',
      'Freddy Krueger',
      'Jason Voorhees',
      'Michael Myers',
    ])
    expect(typeof result).toBe('string')
  })

  it('Test #02 - findTheKiller("d~~~~~a", ["Dracula", "Freddy Krueger", "Jason Voorhees", "Michael Myers"])', () => {
    expect(
      findTheKiller('d~~~~~a', [
        'Dracula',
        'Freddy Krueger',
        'Jason Voorhees',
        'Michael Myers',
      ])
    ).toBe('Dracula')
  })

  it('Test #03 - findTheKiller("~r~dd~", ["Freddy", "Freddier", "Fredderic"])', () => {
    expect(findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic'])).toBe(
      'Freddy,Freddier,Fredderic'
    )
  })

  it('Test #04 - findTheKiller("~r~dd$", ["Freddy", "Freddier", "Fredderic"])', () => {
    expect(findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic'])).toBe('')
  })

  it('Test #05 - findTheKiller("mi~~def", ["Midudev", "Midu", "Madeval"])', () => {
    expect(findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval'])).toBe('')
  })

  it('Test #06 - findTheKiller("~~~~~~", ["Pennywise", "Leatherface", "Agatha"])', () => {
    expect(findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha'])).toBe(
      'Pennywise,Leatherface,Agatha'
    )
  })

  it('Test #07 - findTheKiller("~~~~~~$", ["Pennywise", "Leatherface", "Agatha"])', () => {
    expect(findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'])).toBe('Agatha')
  })

  it('Test #08 - findTheKiller("s~v~r~", ["Severus Snape", "Sirius Black", "Salazar Slytherin"])', () => {
    expect(
      findTheKiller('s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin'])
    ).toBe('Severus Snape')
  })

  it('Test #09 - findTheKiller("~~~~~y$", ["Chucky", "Tiffany", "Freddy", "Mickey"])', () => {
    expect(findTheKiller('~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey'])).toBe(
      'Chucky,Freddy,Mickey'
    )
  })
})
