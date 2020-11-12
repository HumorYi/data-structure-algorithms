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

  function dfs(data, x, y, pipeIn, currentPipeOut) {
    if (flag) {
      return
    }
    //  && currentPipeOut === pipeOut
    // 到达终点
    if (
      ((x === rowLastIndex && y === columnLastIndex + 1) || (x === rowLastIndex + 1 && y === columnLastIndex)) &&
      currentPipeOut === pipeOut
    ) {
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
      let nextX, nextY, nextPipeIn, nextPipeOut

      if (isLeftWater(pipeIn)) {
        nextX = x
        nextY = y + 1
        nextPipeIn = water.left
        nextPipeOut = water.right
      } else if (isTopWater(pipeIn)) {
        nextX = x + 1
        nextY = y
        nextPipeIn = water.top
        nextPipeOut = water.bottom
      } else if (isRightWater(pipeIn)) {
        nextX = x
        nextY = y - 1
        nextPipeIn = water.right
        nextPipeOut = water.left
      } else if (isBottomWater(pipeIn)) {
        nextX = x - 1
        nextY = y
        nextPipeIn = water.bottom
        nextPipeOut = water.top
      }

      nextX !== undefined && dfs(data, nextX, nextY, nextPipeIn, nextPipeOut)
    } else if (isBendPipe(val)) {
      let nextX, nextY, nextPipeIn, nextPipeOut, lastX, lastY, lastPipeIn, lastPipeOut

      if (isLeftWater(pipeIn) || isRightWater(pipeIn)) {
        nextX = x + 1
        nextY = y
        nextPipeIn = water.top
        nextPipeOut = water.bottom
        lastX = x - 1
        lastY = y
        lastPipeIn = water.bottom
        lastPipeOut = water.top
      } else if (isTopWater(pipeIn) || isBottomWater(pipeIn)) {
        nextX = x
        nextY = y + 1
        nextPipeIn = water.left
        nextPipeOut = water.right
        lastX = x
        lastY = y - 1
        lastPipeIn = water.right
        lastPipeOut = water.left
      }

      if (nextX !== undefined) {
        dfs(data, nextX, nextY, nextPipeIn, nextPipeOut)
        dfs(data, lastX, lastY, lastPipeIn, lastPipeOut)
      }
    }

    books[x][y] = undefined
    top--
  }

  dfs(data, 0, 0, pipeIn, pipeOut)

  return result
}
