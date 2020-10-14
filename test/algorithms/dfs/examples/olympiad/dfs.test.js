import dfs from '../../../../../algorithms/dfs/examples/olympiad/dfs'
import cases from './cases'

describe('dfs-olympiad', () => {
  cases.forEach((item, i) => {
    test(`${item.output}`, () => {
      expect(dfs()).toEqual(item.output)
    })
  })
})
