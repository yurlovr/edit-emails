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
    deleteAllInvalid: model.deleteAllInvalid,
    getAllEmails: model.getAllEmails
  }
}

// window.init = InputEmail(document.querySelector('#app'), {
// })
// window.init1 = InputEmail(document.querySelector('#app1'), {
//   predefinedEmails: 3,
// })