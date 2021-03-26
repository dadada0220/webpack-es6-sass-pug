import Function from './function'
import PiyoClass from './PiyoClass'

const init = () => {
  const piyo = new PiyoClass({
    elm: '.piyo',
    attr: 'data-piyo',
  })
  piyo.init()
}

window.addEventListener('DOMContentLoaded', () => {
  init()
})