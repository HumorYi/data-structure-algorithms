import dfs from '../../../../../../algorithms/dfs/examples/compute-area/compute-island'
import cases from './cases'

describe('dfs-compute-area-by-compute-island', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input.data, item.input.startX, item.input.startY)).toEqual(item.output)
    })
  })
})
