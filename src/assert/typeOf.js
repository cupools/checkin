export default function typeOf(decl, val) {
  let type = Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
  let expectTypes = [].concat(decl)

  this.assert(
    Array.includes(expectTypes, type),
    JSON.stringify(val) + ' should be type of ' + JSON.stringify(expectTypes.join(', '))
  )
}
