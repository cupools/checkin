export default function typeOf(expr, val) {
  const type = Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
  const expectTypes = [].concat(expr)

  this.params.operate = 'be type of ' + expectTypes.map(s => s.replace(/\w/, $1 => $1.toUpperCase())).join(', ')
  this.params.showDiff = true
  this.assert(
    expectTypes.indexOf(type) > -1
  )
}
