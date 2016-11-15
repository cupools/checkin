import Assert from 'assert'
import sortBy from 'lodash.sortby'

class Detect {
  constructor(rules) {
    this.rules = rules
  }
  detect(suit, val) {
    return detect.call(null, this.rules, sort(this.rules, suit), val)
  }
  addRule(name, assert) {
    return new Detect({ ...this.rules, [name]: assert })
  }
}

function detect(rules, suit, val) {
  console.log(suit, val)
  return Object.keys(suit).reduce(
    (ret, ruleName) => {
      let condition = suit[ruleName]
      let rule = rules[ruleName]
      let rewrite = newVal => (ret = newVal)

      if (rule) {
        rule.call({ assert: Assert.ok, set: rewrite }, condition, ret)
      } else {
        console.log('rule `%s` not found', ruleName)
      }

      return ret
    },
    val
  )
}

function sort(rules, suit) {
  let orderKey = sortBy(
    Object.keys(suit),
    key => rules[key] ? ((0 - rules[key].__order__) || 0) : 0
  )
  return orderKey.reduce(
    (ret, key) => Object.assign({}, ret, { [key]: suit[key] }),
    {}
  )
}

export default new Detect()
