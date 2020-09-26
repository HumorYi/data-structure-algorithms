import palindrome from '../../../../../data-structure/stack/examples/palindrome'
import cases from './cases'

describe('stack example for palindrome', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(palindrome(item.input)).toBe(item.output)
    })
  })
})
