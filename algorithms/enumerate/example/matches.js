const matchesForZeroToNine = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

function getMatches(x) {
  let num = 0

  // x 至少为两位数
  while (x / 10 >= 1) {
    num += matchesForZeroToNine[x % 10]
    x = Math.floor(x / 10)
  }

  // x 为一位数
  num += matchesForZeroToNine[x]

  return num
}

function getMaxNum(maxMatches = 24, minMatches = 2, min = 1, numSize = 3) {
  const bit = Math.ceil((maxMatches - 4) / minMatches / numSize)
  let maxNum = 0

  for (let i = bit - 1; i >= 0; i--) {
    maxNum += min * Math.pow(10, i)
  }

  return maxNum
}

// a + b = c

// + => 2根
// = => 2根
// 0 <= matches <= 24

// a+b+c = matches - 4

// 0 < a+b+c < 24 - 4 => 20

// 1 => 2根

// a,b,c range [0, 1111]

export default function (matches) {
  const computeSum = matches - 4
  const maxForNum = getMaxNum()
  const result = []
  let a = 0
  let b = 0
  let c = 0

  for (a = 0; a < maxForNum; a++) {
    for (b = 0; b < maxForNum; b++) {
      c = a + b

      if (getMatches(a) + getMatches(b) + getMatches(c) === computeSum) {
        result.push({ a, b, c })
      }
    }
  }

  return result
}
