import '../style/app.scss'
import inputEmailCore from './model/inputEmailCore'
window.InputEmail =  (elem, options) => {
  const model = new inputEmailCore({
    element: elem,
    options
  })
  return {
    getCount: model.countEmail,
    addEmail: model.addEmailClick,
    subscribe: model.subscribe,
    replaceAll: model.replaceAllEmails,
  }
}

window.init = InputEmail(document.querySelector('#app'), {
  predefinedEmails: 2,
})