import Detect from './detect'
import * as defaultRule from './rule/index'

// eslint-disable-next-line prefer-const
let extendRule = {}

/**
 * go through all rules
 * @param  {Detect} detect detect instance
 * @param  {Object} suit   rule suit
 * @param  {Object} obj    obj to be checkin
 * @return {Object}        obj that has been checkined
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
 * checkin given option
 * @param  {Object} obj  option to be checkin
 * @param  {Object} suit rule suit
 * @return {Object}      option that has been checkined
 */
function checkin(obj, suit) {
  const combine = { ...defaultRule, ...extendRule }
  const detect = Object.keys(combine).reduce(
    (ret, key) => ret.addRule(key, combine[key]),
    Detect
  )

  return process(detect, suit, obj)
}

export default checkin
