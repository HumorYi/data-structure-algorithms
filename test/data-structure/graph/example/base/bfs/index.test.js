import side from '../../../../../../data-structure/graph/example/base/bfs'
import cases from './cases'

describe('bfs side example for graph', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(side(item.input.row, item.input.column, item.input.sides)).toEqual(item.output)
    })
  })
})
