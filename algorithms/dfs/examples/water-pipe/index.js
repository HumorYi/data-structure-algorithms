const pipe = {
  bend: {
    left: 1,
    top: 2,
    right: 3,
    bottom: 4
  },
  straight: {
    horizontal: 5,
    vertical: 6
  }
}

const water = {
  left: 1,
  top: 2,
  right: 3,
  bottom: 4
}

const isBendPipe = val => val >= pipe.bend.left && val <= pipe.bend.bottom
const isStraightPipe = val => val >= pipe.straight.horizontal && val <= pipe.straight.vertical

const isLeftWater = val => val === water.left
const isTopWater = val => val === water.top
const isRightWater = val => val === water.right
const isBottomWater = val => val === water.bottom

export default (data, pipeIn, pipeOut) => {
  const row = data.length
  const column = data[0].length
  const rowLastIndex = row - 1
  const columnLastIndex = column - 1

  const books = []
  const stack = []
  let top = 0
  let result = []
  let flag = false

  for (let i = 0; i < row; i++) {
    books.push(Array(column).fill(undefined))
  }

  function dfs(data, x, y, pipeIn, pipeOut) {
    if (flag) {
      return
    }

    // 到达终点
    if (x === rowLastIndex && y === columnLastIndex + 1) {
      flag = true
      result = stack.slice(0, top)
      return
    }

    // 下标越界
    if (x < 0 || x > rowLastIndex || y < 0 || y > columnLastIndex) {
      return
    }

    // 已使用过该坐标管道
    if (books[x][y]) {
      return
    }

    books[x][y] = true

    stack[top] = { x, y }
    top++

    const val = data[x][y]

    if (isStraightPipe(val)) {
      if (isLeftWater(pipeIn)) {
        dfs(data, x, y + 1, water.left)
      } else if (isTopWater(pipeIn)) {
        dfs(data, x + 1, y, water.top)
      } else if (isRightWater(pipeIn)) {
        dfs(data, x, y - 1, water.right)
      } else if (isBottomWater(pipeIn)) {
        dfs(data, x - 1, y, water.bottom)
      }
    } else if (isBendPipe(val)) {
      if (isLeftWater(pipeIn)) {
        dfs(data, x + 1, y, water.top)
        dfs(data, x - 1, y, water.bottom)
      } else if (isTopWater(pipeIn)) {
        dfs(data, x, y + 1, water.left)
        dfs(data, x, y - 1, water.right)
      } else if (isRightWater(pipeIn)) {
        dfs(data, x + 1, y, water.top)
        dfs(data, x - 1, y, water.bottom)
      } else if (isBottomWater(pipeIn)) {
        dfs(data, x, y + 1, water.left)
        dfs(data, x, y - 1, water.right)
      }
    }

    books[x][y] = undefined
    top--
  }

  dfs(data, 0, 0, pipeIn, pipeOut)

  return result
}
