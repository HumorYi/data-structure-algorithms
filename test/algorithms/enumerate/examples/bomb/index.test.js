import bomb from '../../../../../algorithms/enumerate/examples/bomb'
import cases from './cases'

describe('enumerate-bomb', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(bomb(item.input)).toEqual(item.output)
    })
  })
})
