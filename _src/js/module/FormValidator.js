export default class FormValidator {
  constructor(_parm) {
    this.elmForm = document.querySelector(_parm.form) || false
    this.elmTargetInputs = [...document.querySelectorAll(_parm.targetInputs)] || [...document.querySelectorAll(`${_parm.form} input[data-required]`)]
    this.classErrorInput = _parm.classErrorInput || '__error'
    this.attrErrorMessage = _parm.attrErrorMessage || 'data-js-error-message'
    this.defaultErrorMessage = _parm.defaultErrorMessage || '入力してください'
    this.errorFlag = false
  }

  validate(_elmInput) {
    const value = _elmInput.value
    const inputName = _elmInput.getAttribute('name')
    const inputPattern = _elmInput.getAttribute('pattern') || false
    const inputTitle = _elmInput.getAttribute('title') || false
    const errorFlag = false
    const errorCount = 0
    const checkUndefined = () => {
      if (value !== '') return true;
    }
    const checkPattern = () => {
      if (!inputPattern) return;
      if (value.match(inputPattern)) return true;
    }
    const checkEmail = () => {
      if (!_elmInput.getAttribute('name') === 'email') return;
      if (value.match(/^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/)) return true;
    }
    const checkTel = () => {
      if (!_elmInput.getAttribute('name') === 'email') return;
      if (value.match(/^0\d{9,10}$/)) return true;
    }
  }

  addEvent() {
    this.elmForm.addEventListener('submit', (_ev) => {
      _ev.preventDefault()
      this.elmTargetInputs.forEach(_elmTargetInput => {
        this.validate(_elmTargetInput)
      })
      if (this.errorFlag) {
        this.elmForm.submit()
      }
    })
  }

  init() {
    console.log(this.elmForm)
    console.log(this.elmTargetInputs)
    if (!this.elmForm) return;
    this.elmTargetInputs.forEach(_elmTargetInput => {
      this.validate(_elmTargetInput)
    })
    this.addEvent()
  }
}
