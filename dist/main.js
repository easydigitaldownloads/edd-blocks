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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/autop */ \"./node_modules/@wordpress/autop/build-module/index.js\");\n\n\nvar RawHTML = wp.element.RawHTML;\n\n\nvar Content = function Content(_ref) {\n\tvar content = _ref.content,\n\t    showFullContent = _ref.showFullContent,\n\t    className = _ref.className;\n\n\n\tif (!showFullContent) {\n\t\treturn null;\n\t}\n\n\treturn wp.element.createElement(\n\t\tRawHTML,\n\t\t{ className: className },\n\t\tObject(_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__[\"autop\"])(content)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Content.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/Description.js":
/*!*************************************************************!*\
  !*** ./includes/blocks/downloads/components/Description.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_autop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/autop */ \"./node_modules/@wordpress/autop/build-module/index.js\");\n\n\nvar RawHTML = wp.element.RawHTML;\n\n\nvar Description = function Description(_ref) {\n\tvar description = _ref.description,\n\t    showDescription = _ref.showDescription,\n\t    className = _ref.className;\n\n\n\tif (!showDescription) {\n\t\treturn null;\n\t}\n\n\treturn wp.element.createElement(\n\t\tRawHTML,\n\t\t{ className: className },\n\t\tObject(_wordpress_autop__WEBPACK_IMPORTED_MODULE_0__[\"autop\"])(description)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Description.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/Download.js":
/*!**********************************************************!*\
  !*** ./includes/blocks/downloads/components/Download.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ \"./includes/blocks/downloads/components/Image.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ \"./includes/blocks/downloads/components/Title.js\");\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Description */ \"./includes/blocks/downloads/components/Description.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ \"./includes/blocks/downloads/components/Content.js\");\n/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Price */ \"./includes/blocks/downloads/components/Price.js\");\n/* harmony import */ var _PurchaseLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PurchaseLink */ \"./includes/blocks/downloads/components/PurchaseLink.js\");\n\n\n\n\n\n\n\nvar Download = function Download(props) {\n\tvar _props$attributes = props.attributes,\n\t    showThumbnails = _props$attributes.showThumbnails,\n\t    showDescription = _props$attributes.showDescription,\n\t    showFullContent = _props$attributes.showFullContent,\n\t    showPrice = _props$attributes.showPrice,\n\t    showBuyButton = _props$attributes.showBuyButton;\n\tvar _props$download$info = props.download.info,\n\t    image = _props$download$info.image,\n\t    link = _props$download$info.link,\n\t    title = _props$download$info.title,\n\t    description = _props$download$info.excerpt,\n\t    content = _props$download$info.content,\n\t    price = _props$download$info.price,\n\t    purchase_link = _props$download$info.purchase_link;\n\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: 'edd_download' },\n\t\twp.element.createElement(_Image__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n\t\t\timage: image,\n\t\t\tshowThumbnails: showThumbnails\n\t\t}),\n\t\twp.element.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n\t\t\ttitle: title,\n\t\t\tlink: link,\n\t\t\tclassName: 'edd_download_title'\n\t\t}),\n\t\twp.element.createElement(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n\t\t\tdescription: description,\n\t\t\tshowDescription: showDescription,\n\t\t\tclassName: 'edd_download_excerpt'\n\t\t}),\n\t\twp.element.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n\t\t\tcontent: content,\n\t\t\tshowFullContent: showFullContent,\n\t\t\tclassName: 'edd_download_full_content'\n\t\t}),\n\t\twp.element.createElement(_Price__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n\t\t\tprice: price,\n\t\t\tshowPrice: showPrice\n\t\t}),\n\t\twp.element.createElement(_PurchaseLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n\t\t\tpurchaseLink: purchase_link,\n\t\t\tshowBuyButton: showBuyButton\n\t\t})\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Download);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Download.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/DownloadTaxonomy.js":
/*!******************************************************************!*\
  !*** ./includes/blocks/downloads/components/DownloadTaxonomy.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ \"./includes/blocks/downloads/components/Image.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ \"./includes/blocks/downloads/components/Title.js\");\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Description */ \"./includes/blocks/downloads/components/Description.js\");\n\n\n\n\nvar DownloadTaxonomy = function DownloadTaxonomy(props) {\n\tvar _props$attributes = props.attributes,\n\t    showThumbnails = _props$attributes.showThumbnails,\n\t    showTitle = _props$attributes.showTitle,\n\t    showCount = _props$attributes.showCount,\n\t    showDescription = _props$attributes.showDescription;\n\tvar _props$taxonomy = props.taxonomy,\n\t    name = _props$taxonomy.name,\n\t    link = _props$taxonomy.link,\n\t    count = _props$taxonomy.count,\n\t    description = _props$taxonomy.description,\n\t    taxonomy = _props$taxonomy.taxonomy;\n\n\tvar image = props.taxonomy.meta.image;\n\n\tvar taxType = void 0;\n\n\tif ('download_tag' === taxonomy) {\n\t\ttaxType = 'tag';\n\t} else if ('download_category' === taxonomy) {\n\t\ttaxType = 'category';\n\t}\n\n\treturn wp.element.createElement(\n\t\t'div',\n\t\t{ className: 'edd-download-' + taxType },\n\t\twp.element.createElement(_Image__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n\t\t\timage: image,\n\t\t\tshowThumbnails: showThumbnails\n\t\t}),\n\t\tshowTitle && wp.element.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n\t\t\ttitle: name,\n\t\t\tlink: link,\n\t\t\tclassName: 'edd_download_title',\n\t\t\tshowCount: showCount,\n\t\t\tcount: count,\n\t\t\ttype: '' + taxType\n\t\t}),\n\t\tshowDescription && wp.element.createElement(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n\t\t\tdescription: description,\n\t\t\tshowDescription: showDescription,\n\t\t\tclassName: 'edd-download-term-description'\n\t\t})\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DownloadTaxonomy);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/DownloadTaxonomy.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/Image.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Image.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RawHTML = wp.element.RawHTML;\n\n\nvar Image = function Image(_ref) {\n\tvar showThumbnails = _ref.showThumbnails,\n\t    image = _ref.image;\n\n\t// Return null if thumbnails aren't enabled, or do not exist for the download.\n\tif (!showThumbnails || !image) {\n\t\treturn null;\n\t}\n\n\treturn wp.element.createElement(\n\t\tRawHTML,\n\t\t{ className: \"edd_download_image\" },\n\t\timage\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Image.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/Price.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Price.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RawHTML = wp.element.RawHTML;\n\n\nvar Price = function Price(_ref) {\n\tvar price = _ref.price,\n\t    showPrice = _ref.showPrice;\n\n\n\tif (!showPrice) {\n\t\treturn null;\n\t}\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\t{ className: \"edd_price\" },\n\t\twp.element.createElement(\n\t\t\tRawHTML,\n\t\t\tnull,\n\t\t\tprice\n\t\t)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Price.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/PurchaseLink.js":
