/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import oneOf from '../src/rule/oneOf'

describe('rule - oneOf', () => {
  it('should work', () => {
    expect(oneOf.bind(...generateArgs('key', [0, 1], 0))).to.not.throw()
    expect(oneOf.bind(...generateArgs('key', [1, 0], 0))).to.not.throw()
    expect(oneOf.bind(...generateArgs('key', 0, 0))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(oneOf.bind(...generateArgs('key', [0, 1], '0'))).to.throw(/AssertionError/)
    expect(oneOf.bind(...generateArgs('key', [1], 0))).to.throw(/AssertionError/)
    expect(oneOf.bind(...generateArgs('key', [], 0))).to.throw(/AssertionError/)
  })
})
