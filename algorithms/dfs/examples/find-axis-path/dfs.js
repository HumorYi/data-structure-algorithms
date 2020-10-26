export default (data, startX, startY, targetX, targetY) => {
  const row = data.length
  const column = data[0].length
  const rowLastIndex = row - 1
  const columnLastIndex = column - 1

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

  const books = []
  const result = {
    min: -1,
    data: []
  }

  for (let i = 0; i < row; i++) {
    books.push(Array(column).fill(undefined))
  }

  books[startX][startY] = true

  return (function dfs(data, startX, startY, targetX, targetY, step = 0) {
    // 找到目标
    if (startX === targetX && startY === targetY) {
      if (result.min === -1 || step < result.min) {
        result.min = step
        result.data = books.map(book => book.map(item => item))
      }

      return
    }

    let tx
    let ty

    for (let i = 0; i < nextLen; i++) {
      tx = startX + next[i].row
      ty = startY + next[i].column

      // 越界
      if (tx < 0 || tx > rowLastIndex || ty < 0 || ty > columnLastIndex) {
        continue
      }

      if (data[tx][ty] === 0 && books[tx][ty] === undefined) {
        books[tx][ty] = true
        dfs(data, tx, ty, targetX, targetY, step + 1)
        books[tx][ty] = undefined
      }
    }

    return result
  })(data, startX, startY, targetX, targetY)
}
