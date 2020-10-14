import dfs from '../../../../../algorithms/dfs/examples/full-array/dfs'
import cases from './cases'

describe('dfs-full-array', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input)).toEqual(item.output)
    })
  })
})
