import Chai from 'chai'
import AssertionError from 'assertion-error'
import assert from 'assert'

Chai.should()

export { AssertionError }
export const context = {
  __newVal__: null,
  assert: assert.ok,
  set: function(val) {
    this.__newVal__ = val
  }
}
