/* eslint-env mocha */
import { expect } from 'chai'
import { context } from './common'

import coerce from '../src/rule/coerce'

describe('rule - coerce', function () {
  it('should work', function () {
    let ctx = null

    ctx = Object.create(context)
    expect(coerce.bind(ctx, () => 0, 1)).to.not.throw()
    expect(ctx.__newVal__).to.equal(0)

    ctx = Object.create(context)
    expect(coerce.bind(ctx, () => 0)).to.not.throw()
    expect(ctx.__newVal__).to.equal(null)
  })
})
