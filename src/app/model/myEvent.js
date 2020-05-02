export default function myEvent (element, options) {
  if (Array.isArray(options)) {
    options.forEach(item => {
      createEvent(element, item.event, item.callback)
    })
  } else {
    const {event, callback} = options
    createEvent(element, event, callback)
  }
}

function createEvent (element, event, callback) {
  element.addEventListener(event, callback)
}