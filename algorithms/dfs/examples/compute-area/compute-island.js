export default (data, startX, startY) => {
  // 由于接下来要直接操作 data 内数据，为了避免更改外部 data 数据，clone 一份出来操作
  data = JSON.parse(JSON.stringify(data))
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

  let tx
  let ty
  let sum = 0

  for (let i = 0; i < row; i++) {
    books.push(Array(column).fill(undefined))
  }

  function dfs(data, startX, startY, color) {
    data[startX][startY] = color

    for (let i = 0; i < nextLen; i++) {
      tx = startX + next[i].row
      ty = startY + next[i].column

      // 越界
      if (tx < 0 || tx > rowLastIndex || ty < 0 || ty > columnLastIndex) {
        continue
      }

      if (data[tx][ty] > 0 && books[tx][ty] === undefined) {
        books[tx][ty] = true
        dfs(data, tx, ty, color)
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (data[i][j] > 0) {
        sum--
        books[i][j] = true
        dfs(data, i, j, sum)
      }
    }
  }

  return { sum: -sum, data }
}
