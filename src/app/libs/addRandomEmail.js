
export default function addRandomEmail(index) {
  const email = `${generateRandomString(randomInteger(5, 8))}@${generateRandomString(randomInteger(2, 4))}.${generateRandomString(randomInteger(2, 4))}`
  return {
    email,
    id: email + index,
    isValid: true
  }
}

function  randomInteger (min, max) {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

function generateRandomString (length) {
  let randomString = ''
  const asciiLow = 97
  const asciiHigh = 122
  for (let i = 0; i < length; i++) {
      const randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
      randomString += String.fromCharCode(randomAscii)
  }
  return randomString
}
