const EMAIL_REG = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export default function htmlFactoryEmailElement (email, deleteHandler) {
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
  result.addEventListener('click', deleteHandler)
  result.insertAdjacentElement('beforeend', buttonDelete)
  return result
}