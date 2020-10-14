export default () => {
  const n = 3
  const result = []

  let a = 1
  let b = 1
  let c = 1

  for (a = 1; a <= n; a++) {
    for (b = 1; b <= n; b++) {
      for (c = 1; c <= n; c++) {
        if (a !== b && a !== c && b !== c) {
          result.push('' + a + b + c)
        }
      }
    }
  }

  return result
}
