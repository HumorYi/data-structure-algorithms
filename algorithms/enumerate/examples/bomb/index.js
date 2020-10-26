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

export default data => {
  const row = data.length
  const column = data[0].length

  let i, j
  const current = {
    axis: [],
    sum: 0
  }
  const result = {
    axis: [],
    sum: 0
  }

  for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
      if (isSpace(data[i][j])) {
        current.axis = [i, j]
        current.sum = getSum(data, current.axis)

        if (current.sum > result.sum) {
          result.sum = current.sum
          result.axis = current.axis
        }
      }
    }
  }

  return result
}
