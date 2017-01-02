export default function satisfy(fn, val) {
  this.params.operate = 'be satisfy to'
  this.params.expected = fn
  this.assert(
    fn(val)
  )
}
