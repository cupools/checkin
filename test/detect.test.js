/* eslint-env mocha */
import Chai, { expect } from 'chai'
import Detect from '../src/detect'
import * as defaultRule from '../src/rule/index'

Chai.should()

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
})
