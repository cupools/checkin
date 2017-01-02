export default function required(expr, val) {
  if (expr) {
    this.params.operate = 'to be required'
    this.assert(val !== undefined)
  }
}
