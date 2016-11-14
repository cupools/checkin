export default function def(expected, val) {
  if (val === undefined) {
    this.set(expected)
  }
}
