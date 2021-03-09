# Utils
Sets of utils for JS.

## How to install
```
npm install -D @dbetka/utils
```

## Base usage
You can import below sets of utils:
* check,
* object,
* array,
* promise,
* request,
* validate

in two different ways:
```js
import u from '@dbetka/utils';

u.check.isUndefined(someValue);
```
```js
import { uCheck } from '@dbetka/utils';

uCheck.isUndefined(someValue);
```

I will show you examples only in first way.

## List of utils

### Object `u.check`
Example method usage
```js
import u from '@dbetka/utils';

if (u.check.isUndefined(someValue)) {
  // do something
}
```

#### List of methods
* isUndefined
* isString
* isNumber
* isNull
* isObject
* isArray
* isFunction
* isBoolean
* isDefined
* isNotString
* isNotNumber
* isNotNull
* isNotObject
* isNotArray
* isNotFunction
* isNotBoolean

### Object `u.object`

#### Methods list
* mergeDeep

#### Example method usage for `u.object.mergeDeep`
```js
import u from '@dbetka/utils';

const firstObject = { a: 'a', b: { a: 'a', b: { a: 'a' }}}
const secondObject = { a: 'b', b: { a: 'b', b: { b: 'a' }}}
console.log(u.object.mergeDeep(firstObject, secondObject));
// returns { a: 'b', b: { a: 'b', b: { a: 'a', b: 'a' }}}
```

### Object `u.array`

#### Methods list
* removeItem
* removeItemByIndex

#### Example method usage for `u.array.removeItem`
```js
import u from '@dbetka/utils';

const array = [1, 2, 3];
console.log(u.array.removeItem(array, 1)); // return [2, 3]
```

#### Example method usage for `u.array.removeItemByIndex`
```js
import u from '@dbetka/utils';

console.log(u.array.removeItem([1, 2, 3], 1)); // return [1, 3]
```


### Object `u.promise`

#### Methods list
* timeout

#### Example method usage for `u.promise.timeout`
```js
import u from '@dbetka/utils';

const milliseconds = 2000;
u.promise.timeout(milliseconds)
  .then(() => {
    console.log('2000 milliseconds after timeout');
  })
```


### Object `u.request` 

#### Fields list
* host.

#### Methods list
* setHost
* getHost
* dataToPathVariables
* get
* post
* put
* delete

### `u.request.setHost`
It set host for each next request by this util.

Example method usage
```js
import u from '@dbetka/utils';
u.request.setHost('https://domain.com:5050');
```

### `u.request.getHost` 
It return host set earlier by setHost method.

Example method usage
```js
import u from '@dbetka/utils';
u.request.setHost('https://domain.com:5050');
u.request.getHost(); // return 'https://domain.com:5050'
```

### `u.request.dataToPathVariables` 
It transform flat objects to path variables for get requests.

Example method usage
```js
import u from '@dbetka/utils';

const data= {
  field1: 'some1',
  field2: 'some2',
};
u.request.dataToPathVariables(data); // return '?field1=some1&field2=some2'
```

### `u.request.get` 
It makes get request based on fetch. It has `'Content-Type': 'application/json'` as a default.

Example method usage
```js
import u from '@dbetka/utils';

u.request.get({
  url: '/some',
  data: {
    field1: 'some1',
    field2: 'some2',
  },
  config: {
    // you can put here configurations for fetch
  },
});
```

### `u.request.post` 
It makes post request based on fetch. It has `'Content-Type': 'application/json'` as a default.

Example method usage
```js
import u from '@dbetka/utils';

u.request.post({
  url: '/some',
  data: {
    field1: 'some1',
    field2: 'some2',
  },
  config: {
    // you can put here configurations for fetch
  },
});
```

### `u.request.put` 
It makes put request based on fetch. It has `'Content-Type': 'application/json'` as a default.

Example method usage
```js
import u from '@dbetka/utils';

u.request.put({
  url: '/some',
  data: {
    field1: 'some1',
    field2: 'some2',
  },
  config: {
    // you can put here configurations for fetch
  },
});
```

### `u.request.delete` 
It makes delete request based on fetch. It has `'Content-Type': 'application/json'` as a default.

Example method usage
```js
import u from '@dbetka/utils';

u.request.delete({
  url: '/some',
  data: {
    field1: 'some1',
    field2: 'some2',
  },
  config: {
    // you can put here configurations for fetch
  },
});
```

### Object `u.validate` 
Example method usage
```js
import u from '@dbetka/utils';

if (u.check.isUndefined(someValue)) {
  // do something
}
```

#### Methods list
* hasNumber
* hasNotNumber
* isEmail
* isNotEmail
* isLonger
* isShorter
* isNullOrEmpty
* isUndefined
* inRange
* inNotRange
* contain
* notContain
* isBoolean
* isNotBoolean
