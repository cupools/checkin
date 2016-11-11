/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import isRequire from '../src/rule/isRequire'

describe('rule - isRequire', function () {
  it('should work', function () {
    expect(isRequire.bind(context, true, 0)).to.not.throw()
    expect(isRequire.bind(context, true, '0')).to.not.throw()
    expect(isRequire.bind(context, true, /0/)).to.not.throw()
    expect(isRequire.bind(context, true, {})).to.not.throw()
    expect(isRequire.bind(context, false, 0)).to.not.throw()
    expect(isRequire.bind(context, false, null)).to.not.throw()
    expect(isRequire.bind(context, false, undefined)).to.not.throw()
  })

  it('should throw AssertionError', function () {
    expect(isRequire.bind(context, true, null)).to.throw(/AssertionError/)
    expect(isRequire.bind(context, true, undefined)).to.throw(/AssertionError/)
  })
})
