const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.isDirect = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const initialLine = message.toUpperCase().match(/[A-Z]/g, "");
    const initialKey = key.toUpperCase().match(/[A-Z]/g, "");

    const arrLine = this.getCharIndex(initialLine);
    const initialArrKey = this.getCharIndex(initialKey);
    const arrKey = this.correctKeyArrLength(initialArrKey, arrLine);

    const encodingChars = this.decoding(arrLine, arrKey, true);
    let result;

    if (this.isDirect) {
      result = this.getResultStr(message, encodingChars).join("");
    } else {
      result = this.getResultStr(message, encodingChars).reverse().join("");
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const initialLine = encryptedMessage.toUpperCase().match(/[A-Z]/g, "");
    const initialKey = key.toUpperCase().match(/[A-Z]/g, "");

    const arrLine = this.getCharIndex(initialLine);
    const initialArrKey = this.getCharIndex(initialKey);
    const arrKey = this.correctKeyArrLength(initialArrKey, arrLine);

    const encodingChars = this.decoding(arrLine, arrKey, false);
    let result;

    if (this.isDirect) {
      result = this.getResultStr(encryptedMessage, encodingChars).join("");
    } else {
      result = this.getResultStr(encryptedMessage, encodingChars)
        .reverse()
        .join("");
    }

    return result;
  }

  getCharIndex(arr) {
    return arr.map((item) => this.alphabet.indexOf(item));
  }

  correctKeyArrLength(arrKey, arrLine) {
    const arr = (arrKey.join(",") + ",")
      .repeat(Math.ceil(arrLine.length / arrKey.length))
      .slice(0, -1)
      .split(",")
      .map((item) => +item);

    if (arrLine.length < arr.length) {
      arr.pop();
    }
    return arr;
  }

  getResultStr(message, codingChars) {
    const messageStr = message.toUpperCase();
    const arr = [];
    const regexp = /[A-Z]/;
    for (let i = 0; i < messageStr.length; i++) {
      if (regexp.test(messageStr[i])) {
        arr.push(codingChars[0]);
        codingChars.shift();
      } else {
        arr.push(messageStr[i]);
      }
    }
    return arr;
  }

  decoding(arrLine, arrKey, isEncrypt) {
    const arr = [];
    for (let i = 0; i < arrLine.length; i++) {
      let number;
      if (isEncrypt) {
        number = (((arrLine[i] + arrKey[i]) % 26) + 26) % 26;
      } else {
        number = (((arrLine[i] - arrKey[i]) % 26) + 26) % 26;
      }

      const char = this.alphabet[number];
      arr.push(char);
    }
    return arr;
  }

  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
