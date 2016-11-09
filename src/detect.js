import Assert from 'assert'

const context = { assert: Assert.ok }
let rules = {}

function detect(suit, obj) {
  Object.keys(suit).forEach(ruleName => {
    let condition = suit[ruleName]
    let rule = rules[ruleName]

    if (rule) {
      rule.call(context, condition, obj)
    } else {
      console.log('rule `%s` not found', ruleName)
    }
  })
}

detect.addRule = function (name, assert) {
  rules[name] = assert
  return detect
}

export default detect
