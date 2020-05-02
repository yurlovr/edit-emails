export default function htmlElementFactory () {
  return {
    sectionEmails: document.createElement('section'),
    header: document.createElement('h1'),
    emailContainer: document.createElement('div'),
    emailList: document.createElement('ul'),
    li: document.createElement('li'),
    inputEmail: document.createElement('input'),
    buttonsSection: document.createElement('section'),
    buttonAdd: document.createElement('button'),
    buttonCount: document.createElement('button')
  }
}