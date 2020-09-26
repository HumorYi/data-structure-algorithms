/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-27 00:50:51
 * @Description:链表内存管理测试用例
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-27 01:05:18
 * @LastEditorsDescription:
 */

const { assert } = require('chai')
const ArrayChain = require('../chain_head_memory')

describe('ArrayChain 测试用例', () => {
  it('insert', () => {
    const arrayChain = new ArrayChain(5)

    for (let i = 1; i <= 5; i++) {
      arrayChain.insert(i)
    }

    assert.deepEqual([5, 4, 3, 2, 1], [...arrayChain.transverse()])
  })

  it('out of memory', () => {
    let error = null

    try {
      const arrayChain = new ArrayChain(100)
      for (let i = 0; i < 100; i++) {
        arrayChain.insert(i)
      }
    } catch (err) {
      error = err
    }

    assert.equal(null, error)

    try {
      const arrayChain = new ArrayChain(100)
      for (let i = 0; i < 101; i++) {
        arrayChain.insert(i)
      }
    } catch (err) {
      error = err
    }

    assert.equal('out of memory', error)
  })

  it('delete', () => {
    const arrayChain = new ArrayChain(5)

    for (let i = 1; i <= 5; i++) {
      arrayChain.insert(i)
    }

    arrayChain.delete(3)

    assert.deepEqual([5, 3, 2, 1], [...arrayChain.transverse()])

    arrayChain.insert(10)
    assert.deepEqual([10, 5, 3, 2, 1], [...arrayChain.transverse()])
  })
})