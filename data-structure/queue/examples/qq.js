/**
 * 题目：解密 QQ号
 *
 * 一串加密过的数字，解密规则：首先将第1个数删除，紧接着将第2个数放到这串数的末尾，
 *  再将第3个数删除并将第4个数放到这串数的末尾...，直到剩下最后一个数，将最后一个数也删除。
 *  按照刚才删除的顺序，把这些删除的数连在一起就是真实 QQ号。
 *
 * 例：
 *  加密 QQ号：[6, 3, 1, 7, 5, 8, 9, 2, 4]
 *  解密 QQ号：[6, 1, 5, 9, 4, 7, 2, 8, 3]
 */

export default function qq(arr) {
  let head = 0
  let tail = arr.length
  const data = arr.slice()
  const queue = []

  while (head < tail) {
    // 队首出队，入结果队
    queue.push(data[head])

    // 头指针往后移
    head++

    // 队首已到队尾
    data[tail] = data[head]

    // 队尾指针往后移
    tail++

    // 队首出队
    head++
  }

  return queue
}
