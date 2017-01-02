/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import typeOf from '../src/rule/typeOf'

describe('rule - typeOf', () => {
  it('should work', () => {
    expect(typeOf.bind(...generateArgs('key', 'number', 0))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'string', '0'))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'regexp', /0/))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'object', {}))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'array', []))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'number', NaN))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'null', null))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', 'undefined', undefined))).to.not.throw()
    expect(typeOf.bind(...generateArgs('key', ['number', 'string'], '0'))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(typeOf.bind(...generateArgs('key', 'number', '0'))).to.throw(/AssertionError/)
    expect(typeOf.bind(...generateArgs('key', 'string', 0))).to.throw(/AssertionError/)
    expect(typeOf.bind(...generateArgs('key', 'regexp', '/0/'))).to.throw(/AssertionError/)
  })
})
