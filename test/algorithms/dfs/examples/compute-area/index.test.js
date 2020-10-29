import dfs from '../../../../../algorithms/dfs/examples/compute-area'
import cases from './cases'

describe('dfs-compute-area', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input.data, item.input.startX, item.input.startY)).toBe(item.output)
    })
  })
})
