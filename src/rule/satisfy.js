export default function satisfy(fn, val) {
  this.assert(
    fn(val),
    JSON.stringify(val) + ' should be satify to given function'
  )
}
