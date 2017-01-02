export default function coerce(fn, val) {
  this.params.val = fn(val)
}

coerce.__order__ = 1e4
