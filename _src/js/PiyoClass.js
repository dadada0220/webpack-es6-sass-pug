export default class PiyoClass {
  constructor(obj) {
    this.elm = document.querySelector(`${obj.elm}`)
    this.attr = obj.attr
  }
  addEvent() {

  }
  init() {
    this.addEvent()
  }
}