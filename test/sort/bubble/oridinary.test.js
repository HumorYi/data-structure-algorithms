import ordinaryBucketSort from '../../../algorithms/sort/bucket/ordinary'
import cases from '../cases'

describe('ordinaryBucketSort', () => {
  cases.forEach(item => {
    test(`asc ${item.input} To ${item.output.asc}`, () => {
      expect(ordinaryBucketSort(item.input)).toEqual(item.output.asc)
    })
    test(`desc ${item.input} To ${item.output.desc}`, () => {
      expect(ordinaryBucketSort(item.input, false)).toEqual(item.output.desc)
    })
  })
})
