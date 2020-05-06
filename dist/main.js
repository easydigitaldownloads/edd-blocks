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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./includes/blocks/downloads/components/Content.js":
/*!*********************************************************!*\
  !*** ./includes/blocks/downloads/components/Content.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/autop */ "@wordpress/autop");
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_1__);


var RawHTML = wp.element.RawHTML;

var Content = function Content(_ref) {
  var content = _ref.content,
      showFullContent = _ref.showFullContent,
      className = _ref.className;

  if (!showFullContent) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, {
    className: className
  }, Object(_wordpress_autop__WEBPACK_IMPORTED_MODULE_1__["autop"])(content));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./includes/blocks/downloads/components/Description.js":
/*!*************************************************************!*\
  !*** ./includes/blocks/downloads/components/Description.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/autop */ "@wordpress/autop");
/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_autop__WEBPACK_IMPORTED_MODULE_1__);


var RawHTML = wp.element.RawHTML;

var Description = function Description(_ref) {
  var description = _ref.description,
      showDescription = _ref.showDescription,
      className = _ref.className;

  if (!showDescription) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, {
    className: className
  }, Object(_wordpress_autop__WEBPACK_IMPORTED_MODULE_1__["autop"])(description));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./includes/blocks/downloads/components/Download.js":
/*!**********************************************************!*\
  !*** ./includes/blocks/downloads/components/Download.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./includes/blocks/downloads/components/Image.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./includes/blocks/downloads/components/Title.js");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description */ "./includes/blocks/downloads/components/Description.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./includes/blocks/downloads/components/Content.js");
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Price */ "./includes/blocks/downloads/components/Price.js");
/* harmony import */ var _PurchaseLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PurchaseLink */ "./includes/blocks/downloads/components/PurchaseLink.js");








var Download = function Download(props) {
  var _props$attributes = props.attributes,
      showThumbnails = _props$attributes.showThumbnails,
      showDescription = _props$attributes.showDescription,
      showFullContent = _props$attributes.showFullContent,
      showPrice = _props$attributes.showPrice,
      showBuyButton = _props$attributes.showBuyButton;
  var _props$download$info = props.download.info,
      image = _props$download$info.image,
      link = _props$download$info.link,
      title = _props$download$info.title,
      description = _props$download$info.excerpt,
      content = _props$download$info.content,
      price = _props$download$info.price,
      purchase_link = _props$download$info.purchase_link;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edd_download"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edd_download_inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    showThumbnails: showThumbnails
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    link: link,
    className: "edd_download_title"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: description,
    showDescription: showDescription,
    className: "edd_download_excerpt"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: content,
    showFullContent: showFullContent,
    className: "edd_download_full_content"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: price,
    showPrice: showPrice
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_PurchaseLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    purchaseLink: purchase_link,
    showBuyButton: showBuyButton
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Download);

/***/ }),

/***/ "./includes/blocks/downloads/components/DownloadTaxonomy.js":
/*!******************************************************************!*\
  !*** ./includes/blocks/downloads/components/DownloadTaxonomy.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./includes/blocks/downloads/components/Image.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./includes/blocks/downloads/components/Title.js");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Description */ "./includes/blocks/downloads/components/Description.js");





var DownloadTaxonomy = function DownloadTaxonomy(props) {
  var _props$attributes = props.attributes,
      showThumbnails = _props$attributes.showThumbnails,
      showTitle = _props$attributes.showTitle,
      showCount = _props$attributes.showCount,
      showDescription = _props$attributes.showDescription;
  var _props$taxonomy = props.taxonomy,
      name = _props$taxonomy.name,
      link = _props$taxonomy.link,
      count = _props$taxonomy.count,
      description = _props$taxonomy.description,
      taxonomy = _props$taxonomy.taxonomy;
  var image = props.taxonomy.meta.image;
  var taxType;

  if ('download_tag' === taxonomy) {
    taxType = 'tag';
  } else if ('download_category' === taxonomy) {
    taxType = 'category';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edd-download-".concat(taxType)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    showThumbnails: showThumbnails
  }), showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: name,
    link: link,
    className: "edd_download_title",
    showCount: showCount,
    count: count,
    type: "".concat(taxType)
  }), showDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Description__WEBPACK_IMPORTED_MODULE_3__["default"], {
    description: description,
    showDescription: showDescription,
    className: "edd-download-term-description"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DownloadTaxonomy);

