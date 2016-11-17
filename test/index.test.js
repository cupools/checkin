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

  it('p should works', function(done) {
    let obj = { a: 1 }

    proof.p(obj, { a: { typeOf: 'number' } }).then(ret => {
      expect(ret).to.eql(obj)
      done()
    })

    proof.p(obj, { a: { typeOf: 'string' } }).catch(e => {
      expect(e).to.be.an('error')
      done()
    })
  })
})
