/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import equal from '../src/rule/equal'

describe('rule - equal', function () {
  it('should work', function () {
    expect(equal.bind(context, 0, 0)).to.not.throw()
    expect(equal.bind(context, '0', '0')).to.not.throw()
    expect(equal.bind(context, /0/, /0/)).to.not.throw()
    expect(equal.bind(context, {}, {})).to.not.throw()
    expect(equal.bind(context, { a: 1 }, { a: 1 })).to.not.throw()
    expect(equal.bind(context, [0, 1], [0, 1])).to.not.throw()
    expect(equal.bind(context, NaN, NaN)).to.not.throw()
    expect(equal.bind(context, false, false)).to.not.throw()
    expect(equal.bind(context, undefined, undefined)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(equal.bind(context, undefined, null)).to.throw(/AssertionError/)
    expect(equal.bind(context, 1, '1')).to.throw(/AssertionError/)
    expect(equal.bind(context, [0, 1], [1, 0])).to.throw(/AssertionError/)
  })
})
