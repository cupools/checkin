export default function typeOf(expected, actual) {
  let type = Object.prototype.toString.call(actual)
  this.assert(
    !Array.includes([].concat(expected), type),
    JSON.stringify(actual) + ' should be type of ' + JSON.stringify(expected.join(', '))
  )
}
