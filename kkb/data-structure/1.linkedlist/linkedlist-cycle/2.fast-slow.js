/**
 * 快慢指针 判断方式：快指针走两步，满指针走一步，若有环，则快指针会追上慢指针，快慢指针指向同一节点，否则无环
 */

!(function () {
  class Node {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  }

  const nodes = [new Node(0), new Node(1), new Node(2), new Node(3), new Node(4)]
  const head = nodes[0]

  head.next = nodes[1]
  head.next.next = nodes[2]
  head.next.next.next = nodes[3]
  head.next.next.next.next = nodes[2]

  // 慢指针
  let p = head
  // 快指针
  let q = head.next

  while (q && q.next && p !== q) {
    p = p.next
    q = q.next.next
  }

  console.log(Boolean(q && q.next))
})()
