import merge from 'lodash.merge'

import Detect from './detect'
import * as defaultRule from './rule/index'

let extendRule = {}

/**
 * go through all rules
 * @param  {Detect} detect detect instance
 * @param  {Object} suit   rule suit
 * @param  {Object} obj    key:value to be proof
 * @return {Object}        key:value that has bee proofed
 */
function process(detect, suit, obj) {
  return Object.keys(suit).reduce(
    (ret, key) => {
      let rules = suit[key]
      let target = obj[key]
      return {
        ...ret,
        [key]: detect.detect(rules, target)
      }
    }, {})
}

/**
 * proof given option
 * @param  {Object} obj  option to be proof
 * @param  {Object} suit rule suit
 * @return {Object}      option that has been proofed
 */
function proof(obj, suit) {
  let combine = { ...defaultRule, ...extendRule }
  let detect = Object.keys(combine).reduce(
    (ret, key) => ret.addRule(key, combine[key]),
    Detect
  )

  return process(detect, suit, obj)
}

proof.addRule = function (name, assert) {
  extendRule[name] = assert
  return proof
}

proof.peace = function (...args) {
  try {
    return proof.apply(null, args)
  } catch (e) {
    return {
      ...e,
      isError: true
    }
  }
}

proof.wrap = function (extend) {
  return (obj, suit) => proof(obj, merge(extend, suit))
}

export default proof
