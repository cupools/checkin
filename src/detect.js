import Assert from 'assert'

class Detect {
  constructor(rules) {
    this.rules = rules
  }
  detect(suit, val) {
    return detect.call(null, this.rules, suit, val)
  }
  addRule(name, assert) {
    return new Detect({ ...this.rules, [name]: assert })
  }
}

function detect(rules, suit, val) {
  return Object.keys(suit).reduce(
    (ret, ruleName) => {
      let condition = suit[ruleName]
      let rule = rules[ruleName]
      let rewrite = newVal => (ret = newVal)

      if (rule) {
        rule.call({ assert: Assert.ok, set: rewrite }, condition, val)
      } else {
        console.log('rule `%s` not found', ruleName)
      }

      return ret
    },
    val
  )
}

export default new Detect()
