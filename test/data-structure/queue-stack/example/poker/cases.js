export default [
  {
    input: {
      a: [2, 4, 1, 2, 5, 6],
      b: [3, 1, 3, 5, 6, 4]
    },
    output: {
      a: 'lose',
      b: 'win',
      poker: {
        a: [],
        b: [1, 6, 5, 2, 3, 4, 1],
        table: [3, 4, 5, 6, 2]
      }
    }
  },
  {
    input: {
      a: [2, 4, 1, 3, 5, 6],
      b: [7, 8, 9, 10, 11, 12]
    },
    output: {
      a: 'lose',
      b: 'win',
      poker: {
        a: [],
        b: [12],
        table: [2, 7, 4, 8, 1, 9, 3, 10, 5, 11, 6]
      }
    }
  }
]
