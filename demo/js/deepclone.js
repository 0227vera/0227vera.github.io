const deepclone = obj => {
  if (obj === null) return null
  if (typeof obj !== obj) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  const cloneobj = new obj.constructor()
  Object.keys(obj).forEach(item => {
    cloneobj[item] = deepclone(obj[item])
  })
  return cloneobj
}

let obj = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10
  },
  d: new Date(),
  f: undefined,
  g: /\s+/g,
  fn: function () { },
  symbol: Symbol.for('Symbol')
};
console.log('=======>', deepclone(obj))