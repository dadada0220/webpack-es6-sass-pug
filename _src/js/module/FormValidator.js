/**
 * フォームのバリデーションを実行するクラス
 * `elmForm`, `elmTargetInputs`, `elmSubmitBtn`は必須
 *
 * 場合によっては、以下ライブラリでバリデーションするでも良いかも
 * 公式: https://imbrn.github.io/v8n/#what-s-v8n
 * 日本語解説記事: https://co.bsnws.net/article/182
 */
export default class FormValidator {
  /**
   * @property {Object} elmForm 【必須】form要素
   * @property {Array} elmTargetInputs 【必須】バリデーション対象となるinput要素の配列
   * @property {Object} elmSubmitBtn 【必須】送信ボタンの要素
   * @property {Array} elmFormErrorMessages フォーム全体のエラーメッセージ要素の配列
   * @property {String} classErrorInput エラーの場合、input要素に付与されるclass
   * @property {String} classSecureInput エラーが無い場合、input要素に付与されるclass
   * @property {String} attrElmErrorMessage エラーメッセージ要素をinput要素と紐付けるための属性名
   * @property {String} attrRequiredErrorMessage `required`のエラーメッセージの文言を変更するための属性名
   * @property {String} defaultErrorMessage デフォルトのエラーメッセージ
   * @property {Object} inputStatuses バリデーション対象となる全てのinput要素のオブジェクト. エラーの状態などのプロパティを持つ
   * @property {Boolean} isFirstSubmit 1回でも送信ボタンをクリックしたら`true`
   */
  constructor(_parm) {
    this.elmForm = document.querySelector(_parm.form) || false;
    this.elmTargetInputs = [...this.elmForm.querySelectorAll(_parm.targetInputs)];
    this.elmSubmitBtn = this.elmForm.querySelector(_parm.submitBtn);
    this.elmFormErrorMessages = [...this.elmForm.querySelectorAll('[data-js-form-error-message]')];
    this.classErrorInput = _parm.classErrorInput || '__error';
    this.classSecureInput = _parm.classSecureInput || '__secure';
    this.attrElmErrorMessage = _parm.attrElmErrorMessage || 'data-js-error-message';
    this.attrRequiredErrorMessage = _parm.attrRequiredErrorMessage || 'data-required-error';
    this.defaultErrorMessage = _parm.defaultErrorMessage || '必須項目を入力してください';
    const createInputStatuses = this.elmTargetInputs.map((_item) => {
      let result = [];
      result['name'] = _item.getAttribute('name');
      result['isError'] = true;
      return result;
    });
    this.inputStatuses = createInputStatuses.filter(
      (_item, _index, _self) => _self.findIndex((_ev) => _ev.name === _item.name) === _index
    );
    this.isFirstSubmit = false;
  }

  /**
   * input要素が一つでもバリデーションエラーなら`true`を返す
   * @return {Boolean}
   */
  getIsFormError() {
    return this.inputStatuses.every((_item) => _item['isError'] === false) ? false : true;
  }

  /**
   * バリデーション対象となるinput要素の種類を返す
   * @param {Object} _elmInput バリデーション対象のinput要素
   * @return {String} 'checkOrRadio', 'select', 'input'
   */
  getInputType(_elmInput) {
    if (_elmInput.tagName === 'SELECT') return 'select';
    if (_elmInput.getAttribute('type').match(/checkbox|radio/)) return 'checkOrRadio';
    return 'input';
  }

  /**
   * input要素に付与されている`required`と`pattern`でバリデーションチェックを行う
   * エラーなら`true`を返す
   * @param {Object} _elmInput バリデーション対象のinput要素
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
   * input要素に紐づくエラーメッセージ要素のテキストを描画
   * @param {Object} _elmInput バリデーション対象のinput要素
   */
  createInputErrorMessage(_elmInput) {
    const value = _elmInput.value;
    const name = _elmInput.getAttribute('name');
    const elmErrorMessage = this.elmForm.querySelector(`[${this.attrElmErrorMessage}="${name}"]`);
    const patternErrorMessage = _elmInput.getAttribute('title') || false;
    const requiredErrorMessage =
      _elmInput.getAttribute(this.attrRequiredErrorMessage) || this.defaultErrorMessage;
    let errorMessage = '';
    if (patternErrorMessage) {
      errorMessage = value.length ? patternErrorMessage : requiredErrorMessage;
    } else {
      errorMessage = requiredErrorMessage;
    }
    elmErrorMessage.textContent = errorMessage;
    return;
  }

