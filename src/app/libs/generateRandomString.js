
  export default function generateRandomString(length) {
    let randomString = ''
    const asciiLow = 97
    const asciiHigh = 122
    for (let i = 0; i < length; i++) {
        const randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
        randomString += String.fromCharCode(randomAscii)
    }
    return randomString
  }