export default function initHtmlForm({ elements, actions, showButtons }) {
  elements.inputEmail.addEventListener('input', actions.input)
  elements.inputEmail.addEventListener('keypress', actions.keyPress)
  elements.inputEmail.addEventListener('change', actions.change)
  elements.emailList.insertAdjacentElement('afterbegin', elements.li)
  elements.li.insertAdjacentElement('afterbegin', elements.inputEmail)
}