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
    throw this.generateError(this.params)
  }
  generateError(params) {
    const { key, val, expected, operate, showDiff } = params
    const message = `expected [${key}] to ${operate} ${format(expected)} ${showDiff ? 'but get ' + format(val) : ''}`
    return new AssertionError(message)
  }
}
