export default function def(expr, val) {
  if (val === undefined) {
    this.params.val = expr
  }
}

def.__order__ = 1e5
