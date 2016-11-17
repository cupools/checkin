/* eslint-env mocha */
import { expect } from 'chai'
import './common'
import Detect from '../src/detect'
import * as defaultRule from '../src/rule/index'

describe('detect', function () {
  it('should work', function () {
    let wrap = Detect.addRule('coerce', defaultRule.coerce)
    let detect = wrap.detect.bind(wrap, { coerce: val => val + 1 })

    expect(
      detect(0)
    ).to.equal(1)
  })

  it('should work by correct order', function () {
    let wrap = Detect.addRule('coerce', defaultRule.coerce).addRule('def', defaultRule.def)
    let detect = wrap.detect.bind(wrap, { coerce: val => val + 1, def: 1 })

    expect(
      detect(undefined)
    ).to.equal(2)
  })

  it('should given warning when miss rule', function () {
    expect(
      Detect.detect({ equal: 2 }, 1)
    ).to.eql(1)
  })
})
