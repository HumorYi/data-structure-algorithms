// 作业：leetcode 969. 煎饼排序  添加 作业注释
// 测试数据：[9, 8, 4, 1, 3, 2, 6, 5, 7]
// 求最终结果数组中 每一个数 连接起来最后的数：例如：[1, 2, 3] => 123

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var reverse = function (arr, n, ind) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]

    ind[arr[i]] = i
    ind[arr[j]] = j
  }
}

// 找到最大元素，先翻转到第一个元素，再翻转到倒数第一，找到次大元素，先翻转到第一个元素，再翻转到倒数第二，依次翻转
var pancakeSort = function (arr) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }

  const ind = new Array(len + 1)
  const list = []

  for (let i = 0; i < len; i++) {
    ind[arr[i]] = i
  }

  for (let i = len; i >= 1; i--) {
    // 作业注释：如果当前的数字 i 在正确的位置上，不需要翻转
    // if (ind[i] === i - 1) continue

    // 翻转次数为1时不翻转
    if (ind[i] + 1 !== 1) {
      list.push(ind[i] + 1)
      reverse(arr, ind[i] + 1, ind)
    }

    // 翻转到最后一次时，意味着已有序
    if (i !== 1) {
      list.push(i)
      reverse(arr, i, ind)
    }
  }

  return list
}
