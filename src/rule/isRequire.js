export default function typeOf(decl, val) {
  if (decl) {
    this.assert(
      val != null,
      JSON.stringify(val) + ' should not be ignore'
    )
  }
}
