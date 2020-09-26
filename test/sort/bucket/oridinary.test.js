import ordinaryBubbleSort from '../../../algorithms/sort/bubble/ordinary'
import cases from '../cases'

describe('ordinaryBubbleSort', () => {
  cases.forEach(item => {
    test(`asc ${item.input} To ${item.output.asc}`, () => {
      expect(ordinaryBubbleSort(item.input)).toEqual(item.output.asc)
    })
    test(`desc ${item.input} To ${item.output.desc}`, () => {
      expect(ordinaryBubbleSort(item.input, false)).toEqual(item.output.desc)
    })
  })
})
