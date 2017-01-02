import deepEql from 'deep-eql'

export default function equal(expr, val) {
  this.params.operate = 'to be equal to'
  this.params.expected = expr
  this.assert(deepEql(expr, val))
}
