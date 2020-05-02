import '../style/app.scss'
import inputEmailCore from './model/inputEmailCore'
window.InputEmail =  (elem, options) => {
  const model = new inputEmailCore({
    element: elem,
    options
  })
  return {
    getCount: model.countEmail,
    addEmail: model.addEmail,
    delAllInvalid: model.delAllInvalid,
    subscribe: model.subscribe,
    show: model.show,
    hide: model.hide,
  }
}