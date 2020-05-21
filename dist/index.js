/*!
 * @dominik.betka/utils v0.0.1
 * (c) dominik.betka
 * Released under the MIT License.
 */
'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var logical = {
  isUndefined: function isUndefined(value) {
    return typeof value === 'undefined';
  },
  isString: function isString(value) {
    return typeof value === 'string';
  },
  isNumber: function isNumber(value) {
    return typeof value === 'number';
  },
  isNull: function isNull(value) {
    return value === null;
  },
  isObject: function isObject(value) {
    return _typeof(value) === 'object' && logical.isNotNull(value);
  },
  isArray: function isArray(value) {
    return Array.isArray(value);
  },
  isFunction: function isFunction(value) {
    return typeof value === 'function';
  },
  isBoolean: function isBoolean(value) {
    return typeof value === 'boolean';
  },
  isDefined: function isDefined(value) {
    return logical.isUndefined(value) === false;
  },
  isNotString: function isNotString(value) {
    return logical.isString(value) === false;
  },
  isNotNumber: function isNotNumber(value) {
    return logical.isNumber(value) === false;
  },
  isNotNull: function isNotNull(value) {
    return logical.isNull(value) === false;
  },
  isNotObject: function isNotObject(value) {
    return logical.isObject(value) === false;
  },
  isNotArray: function isNotArray(value) {
    return logical.isArray(value) === false;
  },
  isNotFunction: function isNotFunction(value) {
    return logical.isFunction(value) === false;
  },
  isNotBoolean: function isNotBoolean(value) {
    return logical.isBoolean(value) === false;
  }
};

var index = {
  logical: logical
};

module.exports = index;
