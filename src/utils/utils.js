/* eslint-disable guard-for-in */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isCallable(value) {
  return typeof value === 'function';
}

export function isSameObjectContent(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  const keys = Object.keys(obj1);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
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

export function isUndefined(value) {
  // eslint-disable-next-line no-void
  const UNDEFINED = void 0;
  return value === UNDEFINED;
}

export function deepCopyOf(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function checkIfDataTableExists(dataSource) {
  // eslint-disable-next-line no-underscore-dangle
  if (dataSource && dataSource.data && dataSource.data._dataStore) {
    return true;
  }
  return false;
}

export function cloneDataSource(obj, purpose = 'clone') {
  const type = typeof obj;
  if (
    type === 'string' ||
    type === 'number' ||
    type === 'function' ||
    type === 'boolean'
  ) {
    return obj;
  }
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (Array.isArray(obj)) {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr.push(this.cloneDataSource(obj[i]));
    }
    return arr;
  }
  if (typeof obj === 'object') {
    const clonedObj = {};
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in obj) {
      // Edge case handling for DataTable
      if (prop === 'data') {
        // eslint-disable-next-line no-underscore-dangle
        if (obj[prop]._dataStore && purpose === 'clone') {
          clonedObj[prop] = obj[prop];
          // eslint-disable-next-line no-underscore-dangle
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
