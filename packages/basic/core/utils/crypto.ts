import * as CryptoJS from 'crypto-js';

import {SECRET_KEY} from '../constant'

/**
 * 对字符串进行AES加密
 * @param {string} str 待加密的字符串
 * @returns {string} 加密后的字符串
 */
export function encrypt(str: string): string {
  const ciphertext = CryptoJS.AES.encrypt(str, SECRET_KEY).toString();
  return ciphertext;
}

/**
 * 对字符串进行AES解密
 * @param {string} ciphertext 待解密的字符串
 * @returns {string} 解密后的字符串
 */
export function decrypt(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);

  return plaintext;
}
/**
 * 对字符串进行MD5加密
 * @param {string} str 待加密的字符串
 * @returns {string} 加密后的字符串
 * @description 用于密码单向加密
 */
export function md5(str:string): string{
  const hash = CryptoJS.MD5(str).toString();
  return hash
}