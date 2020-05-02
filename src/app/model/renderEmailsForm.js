import setAttribut from './setAttribut'

export default function renderEmailsForm ({element, sectionEmails, buttonsSection, id, position }) {
  const wrapperElement = document.createElement('div')
  wrapperElement.id = 'emails-input' + Math.random()
  wrapperElement.classList.add('wrapper')
    if (position) {
      wrapperElement.style.position = 'absolute'
      wrapperElement.style.top = position.top
      wrapperElement.style.left = position.left
    }
    wrapperElement.insertAdjacentElement('afterbegin', sectionEmails)
    wrapperElement.insertAdjacentElement('beforeend', buttonsSection)
    element.insertAdjacentElement('afterbegin', wrapperElement)
    setAttribut(id)
}