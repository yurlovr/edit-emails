import addRandomEmail from '../libs/addRandomEmail'
import htmlFactoryEmailElement from './htmlEmailElementFactory'
import htmlElementFactory from './htmlElementFactory'
import setId from '../libs/setId'
import EventObserver from './EventObserver'
import setAttribut from './setAttribut'
import initHtmlForm from './initHtmlForm'

export default class Model {
  constructor({ element, options }) {
    this.element = element
    this.options = options || {}
    this.emails = []
    this.renderedEmailsCount = 0
    this.wrapperElement = null
    this.observer = new EventObserver()
    this.inputValue = null
    this.OBJECT_MODEL_ELEMENTS = htmlElementFactory()
    this.init()
  }

  initDefaultEmail = (count) => {
    let result = []
      for (let i = 1; i <= count; i++) {
        result = result.concat(addRandomEmail(i))
      }
    this.emails = this.emails.concat(result)
    return this.renderEmailList()
  }

  renderEmailList = () => {
    const emailsForRender = this.emails.filter((item, index) => index + 1 > this.renderedEmailsCount)
    emailsForRender.forEach(mail => {
      const itemList = htmlFactoryEmailElement(mail, this.deleteEmailClick)
      this.OBJECT_MODEL_ELEMENTS.li.insertAdjacentElement('beforebegin', itemList)
      this.renderedEmailsCount = this.renderedEmailsCount + 1
    })
    this.observer.broadcast(this.emails)
    this.OBJECT_MODEL_ELEMENTS.inputEmail.scrollIntoView()
  }

  addEmailClick = () => {
    if (this.inputValue) {
      this.clearInput()
      return
    }
    const mail = addRandomEmail(this.emails.length + 1)
    this.emails = this.emails.concat(mail)
    this.renderEmailList()
  }

  addEmail = (mail) => {
    if (!mail) return
    if (mail.email && mail.id) {
      this.emails = this.emails.concat(mail)
    }
    this.renderEmailList()
  }

  countEmail = () => {
    alert(`The email list consists of ${this.emails.length}.`)
  }

  inputEmail = (event) => {
    this.inputValue = event.target.value
    if (~this.inputValue.indexOf(',')) {
      let array = this.inputValue.replace(/\s/g, ',').split(',')
      if (!array[0].trim()) {
        array = array.filter((item, index) => index !== 0)
      }
      array.forEach(item => {
        item.trim()
        if (item) {
          this.addEmail({ email: item, id: setId(item, this.emails) })
        }
      })
    this.clearInput()
    }
  }

  deleteAllEmails = () => {
    const emails = this.OBJECT_MODEL_ELEMENTS.emailList.querySelectorAll('.email_item')
    emails.forEach(email => {
      this.delEmailFromDOM(email.id)
    })
    this.emails = []
  }

  replaceAllEmails = (emails) => {
    if (!emails ||  typeof emails !== 'number') return
    this.deleteAllEmails()
    this.initDefaultEmail(emails)
  }

  keyPress = (event) => {
    const target = event.target.value
    if (event.keyCode === 13 && target) {
      target.replace(/\s/g, ',').split(',').forEach(item => {
        if(item.trim()) {
          this.addEmail({ email: item, id: setId(item, this.emails) })
        }
      })
      this.clearInput()
    }
  }

  onChange = () => {
    const target = event.target.value
    target.replace(/\s/g, ',').split(',').forEach(item => {
      if (item.trim()) {
        this.addEmail({ email: item, id: setId(item, this.emails) })
      }
    })
    this.clearInput(true)
  }

  clearInput = (clearValue) => {
    if (!clearValue) {
      this.inputValue = null
    }
    this.OBJECT_MODEL_ELEMENTS.inputEmail.value = ''
  }

  deleteEmailClick = (event) => {
    if (event.target.id) return
    const currentTarget = event.currentTarget.id
    this.emails = this.emails.filter(email => email.id !== currentTarget)
    this.delEmailFromDOM(currentTarget)

    this.observer.broadcast(this.emails)
  }

  delEmailFromDOM =(id) => {
    const element = document.getElementById(id)
    if (element) element.remove()
    this.renderedEmailsCount = this.renderedEmailsCount - 1
  }

  delAllInvalid = () => {
    this.emails = this.emails.map(item => {
      if (!item.isValid) {
        this.delEmailFromDOM(item.id)
        return null
      }
      return item
    }).filter(Boolean)
    this.observer.broadcast(this.emails)
  }
  subscribe = (func) => {
    this.observer.subscribe(func)
    return { unsubscribe: () => this.observer.unsubscribe(func) }
  }

  init = () => {
    initHtmlForm({
      elements: this.OBJECT_MODEL_ELEMENTS,
      actions: {
        input: this.inputEmail,
        keyPress: this.keyPress,
        change: this.onChange,
        click: this.addEmailClick,
        clickCount: this.countEmail
      }
    })
    if (this.options.predefinedEmails) {
      this.initDefaultEmail(this.options.predefinedEmails)
    }
    this.element.insertAdjacentElement('afterbegin', this.OBJECT_MODEL_ELEMENTS.emailList)
    setAttribut(this.element.id)
  }
}