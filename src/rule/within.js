export default function typeOf(decl, val) {
  let [start, end] = decl
  this.assert(
    start <= val && val <= end,
    JSON.stringify(val) + ' should be within ' + start + ' and ' + end
  )
}
