import merge from 'lodash.merge'

import Detect from './detect'
import * as defaultRule from './rule/index'

// eslint-disable-next-line prefer-const
let extendRule = {}

/**
 * go through all rules
 * @param  {Detect} detect detect instance
 * @param  {Object} suit   rule suit
 * @param  {Object} obj    obj to be proof
 * @return {Object}        obj that has bee proofed
 */
function process(detect, suits, obj) {
  return Object.keys(suits).reduce(
    (ret, key) => {
      const suit = suits[key]
      return {
        ...ret,
        [key]: detect.detect(key, suit, obj[key])
      }
    }, obj)
}

/**
 * proof given option
 * @param  {Object} obj  option to be proof
 * @param  {Object} suit rule suit
 * @return {Object}      option that has been proofed
 */
function proof(obj, suit) {
  const combine = { ...defaultRule, ...extendRule }
  const detect = Object.keys(combine).reduce(
    (ret, key) => ret.addRule(key, combine[key]),
    Detect
  )

  return process(detect, suit, obj)
}

proof.wrap = function wrap(extend) {
  return (obj, suit) => proof(obj, merge(extend, suit))
}

export default proof
