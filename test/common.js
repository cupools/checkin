import Chai from 'chai'
import Rule from '../src/rule'

Chai.should()

export const generateArgs = (key, expr, val) => {
  const context = new Rule({ key, val })
  return [context, expr, val]
}
