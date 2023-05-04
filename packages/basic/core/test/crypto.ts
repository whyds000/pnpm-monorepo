import { describe, expect, it } from 'vitest'
import {encrypt,decrypt,md5} from '../utils'
describe('crypto', () => {
    it('encrypt and decrypt', () => { 
        //测试encrypt和decrypt
        expect(encrypt('123456')).toBe('U2FsdGVkX1+X1Q2Z4Q1Q4Q==')
        expect(decrypt('U2FsdGVkX1+X1Q2Z4Q1Q4Q==')).toBe('123456')
    })
})