const { battleHorde } = require('../src/challenge-02.js')

describe('battleHorde', () => {
  it('Test #01 - should return type string', () => {
    const result = battleHorde('242', '334')
    expect(typeof result).toBe('string')
  })

  it('Test #02 - battleHorde("242", "334")', () => {
    expect(battleHorde('242', '334')).toEqual('2h')
  })

  it('Test #03 - battleHorde("444", "282")', () => {
    expect(battleHorde('444', '282')).toEqual('x')
  })

  it('Test #04 - battleHorde("555", "666")', () => {
    expect(battleHorde('555', '666')).toEqual('3h')
  })

  it('Test #05 - battleHorde("321", "123")', () => {
    expect(battleHorde('321', '123')).toEqual('x')
  })

  it('Test #06 - battleHorde("4598", "7682")', () => {
    expect(battleHorde('4598', '7682')).toEqual('3z')
  })

  it('Test #07 - battleHorde("8989898999", "7779998811")', () => {
    expect(battleHorde('8989898999', '7779998811')).toEqual('20z')
  })

  it('Test #08 - battleHorde("57685849323", "98765438965")', () => {
    expect(battleHorde('57685849323', '98765438965')).toEqual('10h')
  })
})
