/**
 * 题目：解密回文
 *
 * 所谓回文字符串，就是正着读和反着读都一样
 *
 * 例：
 *  ahaha
 *  xyzyx
 */

export default function palindrome(str) {
  const strLen = str.length
  const mid = Math.floor(strLen >> 1)
  const stack = []

  for (let i = 0; i < mid; i++) {
    stack.push(str[i])
  }

  for (let next = mid + (strLen & 1); next < strLen; next++) {
    if (str[next] !== stack.pop()) {
      return false
    }
  }

  return true
}
