/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @Date: 2019-09-09 23:39:43
 * @Description: 通过选择器来解析DOM树
 * @LastEditors:
 * @LastEditorsEmail:
 * @LastEditTime: 2019-09-10 00:05:42
 * @LastEditorsDescription:
 */
class DOMTree {
  constructor(tag, className, children = [], value = null) {
    this.tag = tag
    this.className = className
    this.children = children
    this.value = value
  }
}

/*
  <div>
    <div class="content">
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  </div>
*/
const tree = new DOMTree('div', '', [
  new DOMTree('div', 'content', [
    new DOMTree('table', '', [
      new DOMTree('tr', '', [
        new DOMTree('td', '', [
          new DOMTree('text', '', null, '1')
        ]),
        new DOMTree('td', '', [
          new DOMTree('text', '', null, '2')
        ]),
        new DOMTree('td', '', [
          new DOMTree('text', '', null, '3')
        ])
      ])
    ])
  ])
])


// 节点的遍历 / 查找方法
const transverse = function* (node) {
  yield node

  const children = node.children
  if (children) {
    for (let i = 0, len = children.length; i < len; i++) {
      yield * transverse(children[i])
    }
  }
}

const findByClassName = (node, className) => [...transverse(node)].filter(node => node.className === className)

const findByTagName = (node, tagName) => [...transverse(node)].filter(node => node.tag === tagName)

// 表达式解析
// '.content tr td' => [ { className: 'content' }, { tagName: 'tr' }, { tagName: 'td' } ]
const selection_expr_parse = expr => expr.split(' ').map(x => x[0] === '.'
  ? { className: x.substr(1) }
  : { tagName: x }
)

// 对 className 和 tagName 进行倒排，获得索引对象
const index = tree =>{
  const classes = {};

  [...transverse(tree)].forEach(node => {

    const className = node.className

    if (className) {
      if (!classes[className]) {
        classes[className] = []
      }

      classes[className].push(node)
    }
  })

  return classes
}

const select = (node, path) => {
  if (path.length === 0) { return [node] }

  const p = path.shift()
  let nodes = p.className ? index(node)[p.className] : findByTagName(node, p.tagName)

  return [].concat(
    ...nodes.map(n => select(n, [...path]))
  )
}

console.log(select(tree, selection_expr_parse('.content tr td')))
