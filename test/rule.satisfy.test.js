/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import satisfy from '../src/rule/satisfy'

describe('rule - satisfy', () => {
  it('should work', () => {
    expect(satisfy.bind(...generateArgs('key', () => true, 1))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(satisfy.bind(...generateArgs('key', () => false, 1))).to.throw(/AssertionError/)
  })
})
