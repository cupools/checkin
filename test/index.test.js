/* eslint-env mocha */
import Chai, { expect } from 'chai'
import AssertionError from 'assertion-error'
import proof from '../src/index'

Chai.should()

describe('index', function () {
  it('should work', function () {
    let obj = { a: '0' }

    expect(
      proof(obj, {
        a: { typeOf: 'string' }
      })
    ).to.eql(obj)

    expect(
      proof.bind(null, obj, {
        a: { typeOf: 'number' }
      })
    ).to.not.throw(AssertionError)
  })
})