/*!**************************************************************!*\
  !*** ./includes/blocks/downloads/components/PurchaseLink.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RawHTML = wp.element.RawHTML;\nvar Disabled = wp.components.Disabled;\n\n\nvar PurchaseLink = function PurchaseLink(_ref) {\n\tvar purchaseLink = _ref.purchaseLink,\n\t    showBuyButton = _ref.showBuyButton;\n\n\n\tif (!showBuyButton) {\n\t\treturn null;\n\t}\n\n\treturn wp.element.createElement(\n\t\tDisabled,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"edd_download_buy_button\" },\n\t\t\twp.element.createElement(\n\t\t\t\tRawHTML,\n\t\t\t\tnull,\n\t\t\t\tpurchaseLink\n\t\t\t)\n\t\t)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PurchaseLink);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/PurchaseLink.js?");

/***/ }),

/***/ "./includes/blocks/downloads/components/Title.js":
/*!*******************************************************!*\
  !*** ./includes/blocks/downloads/components/Title.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/unescape */ \"./node_modules/lodash/unescape.js\");\n/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\n\n\nfunction renderTitle(title) {\n\n\tif (!title) {\n\t\treturn __('(Untitled)');\n\t}\n\n\treturn lodash_unescape__WEBPACK_IMPORTED_MODULE_0___default()(title).trim();\n}\n\nvar Title = function Title(_ref) {\n\tvar link = _ref.link,\n\t    title = _ref.title,\n\t    className = _ref.className,\n\t    showCount = _ref.showCount,\n\t    count = _ref.count,\n\t    type = _ref.type;\n\n\n\tif ('tag' === type || 'category' === type) {\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'edd-download-term-title' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: className },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: link, target: '_blank' },\n\t\t\t\t\t\trenderTitle(title)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tshowCount && wp.element.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'edd-download-term-count' },\n\t\t\t\t\t'(',\n\t\t\t\t\tcount,\n\t\t\t\t\t')'\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t'h3',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ href: link, target: '_blank' },\n\t\t\t\trenderTitle(title)\n\t\t\t)\n\t\t)\n\t);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/components/Title.js?");

/***/ }),

