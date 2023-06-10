type OverloadFn = (...args: any[]) => any;

interface CallMapEntry {
  keys: string;
  fn: OverloadFn;
}

function createOverload() {
  const callMap = new Map<string, CallMapEntry>();

  function overload(...args: any[]): void {
    const key = args.map(item => typeof item).join(',');
    const entry = callMap.get(key);

    if (!entry) {
      throw new Error('No matching function found.');
    } else {
     return entry.fn.apply(this, args);
    }
  }

  overload.add = function (...args: any[]): void {
    const fn = args.pop();

    if (typeof fn !== 'function') {
      throw new Error('The last parameter must be a function.');
    }

    const keys = args.join(',');
    callMap.set(keys, { keys, fn });
  };

  return overload;
}

export { createOverload };
