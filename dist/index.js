/*!
 * @dbetka/utils v0.1.1
 * (c) dbetka
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var check = {
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
    return _typeof(value) === 'object' && check.isNotNull(value);
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
    return check.isUndefined(value) === false;
  },
  isNotString: function isNotString(value) {
    return check.isString(value) === false;
  },
  isNotNumber: function isNotNumber(value) {
    return check.isNumber(value) === false;
  },
  isNotNull: function isNotNull(value) {
    return check.isNull(value) === false;
  },
  isNotObject: function isNotObject(value) {
    return check.isObject(value) === false;
  },
  isNotArray: function isNotArray(value) {
    return check.isArray(value) === false;
  },
  isNotFunction: function isNotFunction(value) {
    return check.isFunction(value) === false;
  },
  isNotBoolean: function isNotBoolean(value) {
    return check.isBoolean(value) === false;
  }
};

var array = {
  removeItem: function removeItem(array, toRemove) {
    var indexToRemove = array.indexOf(toRemove);
    return array.splice(indexToRemove, 1);
  },
  removeItemByIndex: function removeItemByIndex(array, indexToRemove) {
    return array.splice(indexToRemove, 1);
  }
};

var promise = {
  timeout: function timeout(_timeout) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, _timeout);
    });
  }
};

var requestHost = '';

function makeFetch(_ref) {
  var url = _ref.url,
      config = _ref.config;
  return new Promise(function (resolve, reject) {
    fetch(url, Object.assign(Object.assign({}, config), {}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })).then(resolve)["catch"](reject);
  });
}

function addBodyToConfig(config, data) {
  if (check.isDefined(data)) {
    config.body = JSON.stringify(data);
  }
}

var request = {
  setHost: function setHost(newHost) {
    requestHost = newHost;
  },
  getHost: function getHost() {
    return requestHost;
  },
  dataToPathVariables: function dataToPathVariables(data) {
    var pathData = '';

    if (Object.keys(data).length > 0) {
      pathData += '?';
      pathData += Object.entries(data).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        return key + '=' + val;
      }).join('&');
    }

    return pathData;
  },
  get: function get(_ref4) {
    var _ref4$url = _ref4.url,
        url = _ref4$url === void 0 ? '/' : _ref4$url,
        _ref4$data = _ref4.data,
        data = _ref4$data === void 0 ? {} : _ref4$data,
        _ref4$config = _ref4.config,
        config = _ref4$config === void 0 ? {} : _ref4$config;
    var pathVariables = request.dataToPathVariables(data);
    var fullUrl = requestHost + url + pathVariables;
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'GET'
      }, config)
    });
  },
  post: function post(_ref5) {
    var _ref5$url = _ref5.url,
        url = _ref5$url === void 0 ? '/' : _ref5$url,
        data = _ref5.data,
        _ref5$config = _ref5.config,
        config = _ref5$config === void 0 ? {} : _ref5$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'POST'
      }, config)
    });
  },
  put: function put(_ref6) {
    var _ref6$url = _ref6.url,
        url = _ref6$url === void 0 ? '/' : _ref6$url,
        _ref6$data = _ref6.data,
        data = _ref6$data === void 0 ? {} : _ref6$data,
        _ref6$config = _ref6.config,
        config = _ref6$config === void 0 ? {} : _ref6$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'PUT'
      }, config)
    });
  },
  "delete": function _delete(_ref7) {
    var _ref7$url = _ref7.url,
        url = _ref7$url === void 0 ? '/' : _ref7$url,
        _ref7$data = _ref7.data,
        data = _ref7$data === void 0 ? {} : _ref7$data,
        _ref7$config = _ref7.config,
        config = _ref7$config === void 0 ? {} : _ref7$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'DELETE'
      }, config)
    });
  }
};

var validate = {
  hasNumber: function hasNumber(data) {
    return /\d/.test(data);
  },
  hasNotNumber: function hasNotNumber(data) {
    return !this.hasNumber(data);
  },
  isEmail: function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  isNotEmail: function isNotEmail(email) {
    return !this.isEmail(email);
  },
  isLonger: function isLonger(data, length) {
    return data.length > length;
  },
  isShorter: function isShorter(data, length) {
    return data && data.length ? data.length < length : true;
  },
  isNullOrEmpty: function isNullOrEmpty(data) {
    return ['', undefined, null].includes(data);
  },
  isUndefined: function isUndefined(data) {
    return check.isUndefined(data);
  },
  inRange: function inRange(value, start, end) {
    return value >= start && value <= end;
  },
  inNotRange: function inNotRange(value, start, end) {
    return !this.inRange(value, start, end);
  },
  contain: function contain(value, array) {
    return array.includes(value);
  },
  notContain: function notContain(value, array) {
    return !this.contain(value, array);
  },
  isBoolean: function isBoolean(value) {
    return check.isBoolean(value);
  },
  isNotBoolean: function isNotBoolean(value) {
    return check.isNotBoolean(value);
  }
};

var uCheck = check;
var uArray = array;
var uPromise = promise;
var uRequest = request;
var uValidate = validate;
var index = {
  check: check,
  array: array,
  promise: promise,
  request: request,
  validate: validate
};

exports.default = index;
exports.uArray = uArray;
exports.uCheck = uCheck;
exports.uPromise = uPromise;
exports.uRequest = uRequest;
exports.uValidate = uValidate;
