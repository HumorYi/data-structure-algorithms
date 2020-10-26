const isWall = (val, symbol = '#') => val === symbol
const isEnemy = (val, symbol = 'G') => val === symbol
const isSpace = (val, symbol = '.') => val === symbol

const computed = (data, axis, fn) => {
  let sum = 0

  while (!isWall(data[axis[0]][axis[1]])) {
    if (isEnemy(data[axis[0]][axis[1]])) {
      sum++
    }

    fn && fn(axis)
  }

  return sum
}

const getSum = (data, axis) => {
  // 统计可消灭敌人总数 => 上 + 下 + 左 + 右
  return (
    computed(data, axis.slice(), axis => axis[0]--) +
    computed(data, axis.slice(), axis => axis[0]++) +
    computed(data, axis.slice(), axis => axis[1]--) +
    computed(data, axis.slice(), axis => axis[1]++)
  )
}

export default (data, axis) => {
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

  let tx
  let ty
  let head = 0
  let tail = 0
  let sum = 0
  const result = {
    sum: getSum(data, axis),
    axis: []
  }

  const queue = []
  const books = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      queue.push({ x: j, y: i })
    }

    books.push(Array(column).fill(undefined))
  }

  queue[tail].x = axis[0]
  queue[tail].y = axis[1]
  tail++

  books[axis[0]][axis[1]] = true

  while (head < tail) {
    for (let i = 0; i < nextLen; i++) {
      tx = queue[head].x + next[i].row
      ty = queue[head].y + next[i].column

      // 越界
      if (tx < 0 || tx > rowLastIndex || ty < 0 || ty > columnLastIndex) {
        continue
      }

      if (isSpace(data[tx][ty]) && books[tx][ty] === undefined) {
        books[tx][ty] = true
        queue[tail].x = tx
        queue[tail].y = ty

        tail++

        sum = getSum(data, [tx, ty])

        if (sum > result.sum) {
          result.sum = sum
          result.axis = [tx, ty]
        }
      }
    }

    head++
  }

  return result
}
