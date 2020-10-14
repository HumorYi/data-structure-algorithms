function dfs(step, n, books = [], storage = [], result = []) {
  if (step === n + 1) {
    if (
      storage[1] * 100 + storage[2] * 10 + storage[3] + storage[4] * 100 + storage[5] * 10 + storage[6] ===
      storage[7] * 100 + storage[8] * 10 + storage[9]
    ) {
      result.push(
        `${'' + storage[1] + storage[2] + storage[3]}+${'' + storage[4] + storage[5] + storage[6]}=${
          '' + storage[7] + storage[8] + storage[9]
        }`
      )
    }

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

export default () => dfs(1, 9)
