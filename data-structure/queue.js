/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 19:14:46
 * @Description: 队列：两个操作 enqueue / dequeue, FIFO
 *  一个头指针用来控制出队列，一个尾指针用来控制入队列
 *
 *  应用：
 *    用于实现缓冲区
 *    用于实现广度优先搜索
 *    实现优先级队列
 *    动画库
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 23:15:03
 * @LastEditorsDescription:
 */
class Queue {
  constructor(max) {
    this.data = new Array(max)
    this.max = max
    this.head = 0
    this.tail = 0
    this.size = 0
  }

  enqueue(val) {
    if (this.size === this.max) {
      throw 'overflow'
    }

    this.data[this.tail] = val
    this.tail = this.tail === this.max - 1 ? 0 : this.tail + 1
    this.size++
  }

  dequeue() {
    if (this.size === 0) {
      throw 'underflow'
    }

    const val = this.data[this.head]
    this.head = this.head === this.max - 1 ? 0 : this.head + 1
    this.size--

    return val
  }
}

module.exports = Queue