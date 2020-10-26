/**
 * 查找从起始坐标 到 目标坐标 的最小路径，其中 0 为可走路，1 为障碍物，
 * 不能翻过障碍物走，遇到障碍物就要跳过该位置找其它可行路径
 */
export default [
  {
    input: {
      data: [
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 1]
      ],
      startX: 0,
      startY: 0,
      targetX: 3,
      targetY: 2
    },
    output: {
      min: 7,
      data: [
        [true, true, undefined, undefined],
        [undefined, true, true, true],
        [undefined, undefined, undefined, true],
        [undefined, undefined, true, true],
        [undefined, undefined, undefined, undefined]
      ]
    }
  }
]
