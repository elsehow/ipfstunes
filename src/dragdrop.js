'use strict'

const stream = require('kefir').stream

module.exports = () => {

  function preventDefault (event) {
    event.preventDefault();
    return false;
  }

  document.addEventListener('dragover',preventDefault, false)
  document.addEventListener('drop', preventDefault, false)
  document.ondragover = () => false
  document.ondragleave = document.ondragend = () => false

  return stream(emitter => {
    document.ondrop = (e) => {
      e.preventDefault();
      let file = e.dataTransfer.files[0];
      emitter.emit(file.path)
      return false;
    };
  })
}
