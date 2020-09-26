/**
 * 题目：纸牌游戏 - 小猫钓鱼
 *
 *  游戏规则：
 *    将一副扑克牌平均分层两份，每人拿一份，A 先拿出手中的第一张扑克牌放在桌上，B 页拿出手中的第一张扑克牌，并放在 A 刚打出的扑克牌的上面，交替出牌。
 *    出牌时，如果一方打出的牌与桌上某张牌的牌面相同，即可将两张相同的牌及其中间所夹的牌全部取走，并依次放到自己手中牌的尾部。
 *    当任意一方手中的牌全部出完时，游戏结束，对手获胜。
 */

export default function poker(a, b) {
  const book = Array(Math.max.apply(null, a.concat(b)) + 1).fill(0)
  const stack = []
  const queueA = {
    data: a.slice(),
    head: 0,
    tail: a.length
  }
  const queueB = {
    data: b.slice(),
    head: 0,
    tail: b.length
  }

  while (queueA.head < queueA.tail && queueB.head < queueB.tail) {
    play(queueA, book, stack)

    if (queueA.head === queueA.tail) {
      break
    }

    play(queueB, book, stack)
  }

  const aOut = queueA.data.slice(queueA.head, queueA.tail)
  const bOut = queueB.data.slice(queueB.head, queueB.tail)

  const getDrew = isDrew(aOut, bOut)

  return {
    a: getDrew || getStatus(aOut),
    b: getDrew || getStatus(bOut),
    poker: {
      a: aOut,
      b: bOut,
      table: stack
    }
  }
}

function play(queue, book, stack) {
  let poker = queue.data[queue.head]
  let currStackPoker

  queue.head++

  if (book[poker] === 0) {
    stack.push(poker)

    book[poker] = 1
  } else {
    queue.data.push(poker)
    queue.tail++

    currStackPoker = stack.pop()

    while (currStackPoker && currStackPoker !== poker) {
      book[currStackPoker] = 0

      queue.data.push(currStackPoker)
      queue.tail++

      currStackPoker = stack.pop()
    }

    book[currStackPoker] = 0
    queue.data.push(currStackPoker)
    queue.tail++
  }
}

function isDrew(a, b) {
  return a.length === 0 && b.length === 0 ? 'drew' : ''
}

function getStatus(arr) {
  return arr.length === 0 ? 'lose' : 'win'
}
