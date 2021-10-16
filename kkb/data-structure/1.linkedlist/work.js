// 作业：10万以内快乐数的总和

function getNextNumber(n) {
  let sum = 0

  while (n) {
    sum += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }

  return sum
}

function isHappyNumber(n) {
  let p = n
  let q = n
  let end = 1

  do {
    p = getNextNumber(p)
    q = getNextNumber(getNextNumber(q))
  } while (p !== q && q !== end)

  return q === end
}

var sum = 0
for (var i = 100000; i >= 0; i--) {
  if (isHappyNumber(i)) {
    sum += i
  }
}

console.log(sum)
