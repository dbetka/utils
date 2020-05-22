import { check } from './utils/check';
import { array } from './utils/array';
import { promise } from './utils/promise';
import { request } from './utils/request';
import { validate } from './utils/validate';

export const uCheck = check
export const uArray = array
export const uPromise = promise
export const uRequest = request
export const uValidate = validate

export default {
  check,
  array,
  promise,
  request,
  validate,
};

