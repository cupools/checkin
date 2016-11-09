export default function typeOf(decl, obj) {
  let type = Object.prototype.toString.call(obj)
  let expectTypes = [].concat(decl)

  this.assert(
    !Array.includes(expectTypes, type),
    JSON.stringify(obj) + ' should be type of ' + JSON.stringify(expectTypes.join(', '))
  )
}
