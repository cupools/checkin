import Detect from './detect'
import typeOf from './rule/typeOf'

function process(detect, suit, obj) {
  Object.keys(suit).forEach(key => {
    let rules = suit[key]
    let target = obj[key]
    detect.detect(rules, target)
  })

  return true
}

export default function lint(obj, suit) {
  let detect = Detect
    .addRule('typeOf', typeOf)

  return process(detect, suit, obj)
}
