// 给定一个数组，判断数组中某一项 或者 任意多项的和，是否被两一个整数整除；
// 例如：solve([3, 5, 8], 13) = true ; solve([3, 9], 13) = false
// 相当于判断数组的余数和 solve([7, 8, 2], 7) 等价于 solve([0, 1, 2], 7)

/**
 * 子问题结构
 *
 * 数组 a1, a2, ..., an 对数字 N 的子数组和余数集合定义为 Sn = { s1, s2, ..., sm }
 *
 * 比如：[1, 2, 3] 的 S3 = {1, 2, 3, 4, 5, 6}, S2 = {1, 2, 3}, S1 = {1}
 * Sk 和 Sk-1 存在子问题关系
 *
 * Sk-1 有 p 项， Sk = Sk-1 U ak % N U { 1 <= i <= p | (si + ak) % N }
 *
 * N = 6, S2 = [1, 2, 3], S3 = [1, 2, 3] U [4, 5, 6]
*/
const solve = (arr, N) => {
  if ((!Array.isArray(arr) || arr.includes(0))
    || (typeof N !== 'number' || N === 0)
  ) {
    return false
  }

  const s = new Set([arr.shift() % N])

  while (arr.length) {
    const ak = arr.shift()
    const items = [...s]

    items.forEach(item => s.add((item + ak) % N))

    s.add(ak)
  }

  return s.has(0)
}

console.log(solve([3, 5, 8], 13))
console.log(solve([3, 9], 13))
console.log(solve([7, 8, 2], 7))
