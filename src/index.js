import Detect from './detect'
import * as defaultRule from './rule/index'

let extendRule = {}

function process(detect, suit, obj) {
  Object.keys(suit).forEach(key => {
    let rules = suit[key]
    let target = obj[key]
    detect.detect(rules, target)
  })

  return true
}

function lint(obj, suit) {
  let combine = { ...defaultRule, ...extendRule }
  let detect = Object.keys(combine).reduce(
    (ret, key) => ret.addRule(key, combine[key]),
    Detect
  )

  return process(detect, suit, obj)
}

export const wrap = function (extend) {
  return (obj, suit) => lint(obj, Object.assign({}, extend, suit))
}

export const addRule = function (name, assert) {
  extendRule[name] = assert
  return lint
}

export default lint
