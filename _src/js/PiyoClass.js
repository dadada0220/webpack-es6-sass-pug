export default class PiyoClass {
  constructor(obj) {
    this.elm = document.querySelector(`${obj.elm}`)
    this.attr = obj.attr
  }
  method() {
    console.log(this.elm)
  }
}