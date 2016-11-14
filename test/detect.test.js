/* eslint-env mocha */
import Chai, { expect } from 'chai'
import AssertionError from 'assertion-error'
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
})
