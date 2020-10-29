import bfs from '../../../../../algorithms/bfs/examples/compute-area'
import cases from './cases'

describe('bfs-compute-area', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(bfs(item.input.data, item.input.startX, item.input.startY)).toBe(item.output)
    })
  })
})
