/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import checkin from '../src/index'

describe('index', () => {
  it('should work', () => {
    const obj = { a: '0' }

    expect(
      checkin(obj, {
        a: { typeOf: 'string' }
      })
    ).to.eql(obj)

    expect(
      checkin.bind(null, obj, {
        a: { typeOf: 'number' }
      })
    ).to.throw(/AssertionError/)

    expect(
      checkin({}, {
        a: { default: 1 }
      })
    ).to.eql({ a: 1 })
  })

  it('should reserve origin keys miss in suit', () => {
    const obj = { a: '0', b: 1 }

    expect(
      checkin(obj, {
        a: { typeOf: 'string' }
      })
    ).to.eql(obj)
  })
})
