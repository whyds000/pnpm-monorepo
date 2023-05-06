/**
 * @class StorageUtil
 * @description 本地存储工具类
 * @example
 * ```ts
 * const storageUtil = new StorageUtil(localStorage);
 * storageUtil.setItem('key', 'value');
 * storageUtil.getItem('key');
 * storageUtil.removeItem('key');
 * storageUtil.clear();
 * ```
 * @version 0.1.0
 * @since 0.1.0
 * @date 2023-05-04
 * @param {Storage} storage 本地存储对象
 * @returns {StorageUtil} 本地存储工具对象
 */
class StorageUtil {
  private storage: Storage
  constructor(storage: Storage) {
    this.storage = storage
  }

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem<T>(key: string): T | null {
    const value = this.storage.getItem(key)
    if (value === null)
      return null

    return JSON.parse(value) as T
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }
}

/**
 * localStorage
 * @example
 * ```ts
 * localUtils.setItem('key', 'value');
 * localUtils.getItem('key');
 * localUtils.removeItem('key');
 * localUtils.clear();
 * ```
 * @description 本地存储
 */
const localUtils = new StorageUtil(localStorage)

/**
 * sessionStorage
 * @example
 * ```ts
 * sessionUtils.setItem('key', 'value');
 * sessionUtils.getItem('key');
 * sessionUtils.removeItem('key');
 * sessionUtils.clear();
 * ```
 */
const sessionUtils = new StorageUtil(sessionStorage)
export {
  localUtils,
  sessionUtils,
}
