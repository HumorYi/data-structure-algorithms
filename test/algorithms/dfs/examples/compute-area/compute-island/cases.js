/**
 * 宝岛探险
 *
 * 10*10的二维矩阵为宝岛地图，数字代表海拔，0 表示海洋，1~9表示陆地
 *
 * 选择某个坐标点，计算出所在岛面积（即有多少个格子）
 *
 * 注意：坐标点上下左右相链接的陆地均视为同一岛屿
 */
export default [
  {
    input: {
      data: [
        [1, 2, 1, 0, 0, 0, 0, 0, 2, 3],
        [3, 0, 2, 0, 1, 2, 1, 0, 1, 2],
        [4, 0, 1, 0, 1, 2, 3, 2, 0, 1],
        [3, 2, 0, 0, 0, 1, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 5, 3, 0],
        [0, 1, 2, 1, 0, 1, 5, 4, 3, 0],
        [0, 1, 2, 3, 1, 3, 6, 2, 1, 0],
        [0, 0, 3, 4, 8, 9, 7, 5, 0, 0],
        [0, 0, 0, 3, 7, 8, 6, 0, 1, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
      ],
      startX: 5,
      startY: 7
    },
    output: {
      sum: 4,
      data: [
        [-1, -1, -1, 0, 0, 0, 0, 0, -2, -2],
        [-1, 0, -1, 0, -3, -3, -3, 0, -2, -2],
        [-1, 0, -1, 0, -3, -3, -3, -3, 0, -2],
        [-1, -1, 0, 0, 0, -3, -3, -3, 0, 0],
        [0, 0, 0, 0, 0, 0, -3, -3, -3, 0],
        [0, -3, -3, -3, 0, -3, -3, -3, -3, 0],
        [0, -3, -3, -3, -3, -3, -3, -3, -3, 0],
        [0, 0, -3, -3, -3, -3, -3, -3, 0, 0],
        [0, 0, 0, -3, -3, -3, -3, 0, -4, -4],
        [0, 0, 0, 0, 0, 0, 0, 0, -4, 0]
      ]
    }
  }
]
