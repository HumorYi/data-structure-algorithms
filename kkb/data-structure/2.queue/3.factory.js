!(function () {
  class Node {
    constructor(val, next = null, pre = null) {
      this.val = val
      this.next = next
      this.pre = pre
    }

    insertPre(p) {
      p.pre = this.pre
      p.next = this
      this.pre && (this.pre.next = p)
      this.pre = p
    }

    insertNext(p) {
      p.pre = this
      p.next = this.next
      this.next && (this.next.pre = p)
      this.next = p
    }

    deletePre() {
      if (this.pre === null) {
        return
      }

      this.pre = this.pre.pre
      this.pre && (this.pre.next = this)
    }

    deleteNext() {
      if (this.next === null) {
        return
      }

      this.next = this.next.next
      this.next && (this.next.pre = this)
    }
  }

  class Queue {
    constructor() {
      this.cnt = 0

      this.head = new Node()
      this.tail = new Node()

      this.head.pre = null
      this.head.next = this.tail

      this.tail.pre = this.head
      this.tail.next = null
    }

    pushFront(val) {
      this.head.insertNext(new Node(val))
      this.cnt++
    }

    pushBack(val) {
      this.tail.insertPre(new Node(val))
      this.cnt++
    }

    popFront() {
      if (this.isEmpty()) {
        return -1
      }

      const val = this.head.next.val

      this.head.deleteNext()
      this.cnt--

      return val
    }

    popBack() {
      if (this.isEmpty()) {
        return -1
      }

      const val = this.tail.pre.val

      this.tail.deletePre()
      this.cnt--

      return val
    }

    getFront() {
      return this.head.next.val
    }

    getBack() {
      return this.tail.pre.val
    }

    isEmpty() {
      return this.head.next === this.tail
    }

    size() {
      return this.cnt
    }
  }
})()
