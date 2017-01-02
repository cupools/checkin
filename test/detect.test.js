/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import Detect from '../src/detect'
import * as defaultRule from '../src/rule/index'

describe.only('detect', () => {
  it('should work', () => {
    const wrap = Detect.addRule('coerce', defaultRule.coerce)
    const detect = wrap.detect.bind(wrap, 'key', { coerce: val => val + 1 })

    expect(
      detect(0)
    ).to.equal(1)
  })

  it('should work by correct order', () => {
    const wrap = Detect.addRule('coerce', defaultRule.coerce).addRule('def', defaultRule.def)
    const detect = wrap.detect.bind(wrap, 'key', { coerce: val => val + 1, def: 1 })

    expect(
      detect(undefined)
    ).to.equal(2)
  })
})
