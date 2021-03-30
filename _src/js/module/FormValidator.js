export default class FormValidator {
  constructor(_parm) {
    this.elmForm = document.querySelector(_parm.form) || false;
    this.elmTargetInputs = [...this.elmForm.querySelectorAll(_parm.targetInputs)];
    this.classErrorInput = _parm.classErrorInput || '__error';
    this.classSecureInput = _parm.classSecureInput || '__secure';
    this.attrErrorMessage = _parm.attrErrorMessage || 'data-js-error-message';
    this.defaultErrorMessage = _parm.defaultErrorMessage || '必須項目を入力してください';
    this.inputStatuses = this.elmTargetInputs.map((_value, _index) => {
      let result = [];
      result['name'] = _value.getAttribute('name');
      result['isError'] = true;
      return result;
    });
  }

  /**
   * input要素に付与されている`required`と`pattern`でバリデーションチェックを行う
   * エラーなら`true`が返る
   * @param {*} _elmInput バリデーション対象のinput要素
   * @returns true;
   */
  errorCheck(_elmInput) {
    const patternValidate = _elmInput.getAttribute('pattern') || false;
    if (patternValidate) {
      return !_elmInput.validity.patternMismatch && _elmInput.value.length ? false : true;
    }
    return _elmInput.validity.valueMissing;
  }

  /**
   * input要素のエラーメッセージ要素のテキストを描画
   * @param {*} _elmInput バリデーション対象のinput要素
   */
  showErrorMessage(_elmInput) {
    const value = _elmInput.value;
    const name = _elmInput.getAttribute('name');
    const patternErrorMessage = _elmInput.getAttribute('title') || false;
    let errorMessage = '';
    if (patternErrorMessage) {
      errorMessage = value.length ? patternErrorMessage : this.defaultErrorMessage;
    } else {
      errorMessage = this.defaultErrorMessage;
    }
    this.elmForm.querySelector(`[${this.attrErrorMessage}="${name}"]`).textContent = errorMessage;
    return;
  }

  /**
   * input要素のエラーをリセット
   * @param {*} _elmInput バリデーション対象のinput要素
   */
  errorReset(_elmInput) {
    _elmInput.classList.remove(this.classErrorInput);
    _elmInput.classList.remove(this.classSecureInput);
    this.elmForm.querySelector(
      `[${this.attrErrorMessage}="${_elmInput.getAttribute('name')}"]`
    ).textContent = '';
    return;
  }

  /**
   * input要素に対してバリデーションチェックやエラーメッセージの描画など、バリデーションに関する関数を全部実行する
   * @param {*} _elmInput バリデーション対象のinput要素
   */
  validate(_elmInput) {
    // エラーリセット
    this.errorReset(_elmInput);
    // バリデーションチェックやエラーメッセージの描画などを実行
    const isError = this.errorCheck(_elmInput);
    const changeInputStatusArray = (_isErrorValue) => {
      const targetInputStatus = this.inputStatuses.find((_item) => {
        return _item.name === _elmInput.getAttribute('name');
      });
      targetInputStatus['isError'] = _isErrorValue;
    };
    if (isError) {
      _elmInput.classList.add(this.classErrorInput);
      this.showErrorMessage(_elmInput);
      changeInputStatusArray(true);
    } else {
      _elmInput.classList.add(this.classSecureInput);
      changeInputStatusArray(false);
    }
    return;
  }

  /**
   * input要素が一つでもバリデーションに引っかかってたら`true`を返す
   * `true`: バリデーションエラー, `false`: エラー無し
   * @return Boolean
   */
  getIsError() {
    return this.inputStatuses.every((_item) => _item['isError'] === false) ? false : true;
  }

  addEvent() {
    /**
     * Input
     */
    this.elmTargetInputs.forEach((_elmTargetInput) => {
      // フォーカスアウト時
      _elmTargetInput.addEventListener('blur', (_ev) => {
        this.validate(_elmTargetInput);
      });
      // エラー時
      _elmTargetInput.addEventListener('invalid', (_ev) => {
        this.validate(_elmTargetInput);
      });
    });

    /**
     * Form
     */
    this.elmForm.addEventListener('submit', (_ev) => {
      _ev.preventDefault();
      if (!this.getIsError()) {
        console.log('Submit!');
        // this.elmForm.submit();
      }
    });
  }

  init() {
    if (!this.elmForm) return;
    this.addEvent();
  }
}
