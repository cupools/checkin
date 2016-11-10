import Assert from 'assert'

const context = { assert: Assert.ok }

class Detect {
  constructor(rules) {
    this.rules = rules
  }
  detect(suit, obj) {
    return detect.call(null, this.rules, suit, obj) && this
  }
  addRule(name, assert) {
    return new Detect({ ...this.rules, [name]: assert })
  }
}

function detect(rules, suit, obj) {
  Object.keys(suit).forEach(ruleName => {
    let condition = suit[ruleName]
    let rule = rules[ruleName]

    if (rule) {
      rule.call(context, condition, obj)
    } else {
      console.log('rule `%s` not found', ruleName)
    }
  })
  return true
}

export default new Detect()
