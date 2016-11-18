/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import required from '../src/rule/required'

describe('rule - required', function () {
  it('should work', function () {
    expect(required.bind(context, true, 0)).to.not.throw()
    expect(required.bind(context, true, '0')).to.not.throw()
    expect(required.bind(context, true, /0/)).to.not.throw()
    expect(required.bind(context, true, {})).to.not.throw()
    expect(required.bind(context, false, 0)).to.not.throw()
    expect(required.bind(context, false, null)).to.not.throw()
    expect(required.bind(context, false, undefined)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(required.bind(context, true, null)).to.throw(/AssertionError/)
    expect(required.bind(context, true, undefined)).to.throw(/AssertionError/)
  })
})
