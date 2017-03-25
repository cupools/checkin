import Rule from './rule'

class Detect {
  constructor(rules = {}) {
    this.rules = rules
  }
  detect(key, suit, val) {
    return detect.call(null, this.rules, key, sort(this.rules, suit), val)
  }
  addRule(name, assert) {
    return new Detect({ ...this.rules, [name]: assert })
  }
}

function detect(rules, key, suit, val) {
  return Object.keys(suit).reduce(
    (ret, ruleName) => {
      const expr = suit[ruleName]
      const rule = rules[ruleName]

      if (!rule) {
        return ret
      }

      const context = new Rule({ key, val: ret })
      rule.call(context, expr, ret)

      return context.params.val
    },
    val
  )
}

function sort(rules, suit) {
  const orderKey = Object.keys(suit).sort(
    key => (rules[key] && rules[key].__order__ ? -rules[key].__order__ : 0)
  )
  return orderKey.reduce(
    (ret, key) => Object.assign({}, ret, { [key]: suit[key] }),
    {}
  )
}

export default new Detect()