/***/ "./includes/blocks/downloads/edit.js":
/*!*******************************************!*\
  !*** ./includes/blocks/downloads/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_isundefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isundefined */ \"./node_modules/lodash/isundefined.js\");\n/* harmony import */ var lodash_isundefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isundefined__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystringify */ \"./node_modules/querystringify/index.js\");\n/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Download */ \"./includes/blocks/downloads/components/Download.js\");\n/* harmony import */ var _components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DownloadTaxonomy */ \"./includes/blocks/downloads/components/DownloadTaxonomy.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * External dependencies\n */\n\n\n\n\n/**\n * Components\n */\n\n\n\n/**\n * WordPress dependencies\n */\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Placeholder = _wp$components.Placeholder,\n    ToggleControl = _wp$components.ToggleControl,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    Spinner = _wp$components.Spinner;\nvar __ = wp.i18n.__;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    BlockControls = _wp$editor.BlockControls,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;\n\n\nvar apiFetch = wp.apiFetch;\n\nvar DownloadsEdit = function (_Component) {\n\t_inherits(DownloadsEdit, _Component);\n\n\tfunction DownloadsEdit() {\n\t\t_classCallCheck(this, DownloadsEdit);\n\n\t\tvar _this = _possibleConstructorReturn(this, (DownloadsEdit.__proto__ || Object.getPrototypeOf(DownloadsEdit)).apply(this, arguments));\n\n\t\t_this.setDownloadCategory = _this.setDownloadCategory.bind(_this);\n\t\t_this.showDescription = _this.showDescription.bind(_this);\n\t\t_this.showFullContent = _this.showFullContent.bind(_this);\n\n\t\t_this.state = {\n\t\t\tisLoading: true,\n\t\t\tshowDescription: true,\n\t\t\tshowFullContent: false,\n\t\t\tdownloads: [],\n\t\t\tdownloadCategories: [],\n\t\t\tdownloadTags: []\n\t\t};\n\n\t\treturn _this;\n\t}\n\n\t_createClass(DownloadsEdit, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar type = this.props.attributes.type;\n\n\n\t\t\tthis.fetchDownloads();\n\t\t\tthis.fetchDownloadCategories();\n\n\t\t\t// Only fetch tags on component mount if type is already set to download_tags.\n\t\t\tif ('download_tags' === type) {\n\t\t\t\tthis.fetchDownloadTags();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\tdelete this.downloadsRequest;\n\t\t\tdelete this.downloadCategoriesRequest;\n\t\t\tdelete this.downloadTagsRequest;\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate(prevProps) {\n\t\t\tvar _props$attributes = this.props.attributes,\n\t\t\t    category = _props$attributes.category,\n\t\t\t    number = _props$attributes.number,\n\t\t\t    order = _props$attributes.order,\n\t\t\t    orderBy = _props$attributes.orderBy,\n\t\t\t    showEmpty = _props$attributes.showEmpty,\n\t\t\t    type = _props$attributes.type;\n\n\n\t\t\tif (category !== prevProps.attributes.category || number !== prevProps.attributes.number || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy) {\n\t\t\t\tthis.fetchDownloads();\n\t\t\t}\n\n\t\t\tif ('download_categories' === type) {\n\t\t\t\tif (showEmpty !== prevProps.attributes.showEmpty || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy || number !== prevProps.attributes.number) {\n\t\t\t\t\tthis.fetchDownloadCategories();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif ('download_tags' === type) {\n\t\t\t\t// Fetch the download tags when \"Download Tags\" is selected.\n\t\t\t\tthis.fetchDownloadTags();\n\n\t\t\t\t// Fetch new download tags when various controls are selected.\n\t\t\t\tif (showEmpty !== prevProps.attributes.showEmpty || order !== prevProps.attributes.order || orderBy !== prevProps.attributes.orderBy || number !== prevProps.attributes.number) {\n\t\t\t\t\tthis.fetchDownloadTags();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'getOrderOptions',\n\t\tvalue: function getOrderOptions() {\n\t\t\treturn [{ value: 'ASC', label: __('Ascending') }, { value: 'DESC', label: __('Descending') }];\n\t\t}\n\t}, {\n\t\tkey: 'getOrderByOptions',\n\t\tvalue: function getOrderByOptions() {\n\t\t\tvar type = this.props.attributes.type;\n\n\n\t\t\tvar options = void 0;\n\n\t\t\tif ('downloads' === type) {\n\t\t\t\toptions = [{ value: 'date', label: __('Date Created') }, { value: 'earnings', label: __('Earnings') }, { value: 'id', label: __('ID') }, { value: 'price', label: __('Price') }, { value: 'random', label: __('Random') }, { value: 'sales', label: __('Sales') }, { value: 'name', label: __('Slug') }, { value: 'title', label: __('Title') }];\n\t\t\t} else if ('download_categories' === type || 'download_tags' === type) {\n\t\t\t\toptions = [{ value: 'count', label: __('Count') }, { value: 'id', label: __('ID') }, { value: 'name', label: __('Name') }, { value: 'slug', label: __('Slug') }];\n\t\t\t}\n\n\t\t\treturn options;\n\t\t}\n\t}, {\n\t\tkey: 'getDownloadCategories',\n\t\tvalue: function getDownloadCategories() {\n\t\t\tvar downloadCategories = this.state.downloadCategories;\n\n\n\t\t\tvar categories = [{\n\t\t\t\t'value': 'all',\n\t\t\t\t'label': __('All')\n\t\t\t}];\n\n\t\t\tdownloadCategories.forEach(function (category) {\n\t\t\t\tcategories.push({\n\t\t\t\t\t'value': category.slug,\n\t\t\t\t\t'label': category.name\n\t\t\t\t});\n\t\t\t});\n\n\t\t\treturn categories;\n\t\t}\n\t}, {\n\t\tkey: 'getBlockTypes',\n\t\tvalue: function getBlockTypes() {\n\t\t\treturn [{\n\t\t\t\t'value': 'downloads',\n\t\t\t\t'label': __('Downloads')\n\t\t\t}, {\n\t\t\t\t'value': 'download_categories',\n\t\t\t\t'label': __('Download Categories')\n\t\t\t}, {\n\t\t\t\t'value': 'download_tags',\n\t\t\t\t'label': __('Download Tags')\n\t\t\t}];\n\t\t}\n\t}, {\n\t\tkey: 'setDownloadCategory',\n\t\tvalue: function setDownloadCategory(value) {\n\n\t\t\tif ('all' === value) {\n\t\t\t\tvalue = undefined;\n\t\t\t}\n\n\t\t\tthis.props.setAttributes({\n\t\t\t\tcategory: value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'showDescription',\n\t\tvalue: function showDescription() {\n\t\t\tvar value = this.state.showDescription;\n\n\t\t\t// Update the state.\n\t\t\tthis.setState({ 'showDescription': !value, 'showFullContent': value }, function () {\n\t\t\t\tthis.props.setAttributes({ showDescription: !value });\n\t\t\t\tthis.props.setAttributes({ showFullContent: false });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'showFullContent',\n\t\tvalue: function showFullContent() {\n\t\t\tvar value = this.state.showFullContent;\n\n\t\t\t// Update the state.\n\t\t\tthis.setState({ 'showFullContent': !value, 'showDescription': value }, function () {\n\t\t\t\tthis.props.setAttributes({ showFullContent: !value });\n\t\t\t\tthis.props.setAttributes({ showDescription: false });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'fetchDownloadCategories',\n\t\tvalue: function fetchDownloadCategories() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props$attributes2 = this.props.attributes,\n\t\t\t    showEmpty = _props$attributes2.showEmpty,\n\t\t\t    order = _props$attributes2.order,\n\t\t\t    orderBy = _props$attributes2.orderBy,\n\t\t\t    type = _props$attributes2.type,\n\t\t\t    number = _props$attributes2.number;\n\n\n\t\t\tvar query = {\n\t\t\t\tper_page: number\n\t\t\t};\n\n\t\t\t// Set additional parameters for download categories.\n\t\t\tif ('download_categories' === type) {\n\n\t\t\t\t// Must be lowercase.\n\t\t\t\tquery['order'] = order.toLowerCase();\n\t\t\t\tquery['orderby'] = orderBy.toLowerCase();\n\n\t\t\t\t// Hide download categories that have no downloads.\n\t\t\t\tquery['hide_empty'] = true !== showEmpty ? true : false;\n\t\t\t}\n\n\t\t\tvar request = apiFetch({\n\t\t\t\tpath: '/wp/v2/download_category?' + Object(querystringify__WEBPACK_IMPORTED_MODULE_2__[\"stringify\"])(_extends({}, query))\n\t\t\t});\n\n\t\t\trequest.then(function (downloadCategories) {\n\n\t\t\t\tif (_this2.downloadCategoriesRequest !== request) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t_this2.setState({ downloadCategories: downloadCategories });\n\t\t\t});\n\n\t\t\tthis.downloadCategoriesRequest = request;\n\t\t}\n\t}, {\n\t\tkey: 'fetchDownloadTags',\n\t\tvalue: function fetchDownloadTags() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _props$attributes3 = this.props.attributes,\n\t\t\t    showEmpty = _props$attributes3.showEmpty,\n\t\t\t    order = _props$attributes3.order,\n\t\t\t    orderBy = _props$attributes3.orderBy,\n\t\t\t    type = _props$attributes3.type,\n\t\t\t    number = _props$attributes3.number;\n\n\n\t\t\tvar query = {\n\t\t\t\tper_page: number\n\t\t\t};\n\n\t\t\t// Set additional parameters for download tags.\n\t\t\tif ('download_tags' === type) {\n\n\t\t\t\t// Must be lowercase.\n\t\t\t\tquery['order'] = order.toLowerCase();\n\t\t\t\tquery['orderby'] = orderBy.toLowerCase();\n\n\t\t\t\t// Hide download tags that have no downloads.\n\t\t\t\tquery['hide_empty'] = true !== showEmpty ? true : false;\n\t\t\t}\n\n\t\t\tvar request = apiFetch({\n\t\t\t\tpath: '/wp/v2/download_tag?' + Object(querystringify__WEBPACK_IMPORTED_MODULE_2__[\"stringify\"])(_extends({}, query))\n\t\t\t});\n\n\t\t\trequest.then(function (downloadTags) {\n\n\t\t\t\tif (_this3.downloadTagsRequest !== request) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t_this3.setState({ downloadTags: downloadTags });\n\t\t\t});\n\n\t\t\tthis.downloadTagsRequest = request;\n\t\t}\n\t}, {\n\t\tkey: 'fetchDownloads',\n\t\tvalue: function fetchDownloads() {\n\t\t\tvar _this4 = this;\n\n\t\t\tvar _props$attributes4 = this.props.attributes,\n\t\t\t    category = _props$attributes4.category,\n\t\t\t    number = _props$attributes4.number,\n\t\t\t    order = _props$attributes4.order;\n\n\n\t\t\tvar orderby = this.props.attributes.orderBy;\n\n\t\t\tswitch (orderby) {\n\t\t\t\tcase 'id':\n\t\t\t\t\torderby = 'ID';\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'random':\n\t\t\t\t\torderby = 'rand';\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tvar query = {\n\t\t\t\tnumber: number,\n\t\t\t\torderby: orderby,\n\t\t\t\torder: order\n\t\t\t};\n\n\t\t\t// Query downloads by category.\n\t\t\tif (!lodash_isundefined__WEBPACK_IMPORTED_MODULE_0___default()(category)) {\n\t\t\t\tquery['category'] = category;\n\t\t\t}\n\n\t\t\tvar url = edd_blocks_global_vars.url;\n\n\t\t\tvar request = apiFetch({\n\t\t\t\turl: url + '/?edd-api=products&' + Object(querystringify__WEBPACK_IMPORTED_MODULE_2__[\"stringify\"])(_extends({}, query))\n\t\t\t});\n\n\t\t\trequest.then(function (downloads) {\n\n\t\t\t\tif (_this4.downloadsRequest !== request) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t_this4.setState({ downloads: downloads, isLoading: false });\n\t\t\t});\n\n\t\t\tthis.downloadsRequest = request;\n\t\t}\n\t}, {\n\t\tkey: 'renderDownloads',\n\t\tvalue: function renderDownloads() {\n\t\t\tvar downloads = this.state.downloads.products;\n\t\t\tvar _state = this.state,\n\t\t\t    downloadCategories = _state.downloadCategories,\n\t\t\t    downloadTags = _state.downloadTags;\n\t\t\tvar attributes = this.props.attributes;\n\t\t\tvar columns = attributes.columns,\n\t\t\t    type = attributes.type;\n\n\n\t\t\tif ('downloads' === type) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edd_downloads_list', 'edd_download_columns_' + columns) },\n\t\t\t\t\tdownloads.map(function (download) {\n\t\t\t\t\t\treturn wp.element.createElement(_components_Download__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { download: download, key: download.info.id.toString(), attributes: attributes });\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t} else if ('download_categories' === type) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns) },\n\t\t\t\t\tdownloadCategories.map(function (taxonomy) {\n\t\t\t\t\t\treturn wp.element.createElement(_components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { key: taxonomy.id, taxonomy: taxonomy, attributes: attributes });\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t} else if ('download_tags' === type) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edd_downloads_list', 'edd-download-terms', 'edd_download_columns_' + columns) },\n\t\t\t\t\tdownloadTags.map(function (taxonomy) {\n\t\t\t\t\t\treturn wp.element.createElement(_components_DownloadTaxonomy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { key: taxonomy.id, taxonomy: taxonomy, attributes: attributes });\n\t\t\t\t\t})\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    setAttributes = _props.setAttributes;\n\t\t\tvar align = attributes.align,\n\t\t\t    number = attributes.number,\n\t\t\t    columns = attributes.columns,\n\t\t\t    showBuyButton = attributes.showBuyButton,\n\t\t\t    showPrice = attributes.showPrice,\n\t\t\t    showThumbnails = attributes.showThumbnails,\n\t\t\t    showDescription = attributes.showDescription,\n\t\t\t    showFullContent = attributes.showFullContent,\n\t\t\t    showPagination = attributes.showPagination,\n\t\t\t    order = attributes.order,\n\t\t\t    orderBy = attributes.orderBy,\n\t\t\t    category = attributes.category,\n\t\t\t    type = attributes.type,\n\t\t\t    showTitle = attributes.showTitle,\n\t\t\t    showCount = attributes.showCount,\n\t\t\t    showEmpty = attributes.showEmpty;\n\n\n\t\t\tvar downloads = this.state.downloads.products;\n\t\t\tvar isLoading = this.state.isLoading;\n\t\t\tvar isDownloadTaxonomy = type === 'download_categories' || type === 'download_tags';\n\n\t\t\tvar showDescriptionLabel = void 0;\n\n\t\t\tif (type === 'downloads') {\n\t\t\t\tshowDescriptionLabel = __('Show Excerpt');\n\t\t\t} else if (type === 'download_categories') {\n\t\t\t\tshowDescriptionLabel = __('Show Category Description');\n\t\t\t} else if (type === 'download_tags') {\n\t\t\t\tshowDescriptionLabel = __('Show Tag Description');\n\t\t\t} else {\n\t\t\t\tshowDescriptionLabel = __('Show Description');\n\t\t\t}\n\n\t\t\tif (isLoading) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\tFragment,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPlaceholder,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ticon: 'download',\n\t\t\t\t\t\t\tlabel: __('Downloads')\n\t\t\t\t\t\t},\n\t\t\t\t\t\twp.element.createElement(Spinner, null)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\n\t\t\tvar inspectorControls = wp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{ title: __('Settings') },\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Display'),\n\t\t\t\t\t\tvalue: type,\n\t\t\t\t\t\toptions: this.getBlockTypes(),\n\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\treturn setAttributes({ type: value });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' || isDownloadTaxonomy && wp.element.createElement(RangeControl, {\n\t\t\t\t\t\tlabel: __('Number of downloads'),\n\t\t\t\t\t\tvalue: number,\n\t\t\t\t\t\tonChange: function onChange(number) {\n\t\t\t\t\t\t\treturn setAttributes({ number: number });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\tmax: 100\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\tlabel: __('Columns'),\n\t\t\t\t\t\tvalue: columns,\n\t\t\t\t\t\tonChange: function onChange(columns) {\n\t\t\t\t\t\t\treturn setAttributes({ columns: columns });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\tmax: 6\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Buy Button'),\n\t\t\t\t\t\tchecked: !!showBuyButton,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showBuyButton: !showBuyButton });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Price'),\n\t\t\t\t\t\tchecked: !!showPrice,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showPrice: !showPrice });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Thumbnails'),\n\t\t\t\t\t\tchecked: !!showThumbnails,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showThumbnails: !showThumbnails });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\tisDownloadTaxonomy && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: 'download_categories' === type ? __('Show Category Name') : __('Show Tag Name'),\n\t\t\t\t\t\tchecked: !!showTitle,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showTitle: !showTitle });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: showDescriptionLabel,\n\t\t\t\t\t\tchecked: !!showDescription,\n\t\t\t\t\t\tonChange: this.showDescription\n\t\t\t\t\t}),\n\t\t\t\t\tshowTitle && isDownloadTaxonomy && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Count'),\n\t\t\t\t\t\tchecked: !!showCount,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showCount: !showCount });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\tisDownloadTaxonomy && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: 'download_categories' === type ? __('Show Empty Categories') : __('Show Empty Tags'),\n\t\t\t\t\t\tchecked: !!showEmpty,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showEmpty: !showEmpty });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Full Content'),\n\t\t\t\t\t\tchecked: !!showFullContent,\n\t\t\t\t\t\tonChange: this.showFullContent\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' && wp.element.createElement(ToggleControl, {\n\t\t\t\t\t\tlabel: __('Show Pagination'),\n\t\t\t\t\t\tchecked: !!showPagination,\n\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\treturn setAttributes({ showPagination: !showPagination });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Order By'),\n\t\t\t\t\t\tvalue: orderBy,\n\t\t\t\t\t\toptions: this.getOrderByOptions(),\n\t\t\t\t\t\tonChange: function onChange(orderBy) {\n\t\t\t\t\t\t\treturn setAttributes({ orderBy: orderBy });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Order'),\n\t\t\t\t\t\tvalue: order,\n\t\t\t\t\t\toptions: this.getOrderOptions(),\n\t\t\t\t\t\tonChange: function onChange(order) {\n\t\t\t\t\t\t\treturn setAttributes({ order: order });\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\ttype === 'downloads' && wp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Show Downloads From Category'),\n\t\t\t\t\t\tvalue: category,\n\t\t\t\t\t\toptions: this.getDownloadCategories(),\n\t\t\t\t\t\tonChange: this.setDownloadCategory\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\n\t\t\tvar hasDownloads = Array.isArray(downloads) && downloads.length;\n\n\t\t\tif (!hasDownloads) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\tFragment,\n\t\t\t\t\tnull,\n\t\t\t\t\tinspectorControls,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPlaceholder,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\ticon: 'download',\n\t\t\t\t\t\t\tlabel: __('Downloads')\n\t\t\t\t\t\t},\n\t\t\t\t\t\t!Array.isArray(downloads) ? wp.element.createElement(Spinner, null) : __('No downloads found.')\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\tinspectorControls,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tBlockControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(BlockAlignmentToolbar, {\n\t\t\t\t\t\tvalue: align,\n\t\t\t\t\t\tonChange: function onChange(align) {\n\t\t\t\t\t\t\treturn setAttributes({ align: align });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tcontrols: ['wide', 'full']\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: this.props.className },\n\t\t\t\t\tthis.renderDownloads()\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn DownloadsEdit;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DownloadsEdit);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/edit.js?");

