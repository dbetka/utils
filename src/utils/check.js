export const check = {
  isUndefined: value => typeof value === 'undefined',
  isString: value => typeof value === 'string',
  isNumber: value => typeof value === 'number',
  isNull: value => value === null,
  isObject: value => typeof value === 'object' && check.isNotNull(value),
  isArray: value => Array.isArray(value),
  isFunction: value => typeof value === 'function',
  isBoolean: value => typeof value === 'boolean',
  isDefined: value => check.isUndefined(value) === false,

  isNotString: value => check.isString(value) === false,
  isNotNumber: value => check.isNumber(value) === false,
  isNotNull: value => check.isNull(value) === false,
  isNotObject: value => check.isObject(value) === false,
  isNotArray: value => check.isArray(value) === false,
  isNotFunction: value => check.isFunction(value) === false,
  isNotBoolean: value => check.isBoolean(value) === false,
};
