export default function htmlElementFactory () {
  const emailList = document.createElement('ul')
  const li = document.createElement('li')
  const inputEmail = document.createElement('input')
  emailList.classList.add('email_list')
  emailList.classList.add('email_container')
  li.classList.add('email_item-input')
  inputEmail.classList.add('email_input')
  inputEmail.type = 'text'
  inputEmail.placeholder = 'add more people…'
  return {
    emailList,
    li,
    inputEmail
  }
}