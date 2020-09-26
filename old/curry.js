/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-08 14:52:39
 * @Description: 函数式编程：柯里化
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-08 19:51:43
 * @LastEditorsDescription:
 */

// 对于 curry(foo)，g函数参数足够4个，就调用 foo(a, b, c, d)，如果小于4个就返回一个可以继续积累参数的函数
/* const curry = func => {
  const g = (...allArgs) => allArgs.length >= func.length
    ? func(...allArgs)
    : (...args) => g(...allArgs, ...args)

  return g
}

const foo = curry((a, b, c, d) => console.log(a, b, c, d))

foo(1)(2)(3)(4)
const f = foo(1)(2)(3)
f(4) */

// 去掉 curry 函数中定义的局部遍历 g，使用 Y-组合子，前置知识 lambda 演算，递归
const y = le => (f => f(f))(f => le((...x) => f(f)(...x)))
const curryY = func => y(g => (...allArgs) =>
  allArgs.length >= func.length
    ? func(...allArgs)
    : (...args) => g(...allArgs, ...args)
)
const foo = curryY((a, b, c, d) => console.log(a, b, c, d))

foo(1)(2)(3)(4)
