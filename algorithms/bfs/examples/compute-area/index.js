class Note {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

export default (data, startX, startY) => {
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
  let head = 0
  let tail = 0

  let tx
  let ty
  let sum = 1

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      queue.push(new Note())
    }

    books.push(Array(column).fill(undefined))
  }

  books[startX][startY] = true

  queue[tail].x = startX
  queue[tail].y = startY

  tail++

  while (head < tail) {
    for (let i = 0; i < nextLen; i++) {
      tx = queue[head].x + next[i].row
      ty = queue[head].y + next[i].column

      // 越界
      if (tx < 0 || tx > rowLastIndex || ty < 0 || ty > columnLastIndex) {
        continue
      }

      if (data[tx][ty] > 0 && books[tx][ty] === undefined) {
        books[tx][ty] = true
        queue[tail].x = tx
        queue[tail].y = ty

        sum++
        tail++
      }
    }

    head++
  }

  return sum
}
