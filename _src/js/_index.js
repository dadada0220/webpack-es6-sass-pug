// import adjustViewport from './function/adjustViewport'

import DrawerMenu from './module/DrawerMenu';
import FormValidator from './module/FormValidator';
import SmoothScroll from './module/SmoothScroll';

const init = () => {
  (() => {
    const headerDrawerMenu = new DrawerMenu({
      drawer: '#js-drawer-menu-nav',
      drawerOpenBtn: '#js-drawer-open-btn',
      drawerCloseBtn: '#js-drawer-close-btn',
      drawerBg: '#js-drawer-menu-bg',
      attrToggle: 'data-active',
    });
    headerDrawerMenu.init();
  })();

  (() => {
    const smoothScroll = new SmoothScroll({
      targets: 'a[href^="#"]',
      fixHeader: '#js-header',
    });
    smoothScroll.init();
  })();

  (() => {
    const formValidator = new FormValidator({
      form: '#js-form',
      targetInputs: 'input[required], select[required]',
      submitBtn: 'button[type="submit"]',
    });
    formValidator.init();
  })();
};

window.addEventListener('DOMContentLoaded', () => {
  // adjustViewport()
  init();
});
