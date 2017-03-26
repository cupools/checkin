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
  // Array.prototype.sort is not stable in v8
  // So we use index to correct the sort result
  // https://bugs.chromium.org/p/v8/issues/detail?id=90
  const mirror = Object.keys(suit).reduce(
    (ret, key, __idx) => ({ ...ret, [key]: { ...suit[key], __idx } }),
    {}
  )
  const orderKey = Object.keys(mirror).sort(
    (a, b) => {
      const orderA = (rules[a] && rules[a].__order__) || 0
      const orderB = (rules[b] && rules[b].__order__) || 0
      return orderA === orderB ? (mirror[b].__idx - mirror[a].__idx) : (orderB - orderA)
    }
  )

  return orderKey.reduce(
    (ret, key) => ({ ...ret, [key]: suit[key] }),
    {}
  )
}

export default new Detect()
