/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 20:03:07
 * @Description: 堆栈 转 队列
 *  实现思路：使用两个栈，一个栈入队（栈顶指针即队列头指针），一个栈出队（栈顶指针即队列尾指针）
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 22:35:26
 * @LastEditorsDescription:
 */

const Stack = require('./stack')

class Queue {
  constructor(max) {
    this.stack_head = new Stack(max)
    this.stack_end = new Stack(max)
  }

  enqueue(val) {
    this.stack_head.push(val)
  }

  dequeue() {
    if (this.stack_end.size()) {
      return this.stack_end.pop()
    }

    while (this.stack_head.size()) {
      this.stack_end.push(this.stack_head.pop())
    }

    return this.stack_end.pop()
  }

  size() {
    return this.stack_head.size() + this.stack_end.size()
  }
}

module.exports = Queue