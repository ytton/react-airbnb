export function styleStrToObj(str) {
  let res = {};
  str
    .replace(/\s+/g, '')
    .replace(/-([a-z])/g, (_, w) => w.toUpperCase())
    .split(';')
    .forEach(x => {
      const [key, value] = x.split(':');
      res[key] = value;
    });
  return res;
}

export function isEmpty(target) {
  if (typeof target === 'object') {
    if (Array.isArray(target)) return !target.length;
    return !Object.keys(target).length;
  }
  return !target;
}
