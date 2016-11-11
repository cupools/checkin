/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import typeOf from '../src/rule/typeOf'

describe('rule - typeOf', function () {
  it('should work', function () {
    expect(typeOf.bind(context, 'number', 0)).to.not.throw()
    expect(typeOf.bind(context, 'string', '0')).to.not.throw()
    expect(typeOf.bind(context, 'regexp', /0/)).to.not.throw()
    expect(typeOf.bind(context, 'object', {})).to.not.throw()
    expect(typeOf.bind(context, 'array', [])).to.not.throw()
    expect(typeOf.bind(context, 'number', NaN)).to.not.throw()
    expect(typeOf.bind(context, 'null', null)).to.not.throw()
    expect(typeOf.bind(context, 'undefined', undefined)).to.not.throw()
    expect(typeOf.bind(context, ['number', 'string'], '0')).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(typeOf.bind(context, 'number', '0')).to.throw(/AssertionError/)
    expect(typeOf.bind(context, 'string', 0)).to.throw(/AssertionError/)
    expect(typeOf.bind(context, 'regexp', '/0/')).to.throw(/AssertionError/)
  })
})
