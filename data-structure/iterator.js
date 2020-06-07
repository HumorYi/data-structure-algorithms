/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-25 22:51:26
 * @Description: 迭代器
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-25 23:13:19
 * @LastEditorsDescription:
 */

// 通过自调用一个生成器，返回一个迭代器，拿到该迭代器的原型，再通过原型拿到构造器，
// 该构造器就是所有迭代器共用的构造器，可通过给构造器的原型添加方法，所有迭代器共用
const GeneratorFunction = Object.getPrototypeOf((function* () { })()).constructor

/**
 * @description: 扩展 iterator 方法：查询
 * @param {type}
 * @return:
 */
GeneratorFunction.prototype.find = function(condition) {
  let point = null
  while (!(point = this.next()).done) {
    if (condition(point.value)) {
      return point.value
    }
  }

  return null
}
