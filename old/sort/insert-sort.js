/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-14 18:04:33
 * @Description: 插入排序，当前项与前面所有项进行比较，再交换
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-14 20:32:37
 * @LastEditorsDescription:
 */

const gen = require('./gen')
const shuffle = require('./shuffle')

// 1 + 2 + 3 + 4 + 5 + ... + N - 1 = N^2 / 2
// 最好情况：所有正序O(n)
// 最坏情况：所有倒序O(n^2)
// 平均情况：O(n^2)
const insert_sort = A => {
  for (let i = 0, len = A.length;         // 1 + N
    i < len;                              // N - 1
    i++) {                                // N - 1

    const key = A[i]                      // N - 1
    let j = i - 1                         // N - 1

    while (j >= 0 && A[j] > key) {        // Mk
      A[j + 1] = A[j]                     // Mk - 1
      j--                                 // Mk - 1
    }

    A[j + 1] = key                        // N - 1

  }

  return A
}

console.time()
console.log(insert_sort(shuffle(gen(10))))
console.timeEnd()