/***/ }),

/***/ "./includes/blocks/downloads/index.js":
/*!********************************************!*\
  !*** ./includes/blocks/downloads/index.js ***!
  \********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./includes/blocks/downloads/edit.js\");\n/**\n * Internal dependencies\n */\n\n\n/**\n * WordPress dependencies\n */\nvar __ = wp.i18n.__;\n\n\nvar name = 'easydigitaldownloads/downloads';\n\nvar settings = {\n\ttitle: __('Downloads'),\n\n\tdescription: __('Display downloads from Easy Digital Downloads.'),\n\n\ticon: 'download',\n\n\tcategory: 'widgets',\n\n\tkeywords: [__('downloads'), __('edd')],\n\n\tsupports: {\n\t\thtml: false,\n\t\tmultiple: true\n\t},\n\n\tgetEditWrapperProps: function getEditWrapperProps(attributes) {\n\t\tvar align = attributes.align;\n\n\t\tif (['wide', 'full'].includes(align)) {\n\t\t\treturn { 'data-align': align, 'data-block-type': 'easy-digital-downloads' };\n\t\t}\n\t},\n\n\n\tedit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n};\n\n//# sourceURL=webpack:///./includes/blocks/downloads/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@wordpress/autop/build-module/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@wordpress/autop/build-module/index.js ***!
  \*************************************************************/
