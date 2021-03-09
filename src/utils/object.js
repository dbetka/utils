import { check } from './check';

export const object = {
  /**
   * Deep merge two objects.
   * @param target
   * @param sources
   */
  mergeDeep (target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (check.isObject(target) && check.isObject(source)) {
      for (const key in source) {
        if (check.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          object.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return object.mergeDeep(target, ...sources);
  },
};
