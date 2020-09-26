import poker from '../../../../../data-structure/queue-stack/example/poker'
import cases from './cases'

describe('stack example for poker', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(poker(item.input.a, item.input.b)).toEqual(item.output)
    })
  })
})
