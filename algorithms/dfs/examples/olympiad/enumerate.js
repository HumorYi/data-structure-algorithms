/**
 * xxx + xxx = xxx，将数字 1~9 分别填入，每个数字只能出现异常使得等式成立
 *
 * 例如：
 *  173 + 286 = 459 和 286 + 173 = 459 是同一种组合
 */

export default () => {
  const n = 9
  const result = []

  let a = 1
  let b = 1
  let c = 1
  let d = 1
  let e = 1
  let f = 1
  let g = 1
  let h = 1
  let i = 1

  for (a = 1; a <= n; a++) {
    for (b = 1; b <= n; b++) {
      for (c = 1; c <= n; c++) {
        for (d = 1; d <= n; d++) {
          for (e = 1; e <= n; e++) {
            for (f = 1; f <= n; f++) {
              for (g = 1; g <= n; g++) {
                for (h = 1; h <= n; h++) {
                  for (i = 1; i <= n; i++) {
                    if (
                      a !== b &&
                      a !== c &&
                      a !== d &&
                      a !== e &&
                      a !== f &&
                      a !== g &&
                      a !== h &&
                      a !== i &&
                      b !== c &&
                      b !== d &&
                      b !== e &&
                      b !== f &&
                      b !== g &&
                      b !== h &&
                      b !== i &&
                      c !== d &&
                      c !== e &&
                      c !== f &&
                      c !== g &&
                      c !== h &&
                      c !== i &&
                      d !== e &&
                      d !== f &&
                      d !== g &&
                      d !== h &&
                      d !== i &&
                      e !== f &&
                      e !== g &&
                      e !== h &&
                      e !== i &&
                      f !== g &&
                      f !== h &&
                      f !== i &&
                      g !== h &&
                      g !== i &&
                      h !== i &&
                      a * 100 + b * 10 + c + d * 100 + e * 10 + f === g * 100 + h * 10 + i
                    ) {
                      result.push(`${'' + a + b + c}+${'' + d + e + f}=${'' + g + h + i}`)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return result
}
