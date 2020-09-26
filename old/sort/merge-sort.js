/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-14 18:03:02
 * @Description: 归并排序，按照快速排序的方式，只不过是拆分成两半进行分别排序再合并
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-14 20:33:04
 * @LastEditorsDescription:
 */

const gen = require('./gen')
const shuffle = require('./shuffle')

const SENTINEL = Number.MAX_SAFE_INTEGER

const divide = (p, r) => Math.floor((p + r) / 2)

const conquer = (A, p, q, r) => {
  const A1 = A.slice(p, q)
  const A2 = A.slice(q, r)

  // 保持循环不变式，添加一个最大值在最后，无论怎么比较，该值都是在最后
  A1.push(SENTINEL)
  A2.push(SENTINEL)

  for (let k = p, i = 0, j = 0; k < r; k++) {
    A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++]
  }
}

// 1 + ... + (n/2 -1) => n^2 / 8
// N^2 + N^2 / 4 + O(N)
// [1, 2 ,3] [4, 5, 6]
// [1, 3 ,5] [2, 4, 6]

// 对数公式
// log(b)(x) = y => b^y = x => b^log(b)(x) = x
// lg(n) = log2(n)
// ln(n) = log(e)(n)
// lg(^k)n = (lg(n))^k
// lg lg(n) = lg(lg(n))


// 等比数列公式
// 1 + 2 + 4 + ... + 2^k = 1 * (1 - 2^k) / (1 - 2) = 2^k - 1

// 1 + 2 + ... + 2^log2(N) = 1 * (1 - 2^log2(N+1)) / (1 - 2)
// = 2^log2(N + 1) - 1 = N + 1 - 1 = N

// 分：O(N)
// 合：O(NlgN)

// p => start
// r => end
// q => (p + r) / 2
// p - r => p - q   q + 1 - r
const merge_sort = (A, p = 0, r = A.length) => {

  // 只剩一项，无需比较和交换
  if (r - p === 1) { return }

  // 只剩两项
  if (r - p === 2) {
    // 如果前面项大于后面项，则交换
    if (A[p] > A[r - 1]) {
      [A[p], A[r - 1]] = [A[r - 1], A[p]]
    }

    return
  }

  const q = divide(p, r)
  merge_sort(A, p, q)
  merge_sort(A, q, r)

  conquer(A, p, q, r)
}

console.time()
// 64.305ms
const A = gen(100)
merge_sort(shuffle(A))
console.timeEnd()