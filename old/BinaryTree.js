// 树的最长同值 [路径] => 得细想

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const tree = new BinaryTree(
  5,
  new BinaryTree(
    6,
    new BinaryTree(6),
    new BinaryTree(6)
  ),
  new BinaryTree(
    8,
    new BinaryTree(7),
    new BinaryTree(9)
  ),
)

// 统计节点到叶子的所有路径，找到最大的节点个数
const max_longest_level = (node, val) => (node && node.value !== val)
  ? Math.max(
    max_longest_level(node.left, val),
    max_longest_level(node.right, val)
  ) + 1
  : 0

const transverse = function* (node) {
  yield node

  if (node.left) {
    yield* transverse(node.left)
  }
  if (node.right) {
    yield* transverse(node.right)
  }
}

const solve = node => [...transverse(node)].reduce((max, child) => Math.max(
  max_longest_level(child.left, child.value) +
  max_longest_level(child.right, child.value),
  max
), 0)


// console.log(...transverse(tree))
console.log(solve(tree))