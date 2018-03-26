import {
  isObject,
  isCallable,
  isSameObjectContent,
  isUndefined,
  deepCopyOf,
} from '../../src/utils/utils';

/* global describe it expect */
describe('isObject(value)', () => {
  it('should return true for object value', () => {
    expect(isObject({})).toBeTruthy();
  });

  it('should return false for null value', () => {
    expect(isObject(null)).toBeFalsy();
  });

  it('should return false for non-object values', () => {
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(22)).toBeFalsy();
    expect(isObject('string')).toBeFalsy();
    expect(isObject(() => { })).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
  });
});

describe('isCallable(value)', () => {
  it('should return true for function value', () => {
    expect(isCallable(() => { })).toBeTruthy();
  });

  it('should return false for non-function values', () => {
    expect(isCallable(null)).toBeFalsy();
    expect(isCallable(undefined)).toBeFalsy();
    expect(isCallable({})).toBeFalsy();
    expect(isCallable('string')).toBeFalsy();
    expect(isCallable(true)).toBeFalsy();
    expect(isCallable(33)).toBeFalsy();
  });
});

describe('isSameObjectContent(obj1, obj2)', () => {
  it('should return true for two objects with same content of one deep', () => {
    expect(isSameObjectContent(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    )).toBeTruthy();
  });

  it('should return true for two objects with same content of multiple deeps', () => {
    expect(isSameObjectContent(
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
    )).toBeTruthy();
  });

  it('should return false for two objects with different content', () => {
    expect(isSameObjectContent(
      {},
      {
        a: 44,
      },
    )).toBeFalsy();

    expect(isSameObjectContent(
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
      {
        a: {
          c: 33,
          d: 564,
        },
        b: {
          m: 255,
        },
      },
    )).toBeFalsy();
  });

  expect(isSameObjectContent(
    {
      a: 2,
    },
    {
      b: 2,
    },
  )).toBeFalsy();
});

describe('isUndefined(value)', () => {
  it('should return true for undefined value', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should return false for values other than undefined', () => {
    expect(isUndefined(78)).toBeFalsy();
    expect(isUndefined('string')).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
    expect(isUndefined({})).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(() => { })).toBeFalsy();
  });
});

describe('deepCopyOf(obj)', () => {
  it('should return different object instance with same content other than given object', () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
        d: 44,
      },
    };
    const deepCopy = deepCopyOf(obj);
    expect(isSameObjectContent(obj, deepCopy) && obj !== deepCopy).toBeTruthy();
  });
});

