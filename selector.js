/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-12 21:42:05
 * @Description: 选择器 .g-grid A[1:3]
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-13 00:57:34
 * @LastEditorsDescription:
 */

// 展平所有节点
const transverse = function* (node) {
  // 把当前节点返回
  yield node

  // 如果有子节点，则递归展平所有子节点
  if (node.children) {
    // 对子节点做一个浅拷贝，并使用数组存储，方便遍历
    const children = [...node.children]
    for (let i = 0, len = children.length; i < len; i++) {
      // 展平当前节点
      yield* transverse(children[i])
    }
  }
}

// 获取选择器范围数据,选择器范围是使用 [] 括起来的
const get_range = x => {
  const m = x.match(/\[(.*)\]/)

  if (m) {

    const sliceRange = m[1].split(":")

    if (sliceRange[0] === '' && sliceRange[1] === '') {
      sliceRange = []
    }
    else if (sliceRange[0] === '') {
      sliceRange[0] = 0
    }
    else if (sliceRange[1] === '') {
      sliceRange = [sliceRange[0]]
    }

    return arr => arr.slice(...sliceRange)
  }
}

// 解析选择器：.grid A[1:2]，选择器之间是以空格间隔
const parse_selector_expr = expr => expr.split(' ').map(x => {
  // 定义一个获取选择器范围数据的函数，当后续进行查找时调用
  const range = get_range(x)
  // 如果选择器是有查找范围的，即带上 []，则只取 [ 前面部分
  x = x.split('[').shift()

  return x[0] === '.'
    ? { className: x.substr(1), range }
    : { tagName: x, range }
})

// 判断当前节点是否为子节点的祖宗节点
const is_ancestor = (node, child) => {
  let p = child

  while (p) {
    if (p === node) { return true }
    p = p.parentNode
  }

  return false
}

// 根据解析处理的选择器路径进行查找对应的节点
const select = (node, path) => {
  // 如果没有路径时，返回当前节点
  if (path.length === 0) { return [node] }

  // 砍掉路径数组的第一位路径
  const p = path.shift()
  let nodes = []

  if (p.className) {
    nodes = [...document.getElementsByClassName(p.className)]
      .filter(v => is_ancestor(node, v))
  }
  else if (p.tagName) {
    nodes = [...transverse(node)].filter(n => n.tagName === p.tagName)
  }

  p.range && (nodes = p.range(nodes))

  // 继续查询下一个路径的子节点
  return [].concat(...nodes.map(n => select(n, [...path])))
}

// 测试: https://www.hao123.com/?tn=57028281_hao_pg
console.log(select(document.body, parse_selector_expr('.g-grid A[1:3]')))