/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-14 20:13:44
 * @Description: 快速排序，取一个数做基准值，大于该值的排左边，小于该值的排右边，
 *  按照上述方式递归左右两边，最后得到的左右两边的结果是已经排好序的
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-22 18:53:28
 * @LastEditorsDescription:
 */

const gen = require('./gen')
const shuffle = require('./shuffle')

const swap = (A, i, j) => {
  if (i === j) { return }

  [A[i], A[j]] = [A[j], A[i]]
}

const divide = (A, p, r) => {
  const end = r - 1
  const x = A[end]
  let i = p - 1

  for (let j = p; j < end; j++) {
    if (A[j] < x) {
      i++
      swap(A, i, j)
    }
  }

  swap(A, i + 1, end)

  return i + 1
}

// T(N) = T(N / 2) * 2 + O(n) = (T / 4) * 4 + O(n) * 2
// T(N) = T(N * a) + T(N * b) + O(n)
const fast_sort = (A, p = 0, r = A.length) => {
  if (p < r - 1) {
    const q = divide(A, p, r)
    fast_sort(A, p, q)
    fast_sort(A, q + 1, r)
  }
}

console.time()
const A = shuffle(gen(0.1))
fast_sort(A)
console.log(A)
console.timeEnd()