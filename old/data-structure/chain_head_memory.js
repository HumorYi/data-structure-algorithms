/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-26 23:30:40
 * @Description: 用链表管理内存
 *  在连续空间内构建一个链表，每个节点占用固定个数的内存空间（比如 3 个）。
 *  需要一个 free 链表去管理没有分配的内存。
 *
 *  free 链表类似一个 Stack。分配类似栈的 POP，回收类似栈的 PUSH
 *
 *  例如：插入一个 key=5 的链表节点后，头指针执行第一个位置。free指针指向第 3 个位置。
 *    前面三个位置代表插入的节点。用偏移量来描述节点的 next & prev。
 *    next 的偏移为 0，prev 的偏移为 2，key 的偏移为 1。
 *
 *    head = 0    free = 3
 *
 *    -------------------------------------------------------------------------
 *    |00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
 *    -------------------------------------------------------------------------
 *
 *                →→→→→→→           →→→→→→→           →→→→→→→
 *               ↑       ↓         ↑       ↓         ↑       ↓
 *               ↑       ↓         ↑       ↓         ↑       ↓
 *    -------------------------------------------------------------------------
 *    |空| 5|空| 6|  |  | 9|  |  |12|  |  |15|  |  |18|  |  |21|  |  |空|  |  |
 *    -------------------------------------------------------------------------
 *                        ↓       ↑         ↓       ↑         ↓       ↑
 *                        ↓       ↑         ↓       ↑         ↓       ↑
 *                         →→→→→→→           →→→→→→→           →→→→→→→
 *
 *    再插入一个节点 11，新节点占用了 03-05 的内存，free 指针前进一个节点，
 *    新节点的 next=0，prev=空
 *
 *    head = 3    free = 6
 *
 *    -------------------------------------------------------------------------
 *    |00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
 *    -------------------------------------------------------------------------
 *
 *             →→→→→→→              →→→→→→→           →→→→→→→
 *            ↑       ↓            ↑       ↓         ↑       ↓
 *            ↑       ↓            ↑       ↓         ↑       ↓
 *    -------------------------------------------------------------------------
 *    |空| 5| 3| 0|11|空| 9|  |  |12|  |  |15|  |  |18|  |  |21|  |  |空|  |  |
 *    -------------------------------------------------------------------------
 *     ↑         ↓        ↓       ↑         ↓       ↑         ↓       ↑
 *     ↑         ↓        ↓       ↑         ↓       ↑         ↓       ↑
 *      ←←←←←←←←←          →→→→→→→           →→→→→→→           →→→→→→→
 *
 *    删除一个节点（ 03-05 ），过程就是将需要删除节点的 next 指向 free（06），
 *    然后把 free 指向 03。然后 head 指向上一个节点 0。
 *
 *    head = 0    free = 3
 *
 *    -------------------------------------------------------------------------
 *    |00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
 *    -------------------------------------------------------------------------
 *
 *                 →→→→→→→          →→→→→→→           →→→→→→→
 *                ↑       ↓        ↑       ↓         ↑       ↓
 *                ↑       ↓        ↑       ↓         ↑       ↓
 *    -------------------------------------------------------------------------
 *    |空| 5|空| 6|11|空| 9|  |  |12|  |  |15|  |  |18|  |  |21|  |  |空|  |  |
 *    -------------------------------------------------------------------------
 *                       ↓       ↑         ↓       ↑         ↓       ↑
 *                       ↓       ↑         ↓       ↑         ↓       ↑
 *                        →→→→→→→           →→→→→→→           →→→→→→→
 *
 *    删除一个节点（ 00-02 ），过程就是将需要删除节点的 next 指向 free（06），
 *    然后把 free 指向 00。然后 head 不需要改变。
 *    注：此情况仅删除 00-02，上面删除 03-05 不相关
 *
 *    head = 3    free = 0
 *
 *    -------------------------------------------------------------------------
 *    |00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
 *    -------------------------------------------------------------------------
 *
 *        →→→→→→→→→→→→→→→           →→→→→→→           →→→→→→→
 *       ↑                ↓        ↑       ↓         ↑       ↓
 *       ↑                ↓        ↑       ↓         ↑       ↓
 *    -------------------------------------------------------------------------
 *    | 6| 5| 3|空|11|空| 9|  |  |12|  |  |15|  |  |18|  |  |21|  |  |空|  |  |
 *    -------------------------------------------------------------------------
 *                       ↓       ↑         ↓       ↑         ↓       ↑
 *                       ↓       ↑         ↓       ↑         ↓       ↑
 *                        →→→→→→→           →→→→→→→           →→→→→→→
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-26 23:36:35
 * @LastEditorsDescription:
 */

require('./iterator')
const chainNodeMallocSize = 3

/**
 * 用数组存储链表，同时保持数组和链表两者的特效
 * （内存的分配）
 */
class ArrayChain {
  constructor(max = 1000) {
    this.data = new Array(max * chainNodeMallocSize)
    this.head = null

    // 初始化 free 链表
    this.free = 0
    for (let i = 0; i < max; i++) {
      this.data[i * chainNodeMallocSize] = (i + 1) * chainNodeMallocSize
    }

    // free 链表最后一个节点的 next 指向 null
    this.data[(max - 1) * chainNodeMallocSize] = null
  }

  /**
   * @description: 分配内存
   * @return: {Number}
   */
  malloc() {
    if (this.free === null) {
      throw 'out of memory'
    }

    const x = this.free

    // 相当于 free 链表的第一个被删除了，用来存储 x
    this.free = this.data[x]
    return x
  }

  /**
   * 内存回收
   */
  mfree(addr) {
    this.data[addr] = this.free
    this.free = addr
  }

  insert(key) {
    const addr = this.malloc()
    // node.next = head
    this.data[addr] = this.head
    // node.prev = null
    this.data[addr + 2] = null
    this.data[addr + 1] = key

    if (this.head !== null) {
      this.data[this.head + 2] = addr
    }

    this.head = addr
  }

  delete(addr) {
    addr *= chainNodeMallocSize
    const next = this.data[addr]
    const prev = this.data[addr + 2]

    if (prev !== null) {
      this.data[prev] = next
    }

    if (next !== null) {
      this.data[next + 2] = prev
    }

    this.mfree(addr)
  }

  search(key) {
    return this.transverse().find(k => k === key)
  }

  *transverse() {
    let point = this.head

    while (point !== null) {
      // 取指针的数据
      yield this.data[point + 1]
      // 将指针重置为该指针的 next
      point = this.data[point]
    }
  }
}

module.exports = ArrayChain