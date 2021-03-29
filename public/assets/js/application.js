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
/* harmony import */ var _module_FormValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/FormValidator */ "./_src/js/module/FormValidator.js");
/* harmony import */ var _module_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/SmoothScroll */ "./_src/js/module/SmoothScroll.js");
// import adjustViewport from './function/adjustViewport'




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

  (function () {
    var smoothScroll = new _module_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"]({
      targets: 'a[href^="#"]',
      fixHeader: '#js-header'
    });
    smoothScroll.init();
  })();

  (function () {
    // const form = document.querySelector('.form')
    // const fields = ["username", "email", "password", "password_confirmation"]
    // const validator = new FormValidator(form, fields)
    // validator.initialize()
    var formValidator = new _module_FormValidator__WEBPACK_IMPORTED_MODULE_1__["default"]({
      form: '#js-form',
      targetInputs: '#js-form input[data-required]'
    });
    formValidator.init();
  })();
};

window.addEventListener('DOMContentLoaded', function () {
  // adjustViewport()
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
  function DrawerMenu(_parm) {
    _classCallCheck(this, DrawerMenu);

    this.elmDrawer = document.querySelector(_parm.drawer) || false;
    this.elmDrawerOpenBtn = document.querySelector(_parm.drawerOpenBtn) || false;
    this.elmDrawerCloseBtn = document.querySelector(_parm.drawerCloseBtn) || false;
    this.elmDrawerBg = document.querySelector(_parm.drawerBg) || false;
    this.attrToggle = _parm.attrToggle;
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



/***/ }),

/***/ "./_src/js/module/FormValidator.js":
/*!*****************************************!*\
  !*** ./_src/js/module/FormValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidator; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(_parm) {
    _classCallCheck(this, FormValidator);

    this.elmForm = document.querySelector(_parm.form) || false;
    this.elmTargetInputs = _toConsumableArray(document.querySelectorAll(_parm.targetInputs)) || _toConsumableArray(document.querySelectorAll("".concat(_parm.form, " input[data-required]")));
    this.classErrorInput = _parm.classErrorInput || '__error';
    this.attrErrorMessage = _parm.attrErrorMessage || 'data-js-error-message';
    this.defaultErrorMessage = _parm.defaultErrorMessage || '入力してください';
    this.errorFlag = false;
  }

  _createClass(FormValidator, [{
    key: "validate",
    value: function validate(_elmInput) {
      var value = _elmInput.value;

      var inputName = _elmInput.getAttribute('name');

      var inputPattern = _elmInput.getAttribute('pattern') || false;
      var inputTitle = _elmInput.getAttribute('title') || false;
      var errorFlag = false;
      var errorCount = 0;

      var checkUndefined = function checkUndefined() {
        if (value !== '') return true;
      };

      var checkPattern = function checkPattern() {
        if (!inputPattern) return;
        if (value.match(inputPattern)) return true;
      };

      var checkEmail = function checkEmail() {
        if (!_elmInput.getAttribute('name') === 'email') return;
        if (value.match(/^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/)) return true;
      };

      var checkTel = function checkTel() {
        if (!_elmInput.getAttribute('name') === 'email') return;
        if (value.match(/^0\d{9,10}$/)) return true;
      };
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this = this;

      this.elmForm.addEventListener('submit', function (_ev) {
        _ev.preventDefault();

        _this.elmTargetInputs.forEach(function (_elmTargetInput) {
          _this.validate(_elmTargetInput);
        });

        if (_this.errorFlag) {
          _this.elmForm.submit();
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      console.log(this.elmForm);
      console.log(this.elmTargetInputs);
      if (!this.elmForm) return;
      this.elmTargetInputs.forEach(function (_elmTargetInput) {
        _this2.validate(_elmTargetInput);
      });
      this.addEvent();
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./_src/js/module/SmoothScroll.js":
/*!****************************************!*\
  !*** ./_src/js/module/SmoothScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothScroll; });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll(_parm) {
    _classCallCheck(this, SmoothScroll);

    this.elmLinks = _toConsumableArray(document.querySelectorAll(_parm.targets));
    this.elmFixHeader = document.querySelector(_parm.fixHeader) || false;
    this.addGap = _parm.addGap || 0;
  }

  _createClass(SmoothScroll, [{
    key: "scroll",
    value: function scroll(_event) {
      smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();

      _event.preventDefault();

      var elmTarget = document.querySelector(_event.currentTarget.getAttribute('href'));
      var targetOffset = elmTarget.getBoundingClientRect().top;
      var nowOffset = window.pageYOffset;
      var gap = this.elmFixHeader ? this.elmFixHeader.clientHeight : 0;
      var finishOffset = targetOffset + nowOffset - gap - this.addGap;
      window.scrollTo({
        top: finishOffset,
        behavior: 'smooth'
      });
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this = this;

      this.elmLinks.forEach(function (_elmLink) {
        _elmLink.addEventListener('click', function (_ev) {
          _this.scroll(_ev);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.elmLinks.length) return;
      this.addEvent();
    }
  }]);

  return SmoothScroll;
}();



/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })

/******/ });
//# sourceMappingURL=application.js.map