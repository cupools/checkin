/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import Detect from '../src/detect'
import * as defaultRule from '../src/rule/index'

describe('detect', () => {
  it('should work', () => {
    const wrap = Detect.addRule('coerce', defaultRule.coerce)
    const detect = wrap.detect.bind(wrap, 'key', { coerce: val => val + 1 })

    expect(
      detect(0)
    ).to.equal(1)
  })

  it('should work by correct order', () => {
    const wrap = Detect
      .addRule('coerce', defaultRule.coerce)
      .addRule('def', defaultRule.def)
      .addRule('typeOf', defaultRule.typeOf)
      .addRule('oneOf', defaultRule.oneOf)
    const detect = wrap.detect.bind(wrap, 'key', { coerce: val => val + 1, def: 1, typeOf: 'number', oneOf: [2] })

    expect(
      detect(undefined)
    ).to.equal(2)
  })

  it('should work with unexist rule', () => {
    const wrap = Detect
    const detect = wrap.detect.bind(wrap, 'key', { coerce: () => 1 })

    expect(
      detect(0)
    ).to.equal(0)
  })
})
