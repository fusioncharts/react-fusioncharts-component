"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.isCallable = isCallable;
exports.isSameObjectContent = isSameObjectContent;
exports.isUndefined = isUndefined;
exports.deepCopyOf = deepCopyOf;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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