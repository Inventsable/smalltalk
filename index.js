import CryptoJSAesJson from "./utils/format";

function encrypt(value, password) {
  return CryptoJSAesJson.encrypt(value, password);
}

function decrypt(encrypted, password) {
  return CryptoJSAesJson.decrypt(encrypted, password);
}

export { encrypt, decrypt };
