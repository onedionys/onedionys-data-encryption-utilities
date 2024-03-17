const assert = require('assert');
const { encrypt, decrypt } = require('../src/encryptionUtils');

describe('Encryption Utilities Tests', () => {
  it('should encrypt and decrypt data correctly', () => {
    const originalData = 'Hello, world!';
    const key = 'secretKey';

    const encryptedData = encrypt(originalData, key);
    const decryptedData = decrypt(encryptedData, key);

    assert.strictEqual(decryptedData, originalData);
  });
});
