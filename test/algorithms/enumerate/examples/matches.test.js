import matches from '../../../../algorithms/enumerate/examples/matches'
import cases from './cases'

describe('matches', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(matches(item.input)).toEqual(item.output)
    })
  })
})
