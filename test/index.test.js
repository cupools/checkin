/* eslint-env mocha */
import Chai from 'chai'
import optionLint from '../src/index'

Chai.should()

describe('index', function () {
  it('should work', function () {
    let suit = {
      a: { typeOf: 'string' }
    }
    optionLint({ a: '000' }, suit).should.equal(true)
  })
})
