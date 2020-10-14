import olympiad from '../../../../../algorithms/dfs/examples/olympiad/enumerate'
import cases from './cases'

describe('enumerate-enumerate', () => {
  cases.forEach((item, i) => {
    test(`${item.output}`, () => {
      expect(olympiad()).toEqual(item.output)
    })
  })
})
