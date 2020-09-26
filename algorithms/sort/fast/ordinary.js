/**
 * 假设数组长度为 N
 *
 * 时间复杂度：O(NlogN)
 * 空间复杂度：O(N)
 */

function iterator(arr, leftFn, rightFn, left = 0, right = arr.length - 1) {
  let start, end, base

  if (left > right) {
    return
  }

  base = arr[left]
  start = left
  end = right

  while (start !== end) {
    while (rightFn(arr, end, base) && start < end) {
      end--
    }

    while (leftFn(arr, start, base) && start < end) {
      start++
    }

    if (start < end) {
      ;[arr[end], arr[start]] = [arr[start], arr[end]]
    }
  }

  arr[left] = arr[start]
  arr[start] = base

  iterator(arr, leftFn, rightFn, left, start - 1)
  iterator(arr, leftFn, rightFn, start + 1, right)
}

export default function fastSort(arr, asc = true) {
  if (asc) {
    iterator(
      arr,
      function (arr, start, base) {
        return arr[start] <= base
      },
      function (arr, end, base) {
        return arr[end] >= base
      }
    )
  } else {
    iterator(
      arr,
      function (arr, start, base) {
        return arr[start] >= base
      },
      function (arr, end, base) {
        return arr[end] <= base
      }
    )
  }

  return arr
}
