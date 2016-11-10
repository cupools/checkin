import detect from './detect'
import typeOf from './assert/typeOf'

function lint(obj, suit) {
  detect.addRule('typeOf', typeOf)

  Object.keys(suit).forEach(key => {
    let rules = suit[key]
    let target = obj[key]
    detect(rules, target)
  })

  return true
}

lint.wrap = function (extend) {
  return (obj, suit) => lint(obj, { ...extend, ...suit })
}

export default lint
