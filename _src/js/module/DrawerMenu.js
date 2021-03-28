import bgScrollFixed from '../function/bgScrollFixed'

export default class DrawerMenu {
  constructor(_parm) {
    this.elmDrawer = document.querySelector(_parm.drawer) || false
    this.elmDrawerOpenBtn = document.querySelector(_parm.drawerOpenBtn) || false
    this.elmDrawerCloseBtn = document.querySelector(_parm.drawerCloseBtn) || false
    this.elmDrawerBg = document.querySelector(_parm.drawerBg) || false
    this.attrToggle = _parm.attrToggle
    this.openFlag = false
  }
  open() {
    this.elmDrawer.setAttribute(this.attrToggle, 'true')
    this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'true')
    this.elmDrawerBg.setAttribute(this.attrToggle, 'true')
    bgScrollFixed(true)
  }
  close() {
    this.elmDrawer.setAttribute(this.attrToggle, 'false')
    this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'false')
    this.elmDrawerBg.setAttribute(this.attrToggle, 'false')
    bgScrollFixed(false)
  }
  toggle() {
    if (this.openFlag) {
      this.close()
      this.openFlag = false
      bgScrollFixed(false)
    } else {
      this.open()
      this.openFlag = true
      bgScrollFixed(true)
    }
  }
  addEvent() {
    this.elmDrawerOpenBtn.addEventListener('click', (_ev) => {
      this.open()
    })
    this.elmDrawerCloseBtn.addEventListener('click', (_ev) => {
      this.close()
    })
    this.elmDrawerBg.addEventListener('click', (_ev) => {
      this.close()
    })
  }
  init() {
    if (!this.elmDrawer) return;
    this.addEvent()
  }
}
