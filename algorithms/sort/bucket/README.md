# 桶排序

## 实现方式
  - 为每个数据创建一个桶存储
  - 相同的数据存在同一个桶里
  - 取数据时从桶中挨个取出来

## 数据结构 - 数组
  - 简单数据：一维数组
  - 复杂数据：二维或多维数组

## 分析
- 时间复杂度：O(M+N)
- 空间复杂度：O(说不准)
- 空间换时间，注意数据量级足够大时，内存占据过大，可能导致内存溢出
- 数据差异过大时，创建了很多无用的空间，浪费内存
- 适用于数据比较均匀的情况，且知道桶数量，时间快，空间少