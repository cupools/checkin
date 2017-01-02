/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import within from '../src/rule/within'

describe('rule - within', () => {
  it('should work', () => {
    expect(within.bind(...generateArgs('key', [0, 1], 0))).to.not.throw()
    expect(within.bind(...generateArgs('key', [0, 1], 0.5))).to.not.throw()
    expect(within.bind(...generateArgs('key', [0, 1], 1))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(within.bind(...generateArgs('key', [0, 1], 2))).to.throw(/AssertionError/)
    expect(within.bind(...generateArgs('key', [0, 1], -1))).to.throw(/AssertionError/)
  })
})
