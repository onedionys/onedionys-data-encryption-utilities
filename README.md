<h1 align="center">Welcome to One Dionys - Data Encryption Utilities! 👋 </h1>

<p align="center">Functions to securely encrypt and decrypt data in web applications, protecting sensitive user data. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-data-encryption-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-data-encryption-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-data-encryption-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-data-encryption-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-data-encryption-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-data-encryption-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-data-encryption-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { encrypt, decrypt } = require('data-encryption-utilities');

const originalData = 'Hello, world!';
const key = 'secretKey';

// Encrypt data
const encryptedData = encrypt(originalData, key);
console.log('Encrypted Data:', encryptedData);

// Decrypt data
const decryptedData = decrypt(encryptedData, key);
console.log('Decrypted Data:', decryptedData);
```

#### Explanation

* This package provides utility functions for encrypting and decrypting data using AES-256-CBC encryption algorithm. The encrypt function takes the data and a secret key as input, encrypts the data, and returns the encrypted result. The decrypt function takes the encrypted data and the same secret key, decrypts the data, and returns the original plaintext.

#### Return Value

* `encrypt(data, key)`: Returns the encrypted data as a hexadecimal string.
* `decrypt(data, key)`: Returns the decrypted data as a UTF-8 encoded string.

## 📆 Release Date

* v1.0.0 : 18 March 2024
* v1.0.1 : 18 March 2024
* v1.0.2 : 31 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Data Encryption Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Data Encryption Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
