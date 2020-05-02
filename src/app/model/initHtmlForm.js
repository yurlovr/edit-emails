import myEvent from "./myEvent"

export default function initHtmlForm({ elements, actions, showButtons }) {

  elements.sectionEmails.classList.add('container')
  elements.header.classList.add('header_text')
  elements.header.innerHTML = 'Share <span>Board name</span> with others'
  elements.emailContainer.classList.add('email_container')
  elements.emailList.classList.add('email_list')
  elements.li.classList.add('email_item-input')
  elements.inputEmail.classList.add('email_input')
  elements.inputEmail.type = 'text'
  elements.inputEmail.placeholder = 'add more people…'
  myEvent(elements.inputEmail,
    [ {
        event: 'input',
        callback: actions.input
      },
      {
        event: 'keypress',
        callback: actions.keyPress
      },
      {
        event: 'change',
        callback: actions.change
      }
    ])
  elements.sectionEmails.insertAdjacentElement('afterbegin', elements.header)
  elements.header.insertAdjacentElement('afterend', elements.emailContainer)
  elements.emailContainer.insertAdjacentElement('afterbegin', elements.emailList)
  elements.emailList.insertAdjacentElement('afterbegin', elements.li)
  elements.li.insertAdjacentElement('afterbegin', elements.inputEmail)
  if (showButtons || typeof showButtons === 'undefined') {
    elements.buttonsSection.classList.add('buttons_container')
    elements.buttonAdd.classList.add('button')
    myEvent(elements.buttonAdd,
        {
          event: 'click',
          callback: actions.click
        })
    elements.buttonAdd.id = 'add'
    elements.buttonAdd.textContent = 'Add mail'
    elements.buttonsSection.insertAdjacentElement('afterbegin', elements.buttonAdd)
    elements.buttonCount.id = 'count'
    elements.buttonCount.textContent = 'Get emails count'
    elements.buttonCount.classList.add('button')
    myEvent(elements.buttonCount,
      {
        event: 'click',
        callback: actions.clickCount
      })
    elements.buttonsSection.insertAdjacentElement('beforeend', elements.buttonCount)
  }
}