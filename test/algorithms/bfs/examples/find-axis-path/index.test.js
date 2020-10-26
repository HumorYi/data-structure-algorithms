import dfs from '../../../../../algorithms/bfs/examples/find-axis-path'
import cases from './cases'

describe('dfs-full-array', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(
        dfs(item.input.data, item.input.startX, item.input.startY, item.input.targetX, item.input.targetY)
      ).toEqual(item.output)
    })
  })
})