/***/ }),

/***/ "./includes/blocks/downloads/components/Image.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Image.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RawHTML = wp.element.RawHTML;

var Image = function Image(_ref) {
  var showThumbnails = _ref.showThumbnails,
      image = _ref.image;

  // Return null if thumbnails aren't enabled, or do not exist for the download.
  if (!showThumbnails || !image) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, {
    className: "edd_download_image"
  }, image);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./includes/blocks/downloads/components/Price.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Price.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RawHTML = wp.element.RawHTML;

var Price = function Price(_ref) {
  var price = _ref.price,
      showPrice = _ref.showPrice;

  if (!showPrice) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edd_price"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, price));
};

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./includes/blocks/downloads/components/PurchaseLink.js":
/*!**************************************************************!*\
  !*** ./includes/blocks/downloads/components/PurchaseLink.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var RawHTML = wp.element.RawHTML;
var Disabled = wp.components.Disabled;

var PurchaseLink = function PurchaseLink(_ref) {
  var purchaseLink = _ref.purchaseLink,
      showBuyButton = _ref.showBuyButton;

  if (!showBuyButton) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Disabled, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "edd_download_buy_button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, purchaseLink)));
};

/* harmony default export */ __webpack_exports__["default"] = (PurchaseLink);

/***/ }),

/***/ "./includes/blocks/downloads/components/Title.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/unescape */ "./node_modules/lodash/unescape.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

function renderTitle(title) {
  if (!title) {
    return __('(Untitled)');
  }

  return lodash_unescape__WEBPACK_IMPORTED_MODULE_1___default()(title).trim();
}

var Title = function Title(_ref) {
  var link = _ref.link,
      title = _ref.title,
      className = _ref.className,
      showCount = _ref.showCount,
      count = _ref.count,
      type = _ref.type;

  if ('tag' === type || 'category' === type) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "edd-download-term-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: link,
      target: "_blank"
    }, renderTitle(title))), showCount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "edd-download-term-count"
    }, "(", count, ")")));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: link,
    target: "_blank"
  }, renderTitle(title))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./includes/blocks/downloads/edit.js":
/*!*******************************************!*\
  !*** ./includes/blocks/downloads/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Download__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Download */ "./includes/blocks/downloads/components/Download.js");
/* harmony import */ var _components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/DownloadTaxonomy */ "./includes/blocks/downloads/components/DownloadTaxonomy.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * Components
 */



/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    Spinner = _wp$components.Spinner;
var __ = wp.i18n.__;
var select = wp.data.select;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
var apiFetch = wp.apiFetch;

var DownloadsEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DownloadsEdit, _Component);

  var _super = _createSuper(DownloadsEdit);

  function DownloadsEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DownloadsEdit);

    _this = _super.apply(this, arguments);
    _this.setDownloadCategory = _this.setDownloadCategory.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.showDescription = _this.showDescription.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.showFullContent = _this.showFullContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.state = {
      isLoading: true,
      showDescription: true,
      showFullContent: false,
      downloads: [],
      downloadCategories: [],
      downloadTags: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DownloadsEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = this.props.attributes.type;

      if ('downloads' === type) {
        this.fetchDownloads();
        this.fetchDownloadTaxonomy({
          taxonomy: 'download_category'
        });
      }

      if ('download_categories' === type) {
        this.fetchDownloadTaxonomy({
          taxonomy: 'download_category'
        });
      }

      if ('download_tags' === type) {
        this.fetchDownloadTaxonomy({
          taxonomy: 'download_tag'
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$attribute = this.props.attributes,
          category = _this$props$attribute.category,
          number = _this$props$attribute.number,
          order = _this$props$attribute.order,
          orderBy = _this$props$attribute.orderBy,
          showEmpty = _this$props$attribute.showEmpty,
          type = _this$props$attribute.type;

      var _wp$data$select$getEd = wp.data.select("core/editor").getEditorSettings(),
          alignWide = _wp$data$select$getEd.alignWide;

      var prevProp = prevProps.attributes;

      if ('downloads' === type) {
        if (category !== prevProp.category || number !== prevProp.number || order !== prevProp.order || orderBy !== prevProp.orderBy) {
          // Fetch new array of downloads when various controls are updated and store them in state.
          this.fetchDownloads();
        } // Block type was switched to "Downloads" from another block type.


        if ('downloads' !== prevProp.type) {
          // Fetch downloads and store them in state.
          this.fetchDownloads(); // Re-fetch the download categories if "Show Empty Categories" is false. 
          // All download categories should show in the select control.

          if (!showEmpty) {
            this.fetchDownloadTaxonomy({
              taxonomy: 'download_category'
            });
          } // Reset the orderBy attribute to "date" once the Downloads block type is selected.


          this.props.setAttributes({
            orderBy: 'date'
          });
        }
      }

      if ('download_categories' === type) {
        if (showEmpty !== prevProp.showEmpty || order !== prevProp.order || orderBy !== prevProp.orderBy) {
          // Fetch new array of download categories when various controls are updated and store in state.
          this.fetchDownloadTaxonomy({
            taxonomy: 'download_category'
          });
        } // Fetch download categories once the block type is switched to "Download Categories" from another block type.


        if ('download_categories' !== prevProp.type) {
          // Fetch a new list of download categories and store it in state.
          this.fetchDownloadTaxonomy({
            taxonomy: 'download_category'
          }); // Reset the orderBy attribute to "count" once the download categories block type is selected.

          this.props.setAttributes({
            orderBy: 'count'
          });
        }
      }

      if ('download_tags' === type) {
        if (showEmpty !== prevProp.showEmpty || order !== prevProp.order || orderBy !== prevProp.orderBy) {
          // Fetch new array of download tags when various controls are updated and store in state.
          this.fetchDownloadTaxonomy({
            taxonomy: 'download_tag'
          });
        } // Fetch download tags once the block type is switched to "Download Tags" from another block type.


        if ('download_tags' !== prevProp.type) {
          // Fetch a new list of download tags and store it in state.
          this.fetchDownloadTaxonomy({
            taxonomy: 'download_tag'
          }); // Reset the orderBy attribute to "count" once the download tags block type is selected.

          this.props.setAttributes({
            orderBy: 'count'
          });
        }
      } // Clear "align" attribute if theme does not support wide images.
      // This prevents the attribute from being "stuck" on a particular setting if the theme is switched.


      if (!alignWide) {
        this.props.setAttributes({
          align: undefined
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Delete fetch requests.
      delete this.downloadsRequest;
      delete this.downloadCategoriesRequest;
      delete this.downloadTagsRequest;
    }
  }, {
    key: "getOrderOptions",
    value: function getOrderOptions() {
      return [{
        value: 'ASC',
        label: __('Ascending')
      }, {
        value: 'DESC',
        label: __('Descending')
      }];
    }
  }, {
    key: "getOrderByOptions",
    value: function getOrderByOptions() {
      var type = this.props.attributes.type;
      var options;

      if ('downloads' === type) {
        options = [{
          value: 'date',
          label: __('Date Created')
        }, {
          value: 'earnings',
          label: __('Earnings')
        }, {
          value: 'id',
          label: __('ID')
        }, {
          value: 'price',
          label: __('Price')
        }, {
          value: 'random',
          label: __('Random')
        }, {
          value: 'sales',
          label: __('Sales')
        }, {
          value: 'name',
          label: __('Slug')
        }, {
          value: 'title',
          label: __('Title')
        }];
      } else if ('download_categories' === type || 'download_tags' === type) {
        options = [{
          value: 'count',
          label: __('Count')
        }, {
          value: 'id',
          label: __('ID')
        }, {
          value: 'name',
          label: __('Name')
        }, {
          value: 'slug',
          label: __('Slug')
        }];
      }

      return options;
    }
  }, {
    key: "getDownloadCategories",
    value: function getDownloadCategories() {
      var downloadCategories = this.state.downloadCategories;
      var categories = [{
        'value': 'all',
        'label': __('All')
      }];
      downloadCategories.forEach(function (category) {
        categories.push({
          'label': category.name,
          'value': category.id
        });
      });
      return categories;
    }
  }, {
    key: "getBlockTypes",
    value: function getBlockTypes() {
      return [{
        'value': 'downloads',
        'label': __('Downloads')
      }, {
        'value': 'download_categories',
        'label': __('Download Categories')
      }, {
        'value': 'download_tags',
        'label': __('Download Tags')
      }];
    }
  }, {
    key: "setDownloadCategory",
    value: function setDownloadCategory(value) {
      if ('all' === value) {
        value = undefined;
      } // This will support an array of category IDs in the future.


      this.props.setAttributes({
        category: value // Store the category's ID.

      });
    }
  }, {
    key: "showDescription",
    value: function showDescription() {
      var value = this.state.showDescription; // Update the state.

      this.setState({
        'showDescription': !value,
        'showFullContent': value
      }, function () {
        this.props.setAttributes({
          showDescription: !value
        });
        this.props.setAttributes({
          showFullContent: false
        });
      });
    }
  }, {
    key: "showFullContent",
    value: function showFullContent() {
      var value = this.state.showFullContent; // Update the state.

      this.setState({
        'showFullContent': !value,
        'showDescription': value
      }, function () {
        this.props.setAttributes({
          showFullContent: !value
        });
        this.props.setAttributes({
          showDescription: false
        });
      });
    }
  }, {
    key: "fetchDownloadTaxonomy",
    value: function fetchDownloadTaxonomy(args) {
      var _this2 = this;

      var _this$props$attribute2 = this.props.attributes,
          showEmpty = _this$props$attribute2.showEmpty,
          order = _this$props$attribute2.order,
          orderBy = _this$props$attribute2.orderBy,
          type = _this$props$attribute2.type;
      var taxonomy = args.taxonomy; // Get the options

      var options = this.getOrderByOptions();
      var queryOrderBy = args.orderBy ? args.orderBy.toLowerCase() : orderBy.toLowerCase();
      var queryOrder = args.order ? args.order.toLowerCase() : order.toLowerCase();
      var query = {
        per_page: -1,
        orderby: queryOrderBy,
        order: queryOrder
      }; // Reset the orderby and order parameters for the downloads block type.
      // The downloads block type displays a list of categories.

      if ('downloads' === type) {
        query['orderby'] = 'name';
        query['order'] = 'asc';
      }

      if ('download_categories' === type || 'download_tags' === type) {
        // If the taxonomy request is for downloads categories or tags,
        // check to see if the orderby parameter is correct for the block type.
        // If not, reset it to "count", the first available option for taxonomies.
        var orderByExists = options.find(function (obj) {
          return obj.value === orderBy;
        });

        if (!orderByExists) {
          query['orderby'] = 'count';
        } // Hide download terms that have no downloads by default.


        query['hide_empty'] = true !== showEmpty ? true : false;
      }

      var request = apiFetch({
        path: "/wp/v2/".concat(taxonomy, "?").concat(Object(querystringify__WEBPACK_IMPORTED_MODULE_10__["stringify"])(_objectSpread({}, query)))
      }); // Request download categories and store in state.

      if ('download_category' === taxonomy) {
        request.then(function (downloadCategories) {
          if (_this2.downloadCategoriesRequest !== request) {
            return;
          }

          _this2.setState({
            downloadCategories: downloadCategories,
            isLoading: false
          });
        });
        this.downloadCategoriesRequest = request;
      } // Request download tags and store in state.


      if ('download_tag' === taxonomy) {
        request.then(function (downloadTags) {
          if (_this2.downloadTagsRequest !== request) {
            return;
          }

          _this2.setState({
            downloadTags: downloadTags,
            isLoading: false
          });
        });
        this.downloadTagsRequest = request;
      }
    }
  }, {
    key: "fetchDownloads",
    value: function fetchDownloads() {
      var _this3 = this;

      // Get the options
      var options = this.getOrderByOptions();
      var _this$props$attribute3 = this.props.attributes,
          category = _this$props$attribute3.category,
          number = _this$props$attribute3.number,
          order = _this$props$attribute3.order,
          orderBy = _this$props$attribute3.orderBy;
      var queryOrderBy = orderBy;

      switch (queryOrderBy) {
        case 'id':
          queryOrderBy = 'ID'; // EDD expects "ID", not "id".

          break;

        case 'random':
          queryOrderBy = 'rand';
          break;

        default:
          queryOrderBy = orderBy;
          break;
      }

      var query = {
        number: number,
        order: order,
        orderby: queryOrderBy
      }; // Query downloads by category.

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(category)) {
        query['category'] = category;
      }

      var url = edd_blocks_global_vars.url; // Reset orderby parameter to "date", in case it's set to something that 
      // the block type does not support.

      var orderByExists = options.find(function (obj) {
        return obj.value === orderBy;
      });

      if (!orderByExists) {
        query['orderby'] = 'date';
      }

      var request = apiFetch({
        url: "".concat(url, "/?edd-api=products&").concat(Object(querystringify__WEBPACK_IMPORTED_MODULE_10__["stringify"])(_objectSpread({}, query)))
      }); // Request downloads and store in state.

      request.then(function (downloads) {
        if (_this3.downloadsRequest !== request) {
          return;
        }

        _this3.setState({
          downloads: downloads,
          isLoading: false
        });
      });
      this.downloadsRequest = request;
    }
  }, {
    key: "renderDownloads",
    value: function renderDownloads() {
      var downloads = this.state.downloads.products;
      var _this$state = this.state,
          downloadCategories = _this$state.downloadCategories,
          downloadTags = _this$state.downloadTags;
      var attributes = this.props.attributes;
      var columns = attributes.columns,
          type = attributes.type;

      if ('downloads' === type) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('edd_downloads_list', 'edd_download_columns_' + columns)
        }, downloads.map(function (download) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_Download__WEBPACK_IMPORTED_MODULE_11__["default"], {
            download: download,
            key: download.info.id.toString(),
            attributes: attributes
          });
        }));
      } else if ('download_categories' === type) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns)
        }, downloadCategories.map(function (taxonomy) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: taxonomy.id,
            taxonomy: taxonomy,
            attributes: attributes
          });
        }));
      } else if ('download_tags' === type) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns)
        }, downloadTags.map(function (taxonomy) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: taxonomy.id,
            taxonomy: taxonomy,
            attributes: attributes
          });
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var align = attributes.align,
          number = attributes.number,
          columns = attributes.columns,
          showBuyButton = attributes.showBuyButton,
          showPrice = attributes.showPrice,
          showThumbnails = attributes.showThumbnails,
          showDescription = attributes.showDescription,
          showFullContent = attributes.showFullContent,
          showPagination = attributes.showPagination,
          order = attributes.order,
          orderBy = attributes.orderBy,
          category = attributes.category,
          type = attributes.type,
          showTitle = attributes.showTitle,
          showCount = attributes.showCount,
          showEmpty = attributes.showEmpty;
      var _this$state2 = this.state,
          downloadTags = _this$state2.downloadTags,
          downloadCategories = _this$state2.downloadCategories,
          isLoading = _this$state2.isLoading;
      var downloads = this.state.downloads.products;
      var isDownloadTaxonomy = type === 'download_categories' || type === 'download_tags';
      var showDescriptionLabel;

      if (type === 'downloads') {
        showDescriptionLabel = __('Show Excerpt');
      } else if (type === 'download_categories') {
        showDescriptionLabel = __('Show Category Description');
      } else if (type === 'download_tags') {
        showDescriptionLabel = __('Show Tag Description');
      } else {
        showDescriptionLabel = __('Show Description');
      } // Loading states.


      var showLoadingLabel;

      if (type === 'download_categories') {
        showLoadingLabel = __('Loading download categories');
      } else if (type === 'download_tags') {
        showLoadingLabel = __('Loading download tags');
      } else {
        showLoadingLabel = __('Loading downloads');
      }

      if (isLoading) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
          icon: "download",
          label: showLoadingLabel
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null)));
      }

      var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __('Display'),
        value: type,
        options: this.getBlockTypes(),
        onChange: function onChange(value) {
          return setAttributes({
            type: value
          });
        }
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __('Downloads Per Page'),
        value: number,
        onChange: function onChange(number) {
          return setAttributes({
            number: number
          });
        },
        min: 1,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __('Columns'),
        value: columns,
        onChange: function onChange(columns) {
          return setAttributes({
            columns: columns
          });
        },
        min: 1,
        max: 6
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Buy Button'),
        checked: !!showBuyButton,
        onChange: function onChange() {
          return setAttributes({
            showBuyButton: !showBuyButton
          });
        }
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Price'),
        checked: !!showPrice,
        onChange: function onChange() {
          return setAttributes({
            showPrice: !showPrice
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Thumbnails'),
        checked: !!showThumbnails,
        onChange: function onChange() {
          return setAttributes({
            showThumbnails: !showThumbnails
          });
        }
      }), isDownloadTaxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: 'download_categories' === type ? __('Show Category Name') : __('Show Tag Name'),
        checked: !!showTitle,
        onChange: function onChange() {
          return setAttributes({
            showTitle: !showTitle
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: showDescriptionLabel,
        checked: !!showDescription,
        onChange: this.showDescription
      }), showTitle && isDownloadTaxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Count'),
        checked: !!showCount,
        onChange: function onChange() {
          return setAttributes({
            showCount: !showCount
          });
        }
      }), isDownloadTaxonomy && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: 'download_categories' === type ? __('Show Empty Categories') : __('Show Empty Tags'),
        checked: !!showEmpty,
        onChange: function onChange() {
          return setAttributes({
            showEmpty: !showEmpty
          });
        }
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Full Content'),
        checked: !!showFullContent,
        onChange: this.showFullContent
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Show Pagination'),
        checked: !!showPagination,
        onChange: function onChange() {
          return setAttributes({
            showPagination: !showPagination
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __('Order By'),
        value: orderBy,
        options: this.getOrderByOptions(),
        onChange: function onChange(orderBy) {
          return setAttributes({
            orderBy: orderBy
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __('Order'),
        value: order,
        options: this.getOrderOptions(),
        onChange: function onChange(order) {
          return setAttributes({
            order: order
          });
        }
      }), type === 'downloads' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SelectControl, {
        label: __('Show Downloads From Category'),
        value: category,
        options: this.getDownloadCategories(),
        onChange: this.setDownloadCategory
      })));
      var hasDownloads = Array.isArray(downloads) && downloads.length;
      var hasDownloadTags = Array.isArray(downloadTags) && downloadTags.length;
      var hasDownloadCategories = Array.isArray(downloadCategories) && downloadCategories.length;

      if (!hasDownloads && type === 'downloads') {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
          icon: "download",
          label: __('Loading downloads')
        }, !Array.isArray(downloads) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null) : __('No downloads found.')));
      }

      if (!hasDownloadCategories && type === 'download_categories') {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
          icon: "download",
          label: __('Loading download categories')
        }, !Array.isArray(downloadCategories) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null) : __('No download categories found.')));
      }

      if (!hasDownloadTags && type === 'download_tags') {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
          icon: "download",
          label: __('Loading download tags')
        }, !Array.isArray(downloadTags) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null) : __('No download tags found.')));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockAlignmentToolbar, {
        value: align,
        onChange: function onChange(align) {
          return setAttributes({
            align: align
          });
        },
        controls: ['wide', 'full']
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: this.props.className
      }, this.renderDownloads()));
    }
  }]);

  return DownloadsEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (DownloadsEdit);

