/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/js/_index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/js/_index.js":
/*!***************************!*\
  !*** ./_src/js/_index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_DrawerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/DrawerMenu */ "./_src/js/module/DrawerMenu.js");


var init = function init() {
  (function () {
    var headerDrawerMenu = new _module_DrawerMenu__WEBPACK_IMPORTED_MODULE_0__["default"]({
      drawer: '#js-drawer-menu-nav',
      drawerOpenBtn: '#js-drawer-open-btn',
      drawerCloseBtn: '#js-drawer-close-btn',
      drawerBg: '#js-drawer-menu-bg',
      attrToggle: 'data-active'
    });
    headerDrawerMenu.init();
  })();
};

window.addEventListener('DOMContentLoaded', function () {
  init();
});

/***/ }),

/***/ "./_src/js/function/bgScrollFixed.js":
/*!*******************************************!*\
  !*** ./_src/js/function/bgScrollFixed.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 背景を固定する関数
 * モーダルやドロワーメニューが開いている時に使用する
 * @param {Boolean} _isFixed - 固定: true, 解除: false
 * @return undefined
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_isFixed) {
  /**
   * スクロール位置を取得
   * @see https://qiita.com/sounisi5011/items/1a5a2410fce27ba6d8ae
   */
  var getScrollTop = function getScrollTop() {
    var pageYOffset = window.pageYOffset;
    var document = window.document;
    var body = document.body;

    if (pageYOffset !== undefined) {
      return pageYOffset;
    }
    /**
     * @see https://dev.opera.com/articles/fixing-the-scrolltop-bug/
     */


    var scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
    return scrollingElement.scrollTop;
  };
  /**
    * 適用するスクロール位置を定義
    */


  var scrollY = _isFixed ? getScrollTop() * -1 : parseInt(document.body.style.top || '0') * -1;
  /**
    * bodyに背景を{固定, 解除}するCSS適用
    * （背景固定時に画面のがくつきを防ぐために、スクロールバーの横幅の値を`padding-right`にセットしている）
    */

  if (_isFixed) {
    Object.assign(document.body.style, {
      position: 'fixed',
      top: "".concat(scrollY, "px"),
      left: '0',
      width: '100vw',
      height: '100vh',
      paddingRight: "".concat(window.innerWidth - document.body.clientWidth, "px"),
      overflow: 'hidden'
    });
  } else {
    document.body.style = '';
  }
  /**
    * 固定解除時にスクロール位置を戻す
    */


  if (!_isFixed) window.scrollTo(0, scrollY);
});

/***/ }),

/***/ "./_src/js/module/DrawerMenu.js":
/*!**************************************!*\
  !*** ./_src/js/module/DrawerMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerMenu; });
/* harmony import */ var _function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/bgScrollFixed */ "./_src/js/function/bgScrollFixed.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DrawerMenu = /*#__PURE__*/function () {
  function DrawerMenu(_obj) {
    _classCallCheck(this, DrawerMenu);

    this.elmDrawer = document.querySelector(_obj.drawer) || false;
    this.elmDrawerOpenBtn = document.querySelector(_obj.drawerOpenBtn) || false;
    this.elmDrawerCloseBtn = document.querySelector(_obj.drawerCloseBtn) || false;
    this.elmDrawerBg = document.querySelector(_obj.drawerBg) || false;
    this.attrToggle = _obj.attrToggle;
    this.openFlag = false;
  }

  _createClass(DrawerMenu, [{
    key: "open",
    value: function open() {
      this.elmDrawer.setAttribute(this.attrToggle, 'true');
      this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'true');
      this.elmDrawerBg.setAttribute(this.attrToggle, 'true');
      Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_0__["default"])(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.elmDrawer.setAttribute(this.attrToggle, 'false');
      this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'false');
      this.elmDrawerBg.setAttribute(this.attrToggle, 'false');
      Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.openFlag) {
        this.close();
        this.openFlag = false;
        Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
      } else {
        this.open();
        this.openFlag = true;
        Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_0__["default"])(true);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this = this;

      this.elmDrawerOpenBtn.addEventListener('click', function (_ev) {
        _this.open();
      });
      this.elmDrawerCloseBtn.addEventListener('click', function (_ev) {
        _this.close();
      });
      this.elmDrawerBg.addEventListener('click', function (_ev) {
        _this.close();
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.elmDrawer) return;
      this.addEvent();
    }
  }]);

  return DrawerMenu;
}();



/***/ })

/******/ });
//# sourceMappingURL=application.js.map