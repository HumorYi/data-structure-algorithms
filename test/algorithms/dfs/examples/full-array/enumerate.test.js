import enumerate from '../../../../../algorithms/dfs/examples/full-array/enumerate'
import cases from './cases'

describe('enumerate-full-array', () => {
  cases.forEach((item, i) => {
    if (i === 0) {
      test(`${item.input} To ${item.output}`, () => {
        expect(enumerate(item.input)).toEqual(item.output)
      })
    }
  })
})
