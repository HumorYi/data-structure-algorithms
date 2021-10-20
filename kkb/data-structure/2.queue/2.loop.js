!(function () {
  class Queue {
    constructor(k) {
      this.head = this.tail = this.cnt = 0
      this.size = k
      this.data = new Array(k)
    }

    enQueue(val) {
      if (this.isFull()) {
        return false
      }

      this.cnt++
      this.data[this.tail] = val
      this.tail = (this.tail + 1) % this.data.length

      return true
    }

    deQueue() {
      if (this.isEmpty()) {
        return false
      }

      this.cnt--
      this.data[this.head] = undefined
      this.head = (this.head + 1) % this.data.length

      return true
    }

    isFull() {
      return this.cnt === this.size
    }

    isEmpty() {
      return this.cnt === 0
    }

    Front() {
      return this.isEmpty() ? -1 : this.data[this.head]
    }

    Rear() {
      return this.isEmpty() ? -1 : this.data[(this.tail - 1 + this.data.length) % this.data.length]
    }

    Clear() {
      this.head = this.tail = this.cnt = 0
    }

    Output() {
      var print = ''
      var len = this.data.length

      for (var i = 0, j = this.head; i < this.cnt; i++) {
        print += this.data[j] + ' '

        j = (j + 1) % len
      }

      console.log(print)
    }
  }

  var q = new Queue(5)

  q.enQueue(1)
  q.Output()
  q.enQueue(2)
  q.Output()
  q.enQueue(3)
  q.Output()
  q.enQueue(4)
  q.Output()
  q.enQueue(5)
  q.Output()
  q.deQueue()
  q.Output()
  q.enQueue(6)
  q.Output()
})()
