export default function coerce(fn, val) {
  if (val !== undefined) {
    this.set(fn(val))
  }
}
