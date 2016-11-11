/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import within from '../src/rule/within'

describe('rule - within', function () {
  it('should work', function () {
    expect(within.bind(context, [0, 1], 0)).to.not.throw()
    expect(within.bind(context, [0, 1], 0.5)).to.not.throw()
    expect(within.bind(context, [0, 1], 1)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(within.bind(context, [0, 1], 2)).to.throw(/AssertionError/)
    expect(within.bind(context, [0, 1], -1)).to.throw(/AssertionError/)
  })
})
