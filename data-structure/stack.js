/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 19:00:56
 * @Description: 堆栈：两个操作 push / pop ，LIFO
 *  通过一个指针指向栈顶，每当 push / pop 时，更改栈顶指针
 *    如果 push 超出了栈的空间，则 overflow
 *    如果 pop 不在栈的空间内，则 underflow
 *
 *  应用：
 *    程序的递归
 *    graham 扫描寻找凸图型
 *    搜索单调矩阵
 *    聚类分析中最邻近分类算法(KNN)
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 19:46:42
 * @LastEditorsDescription:
 */

class Stack {
  constructor(max) {
    this.data = new Array(max)
    this.max = max
    this.top = -1
  }

  push(val) {
    if (this.top === this.max - 1) {
      throw 'overflow'
    }

    this.data[++this.top] = val
  }

  pop() {
    if (this.top === -1) {
      throw 'underflow'
    }

    return this.data[this.top--]
  }

  size() {
    return this.top + 1
  }
}

module.exports = Stack
