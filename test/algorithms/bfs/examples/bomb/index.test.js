import bfs from '../../../../../algorithms/bfs/examples/bomb'
import cases from './cases'

describe('bfs-bomb', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(bfs(item.input.data, item.input.axis)).toEqual(item.output)
    })
  })
})
