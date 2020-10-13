import fastSort from '../../../../algorithms/sort/fast/ordinary'
import cases from '../cases'

describe('fastSort', () => {
  cases.forEach(item => {
    test(`asc ${item.input} To ${item.output.asc}`, () => {
      expect(fastSort(item.input)).toEqual(item.output.asc)
    })
    test(`desc ${item.input} To ${item.output.desc}`, () => {
      expect(fastSort(item.input, false)).toEqual(item.output.desc)
    })
  })
})
