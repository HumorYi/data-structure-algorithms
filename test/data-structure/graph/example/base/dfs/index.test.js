import side from '../../../../../../data-structure/graph/example/base/dfs'
import cases from './cases'

describe('dfs side example for graph', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(side(item.input.row, item.input.column, item.input.sides)).toEqual(item.output)
    })
  })
})
