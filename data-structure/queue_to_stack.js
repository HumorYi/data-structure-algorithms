/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 22:13:07
 * @Description: 队列转堆栈
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 23:16:46
 * @LastEditorsDescription:
 */
const Queue = require('./queue')

class Stack {
  constructor(max) {
    this.queue = new Queue(max)
  }

  push(val) {
    this.queue.enqueue(val)
  }

  pop() {
    const size = this.queue.size

    if (!size) {
      return this.queue.dequeue()
    }

    const tail = this.queue.tail

    // 把尾指针指向前一个
    tail = tail === 0 ? size - 1 : tail - 1

    this.queue.head = tail
    this.queue.tail = tail

    const val = this.queue.dequeue()

    return val
  }

  size() {
    return this.queue.size
  }
}

module.exports = Stack