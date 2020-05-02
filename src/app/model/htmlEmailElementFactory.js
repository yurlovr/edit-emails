import { EMAIL_REG } from '../const'
import myEvent from './myEvent'

export default function htmlFactoryEmailElement (email, del) {
  const result = document.createElement('li')
  if (!result.hasAttribute('input-email')) {
    result.setAttribute('input-email', '')
  }
  const buttonDelete = document.createElement('span')
  if (!buttonDelete.hasAttribute('input-email')) {
    buttonDelete.setAttribute('input-email', '')
  }
  result.classList.add('email_item')
  if (!EMAIL_REG.test(email.email)) {
    result.classList.add('email_item-wrong')
    email.isValid = false
  }
  buttonDelete.classList.add('email_item-del')
  result.id = email.id
  result.textContent = email.email
  myEvent(result, {
    event: 'click',
    callback: del
  })
  result.insertAdjacentElement('beforeend', buttonDelete)
  return result
}