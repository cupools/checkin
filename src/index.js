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

export const addRule = function (name, assert) {
  extendRule[name] = assert
  return proof
}

export const p = function (...args) {
  return new Promise(
    (resolve, reject) => {
      try {
        let ret = proof.apply(null, args)
        resolve(ret)
      } catch (e) {
        reject(e)
      }
    }
  )
}

export const wrap = function (extend) {
  return (obj, suit) => proof(obj, Object.assign({}, extend, suit))
}

export default proof
