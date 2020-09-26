/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-23 14:09:33
 * @Description: 队列实现广度优先搜索
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-23 14:26:08
 * @LastEditorsDescription:
 */
/* const depth_first_search = function* (node) {
  let stack = [node]

  while(stack.length) {
    const item = stack.pop()

    yield item.tagName

    for (let i = item.children.length - 1; i >= 0; i--) {
      stack.push(item.children[i])
    }
  }
} */

const breadth_first_search = function* (node) {
  let queue = [node]

  while(queue.length) {
    const item = queue.shift()

    yield item.tagName

    for (let i = 0, len=item.children.length; i < len; i++) {
      queue.push(item.children[i])
    }
  }
}