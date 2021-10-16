!(function () {
  function add(ind, p, val) {
    next[p] = next[ind]
    next[ind] = p
    data[p] = val
  }

  const data = []
  const next = []
  const head = 3

  data[head] = 0

  add(3, 5, 1)
  add(5, 2, 2)
  add(2, 7, 3)
  add(7, 9, 100)
  add(5, 6, 30)

  let p = head
  let link = ''
  while (p !== undefined) {
    link += data[p] + '-->'

    p = next[p]
  }

  console.log(link)
})()
