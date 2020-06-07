/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 19:11:14
 * @Description: 堆栈测试用例
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 23:12:47
 * @LastEditorsDescription:
 */
const { assert  } = require('chai')
let Stack = null

if (process.env.Stack === 'queue_to_stack') {
  Stack = require('../queue_to_stack')
}
else {
  Stack = require('../stack')
}

describe('测试堆栈', () => {
  it('LIFO', () => {
    const stack = new Stack(1000)

    for (let i = 1; i <= 5; i++) {
      stack.push(i)
    }

    for (let i = 5; i <= 1; i--) {
      assert.equal(stack.pop(), i)
    }
  })

  it('overflow', () => {
    const stack = new Stack(1000)
    let stack_error = null

    try {
      for (let i = 0; i < 1001; i++) {
        stack.push(i)
      }
    } catch (error) {
      stack_error = error
    }

    assert.equal(stack_error, 'overflow')
  })

  it('underflow', () => {
    const stack = new Stack(1000)
    let stack_error = null

    try {
      stack.pop()
    } catch (error) {
      stack_error = error
    }

    assert.equal(stack_error, 'underflow')
  })

  it('performance', () => {
    const stack = new Stack(1000000)
    const start_time = new Date().getTime()

    for (let i = 0; i < 1000000; i++) {
      stack.push(i)
    }

    const end_time = new Date().getTime()

    assert.equal(end_time - start_time < 50, true, 'performance low')
  })
})