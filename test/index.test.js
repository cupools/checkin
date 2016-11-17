/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import proof from '../src/index'

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
    ).to.throw(/AssertionError/)
  })
})
