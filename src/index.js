import { check } from './utils/check';
import { array } from './utils/array';
import { number } from './utils/number';
import { object } from './utils/object';
import { promise } from './utils/promise';
import { request } from './utils/request';
import { validate } from './utils/validate';

export const uCheck = check;
export const uObject = object;
export const uArray = array;
export const uNumber = number;
export const uPromise = promise;
export const uRequest = request;
export const uValidate = validate;

export default {
  check,
  object,
  array,
  number,
  promise,
  request,
  validate,
};