/*! exports provided: autop, removep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"autop\", function() { return autop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removep\", function() { return removep; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\n\n/**\n * The regular expression for an HTML element.\n *\n * @type {String}\n */\nvar htmlSplitRegex = function () {\n  /* eslint-disable no-multi-spaces */\n  var comments = '!' + // Start of comment, after the <.\n  '(?:' + // Unroll the loop: Consume everything until --> is found.\n  '-(?!->)' + // Dash not followed by end of comment.\n  '[^\\\\-]*' + // Consume non-dashes.\n  ')*' + // Loop possessively.\n  '(?:-->)?'; // End of comment. If not found, match all input.\n\n  var cdata = '!\\\\[CDATA\\\\[' + // Start of comment, after the <.\n  '[^\\\\]]*' + // Consume non-].\n  '(?:' + // Unroll the loop: Consume everything until ]]> is found.\n  '](?!]>)' + // One ] not followed by end of comment.\n  '[^\\\\]]*' + // Consume non-].\n  ')*?' + // Loop possessively.\n  '(?:]]>)?'; // End of comment. If not found, match all input.\n\n  var escaped = '(?=' + // Is the element escaped?\n  '!--' + '|' + '!\\\\[CDATA\\\\[' + ')' + '((?=!-)' + // If yes, which type?\n  comments + '|' + cdata + ')';\n  var regex = '(' + // Capture the entire match.\n  '<' + // Find start of element.\n  '(' + // Conditional expression follows.\n  escaped + // Find end of escaped element.\n  '|' + // ... else ...\n  '[^>]*>?' + // Find end of normal element.\n  ')' + ')';\n  return new RegExp(regex);\n  /* eslint-enable no-multi-spaces */\n}();\n/**\n * Separate HTML elements and comments from the text.\n *\n * @param  {string} input The text which has to be formatted.\n * @return {Array}        The formatted text.\n */\n\n\nfunction htmlSplit(input) {\n  var parts = [];\n  var workingInput = input;\n  var match;\n\n  while (match = workingInput.match(htmlSplitRegex)) {\n    parts.push(workingInput.slice(0, match.index));\n    parts.push(match[0]);\n    workingInput = workingInput.slice(match.index + match[0].length);\n  }\n\n  if (workingInput.length) {\n    parts.push(workingInput);\n  }\n\n  return parts;\n}\n/**\n * Replace characters or phrases within HTML elements only.\n *\n * @param  {string} haystack     The text which has to be formatted.\n * @param  {Object} replacePairs In the form {from: 'to', ...}.\n * @return {string}              The formatted text.\n */\n\n\nfunction replaceInHtmlTags(haystack, replacePairs) {\n  // Find all elements.\n  var textArr = htmlSplit(haystack);\n  var changed = false; // Extract all needles.\n\n  var needles = Object.keys(replacePairs); // Loop through delimiters (elements) only.\n\n  for (var i = 1; i < textArr.length; i += 2) {\n    for (var j = 0; j < needles.length; j++) {\n      var needle = needles[j];\n\n      if (-1 !== textArr[i].indexOf(needle)) {\n        textArr[i] = textArr[i].replace(new RegExp(needle, 'g'), replacePairs[needle]);\n        changed = true; // After one strtr() break out of the foreach loop and look at next element.\n\n        break;\n      }\n    }\n  }\n\n  if (changed) {\n    haystack = textArr.join('');\n  }\n\n  return haystack;\n}\n/**\n * Replaces double line-breaks with paragraph elements.\n *\n * A group of regex replaces used to identify text formatted with newlines and\n * replace double line-breaks with HTML paragraph tags. The remaining line-\n * breaks after conversion become <<br />> tags, unless br is set to 'false'.\n *\n * @param  {string}    text The text which has to be formatted.\n * @param  {boolean}   br   Optional. If set, will convert all remaining line-\n *                          breaks after paragraphing. Default true.\n * @return {string}         Text which has been converted into paragraph tags.\n */\n\n\nfunction autop(text) {\n  var br = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var preTags = [];\n\n  if (text.trim() === '') {\n    return '';\n  } // Just to make things a little easier, pad the end.\n\n\n  text = text + '\\n';\n  /*\n   * Pre tags shouldn't be touched by autop.\n   * Replace pre tags with placeholders and bring them back after autop.\n   */\n\n  if (text.indexOf('<pre') !== -1) {\n    var textParts = text.split('</pre>');\n    var lastText = textParts.pop();\n    text = '';\n\n    for (var i = 0; i < textParts.length; i++) {\n      var textPart = textParts[i];\n      var start = textPart.indexOf('<pre'); // Malformed html?\n\n      if (start === -1) {\n        text += textPart;\n        continue;\n      }\n\n      var name = '<pre wp-pre-tag-' + i + '></pre>';\n      preTags.push([name, textPart.substr(start) + '</pre>']);\n      text += textPart.substr(0, start) + name;\n    }\n\n    text += lastText;\n  } // Change multiple <br>s into two line breaks, which will turn into paragraphs.\n\n\n  text = text.replace(/<br\\s*\\/?>\\s*<br\\s*\\/?>/g, '\\n\\n');\n  var allBlocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)'; // Add a double line break above block-level opening tags.\n\n  text = text.replace(new RegExp('(<' + allBlocks + '[\\s\\/>])', 'g'), '\\n\\n$1'); // Add a double line break below block-level closing tags.\n\n  text = text.replace(new RegExp('(<\\/' + allBlocks + '>)', 'g'), '$1\\n\\n'); // Standardize newline characters to \"\\n\".\n\n  text = text.replace(/\\r\\n|\\r/g, '\\n'); // Find newlines in all elements and add placeholders.\n\n  text = replaceInHtmlTags(text, {\n    '\\n': ' <!-- wpnl --> '\n  }); // Collapse line breaks before and after <option> elements so they don't get autop'd.\n\n  if (text.indexOf('<option') !== -1) {\n    text = text.replace(/\\s*<option/g, '<option');\n    text = text.replace(/<\\/option>\\s*/g, '</option>');\n  }\n  /*\n   * Collapse line breaks inside <object> elements, before <param> and <embed> elements\n   * so they don't get autop'd.\n   */\n\n\n  if (text.indexOf('</object>') !== -1) {\n    text = text.replace(/(<object[^>]*>)\\s*/g, '$1');\n    text = text.replace(/\\s*<\\/object>/g, '</object>');\n    text = text.replace(/\\s*(<\\/?(?:param|embed)[^>]*>)\\s*/g, '$1');\n  }\n  /*\n   * Collapse line breaks inside <audio> and <video> elements,\n   * before and after <source> and <track> elements.\n   */\n\n\n  if (text.indexOf('<source') !== -1 || text.indexOf('<track') !== -1) {\n    text = text.replace(/([<\\[](?:audio|video)[^>\\]]*[>\\]])\\s*/g, '$1');\n    text = text.replace(/\\s*([<\\[]\\/(?:audio|video)[>\\]])/g, '$1');\n    text = text.replace(/\\s*(<(?:source|track)[^>]*>)\\s*/g, '$1');\n  } // Collapse line breaks before and after <figcaption> elements.\n\n\n  if (text.indexOf('<figcaption') !== -1) {\n    text = text.replace(/\\s*(<figcaption[^>]*>)/, '$1');\n    text = text.replace(/<\\/figcaption>\\s*/, '</figcaption>');\n  } // Remove more than two contiguous line breaks.\n\n\n  text = text.replace(/\\n\\n+/g, '\\n\\n'); // Split up the contents into an array of strings, separated by double line breaks.\n\n  var texts = text.split(/\\n\\s*\\n/).filter(Boolean); // Reset text prior to rebuilding.\n\n  text = ''; // Rebuild the content as a string, wrapping every bit with a <p>.\n\n  texts.forEach(function (textPiece) {\n    text += '<p>' + textPiece.replace(/^\\n*|\\n*$/g, '') + '</p>\\n';\n  }); // Under certain strange conditions it could create a P of entirely whitespace.\n\n  text = text.replace(/<p>\\s*<\\/p>/g, ''); // Add a closing <p> inside <div>, <address>, or <form> tag if missing.\n\n  text = text.replace(/<p>([^<]+)<\\/(div|address|form)>/g, '<p>$1</p></$2>'); // If an opening or closing block element tag is wrapped in a <p>, unwrap it.\n\n  text = text.replace(new RegExp('<p>\\s*(<\\/?' + allBlocks + '[^>]*>)\\s*<\\/p>', 'g'), '$1'); // In some cases <li> may get wrapped in <p>, fix them.\n\n  text = text.replace(/<p>(<li.+?)<\\/p>/g, '$1'); // If a <blockquote> is wrapped with a <p>, move it inside the <blockquote>.\n\n  text = text.replace(/<p><blockquote([^>]*)>/gi, '<blockquote$1><p>');\n  text = text.replace(/<\\/blockquote><\\/p>/g, '</p></blockquote>'); // If an opening or closing block element tag is preceded by an opening <p> tag, remove it.\n\n  text = text.replace(new RegExp('<p>\\s*(<\\/?' + allBlocks + '[^>]*>)', 'g'), '$1'); // If an opening or closing block element tag is followed by a closing <p> tag, remove it.\n\n  text = text.replace(new RegExp('(<\\/?' + allBlocks + '[^>]*>)\\s*<\\/p>', 'g'), '$1'); // Optionally insert line breaks.\n\n  if (br) {\n    // Replace newlines that shouldn't be touched with a placeholder.\n    text = text.replace(/<(script|style).*?<\\/\\\\1>/g, function (match) {\n      return match[0].replace(/\\n/g, '<WPPreserveNewline />');\n    }); // Normalize <br>\n\n    text = text.replace(/<br>|<br\\/>/g, '<br />'); // Replace any new line characters that aren't preceded by a <br /> with a <br />.\n\n    text = text.replace(/(<br \\/>)?\\s*\\n/g, function (a, b) {\n      return b ? a : '<br />\\n';\n    }); // Replace newline placeholders with newlines.\n\n    text = text.replace(/<WPPreserveNewline \\/>/g, '\\n');\n  } // If a <br /> tag is after an opening or closing block tag, remove it.\n\n\n  text = text.replace(new RegExp('(<\\/?' + allBlocks + '[^>]*>)\\s*<br \\/>', 'g'), '$1'); // If a <br /> tag is before a subset of opening or closing block tags, remove it.\n\n  text = text.replace(/<br \\/>(\\s*<\\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g, '$1');\n  text = text.replace(/\\n<\\/p>$/g, '</p>'); // Replace placeholder <pre> tags with their original content.\n\n  preTags.forEach(function (preTag) {\n    var _preTag = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(preTag, 2),\n        name = _preTag[0],\n        original = _preTag[1];\n\n    text = text.replace(name, original);\n  }); // Restore newlines in all elements.\n\n  if (-1 !== text.indexOf('<!-- wpnl -->')) {\n    text = text.replace(/\\s?<!-- wpnl -->\\s?/g, '\\n');\n  }\n\n  return text;\n}\n/**\n * Replaces <p> tags with two line breaks. \"Opposite\" of autop().\n *\n * Replaces <p> tags with two line breaks except where the <p> has attributes.\n * Unifies whitespace. Indents <li>, <dt> and <dd> for better readability.\n *\n * @param  {string} html The content from the editor.\n * @return {string}      The content with stripped paragraph tags.\n */\n\nfunction removep(html) {\n  var blocklist = 'blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure';\n  var blocklist1 = blocklist + '|div|p';\n  var blocklist2 = blocklist + '|pre';\n  var preserve = [];\n  var preserveLinebreaks = false;\n  var preserveBr = false;\n\n  if (!html) {\n    return '';\n  } // Protect script and style tags.\n\n\n  if (html.indexOf('<script') !== -1 || html.indexOf('<style') !== -1) {\n    html = html.replace(/<(script|style)[^>]*>[\\s\\S]*?<\\/\\1>/g, function (match) {\n      preserve.push(match);\n      return '<wp-preserve>';\n    });\n  } // Protect pre tags.\n\n\n  if (html.indexOf('<pre') !== -1) {\n    preserveLinebreaks = true;\n    html = html.replace(/<pre[^>]*>[\\s\\S]+?<\\/pre>/g, function (a) {\n      a = a.replace(/<br ?\\/?>(\\r\\n|\\n)?/g, '<wp-line-break>');\n      a = a.replace(/<\\/?p( [^>]*)?>(\\r\\n|\\n)?/g, '<wp-line-break>');\n      return a.replace(/\\r?\\n/g, '<wp-line-break>');\n    });\n  } // Remove line breaks but keep <br> tags inside image captions.\n\n\n  if (html.indexOf('[caption') !== -1) {\n    preserveBr = true;\n    html = html.replace(/\\[caption[\\s\\S]+?\\[\\/caption\\]/g, function (a) {\n      return a.replace(/<br([^>]*)>/g, '<wp-temp-br$1>').replace(/[\\r\\n\\t]+/, '');\n    });\n  } // Normalize white space characters before and after block tags.\n\n\n  html = html.replace(new RegExp('\\\\s*</(' + blocklist1 + ')>\\\\s*', 'g'), '</$1>\\n');\n  html = html.replace(new RegExp('\\\\s*<((?:' + blocklist1 + ')(?: [^>]*)?)>', 'g'), '\\n<$1>'); // Mark </p> if it has any attributes.\n\n  html = html.replace(/(<p [^>]+>.*?)<\\/p>/g, '$1</p#>'); // Preserve the first <p> inside a <div>.\n\n  html = html.replace(/<div( [^>]*)?>\\s*<p>/gi, '<div$1>\\n\\n'); // Remove paragraph tags.\n\n  html = html.replace(/\\s*<p>/gi, '');\n  html = html.replace(/\\s*<\\/p>\\s*/gi, '\\n\\n'); // Normalize white space chars and remove multiple line breaks.\n\n  html = html.replace(/\\n[\\s\\u00a0]+\\n/g, '\\n\\n'); // Replace <br> tags with line breaks.\n\n  html = html.replace(/(\\s*)<br ?\\/?>\\s*/gi, function (match, space) {\n    if (space && space.indexOf('\\n') !== -1) {\n      return '\\n\\n';\n    }\n\n    return '\\n';\n  }); // Fix line breaks around <div>.\n\n  html = html.replace(/\\s*<div/g, '\\n<div');\n  html = html.replace(/<\\/div>\\s*/g, '</div>\\n'); // Fix line breaks around caption shortcodes.\n\n  html = html.replace(/\\s*\\[caption([^\\[]+)\\[\\/caption\\]\\s*/gi, '\\n\\n[caption$1[/caption]\\n\\n');\n  html = html.replace(/caption\\]\\n\\n+\\[caption/g, 'caption]\\n\\n[caption'); // Pad block elements tags with a line break.\n\n  html = html.replace(new RegExp('\\\\s*<((?:' + blocklist2 + ')(?: [^>]*)?)\\\\s*>', 'g'), '\\n<$1>');\n  html = html.replace(new RegExp('\\\\s*</(' + blocklist2 + ')>\\\\s*', 'g'), '</$1>\\n'); // Indent <li>, <dt> and <dd> tags.\n\n  html = html.replace(/<((li|dt|dd)[^>]*)>/g, ' \\t<$1>'); // Fix line breaks around <select> and <option>.\n\n  if (html.indexOf('<option') !== -1) {\n    html = html.replace(/\\s*<option/g, '\\n<option');\n    html = html.replace(/\\s*<\\/select>/g, '\\n</select>');\n  } // Pad <hr> with two line breaks.\n\n\n  if (html.indexOf('<hr') !== -1) {\n    html = html.replace(/\\s*<hr( [^>]*)?>\\s*/g, '\\n\\n<hr$1>\\n\\n');\n  } // Remove line breaks in <object> tags.\n\n\n  if (html.indexOf('<object') !== -1) {\n    html = html.replace(/<object[\\s\\S]+?<\\/object>/g, function (a) {\n      return a.replace(/[\\r\\n]+/g, '');\n    });\n  } // Unmark special paragraph closing tags.\n\n\n  html = html.replace(/<\\/p#>/g, '</p>\\n'); // Pad remaining <p> tags whit a line break.\n\n  html = html.replace(/\\s*(<p [^>]+>[\\s\\S]*?<\\/p>)/g, '\\n$1'); // Trim.\n\n  html = html.replace(/^\\s+/, '');\n  html = html.replace(/[\\s\\u00a0]+$/, '');\n\n  if (preserveLinebreaks) {\n    html = html.replace(/<wp-line-break>/g, '\\n');\n  }\n\n  if (preserveBr) {\n    html = html.replace(/<wp-temp-br([^>]*)>/g, '<br$1>');\n  } // Restore preserved tags.\n\n\n  if (preserve.length) {\n    html = html.replace(/<wp-preserve>/g, function () {\n      return preserve.shift();\n    });\n  }\n\n  return html;\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/autop/build-module/index.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.propertyOf` without support for deep paths.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyOf(object) {\n  return function(key) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = basePropertyOf;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_basePropertyOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_unescapeHtmlChar.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_unescapeHtmlChar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ \"./node_modules/lodash/_basePropertyOf.js\");\n\n/** Used to map HTML entities to characters. */\nvar htmlUnescapes = {\n  '&amp;': '&',\n  '&lt;': '<',\n  '&gt;': '>',\n  '&quot;': '\"',\n  '&#39;': \"'\"\n};\n\n/**\n * Used by `_.unescape` to convert HTML entities to characters.\n *\n * @private\n * @param {string} chr The matched character to unescape.\n * @returns {string} Returns the unescaped character.\n */\nvar unescapeHtmlChar = basePropertyOf(htmlUnescapes);\n\nmodule.exports = unescapeHtmlChar;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_unescapeHtmlChar.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isundefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isundefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is `undefined`.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.\n * @example\n *\n * _.isUndefined(void 0);\n * // => true\n *\n * _.isUndefined(null);\n * // => false\n */\nfunction isUndefined(value) {\n  return value === undefined;\n}\n\nmodule.exports = isUndefined;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isundefined.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/unescape.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/unescape.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    unescapeHtmlChar = __webpack_require__(/*! ./_unescapeHtmlChar */ \"./node_modules/lodash/_unescapeHtmlChar.js\");\n\n/** Used to match HTML entities and HTML characters. */\nvar reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,\n    reHasEscapedHtml = RegExp(reEscapedHtml.source);\n\n/**\n * The inverse of `_.escape`; this method converts the HTML entities\n * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to\n * their corresponding characters.\n *\n * **Note:** No other HTML entities are unescaped. To unescape additional\n * HTML entities use a third-party library like [_he_](https://mths.be/he).\n *\n * @static\n * @memberOf _\n * @since 0.6.0\n * @category String\n * @param {string} [string=''] The string to unescape.\n * @returns {string} Returns the unescaped string.\n * @example\n *\n * _.unescape('fred, barney, &amp; pebbles');\n * // => 'fred, barney, & pebbles'\n */\nfunction unescape(string) {\n  string = toString(string);\n  return (string && reHasEscapedHtml.test(string))\n    ? string.replace(reEscapedHtml, unescapeHtmlChar)\n    : string;\n}\n\nmodule.exports = unescape;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/unescape.js?");

/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\n\n/**\n * Decode a URI encoded string.\n *\n * @param {String} input The URI encoded string.\n * @returns {String} The decoded string.\n * @api private\n */\nfunction decode(input) {\n  return decodeURIComponent(input.replace(/\\+/g, ' '));\n}\n\n/**\n * Simple query string parser.\n *\n * @param {String} query The query string that needs to be parsed.\n * @returns {Object}\n * @api public\n */\nfunction querystring(query) {\n  var parser = /([^=?&]+)=?([^&]*)/g\n    , result = {}\n    , part;\n\n  //\n  // Little nifty parsing hack, leverage the fact that RegExp.exec increments\n  // the lastIndex property so we can continue executing this loop until we've\n  // parsed all results.\n  //\n  for (;\n    part = parser.exec(query);\n    result[decode(part[1])] = decode(part[2])\n  );\n\n  return result;\n}\n\n/**\n * Transform a query string to an object.\n *\n * @param {Object} obj Object that should be transformed.\n * @param {String} prefix Optional prefix.\n * @returns {String}\n * @api public\n */\nfunction querystringify(obj, prefix) {\n  prefix = prefix || '';\n\n  var pairs = [];\n\n  //\n  // Optionally prefix with a '?' if needed\n  //\n  if ('string' !== typeof prefix) prefix = '?';\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));\n    }\n  }\n\n  return pairs.length ? prefix + pairs.join('&') : '';\n}\n\n//\n// Expose the module.\n//\nexports.stringify = querystringify;\nexports.parse = querystring;\n\n\n//# sourceURL=webpack:///./node_modules/querystringify/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/admin.scss":
/*!************************!*\
  !*** ./src/admin.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/admin.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ \"./src/admin.scss\");\n/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../includes/blocks/downloads */ \"./includes/blocks/downloads/index.js\");\n\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nvar registerCoreBlocks = function registerCoreBlocks() {\n\t[_includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_2__].forEach(function (_ref) {\n\t\tvar name = _ref.name,\n\t\t    settings = _ref.settings;\n\n\t\tregisterBlockType(name, settings);\n\t});\n};\nregisterCoreBlocks();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ })

/******/ });