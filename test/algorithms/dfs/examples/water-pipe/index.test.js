import dfs from '../../../../../algorithms/dfs/examples/water-pipe'
import cases from './cases'

describe('dfs-water-pipe', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(dfs(item.input.data, item.input.pipeIn, item.input.pipeOut)).toEqual(item.output)
    })
  })
})
