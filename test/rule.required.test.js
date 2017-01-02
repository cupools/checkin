/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import required from '../src/rule/required'

describe('rule - required', () => {
  it('should work', () => {
    expect(required.bind(...generateArgs('key', true, 0))).to.not.throw()
    expect(required.bind(...generateArgs('key', true, '0'))).to.not.throw()
    expect(required.bind(...generateArgs('key', true, /0/))).to.not.throw()
    expect(required.bind(...generateArgs('key', true, {}))).to.not.throw()
    expect(required.bind(...generateArgs('key', true, null))).to.not.throw()
    expect(required.bind(...generateArgs('key', false, 0))).to.not.throw()
    expect(required.bind(...generateArgs('key', false, null))).to.not.throw()
    expect(required.bind(...generateArgs('key', false, undefined))).to.not.throw()
  })

  it('should throw AssertionError', () => {
    expect(required.bind(...generateArgs('key', true, undefined))).to.throw(/AssertionError/)
  })
})
