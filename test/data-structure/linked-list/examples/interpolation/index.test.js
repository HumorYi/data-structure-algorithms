import interpolation from '../../../../../data-structure/linked-list/examples/interpolation'
import cases from './cases'

describe('linked list example for interpolation', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(interpolation(item.input.str, item.input.data)).toBe(item.output)
    })
  })
})
