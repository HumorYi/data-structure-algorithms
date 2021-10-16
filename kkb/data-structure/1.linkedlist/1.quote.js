!(function () {
  class Node {
    constructor(data, next = null) {
      this.data = data
      this.next = next
    }
  }

  const head = new Node(1)

  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)

  let p = head
  let link = ''
  while (p !== null) {
    link += p.data + '-->'

    p = p.next
  }

  console.log(link)
})()
