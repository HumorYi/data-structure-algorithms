export default (row, column, sides) => {
  const edges = []
  const books = []
  const result = []
  let sum = 0

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

  function dfs(vertex) {
    sum++

    result.push(vertex)

    if (sum === row) {
      return
    }

    for (let i = 0; i < row; i++) {
      if (edges[vertex][i] === 1 && books[i] === undefined) {
        books[i] = true
        dfs(i)
      }
    }
  }

  books[0] = true
  dfs(0)

  return result.map(item => item + 1)
}