  /**
   * フォーム全体のエラーメッセージの表示を切り替える
   * @param {Boolean} _show `true`: 表示, `false`: 非表示
   */
  toggleFormErrorMessage(_show) {
    this.elmFormErrorMessages.forEach((_elmFormErrorMessage) => {
      _show
        ? (_elmFormErrorMessage.style.display = 'block')
        : (_elmFormErrorMessage.style.display = 'none');
    });
  }

  /**
   * input要素のエラーをリセット
   * @param {Object} _elmInput バリデーション対象のinput要素
   */
  errorReset(_elmInput) {
    const name = _elmInput.getAttribute('name');
    const elmErrorMessage = this.elmForm.querySelector(`[${this.attrElmErrorMessage}="${name}"]`);
    _elmInput.classList.remove(this.classErrorInput);
    _elmInput.classList.remove(this.classSecureInput);
    elmErrorMessage.textContent = '';
    return;
  }

  /**
   * input要素に対してバリデーションチェックやエラーメッセージの描画など、バリデーションに関する関数を全て実行する
   * @param {Object} _elmInput バリデーション対象のinput要素
   */
  validate(_elmInput) {
    // エラーリセット
    this.errorReset(_elmInput);

    // 必要な変数定義
    const isError = this.errorCheck(_elmInput);
    const targetInputStatus = this.inputStatuses.find((_item) => {
      return _item.name === _elmInput.getAttribute('name');
    });
    const changeInputStatusArray = (_isErrorValue) => {
      targetInputStatus['isError'] = _isErrorValue;
    };

    // チェックボックスかラジオボタンの場合、いずれかがチェックされていればエラーにしない
    if (this.getInputType(_elmInput) === 'checkOrRadio') {
      const ElmsCheckOrRadio = [
        ...document.querySelectorAll(`input[name="${targetInputStatus['name']}"]`),
      ];
      const getIsAnyChecked = () => {
        return ElmsCheckOrRadio.some((_elm) => {
          return _elm.checked;
        });
      };
      const toggleAllCheckOrRadioRequired = (_value) => {
        ElmsCheckOrRadio.forEach((_elm) => {
          _elm.required = _value;
        });
      };
      if (getIsAnyChecked()) {
        toggleAllCheckOrRadioRequired(false);
        changeInputStatusArray(false);
      } else {
        toggleAllCheckOrRadioRequired(true);
        changeInputStatusArray(true);
        this.createInputErrorMessage(_elmInput);
      }
      return;
    }

    // バリデーションチェックやエラーメッセージの描画などを実行
    if (isError) {
      _elmInput.classList.add(this.classErrorInput);
      changeInputStatusArray(true);
      this.createInputErrorMessage(_elmInput);
    } else {
      changeInputStatusArray(false);
      _elmInput.classList.add(this.classSecureInput);
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
        this.isFirstSubmit
          ? this.getIsFormError()
            ? this.toggleFormErrorMessage(true)
            : this.toggleFormErrorMessage(false)
          : false;
      });
      // エラー時
      _elmTargetInput.addEventListener('invalid', (_ev) => {
        this.validate(_elmTargetInput);
      });
    });

    /**
     * SubmitBtn
     */
    this.elmSubmitBtn.addEventListener('click', (_ev) => {
      this.isFirstSubmit = true;
      this.getIsFormError()
        ? this.toggleFormErrorMessage(true)
        : this.toggleFormErrorMessage(false);
    });

    /**
     * Form
     */
    this.elmForm.addEventListener('submit', (_ev) => {
      _ev.preventDefault();
      if (!this.getIsFormError()) {
        console.log('Validate OK!');
        // this.elmForm.submit();
      }
    });
  }

  init() {
    if (!this.elmForm) return;
    this.addEvent();
  }
}
