## proof

Lint option and merge with default value

## Todo

- [x] Basic function
- [x] Extensible rule support
- [ ] More
- [ ] Test coverage
- [ ] Documentation

## Getting Started

```js
import proof from 'proof'

const option = {
  filename: 'test.png',
  size: '20',
  tag: 'icon'
}
const suit = {
  filename: {
    typeOf: 'string',
    isRequire: true
  },
  size: {
    typeOf: 'number',
    coerce: val => Number(val),
    within: [1, 20]
  },
  tag: {
    def: 'icon',
    oneOf: ['icon', 'human']
  },
  color: {
    def: 'red',
    typeOf: ['string', 'number']
  }
}

proof(option, suit)
//=> { filename: 'test.png', size: 20, size: 20, color: 'red' }
```