class Note {
  constructor(x, y, father, step = 0) {
    this.x = x
    this.y = y
    this.father = father
    this.step = step
  }
}

export default (data, startX, startY, targetX, targetY) => {
  const row = data.length
  const column = data[0].length
  const rowLastIndex = row - 1
  const columnLastIndex = row - 1

  // 约定按顺时针方向走
  const next = [
    // 右
    {
      row: 0,
      column: 1
    },
    // 下
    {
      row: 1,
      column: 0
    },
    // 左
    {
      row: 0,
      column: -1
    },
    // 上
    {
      row: -1,
      column: 0
    }
  ]
  const nextLen = next.length

  const queue = []
  const books = []
  let headQueue = null
  let tailQueue = null
  let head = 0
  let tail = 0

  let tx
  let ty
  const result = {
    min: -1,
    data: []
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      queue.push(new Note())
    }

    books.push(Array(column).fill(undefined))
    result.data.push(Array(column).fill(undefined))
  }

  books[startX][startY] = true
  result.data[startX][startY] = true

  headQueue = queue[head]
  tailQueue = queue[tail]

  tailQueue.x = startX
  tailQueue.y = startY
  tailQueue.father = 0
  tailQueue.step = 0

  tail++

  while (head < tail) {
    for (let i = 0; i < nextLen; i++) {
      headQueue = queue[head]

      tx = headQueue.x + next[i].row
      ty = headQueue.y + next[i].column

      // 越界
      if (tx < 0 || tx > rowLastIndex || ty < 0 || ty > columnLastIndex) {
        continue
      }

      if (data[tx][ty] === 0 && books[tx][ty] === undefined) {
        books[tx][ty] = true
        tailQueue = queue[tail]

        tailQueue.x = tx
        tailQueue.y = ty
        tailQueue.step = headQueue.step + 1
        tailQueue.father = head

        tail++
      }

      // 找到目标
      if (tx === targetX && ty === targetY) {
        result.min = tailQueue.step

        while (!(tailQueue.father === 0 && tailQueue.step === 0)) {
          result.data[tailQueue.x][tailQueue.y] = true
          tailQueue = queue[tailQueue.father]
        }

        return result
      }
    }

    head++
  }
  console.log('result', result)
  return result
}
