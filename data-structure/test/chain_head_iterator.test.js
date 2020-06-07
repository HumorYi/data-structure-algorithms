/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-23 01:03:42
 * @Description: 链表测试用例（头指针）
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-25 23:40:10
 * @LastEditorsDescription:
 */
const Chain = require('../chain_head_iterator')
const { assert } = require('chai')

describe('chain', () => {
  it('insert', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(Chain.createNode(i))
    }

    let values = []
    for (let i = 1; i <= 10; i++) {
      values.push(i)
    }
    assert.deepEqual(values.reverse(), [...chain.transverse()].map(node => node.key))
  })

  it('delete', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(Chain.createNode(i))
    }

    chain.remove(chain.search(3))

    assert.deepEqual([10, 9, 8, 7, 6, 5, 4, 2, 1], [...chain.transverse()].map(node => node.key))
  })

  it('search', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(Chain.createNode(i))
    }

    assert.equal(chain.search(3).key, 3)
  })
})