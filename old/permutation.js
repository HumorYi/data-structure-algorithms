/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-12 00:42:21
 * @Description: 全排列
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-14 18:00:28
 * @LastEditorsDescription:
 */

/**
 * 简单解：阶乘级 + 拷贝，性能差
 *
 * P(A) = a1 P(A - a1) U a2 P(A - a2) U ... U an P(A - an)
 *
 * P[1, 2, 3, 4] = 1 P[2, 3, 4] U 2 P[1, 3, 4] U 3 P[1, 2, 4] U 4 P[1, 2, 3]
*/
const permutation1 = A => A.length === 1
  ? [A]
  : [].concat(...A.map((a, i) =>
    permutation1(
      A.slice(0, i).concat(A.slice(i + 1))).map(p => [a].concat(p)
      )
  ))

console.log(permutation1(['a', 'b', 'c', 'd']))

const swap = (A, i, N) => {
  [ A[i], A[N] ] = [ A[N], A[i] ]
}

/**
 * 交换算法：阶乘级，交换两次，不拷贝，性能稍好
 *
 * 依次把元素换到最后一个
 *
 * [1, 2, 3, 4] -> [4, 2, 3, 1] N = 4
 * -> [1, 2, 3, 4] -> [3, 2, 1, 4] N = 3
 * -> [1, 2, 3, 4] -> [2, 1, 3, 4] N = 2
 * -> [1, 2, 3, 4] -> [1, 2, 3, 4] N = 1
*/

const permutation2 = function *(A, N) {
  if (!N) {
    N = A.length
  }

  if (N === 1) {
    yield A.slice()
    return
  }

  for (let i = 0; i < N; i++) {
    swap(A, i, N - 1)
    yield * permutation2(A, N - 1)
    swap(A, i, N - 1)
  }
}
console.log([...permutation2(['a', 'b', 'c', 'd'])])

/**
 * Heap：阶乘级，交换一次，不拷贝，性能较好
 *
 * 依次把元素换到最后一个
 *
 * [1, 2, 3, 4] -> [4, 2, 3, 1] N = 4
 * -> [1, 2, 3, 4] -> [3, 2, 1, 4] N = 3
 * -> [1, 2, 3, 4] -> [2, 1, 3, 4] N = 2
 * -> [1, 2, 3, 4] -> [1, 2, 3, 4] N = 1
*/

const permutation3 = function *(A, N) {
  if (!N) {
    N = A.length
  }

  if (N === 1) {
    yield A.slice()
    return
  }

  for (let i = 0; i < N; i++) {
    yield * permutation3(A, N - 1)
    swap(A, N % 2 ? i : 0, N - 1)
  }
}
console.log([...permutation3(['a', 'b', 'c', 'd'])])