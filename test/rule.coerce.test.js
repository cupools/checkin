/* eslint-env mocha */
import { expect } from 'chai'
import { generateArgs } from './common'

import coerce from '../src/rule/coerce'

describe('rule - coerce', () => {
  it('should work', () => {
    const [context, ...args] = generateArgs('key', () => 0, 1)
    expect(coerce.bind(context, ...args)).to.not.throw()
    expect(context.params.val).to.equal(0)
  })
})
