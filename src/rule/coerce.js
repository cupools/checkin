export default function coerce(fn, val) {
  if (val !== undefined) {
    this.params.val = fn(val)
  }
}

coerce.__order__ = 1e4
