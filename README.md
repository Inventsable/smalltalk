# smalltalk

Dead simple, no dependency, password protected AES-128-CBC encryption and decryption for browser

```bash
npm i @Inventsable/smalltalk
```

# Usage

```js
import { encrypt, decrypt } from "smalltalk";
```

## decrypt(value:any, password:string) => returns CipherParams

Encodes any valid string, object or array data with a given password to a CipherParams object containing `ciphertext`, `salt` and `initialization vector` keys inline with `CryptoJS`:

```js
let encryptionResult = encrypt("Hello world", "Some secret passphrase");
console.log(encryptionResult);
// returns:
// {
//   ct: "22GyQQsEP8ijVk8UfGdVFw==",
//   iv: "e9076c31aebff3efdc85083a101bd44a",
//   s: "271f382cf7baf088",
// }
```

## decrypt(value:CipherParams String, password:string) => returns any

Decodes any valid CipherParams string with a given password to its original value:

```js
let decryptionResult = decrypt(
  `{"ct":"22GyQQsEP8ijVk8UfGdVFw==","iv":"e9076c31aebff3efdc85083a101bd44a","s":"271f382cf7baf088"}`,
  "Some secret passphrase"
);
console.log(decryptionResult); // returns "Hello world"
```
