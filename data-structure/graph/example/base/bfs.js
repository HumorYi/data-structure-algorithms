export default (row, column, sides) => {
  const edges = []
  const books = []
  const queue = []
  let head = 0
  let tail = 0
  let vertex

  for (let i = 0; i < row; i++) {
    const edge = []
    for (let j = 0; j < column; j++) {
      edge.push(i === j ? 0 : -1)
    }

    edges.push(edge)
  }

  sides.forEach(([row, column]) => {
    edges[row - 1][column - 1] = 1
    edges[column - 1][row - 1] = 1
  })

  queue[tail] = 0
  tail++
  books[0] = true

  while (head < tail && tail < row) {
    vertex = queue[head]

    for (let i = 0; i < row; i++) {
      if (edges[vertex][i] === 1 && books[i] === undefined) {
        queue[tail] = i
        tail++
        books[i] = true
      }

      if (tail >= row) {
        break
      }
    }

    head++
  }

  return queue.map(item => item + 1)
}
