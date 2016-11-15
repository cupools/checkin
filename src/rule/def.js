export default function def(expected, val) {
  if (val === undefined) {
    this.set(expected)
  }
}

def.__order__ = 1e5
