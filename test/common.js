import Chai from 'chai'
import AssertionError from 'assertion-error'
import assert from 'assert'

Chai.should()

export { AssertionError }
export const context = { assert: assert.ok }
