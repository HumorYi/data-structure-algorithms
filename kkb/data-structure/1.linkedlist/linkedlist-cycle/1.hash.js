/**
 * hash 表判断方式：若有该节点值在 hash 表中出现，证明有环，无则没有。
 */

!(function () {
  class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }

  const nodes = [new Node(0), new Node(1), new Node(2), new Node(3), new Node(4)]
  const head = nodes[0]

  head.next = nodes[1]
  head.next.next = nodes[2]
  head.next.next.next = nodes[3]
  head.next.next.next.next = nodes[2]

  let p = head
  const map = new Map()

  while (p !== null) {
    if (map.has(p)) {
      console.log('exits')
      return
    }

    map.set(p, true)

    p = p.next
  }

  console.log('no exits')
})()
