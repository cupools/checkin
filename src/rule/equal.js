import deepEql from 'deep-eql'

export default function equal(expected, val) {
  this.assert(
    deepEql(expected, val),
    JSON.stringify(expected) + ' should be equal to ' + JSON.stringify(val)
  )
}
