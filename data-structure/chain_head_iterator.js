/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 23:50:32
 * @Description: 链表：单向 / 双向，有一个头结点，始终指向最后一个节点，控制节点走向
 *  每个节点的下一个指针指向前一个节点，上一个指针指向后一个节点，
 *  每个节点如此相互指向，最终的结构向一条链，称之为链表
 *  应用：
 *    web浏览器历史管理
 *    低层内存管理
 *    实现哈希表
 *    文件系统
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-25 23:39:50
 * @LastEditorsDescription:
 */

require('./iterator')


class ChainNode {
  constructor(key) {
    this.key = key
    this.prev = null
    this.next = null
  }
}

class Chain {
  constructor() {
    this.head = null
  }

  /**
   * 创建链表节点的工程方法
   *
   * @static
   * @param {Any} key
   * @memberof Chain
   */
  static createNode (key) {
    return new ChainNode(key)
  }

  insert(node) {
    if (!(node.constructor === ChainNode && node instanceof ChainNode)) {
      throw new Error('请传入一个 ChainNode 节点，谢谢合作！')
    }

    if (this.head) {
      node.next = this.head
      this.head.prev = node
    }

    this.head = node
  }

  remove(node) {
    if (!(node.constructor === ChainNode && node instanceof ChainNode)) {
      throw new Error('请传入一个 ChainNode 节点，谢谢合作！')
    }

    const { prev, next } = node

    // 只有一个节点
    if (!prev && !next) {
      this.head = null
    }
    // 删除的是第一个节点
    else if (!next) {
      prev.next = null
    }
    // 删除的是最后一个节点
    else if (!prev) {
      next.prev = null
      this.head = next
    }
    // 删除的是中间节点
    else {
      prev.next = next
      next.prev = prev
    }

    node.prev = null
    node.next = null
  }

  search(key) {
    return this.transverse().find(node => node.key === key)
  }

  *transverse() {
    let p = this.head
    while (p) {
      yield p
      p = p.next
    }
  }
}

module.exports = Chain