/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-09 21:57:00
 * @Description: 树 => selector
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-09 23:37:25
 * @LastEditorsDescription:
 */
class Tree {
  constructor(v, children = null) {
    this.v = v
    this.children = children
  }
}

const tree = new Tree(10, [
  new Tree(5),
  new Tree(3, [
    new Tree(7),
    new Tree(11)
  ]),
  new Tree(2)
])

// 树的遍历：先序
/* const tree_transverse_before = tree => {
  console.log(tree.v)

  tree.children && tree.children.forEach(tree_transverse_before)
}

tree_transverse_before(tree)
 */

// 树的遍历：后序
/* const tree_transverse_after = tree => {
  tree.children && tree.children.forEach(tree_transverse_after)
  console.log(tree.v)
}

tree_transverse_after(tree) */

// 树的遍历：中序
/* const tree_transverse_middle = (tree, order = 0) => {
  let transversed = false

  if (!tree.children) {
    console.log(tree.v)
    return
  }

  tree.children.forEach((child, index) => {
    if (index === order) {
      transversed = true
      console.log(tree.v)
    }

    tree_transverse_middle(child, order)
  })

  !transversed && console.log(tree.v)
}

tree_transverse_middle(tree, 0)
tree_transverse_middle(tree, 3)
tree_transverse_middle(tree, 1) */


// 树的遍历：回调
/* const tree_transverse = (tree, cb, order = 0) => {
  let transversed = false

  if (!tree.children) {
    cb && cb(tree)
    return
  }

  tree.children.forEach((child, index) => {
    if (index === order) {
      transversed = true
      cb && cb(tree)
    }

    tree_transverse(child, cb, order)
  })

  !transversed && cb && cb(tree)
}

// 前序
// tree_transverse(tree, node => console.log(node.v))
// 中序
// tree_transverse(tree, node => console.log(node.v), 1)
// 中序
// tree_transverse(tree, node => console.log(node.v), 2)
// 后序
// tree_transverse(tree, node => console.log(node.v), 3)
// 后序
// tree_transverse(tree, node => console.log(node.v), 4)
 */

// 树的遍历；generator
const tree_transverse_node = function* (tree, order = 0) {
  let transversed = false

  if (!tree.children) {
    yield tree
    return
  }

  for (let i = 0, len = tree.children.length; i < len; i++) {
    if (i === order) {
      transversed = true
      yield tree
    }

    yield* tree_transverse(tree.children[i], order)
  }

  if (!transversed) {
    yield tree
  }
}
// console.log([...tree_transverse(tree)])

/* for (let node of tree_transverse(tree)) {
  console.log(node)
} */

// 树的查找
const find = (tree, prediction) => [...tree_transverse_node(tree)].find(prediction)

/* const find = (tree, prediction) => {
  for (let node of tree_transverse(tree)) {
    if (prediction(node)) { return node }
  }
} */

// console.log(find(tree, node => node.v === 2))

// 构造一个先序遍历，除了返回节点外，还返回路径
const tree_transverse = function* (tree, path = []) {
  yield { node: tree, path }

  if (tree.children) {
    for (let i = 0, len = tree.children.length; i < len; i++) {
      yield* tree_transverse(tree.children[i], [...path, i])
    }
  }
}

// 获取节点中对应值的路径
const find_path = (nodes, v) => {
  for (let { node, path } of nodes) {
    if (node.v === v) {
      return path
    }
  }
}

const nodes = [...tree_transverse(tree)]
// console.log(find_path(nodes, 11))

// 根据路径反查节点
const find_by_path = (tree, path) => path.length === 0
  ? tree
  : find_by_path(tree.children[path[0]], path.slice(1))

// console.log(find_by_path(tree, [1, 1]))

// 标准化的选择器函数 select('1 [>5]') => [7, 11]
const select = (node, path) => {
  if (path.length === 0) { return [node] }

  const p = path.shift()

  if (p.child) {
    return select(node.children[p.child], [...path])
  }
  else if (p.operate) {
    return [...tree_transverse(node)].filter(n => p.operate(n.node)).map(n => n.node)
  }
}

// 解析表达式：1 [>5] => [ { child: 1 }, { operate: x => x.v > 5 } ]
const parse_selection_exp = expr => expr.split(' ').map(p => /^\d+$/.test(p)
  ? { child: parseInt(p) }
  : { operate: eval(`x => x.v ${p.replace(/[\[\]]/g, '')}`) }
)

const select_easy =(tree, expr) => select(tree, parse_selection_exp(expr))

console.log(select_easy(tree, '1 [>5]'))