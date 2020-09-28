/**
 * 题目：插值
 *
 * 给定一个已经从小到大排好序以逗号分隔的字符串，随意插入一个数，要求插入的数在新生成的字符串中仍符合从小到大排列
 *
 * 例：
 *  字符串：'2,3,5,8,9,10,18,26,32'
 *  插入值：6
 *  新字符串：'2,3,5,6,8,9,10,18,26,32'
 *
 * 数据结构：
 *  数组：[2, 3, 5, 6, 8, 9, 10, 18, 26, 32] => 8, 9, 10, 18, 26, 32 挨个往后挪一位才能插入6
 *  链表（推荐）：2.next => 3.next=> 5.next => 6.next => 8... 不需要挪位，只需要改变一下 next 指针即可
 */

class Node {
  constructor(data, next = undefined) {
    this.data = data
    this.next = next
  }
}

// 指针方式
export default function interpolation(str, data) {
  if (!str.trim()) {
    return str
  }

  const list = str.split(',')
  const isHead = data <= Number(list[0])
  let head = new Node(isHead ? data : list.shift())
  let curr = head
  let prev = head
  let res = ''
  let node

  list.forEach(item => {
    node = new Node(Number(item))
    curr.next = node
    curr = node
  })

  curr = head

  if (!isHead) {
    while (curr) {
      if (curr.data > data) {
        node = new Node(data)
        prev.next = node
        node.next = curr

        break
      }

      prev = curr
      curr = curr.next
    }
  }

  if (!curr && data >= prev.data) {
    prev.next = new Node(data)
  }

  curr = head

  while (curr) {
    res += ',' + curr.data
    curr = curr.next
  }

  return res.slice(1)
}

// 数组模拟
/* export default function interpolation(str, data) {
  if (!str.trim()) {
    return str
  }

  const list = str.split(',')
  let listLen = list.length
  const isHead = data <= Number(list[0])
  const isTail = data >= Number(list[listLen - 1])

  if (isHead) {
    list.unshift(data)
  } else if (isTail) {
    list.push(data)
  }

  const next = list.slice(0, -1).map((item, i) => i + 1)

  next.push(0)

  if (!isHead && !isTail) {
    list.push(data)
    listLen++

    for (let i = 0; i < listLen; i++) {
      if (Number(list[i]) > data) {
        next[i - 1] = listLen - 1
        next.push(i)
        break
      }
    }
  }

  let res = list[0]
  let listIndex = 1
  while (listIndex !== 0) {
    res += ',' + list[listIndex]
    listIndex = next[listIndex]
  }

  return res
} */
