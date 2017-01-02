import AssertionError from 'assertion-error'
import format from 'should-format'

export default class Rule {
  constructor(params) {
    this.params = {
      key: '',
      val: undefined,
      expected: undefined,
      operate: '',
      showDiff: false,
      ...params
    }
  }
  assert(expr) {
    if (expr) {
      return
    }
    throw generateError(this.params)
  }
}

function generateError(params) {
  const { key, val, expected, operate, showDiff } = params
  const expectedMsg = expected !== undefined ? ' ' + format(expected) : ''
  const diffMsg = showDiff ? ' but get ' + format(val) : ''
  const message = `expected ${key} to ${operate}` + expectedMsg + diffMsg
  return new AssertionError(message)
}
