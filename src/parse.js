import Assert from 'assert'

const context = { assert: Assert.ok }
let rules = {}

export const addRule = function (name, assert) {
  rules[name] = assert
}

export const parse = function (suit) {
  Object.keys(suit).forEach(ruleName => {
    let assert = rules[ruleName]
    if (assert) {
      assert.call(context)
    }
  })
}
