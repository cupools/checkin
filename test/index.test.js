/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import proof from '../src/index'

describe('index', () => {
  it('should work', () => {
    const obj = { a: '0' }

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

    expect(
      proof({}, {
        a: { default: 1 }
      })
    ).to.eql({ a: 1 })
  })

  it('should reserve origin keys miss in suit', () => {
    const obj = { a: '0', b: 1 }

    expect(
      proof(obj, {
        a: { typeOf: 'string' }
      })
    ).to.eql(obj)
  })

  it('wrap should works', () => {
    const obj = { a: 1 }

    expect(
      proof.wrap({
        a: { equal: 2 }
      })(obj, {
        a: { coerce: val => val + 1 }
      })
    ).to.eql({ a: 2 })
  })
})
