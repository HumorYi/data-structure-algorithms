/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-14 19:26:41
 * @Description: w 级数据生成器
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-14 19:27:42
 * @LastEditorsDescription:
 */
module.exports = w => {
  let len = w * 10000
  let arr = []

  for (let i = 1; i <= len; i++) {
    arr.push(i)
  }

  return (arr)
}