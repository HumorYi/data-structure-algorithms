import dfs from '../../../../../../algorithms/dfs/examples/compute-area/fill-color'
import cases from './cases'

describe('dfs-compute-area-by-fill-color', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input.data, item.input.startX, item.input.startY, item.input.color)).toEqual(item.output)
    })
  })
})
