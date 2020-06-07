/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-23 14:04:41
 * @Description: 堆栈实现深度优先查询
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-23 14:19:56
 * @LastEditorsDescription:
 */
const depth_first_search = function* (node) {
  let stack = [node]

  while(stack.length) {
    const item = stack.pop()

    yield item.tagName

    for (let i = item.children.length - 1; i >= 0; i--) {
      stack.push(item.children[i])
    }
  }
}