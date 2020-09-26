import qq from '../../../../../data-structure/queue/examples/qq'
import cases from './cases'

describe('queue example for qq', () => {
  cases.forEach(item => {
    test(`${item.input} To ${item.output}`, () => {
      expect(qq(item.input)).toEqual(item.output)
    })
  })
})
