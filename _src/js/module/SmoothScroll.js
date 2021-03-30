/**
 * スムーススクロールを実行するクラス
 * @see https://www.to-r.net/media/smooth_scrolling_2019/
 *
 * スクロール位置を調節可能（固定ヘッダーの場合、その高さ分、位置をズラすなど）
 */

// モダンブラウザ用ポリフィル
import smoothscroll from 'smoothscroll-polyfill';

export default class SmoothScroll {
  constructor(_parm) {
    this.elmLinks = [...document.querySelectorAll(_parm.targets)];
    this.elmFixHeader = document.querySelector(_parm.fixHeader) || false;
    this.addGap = _parm.addGap || 0;
  }
  scroll(_event) {
    smoothscroll.polyfill();
    _event.preventDefault();
    const elmTarget = document.querySelector(_event.currentTarget.getAttribute('href'));
    const targetOffset = elmTarget.getBoundingClientRect().top;
    const nowOffset = window.pageYOffset;
    const gap = this.elmFixHeader ? this.elmFixHeader.clientHeight : 0;
    const finishOffset = targetOffset + nowOffset - gap - this.addGap;
    window.scrollTo({
      top: finishOffset,
      behavior: 'smooth',
    });
  }
  addEvent() {
    this.elmLinks.forEach((_elmLink) => {
      _elmLink.addEventListener('click', (_ev) => {
        this.scroll(_ev);
      });
    });
  }
  init() {
    if (!this.elmLinks.length) return;
    this.addEvent();
  }
}
