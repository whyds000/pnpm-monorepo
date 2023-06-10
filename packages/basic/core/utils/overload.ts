function createOverload() {
  const callMap = new Map<string, Function>()
  function overload(...arg: any[]) {
    const key = arg.map(item => typeof item).join(',')
    const fn = callMap.get(key)
    if (!fn)
      throw new Error('no matching function')
    else
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      fn.call(this, ...arg)
  }
  overload.add = function (...arg: any[]) {
    const fn = arg.pop()
    if (typeof fn !== 'function')
      throw new Error('the last param must be a function')
    const keys = arg.join(',')
    callMap.set(keys, fn)
  }
  return overload
}
export { createOverload }
