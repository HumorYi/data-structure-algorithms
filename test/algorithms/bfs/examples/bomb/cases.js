/**
 * 炸弹人
 *
 * 有一枚炸弹，杀伤距离超长，可以消灭杀伤范围内所有的敌人，放在哪个空地位置才可以消灭最多的敌人？
 *
 * # 墙（一种能被炸掉，另一种不能被炸掉，由于只有一枚炸弹，炸弹是不能穿墙的）
 * G 敌人
 * . 空地
 */
export default [
  {
    input: {
      data: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
        ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
        ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '#', '#'],
        ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
        ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
      ],
      axis: [1, 3]
    },
    output: {
      axis: [9, 9],
      sum: 8
    }
  },
  {
    input: {
      data: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
        ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
        ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
        ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
        ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
        ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
      ],
      axis: [3, 3]
    },
    output: {
      axis: [7, 11],
      sum: 10
    }
  }
]
