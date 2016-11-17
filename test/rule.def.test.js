/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import def from '../src/rule/def'

describe('rule - def', function () {
  it('should work', function () {
    let ctx = null

    ctx = Object.create(context)
    expect(def.bind(ctx, 0)).to.not.throw()
    expect(ctx.__newVal__).to.equal(0)

    ctx = Object.create(context)
    expect(def.bind(ctx, 1)).to.not.throw()
    expect(ctx.__newVal__).to.equal(1)

    ctx = Object.create(context)
    expect(def.bind(ctx, 1, 0)).to.not.throw()
    expect(ctx.__newVal__).to.equal(null)
  })
})
