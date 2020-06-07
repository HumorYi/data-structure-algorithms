/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-23 01:03:42
 * @Description: 链表测试用例（尾指针）
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-25 22:25:43
 * @LastEditorsDescription:
 */
const { Chain, ChainNode } = require('../chain_tail')
const { assert } = require('chai')

describe('chain', () => {
  it('search', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(new ChainNode(i))
    }


    for (let i = 1; i <= 10; i++) {
      assert.equal(chain.search(i).key, i)
    }
  })

  it('delete-odd', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(new ChainNode(i))
    }

    // 删除奇数
    for (let i = 1; i <= 10; i+=2) {
      chain.delete(chain.search(i))
    }

    // 查询偶数
    assert.equal(chain.search(2).prev === null, true)
    assert.equal(chain.search(2).next === chain.search(4), true)

    assert.equal(chain.search(4).prev === chain.search(2), true)
    assert.equal(chain.search(4).next === chain.search(6), true)

    assert.equal(chain.search(6).prev === chain.search(4), true)
    assert.equal(chain.search(6).next === chain.search(8), true)

    assert.equal(chain.search(8).prev === chain.search(6), true)
    assert.equal(chain.search(8).next === chain.search(10), true)

    assert.equal(chain.search(10).prev === chain.search(8), true)
    assert.equal(chain.search(10).next === null, true)
  })

  it('delete-even', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(new ChainNode(i))
    }

    // 删除偶数
    for (let i = 2; i <= 10; i+=2) {
      chain.delete(chain.search(i))
    }

    // 查询奇数
    assert.equal(chain.search(1).prev === null, true)
    assert.equal(chain.search(1).next === chain.search(3), true)

    assert.equal(chain.search(3).prev === chain.search(1), true)
    assert.equal(chain.search(3).next === chain.search(5), true)

    assert.equal(chain.search(5).prev === chain.search(3), true)
    assert.equal(chain.search(5).next === chain.search(7), true)

    assert.equal(chain.search(7).prev === chain.search(5), true)
    assert.equal(chain.search(7).next === chain.search(9), true)

    assert.equal(chain.search(9).prev === chain.search(7), true)
    assert.equal(chain.search(9).next === null, true)
  })

  it('delete-insert', () => {
    const chain = new Chain()

    for (let i = 1; i <= 10; i++) {
      chain.insert(new ChainNode(i))
    }

    // 删除偶数
    for (let i = 2; i <= 10; i+=2) {
      chain.delete(chain.search(i))
    }

    // 插入偶数
    for (let i = 2; i <= 10; i+=2) {
      chain.insert(new ChainNode(i))
    }

    // 查询奇数
    assert.equal(chain.search(1).prev === null, true)
    assert.equal(chain.search(1).next === chain.search(3), true)

    assert.equal(chain.search(3).prev === chain.search(1), true)
    assert.equal(chain.search(3).next === chain.search(5), true)

    assert.equal(chain.search(5).prev === chain.search(3), true)
    assert.equal(chain.search(5).next === chain.search(7), true)

    assert.equal(chain.search(7).prev === chain.search(5), true)
    assert.equal(chain.search(7).next === chain.search(9), true)

    assert.equal(chain.search(9).prev === chain.search(7), true)
    assert.equal(chain.search(9).next === chain.search(2), true)

    // 查询偶数
    assert.equal(chain.search(2).prev === chain.search(9), true)
    assert.equal(chain.search(2).next === chain.search(4), true)

    assert.equal(chain.search(4).prev === chain.search(2), true)
    assert.equal(chain.search(4).next === chain.search(6), true)

    assert.equal(chain.search(6).prev === chain.search(4), true)
    assert.equal(chain.search(6).next === chain.search(8), true)

    assert.equal(chain.search(8).prev === chain.search(6), true)
    assert.equal(chain.search(8).next === chain.search(10), true)

    assert.equal(chain.search(10).prev === chain.search(8), true)
    assert.equal(chain.search(10).next === null, true)
  })
})