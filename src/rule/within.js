export default function within(decl, val) {
  const [start, end] = decl

  this.params.operate = `be within ${start}..${end}`
  this.params.showDiff = true
  this.assert(
    start <= val && val <= end
  )
}
