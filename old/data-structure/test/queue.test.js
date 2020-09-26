/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 19:18:21
 * @Description: 队列测试用例
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 20:10:41
 * @LastEditorsDescription:
 */
const { assert } = require('chai')
let Queue = null

if (process.env.Queue === 'stack_to_queue') {
  Queue = require('../stack_to_queue')
}
else {
  Queue = require('../queue')
}

describe('测试堆栈', () => {
  it('FIFO', () => {
    const queue = new Queue(1000)

    for (let i = 1; i <= 5; i++) {
      queue.enqueue(i)
    }

    for (let i = 1; i <= 5; i++) {
      assert.equal(queue.dequeue(), i)
    }
  })

  it('overflow', () => {
    const queue = new Queue(1000)
    let queue_error = null

    try {
      for (let i = 0; i < 1001; i++) {
        queue.enqueue(i)
      }
    } catch (error) {
      queue_error = error
    }

    assert.equal(queue_error, 'overflow')
  })

  it('underflow', () => {
    const queue = new Queue(1000)
    let queue_error = null

    try {
      queue.dequeue()
    } catch (error) {
      queue_error = error
    }

    assert.equal(queue_error, 'underflow')
  })

  it('performance', () => {
    const queue = new Queue(1000000)
    const start_time = new Date().getTime()

    for (let i = 0; i < 1000000; i++) {
      queue.enqueue(i)
    }

    const end_time = new Date().getTime()

    assert.equal(end_time - start_time < 50, true, 'performance low')
  })
})