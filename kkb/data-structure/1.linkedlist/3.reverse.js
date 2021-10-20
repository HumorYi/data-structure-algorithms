!(function () {
  class Node {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  }

  // 翻转前 n 个节点
  function reverseN(head, n) {
    if (head === null || head.next === null || n === 1) {
      return head
    }

    let tail = head.next
    let p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head

    return p
  }

  // 翻转 left ～ right 区间内的节点
  function reverseBetween(head, left, right) {
    let emptyHead = new Node(0, head)
    let p = emptyHead
    let cnt = right - left + 1

    p.next = head

    while (--left) {
      p = p.next
    }

    p.next = reverseN(p.next, cnt)

    return emptyHead.next
  }

  const head = new Node(1)

  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)

  let p = reverseBetween(head, 1, 3)
  let link = ''
  while (p !== null) {
    link += p.val + '-->'

    p = p.next
  }

  console.log(link)
})()
