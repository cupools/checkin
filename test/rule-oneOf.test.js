/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import oneOf from '../src/rule/oneOf'

describe('rule - oneOf', function () {
  it('should work', function () {
    expect(oneOf.bind(context, [0, 1], 0)).to.not.throw()
    expect(oneOf.bind(context, [1, 0], 0)).to.not.throw()
    expect(oneOf.bind(context, 0, 0)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(oneOf.bind(context, [0, 1], '0')).to.throw(/AssertionError/)
    expect(oneOf.bind(context, [1], 0)).to.throw(/AssertionError/)
    expect(oneOf.bind(context, [], 0)).to.throw(/AssertionError/)
  })
})
