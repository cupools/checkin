/* eslint-env mocha */
import Chai, { expect } from 'chai'
import AssertionError from 'assertion-error'
import optionLint from '../src/index'

Chai.should()

describe('index', function () {
  it('should work', function () {
    let obj = { a: '0' }

    expect(
      optionLint(obj, {
        a: { typeOf: 'string' }
      })
    ).to.equal(true)

    expect(
      optionLint.bind(null, obj, {
        a: { typeOf: 'number' }
      })
    ).to.not.throw(AssertionError)
  })
})
