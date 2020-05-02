export default function setAttribut(id) {
  const elements = document.querySelectorAll(`#${id} *`)
  for (const element of elements) {
    element.setAttribute('input-email', '')
  }
}