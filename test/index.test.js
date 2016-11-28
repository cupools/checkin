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

    expect(
      proof({}, {
        a: { default: 1 }
      })
    ).to.eql({ a: 1 })
  })

  it('should reserve origin keys miss in suit', function () {
    let obj = { a: '0', b: 1 }

    expect(
      proof(obj, {
        a: { typeOf: 'string' }
      })
    ).to.eql(obj)
  })

  it('addRule should works', function () {
    let obj = { a: 1 }

    expect(
      proof.addRule('test', function(val) { this.assert(val === 1) })(obj, {
        a: { test: 1 }
      })
    ).to.eql(obj)
  })

  it('wrap should works', function() {
    let obj = { a: 1 }

    expect(
      proof.wrap({
        a: { equal: 2 }
      })(obj, {
        a: { coerce: val => val + 1 }
      })
    ).to.eql({ a: 2 })
  })

  it('assert should works', function() {
    expect(
      proof.assert(1, { typeOf: 'number' })
    ).to.equal(1)

    expect(
      proof.assert.bind(proof, 1, { typeOf: 'string' })
    ).to.throw(/AssertionError/)
  })

  it('peace should works', function() {
    let obj = { a: 1 }

    expect(
      proof.peace(obj, { a: { typeOf: 'number' } })
    ).to.eql(obj)

    expect(
      proof.peace(obj, { a: { typeOf: 'string' } })
    ).to.have.property('isError')
  })
})
