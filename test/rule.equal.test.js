/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import equal from '../src/rule/equal'

describe('rule - equal', () => {
  it('should work', () => {
    expect(equal.bind(...generateArgs('key', 0, 0))).to.not.throw()
    expect(equal.bind(...generateArgs('key', '0', '0'))).to.not.throw()
    expect(equal.bind(...generateArgs('key', /0/, /0/))).to.not.throw()
    expect(equal.bind(...generateArgs('key', {}, {}))).to.not.throw()
    expect(equal.bind(...generateArgs('key', { a: 1 }, { a: 1 }))).to.not.throw()
    expect(equal.bind(...generateArgs('key', [0, 1], [0, 1]))).to.not.throw()
    expect(equal.bind(...generateArgs('key', NaN, NaN))).to.not.throw()
    expect(equal.bind(...generateArgs('key', false, false))).to.not.throw()
    expect(equal.bind(...generateArgs('key', undefined, undefined))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(equal.bind(...generateArgs('key', undefined, null))).to.throw(/AssertionError/)
    expect(equal.bind(...generateArgs('key', 1, '1'))).to.throw(/AssertionError/)
    expect(equal.bind(...generateArgs('key', [0, 1], [1, 0]))).to.throw(/AssertionError/)
  })
})
