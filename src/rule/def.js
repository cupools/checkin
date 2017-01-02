export default function def(expected, val) {
  if (val === undefined) {
    this.params.val = expected
  }
}

def.__order__ = 1e5