/***/ }),

/***/ "./includes/blocks/downloads/index.js":
/*!********************************************!*\
  !*** ./includes/blocks/downloads/index.js ***!
  \********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./includes/blocks/downloads/edit.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var name = 'easydigitaldownloads/downloads';
var settings = {
  title: __('Downloads'),
  description: __('Display Downloads, Categories and Tags from Easy Digital Downloads.'),
  icon: 'download',
  category: 'widgets',
  keywords: [__('downloads'), __('edd')],
  supports: {
    html: false,
    multiple: true
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align;

    if (['wide', 'full'].includes(align)) {
      return {
        'data-align': align,
        'data-block-type': 'easy-digital-downloads'
      };
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_unescapeHtmlChar.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_unescapeHtmlChar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

module.exports = unescapeHtmlChar;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/unescape.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/unescape.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unescapeHtmlChar = __webpack_require__(/*! ./_unescapeHtmlChar */ "./node_modules/lodash/_unescapeHtmlChar.js");

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../includes/blocks/downloads */ "./includes/blocks/downloads/index.js");

var registerBlockType = wp.blocks.registerBlockType;

var registerCoreBlocks = function registerCoreBlocks() {
  [_includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_0__].forEach(function (_ref) {
    var name = _ref.name,
        settings = _ref.settings;
    registerBlockType(name, settings);
  });
};

registerCoreBlocks();

/***/ }),

/***/ "@wordpress/autop":
/*!****************************************!*\
  !*** external {"this":["wp","autop"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["autop"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map