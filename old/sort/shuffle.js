/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-13 23:09:05
 * @Description: 100w 整数数据的排序
 *  先生成 1-100w 的整数
 *  写一个算法将他们随机打乱
 *  再写一个算法对它们进行排序
 *  最后输出一下程序执行的总时间
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-14 20:30:57
 * @LastEditorsDescription:
 */

const gen = require('./gen')

// 推荐使用打乱数组的方法
// O(n) , 如果仅考虑直接改变原数据数据，则可直接操作，否则需要拷贝一份数组数据
/**
 * [1, 2, 3, 4]
 * [1] -> [4, 2, 3, 1]
 * [4, 2] -> [4, 2, 3, 1]
 * [4, 2, 3]
 */
const shuffle = arr => {
  for (let i = 0, len = arr.length - 1; i < len; i++) { // 2N + 2
    // 从 [i, arr.length - 1] 中取出一个整数
    // [i, N)
    // c1 * N
    const j = i + Math.floor(Math.random() * (len - i));

    // c2 * N
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  // 2N + 2+ (c1 + c2) * N = (c1 + c2 + 2) * N + C3
  return arr
}

/*
let c = 0
const size = 10000
for (let i = 0; i < size; i++) {
  shuffle_simple([1, 2, 3, 4])[1] === 2 && c++
}
// 0.3898   75.784ms
// actual ~= 0.25
console.log(c / size)
 */

// 随机生成 N 个数，再拿这 N 个数去进行比较再排序，已升序排好
const shuffle_complex = arr => {
  let m = []
  const N = Math.pow(arr.length, 3)

  for (let i = 0, len = arr.length - 1; i < len; i++) {
    m.push(Math.floor(Math.random(1, N)))
  }

  return arr.sort((i, j) => m[i] - m[j])
}

// N^2
const shuffle_single = arr => arr.sort(() => Math.random() - 0.5)

const w = 10

/*
console.log('shuffle S')
console.time()
// // default: 17.238ms
const A = shuffle(gen(w))
// console.log(A)
console.timeEnd()

console.time()
// // default: 18.657ms
const B = shuffle_complex(gen(w))
// console.log(B)
console.timeEnd()

console.time()
// // default: 92.651ms
const C = shuffle_single(gen(w))
// console.log(C)
console.timeEnd()
console.log('shuffle E')


console.log('sort S')
console.time()
// A.sort((a, b) => a - b)
console.timeEnd()

console.time()
// B.sort((a, b) => a - b)
console.timeEnd()

console.time()
// C.sort((a, b) => a - b)
console.timeEnd()
console.log('sort E')
 */

module.exports = shuffle