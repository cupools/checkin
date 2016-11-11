export default function typeOf(decl, val) {
  let expected = [].concat(decl)

  this.assert(
    Array.includes(expected, val),
    JSON.stringify(val) + ' should be one of ' + JSON.stringify(expected.join(', '))
  )
}
