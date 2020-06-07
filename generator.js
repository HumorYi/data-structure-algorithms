/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-08 21:10:42
 * @Description: generator
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-08 23:48:23
 * @LastEditorsDescription:
 */

// 构造器
/* const create_runner = genFunc => {
  const it = genFunc()

  const run = data => {
    const itVal = it.next(data)
    !itVal.done && itVal.value(run)
  }

  return run
}

const request = url => cb => setTimeout(() => cb(Math.random()), 1000)

create_runner(function* () {
  const val1 = yield request('some url1')
  const val2 = yield request('some url2')

  console.log(val1, val2)
})() */

// 展平数组
function* flatten(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    Array.isArray(arr[i]) ? yield* flatten(arr[i]) : yield arr[i]
  }
}

// console.log([...flatten( [1, 2, [ 3, 4, [ [5] ] ] ] ) ])

// 笛卡尔积
const cartesian_product = (...matrix) => {
  if (matrix.length === 0) { return [] }
  if (matrix.length === 1) { return matrix[0] }

  return matrix.reduce((A, B) => {
    const product = []

    for (let i = 0, ALen = A.length; i < ALen; i++) {
      for (let j = 0, BLen = B.length; j < BLen; j++) {
        product.push(
          Array.isArray(A[i]) ? [...flatten(A[i]), B[j]] : [A[i], B[j]]
        )
      }
    }

    return product
  })
}

// console.log(cartesian_product([1, 2, [3, 4], [5, [6]]], ['a', 'b']))

/**
 * 获取一个指定范围内数字里面的所有素数，素数：只能被 1 和 自身 整除
 * 根据传入的数字生成从 2 到 num 的连续数据，存储到数组中，
 * 每次拿数组的第一个数字进行筛选，能被该数字整除的都过滤掉，剩下的数据再进行反复过滤，
 * 可以看到，每次从数组中取出的第一个数据肯定是素数，
 * 这样子就能取到 从 2 到 num 之间的所有素数，这里使用构造器实现，方便处理
 *
 * 时间复杂度：2n - 1 => n
 */
const sieve_primes = function* (num) {
  let numbers = Array.from({ length: num - 1 }, (item, i) => i + 2)
  let p = null

  while (p = numbers.shift()) {
    yield p
    numbers = numbers.filter(item => item % p !== 0)
  }
}

console.log([...sieve_primes(100)])
