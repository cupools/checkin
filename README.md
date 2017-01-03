## checkin

[![Build Status](https://travis-ci.org/cupools/checkin.svg?branch=master)](https://travis-ci.org/cupools/checkin) [![Coverage Status](https://coveralls.io/repos/github/cupools/checkin/badge.svg?branch=master)](https://coveralls.io/github/cupools/checkin?branch=master)

Lint option and merge with default value

## Getting Started

```bash
$ npm install --save-dev checkin
```

```js
import checkin from 'checkin'

const option = {
  filename: 'test.png',
  size: '20',
  tag: 'icon'
}
const lint = {
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

const expected = checkin(option, lint)
//=> { filename: 'test.png', size: 20, size: 20, color: 'red' }
```
## Rules

### coerce

Return a new value by given function.

```js
const obj = { foo: 1 }
const lint = {
  foo: {
    coerce: val => val + 1
  }
}
const expected = checkin(obj, lint)
// => { foo: 2 }
```

### default (alias: def)

Return a default value when the key is undefined.

```js
const obj = {}
const lint = {
  foo: {
    default: 1
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

### equal

Check by deep equal.

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    equal: 1
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    equal: 2
  }
}
const expected = checkin(obj, lint)
// => throw AssertionError: expected foo to to be equal to 2
```

### oneOf

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    oneOf: [1, 2]
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    oneOf: [3]
  }
}
const expected = checkin(obj, lint)
// => throw AssertionError: expected foo to to be one of Array [ 3 ]
```

### required

Check if the parameter is defined.

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    required: true
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

### satisfy

Check if the parameter is satifsy to the given function.

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    satisfy: val => val > 0
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

### typeOf

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    typeOf: ['string', 'number']
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

### within

```js
const obj ={ foo: 1 }
const lint = {
  foo: {
    within: [0, 2]
  }
}
const expected = checkin(obj, lint)
// => { foo: 1 }
```

## Test

```bash
$ npm i && npm test
```

## License

MIT