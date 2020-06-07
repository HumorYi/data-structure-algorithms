/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-22 23:50:32
 * @Description: 链表：单向 / 双向，有一个尾结点，始终指向最后一个节点，控制节点走向
 *  每个节点的下一个指针指向后一个节点，上一个指针指向前一个节点，
 *  每个节点如此相互指向，最终的结构向一条链，称之为链表
 *  应用：
 *    web浏览器历史管理
 *    低层内存管理
 *    实现哈希表
 *    文件系统
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-25 23:08:28
 * @LastEditorsDescription:
 */
class ChainNode {
  constructor(key) {
    this.key = key
    this.prev = null
    this.next = null
  }
}

class Chain {
  constructor() {
    this.tail = null
  }

  insert(node) {
    if (!(node.constructor === ChainNode && node instanceof ChainNode)) {
      throw new Error('请传入一个 ChainNode 节点，谢谢合作！')
    }

    if (this.tail) {
      this.tail.next = node
      node.prev = this.tail
    }

    this.tail = node
  }

  delete(node) {
    if (!(node.constructor === ChainNode && node instanceof ChainNode)) {
      throw new Error('请传入一个 ChainNode 节点，谢谢合作！')
    }

    const { prev, next } = node

    // 只有一个节点
    if (!prev && !next) {
      this.tail = null
    }
    // 删除的是第一个节点
    else if (!prev) {
      next.prev = null
    }
    // 删除的是最后一个节点
    else if (!next) {
      prev.next = null
      this.tail = prev
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
    let node = this.tail

    while (node && node.key !== key) {
      node = node.prev
    }

    return node
  }
}

module.exports = {
  Chain,
  ChainNode
}