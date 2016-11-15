export default function satisfy(fn, val) {
  this.asset(
    fn(val),
    JSON.stringify(val) + ' should be satify to ' + JSON.stringify(fn)
  )
}
