export default function typeOf(expr, val) {
  const expected = [].concat(expr)
  this.params.operate = 'to be one of'
  this.params.expected = expr
  this.assert(
    Array.includes(expected, val)
  )
}
