/**
 * フォームのバリデーションを実行するクラス
 * `elmForm`, `elmTargetInputs`は必須
 *
 * 場合によっては、以下ライブラリでバリデーションするでも良いかも
 * 公式: https://imbrn.github.io/v8n/#what-s-v8n
 * 日本語解説記事: https://co.bsnws.net/article/182
 */
export default class FormValidator {
  /**
   * @property {Element} elmForm 【必須】フォーム
   * @property {Array} elmTargetInputs 【必須】バリデーション対象となるinput要素の配列
   * @property {String} classErrorInput input要素がエラー時に付与されるclass
   * @property {String} classSecureInput input要素がバリデーションOK時に付与されるclass
   * @property {String} attrElmErrorMessage エラーメッセージ要素とinput要素と紐付ける属性名
   * @property {String} attrRequiredErrorMessage `required`のエラーメッセージの文言を変更するための属性名
   * @property {String} defaultErrorMessage デフォルトのエラーメッセージ
   * @property {Array} inputStatuses エラー状態などをプロパティとして持つバリデーション対象となるinput要素のオブジェクト
   */
  constructor(_parm) {
    this.elmForm = document.querySelector(_parm.form) || false;
    this.elmTargetInputs = [...this.elmForm.querySelectorAll(_parm.targetInputs)];
    this.classErrorInput = _parm.classErrorInput || '__error';
    this.classSecureInput = _parm.classSecureInput || '__secure';
    this.attrElmErrorMessage = _parm.attrElmErrorMessage || 'data-js-error-message';
    this.attrRequiredErrorMessage = _parm.attrRequiredErrorMessage || 'data-required-error';
    this.defaultErrorMessage = _parm.defaultErrorMessage || '必須項目を入力してください';
    this.inputStatuses = this.elmTargetInputs.map((_item, _index) => {
      let result = [];
      result['id'] = _item.id;
      result['name'] = _item.getAttribute('name');
      result['isError'] = true;
      return result;
    });
  }

  /**
   * input要素が一つでもバリデーションに引っかかってたら`true`を返す
   * `true`: バリデーションエラー, `false`: エラー無し
   * @return {Boolean}
   */
  getIsError() {
    return this.inputStatuses.every((_item) => _item['isError'] === false) ? false : true;
  }

  /**
   * バリデーション対象となる要素の種類を返す
   * 「checkbox, radio」、「select」、どちらも当てはまらない場合「input」のいずれかを返す
   * @return {String} 'checkOrRadio', 'select', 'input'
   */
  getInputType(_elmInput) {
    if (_elmInput.tagName === 'SELECT') return 'select';
    if (_elmInput.getAttribute('type').match(/checkbox|radio/)) return 'checkOrRadio';
    return 'input';
  }

  /**
   * input要素に付与されている`required`と`pattern`でバリデーションチェックを行う
   * エラーなら`true`が返る
   * @param {*} _elmInput バリデーション対象のinput要素
   * @returns {Boolean}
   */
  errorCheck(_elmInput) {
    const patternValidate = _elmInput.getAttribute('pattern') || false;
    const inputType = this.getInputType(_elmInput);
    // セレクトボックスの場合
    if (inputType === 'select')
      return !_elmInput.validity.patternMismatch && _elmInput.value.length ? false : true;
    // チェックボックスかラジオボタンの場合
    if (inputType === 'checkOrRadio') return _elmInput.checked ? false : true;
    // input（パターン有り）の場合
    if (patternValidate)
      return !_elmInput.validity.patternMismatch && _elmInput.value.length ? false : true;
    // input（パターン無し）の場合
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
    const requiredErrorMessage =
      _elmInput.getAttribute(this.attrRequiredErrorMessage) || this.defaultErrorMessage;
    let errorMessage = '';
    if (patternErrorMessage) {
      errorMessage = value.length ? patternErrorMessage : requiredErrorMessage;
    } else {
      errorMessage = requiredErrorMessage;
    }
    this.elmForm.querySelector(
      `[${this.attrElmErrorMessage}="${name}"]`
    ).textContent = errorMessage;
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
      `[${this.attrElmErrorMessage}="${_elmInput.getAttribute('name')}"]`
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
        return _item.id === _elmInput.id;
      });
      targetInputStatus['isError'] = _isErrorValue;
    };

    // チェックボックスかラジオボタンの場合、いずれかがチェックされていればエラーにしない
    if (this.getInputType(_elmInput) === 'checkOrRadio') {
      isError ? changeInputStatusArray(true) : changeInputStatusArray(false);
      const checkOrRadioInputStatuses = this.inputStatuses.filter((_item, _index, _self) => {
        return _item['name'] === _elmInput.getAttribute('name');
      });
      const isChecked = checkOrRadioInputStatuses.some((_item) => {
        return !_item['isError'];
      });
      !isChecked ? this.showErrorMessage(_elmInput) : false;
      return;
    }

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

  addEvent() {
    /**
     * Input
     */
    this.elmTargetInputs.forEach((_elmTargetInput) => {
      // フォーカスアウト時
      _elmTargetInput.addEventListener('change', (_ev) => {
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
