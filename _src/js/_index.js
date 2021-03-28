// import adjustViewport from './function/adjustViewport'

import DrawerMenu from './module/DrawerMenu'

const init = () => {
  (() => {
    const headerDrawerMenu = new DrawerMenu({
      drawer: '#js-drawer-menu-nav',
      drawerOpenBtn: '#js-drawer-open-btn',
      drawerCloseBtn: '#js-drawer-close-btn',
      drawerBg: '#js-drawer-menu-bg',
      attrToggle: 'data-active',
    })
    headerDrawerMenu.init()
  })();
}

window.addEventListener('DOMContentLoaded', () => {
  // adjustViewport()
  init()
})
