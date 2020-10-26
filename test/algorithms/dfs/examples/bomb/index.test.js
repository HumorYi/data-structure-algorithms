import dfs from '../../../../../algorithms/dfs/examples/bomb'
import cases from './cases'

describe('dfs-bomb', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input.data, item.input.axis)).toEqual(item.output)
    })
  })
})
