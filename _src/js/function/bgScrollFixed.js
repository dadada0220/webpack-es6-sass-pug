/**
 * 背景を固定する関数
 * モーダルやドロワーメニューが開いている時に使用する
 * @param {Boolean} _isFixed - 固定: true, 解除: false
 */
export default (_isFixed) => {
  /**
   * スクロール位置を取得
   * @see https://qiita.com/sounisi5011/items/1a5a2410fce27ba6d8ae
   */
  const getScrollTop = () => {
    const pageYOffset = window.pageYOffset;
    const document = window.document;
    const body = document.body;
    if (pageYOffset !== undefined) {
      return pageYOffset;
    }
    /**
     * @see https://dev.opera.com/articles/fixing-the-scrolltop-bug/
     */
    const scrollingElement =
      'scrollingElement' in document
        ? document.scrollingElement
        : window.navigator.userAgent.indexOf('WebKit') != -1
        ? body
        : document.documentElement || body.parentNode;
    return scrollingElement.scrollTop;
  };

  /**
   * 適用するスクロール位置を定義
   */
  const scrollY = _isFixed ? getScrollTop() * -1 : parseInt(document.body.style.top || '0') * -1;

  /**
   * bodyに背景を{固定, 解除}するCSS適用
   * （背景固定時に画面のがくつきを防ぐために、スクロールバーの横幅の値を`padding-right`にセットしている）
   */
  if (_isFixed) {
    Object.assign(document.body.style, {
      position: 'fixed',
      top: `${scrollY}px`,
      left: '0',
      width: '100vw',
      height: '100vh',
      paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
      overflow: 'hidden',
    });
  } else {
    document.body.style = '';
  }

  /**
   * 固定解除時にスクロール位置を戻す
   */
  if (!_isFixed) window.scrollTo(0, scrollY);
  return;
};
