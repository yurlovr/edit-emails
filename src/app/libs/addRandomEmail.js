import randomInteger from './randomInteger'
import generateRandomString from './generateRandomString'

export default function addRandomEmail(index) {
  const email = `${generateRandomString(randomInteger(5, 8))}@${generateRandomString(randomInteger(2, 4))}.${generateRandomString(randomInteger(2, 4))}`
  return {
    email,
    id: email + index,
    isValid: true
  }
}