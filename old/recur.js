/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-09 00:10:49
 * @Description: 递归
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-09 20:41:11
 * @LastEditorsDescription:
 */

// 阶乘
/* const factorial = n => n === 0 ? 1 : factorial(n-1) * n
console.log(factorial(5)) */

// 斐波那契数列 => 递归 => 2^n-1 - 1
const fibonacciFirst = n => n <= 2 ? 1 : fibonacciFirst(n - 1) + fibonacciFirst(n - 2)
console.log(fibonacciFirst(6))

// 斐波那契数列 => 循环 => n
const fibonacciSecond = n => {
  if (n <= 2) { return 1 }

  let [a, b] = [0, 1]

  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b]
  }

  return b
}

console.log(fibonacciSecond(6))

// 斐波那契数列 => reduce => n
const fibonacciThird = n => {
  if (n <= 2) { return 1 }

  return Array(n - 1).fill().reduce(([a, b]) => [b, a + b], [0, 1])[1]
}
console.log(fibonacciThird(6))

// 获取 DOM 节点的绝对位置
const get_layout = ele => {
  let left = ele.offsetLeft,
    top = ele.offsetTop,
    parent = ele.offsetParent

  while (parent) {
    left += parent.offsetLeft
    top += parent.offsetTop
    parent = parent.offsetParent
  }

  return {
    width: ele.offsetWidth,
    height: ele.offsetHeight,
    left,
    top
  }
}

// 深度拷贝
const deepClone = obj => {
  // 递归边界条件，如果对象是 null 或者 不是一个对象类型数据，则返回传递进来的参数数据
  if (obj === null || typeof obj !== 'object') { return obj }

  // 通过对象的构造器获取对象构造器上定义的成员，
  // 不适合全类型匹配，例如：Object、Date
  // 适合 Array、Class 等可以直接使用 constructor 属性的类型
  const newObj = new obj.constructor()

  // 获取对象私有成员，而不是原型链上的成员
  for (let key in Object.getOwnPropertyDescriptor(obj)) {
    newObj[key] = deepClone(obj[key])
  }

  // 返回克隆好的新对象
  return newObj
}

// 深度比较
const deepCompare = (a, b) => {
  if (a !== null || typeof a !== 'object'
    || b !== null || typeof b !== 'object'
  ) {
    return a === b
  }

  const keysA = Object.keys(Object.getOwnPropertyDescriptor(a))
  const keysB = Object.keys(Object.getOwnPropertyDescriptor(b))

  return keysA.length !== keysB.length
    ? false
    : keysA.every(key => deepCompare(a[key], b[key]))
}