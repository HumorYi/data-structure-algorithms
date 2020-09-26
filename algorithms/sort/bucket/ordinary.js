/**
 * 假设桶数量为 M，数组长度为 N
 *
 * 1、取数组中 最大值+1 为 桶数量,根据桶数量创建桶并初始化值 => 时间复杂度：O(M+1) => O(M)，空间复杂度：O(N)
 * 2、遍历数组，将当前值作为桶坐标，并递增桶坐标对应的值，即记录当前值出现次数 => 时间复杂度：O(N)
 * 3、遍历桶，找出值大于0的桶（有数据），并遍历桶值，将当前坐标（数组对应项）追加到返回结果数组中 => 时间复杂度：O(M+N)，空间复杂度：O(N+N) => 返回结果数组 + 创建新空间 => o(2N) => O(N)
 *
 * 时间复杂度：O(M+N+M+N) => O(2(M+N)) => O(M+N)
 * 空间复杂度：O(N+N+N) => O(3N) => O(N)
 */
export default function bucketSort(arr, asc = true) {
  const bucketsLen = Math.max.apply(null, arr) + 1
  const buckets = Array(bucketsLen).fill(0)
  const ret = []

  arr.forEach(item => buckets[item]++)

  if (asc) {
    buckets.forEach((bucket, i) => {
      if (bucket > 0) {
        // 更快，在已有空间内创建新空间，再挨个追加进去
        ret.push(...Array(bucket).fill(i))
        // ret.push.apply(ret, Array(bucket).fill(i))
        // 更慢，创建空间又重新赋值，内存泄漏，垃圾回收
        // ret = ret.concat(Array(bucket).fill(i))
      }
    })
  } else {
    for (let i = bucketsLen - 1; i >= 0; i--) {
      const bucket = buckets[i]
      bucket > 0 && ret.push(...Array(bucket).fill(i))
    }
  }

  return ret
}
