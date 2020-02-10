"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.isCallable = isCallable;
exports.isSameObjectContent = isSameObjectContent;
exports.isUndefined = isUndefined;
exports.deepCopyOf = deepCopyOf;
exports.checkIfDataTableExists = checkIfDataTableExists;
exports.cloneDataSource = cloneDataSource;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable guard-for-in */
function isObject(value) {
  return value !== null && _typeof(value) === 'object';
}

function isCallable(value) {
  return typeof value === 'function';
}

function isSameObjectContent(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  var keys = Object.keys(obj1);

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];

    if (isObject(obj1[key]) && isObject(obj2[key])) {
      if (!isSameObjectContent(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function isUndefined(value) {
  // eslint-disable-next-line no-void
  var UNDEFINED = void 0;
  return value === UNDEFINED;
}

function deepCopyOf(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function checkIfDataTableExists(dataSource) {
  // eslint-disable-next-line no-underscore-dangle
  if (dataSource && dataSource.data && dataSource.data._dataStore) {
    return true;
  }

  return false;
}

function cloneDataSource(obj) {
  var purpose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'clone';

  var type = _typeof(obj);

  if (type === 'string' || type === 'number' || type === 'function' || type === 'boolean') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    var arr = [];

    for (var i = 0; i < obj.length; i++) {
      arr.push(this.cloneDataSource(obj[i]));
    }

    return arr;
  }

  if (_typeof(obj) === 'object') {
    var clonedObj = {}; // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax

    for (var prop in obj) {
      // Edge case handling for DataTable
      if (prop === 'data') {
        // eslint-disable-next-line no-underscore-dangle
        if (obj[prop]._dataStore && purpose === 'clone') {
          clonedObj[prop] = obj[prop]; // eslint-disable-next-line no-underscore-dangle
        } else if (obj[prop]._dataStore && purpose === 'diff') {
          clonedObj[prop] = '-';
        } else {
          clonedObj[prop] = this.cloneDataSource(obj[prop]);
        }

        continue;
      }

      clonedObj[prop] = this.cloneDataSource(obj[prop]);
    }

    return clonedObj;
  }

  return undefined;
}