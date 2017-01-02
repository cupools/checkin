/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import def from '../src/rule/def'

describe('rule - def', () => {
  it('should work', () => {
    const [context, ...args] = generateArgs('key', 0, undefined)
    expect(def.bind(context, ...args)).to.not.throw()
    expect(context.params.val).to.equal(0)
  })

  it('should not overwrite value', () => {
    const [context, ...args] = generateArgs('key', 0, 1)
    expect(def.bind(context, ...args)).to.not.throw()
    expect(context.params.val).to.equal(1)
  })
})
