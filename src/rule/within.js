export default function within(decl, val) {
  const [start, end] = decl
  this.assert(
    start <= val && val <= end,
    JSON.stringify(val) + ' should be within ' + start + ' and ' + end
  )
}
