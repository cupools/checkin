/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import satisfy from '../src/rule/satisfy'

describe('rule - satisfy', function () {
  it('should work', function () {
    expect(satisfy.bind(context, () => true, 1)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(satisfy.bind(context, () => false, 1)).to.throw(/AssertionError/)
  })
})
