function dfs(step, n, books = [], storage = [], result = []) {
  if (step === n + 1) {
    let str = ''

    for (let i = 1; i <= n; i++) {
      str += storage[i]
    }

    result.push(str)

    return
  }

  for (let i = 1; i <= n; i++) {
    if (books[i] === undefined) {
      storage[step] = i
      books[i] = true

      dfs(step + 1, n, books, storage, result)
      books[i] = undefined
    }
  }

  return result
}

export default n => dfs(1, n)
