/**
 * 假设数组长度为 N
 *
 * 1、外层遍历数组元素 => 时间复杂度：O(N)
 * 2、内层遍历 数组长度 - 1 - 外层下标 => 时间复杂度：O(N)，空间复杂度：O(2N) => O(N)
 *
 * 时间复杂度：O(N*N) => O(N^2)
 * 空间复杂度：O(1)
 */

function iterator(arr, fn) {
  const arrLastIndex = arr.length - 1
  let min
  let j

  for (let i = arrLastIndex; i > 0; i--) {
    min = arrLastIndex - i
    for (j = arrLastIndex; j >= min; j--) {
      fn(arr, j)
    }
  }
}

export default function bubbleSort(arr, asc = true) {
  if (asc) {
    iterator(arr, function (arr, j) {
      if (arr[j] < arr[j - 1]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    })
  } else {
    iterator(arr, function (arr, j) {
      if (arr[j] > arr[j - 1]) {
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    })
  }

  return arr
}
/* function iterator(arr, fn) {
  const arrLastIndex = arr.length - 1

  for (let i = 0; i < arrLastIndex; i++) {
    const len = arrLastIndex - i
    for (let j = 0; j < len; j++) {
      fn(arr, j)
    }
  }
}

export default function bubbleSort(arr, asc = true) {
  if (asc) {
    iterator(arr, function (arr, j) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    })
  } else {
    iterator(arr, function (arr, j) {
      if (arr[j] < arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    })
  }

  return arr
} */
