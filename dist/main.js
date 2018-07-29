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

/***/ "./includes/blocks/downloads/edit.js":
/*!*******************************************!*\
  !*** ./includes/blocks/downloads/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystringify */ \"./node_modules/querystringify/index.js\");\n/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    Disabled = _wp$components.Disabled,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl,\n    ServerSideRender = _wp$components.ServerSideRender;\nvar __ = wp.i18n.__;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    BlockControls = _wp$editor.BlockControls,\n    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;\n\n\nvar apiFetch = wp.apiFetch;\n\n/**\n * Minimum number of downloads a user can show using this block.\n *\n * @type {number}\n */\nvar MIN_DOWNLOADS = 1;\n\n/**\n * Maximum number of comments a user can show using this block.\n *\n * @type {number}\n */\nvar MAX_DOWNLOADS = 100;\n\n/**\n * Minimum number of columns a user can show using this block.\n *\n * @type {number}\n */\nvar MIN_COLUMNS = 1;\n\n/**\n * Maximum number of columns a user can show using this block.\n *\n * @type {number}\n */\nvar MAX_COLUMNS = 4;\n\nvar DownloadsEdit = function (_Component) {\n\t_inherits(DownloadsEdit, _Component);\n\n\tfunction DownloadsEdit(props) {\n\t\t_classCallCheck(this, DownloadsEdit);\n\n\t\tvar _this = _possibleConstructorReturn(this, (DownloadsEdit.__proto__ || Object.getPrototypeOf(DownloadsEdit)).apply(this, arguments));\n\n\t\t_this.setColumns = _this.setColumns.bind(_this);\n\t\t_this.setAlignment = _this.setAlignment.bind(_this);\n\t\t_this.setDownloadsToShow = _this.setDownloadsToShow.bind(_this);\n\t\t_this.setOrderOption = _this.setOrderOption.bind(_this);\n\t\t_this.setOrderByOption = _this.setOrderByOption.bind(_this);\n\t\t_this.setDownloadCategory = _this.setDownloadCategory.bind(_this);\n\t\t_this.showExcerpt = _this.showExcerpt.bind(_this);\n\t\t_this.showFullContent = _this.showFullContent.bind(_this);\n\n\t\t_this.state = {\n\t\t\tshowExcerpt: true,\n\t\t\tshowFullContent: false,\n\t\t\tdownloadCategories: []\n\t\t};\n\n\t\treturn _this;\n\t}\n\n\t_createClass(DownloadsEdit, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.fetchDownloadCategories();\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\tdelete this.downloadCategoriesRequest;\n\t\t}\n\t}, {\n\t\tkey: 'setColumns',\n\t\tvalue: function setColumns(columns) {\n\t\t\tthis.props.setAttributes({ columns: columns });\n\t\t}\n\t}, {\n\t\tkey: 'setAlignment',\n\t\tvalue: function setAlignment(align) {\n\t\t\tthis.props.setAttributes({ align: align });\n\t\t}\n\t}, {\n\t\tkey: 'setDownloadsToShow',\n\t\tvalue: function setDownloadsToShow(number) {\n\t\t\tthis.props.setAttributes({ number: number });\n\t\t}\n\t}, {\n\t\tkey: 'getOrderOptions',\n\t\tvalue: function getOrderOptions() {\n\t\t\treturn [{ value: 'asc', label: __('Ascending') }, { value: 'desc', label: __('Descending') }];\n\t\t}\n\t}, {\n\t\tkey: 'setOrderOption',\n\t\tvalue: function setOrderOption(value) {\n\t\t\tthis.props.setAttributes({\n\t\t\t\torder: value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'getOrderByOptions',\n\t\tvalue: function getOrderByOptions() {\n\t\t\treturn [{ value: 'id', label: __('ID') }, { value: 'post_date', label: __('Post Date') }, { value: 'price', label: __('Price') }, { value: 'random', label: __('Random') }, { value: 'sales', label: __('Sales') }, { value: 'title', label: __('Title') }];\n\t\t}\n\t}, {\n\t\tkey: 'getDownloadCategories',\n\t\tvalue: function getDownloadCategories() {\n\t\t\tvar downloadCategories = this.state.downloadCategories;\n\n\n\t\t\tvar categories = [{\n\t\t\t\t'value': 'all',\n\t\t\t\t'label': __('All')\n\t\t\t}];\n\n\t\t\tdownloadCategories.forEach(function (category) {\n\t\t\t\tcategories.push({\n\t\t\t\t\t'value': category.slug,\n\t\t\t\t\t'label': category.name\n\t\t\t\t});\n\t\t\t});\n\n\t\t\treturn categories;\n\t\t}\n\t}, {\n\t\tkey: 'setDownloadCategory',\n\t\tvalue: function setDownloadCategory(value) {\n\n\t\t\tif ('all' === value) {\n\t\t\t\tvalue = undefined;\n\t\t\t}\n\n\t\t\tthis.props.setAttributes({\n\t\t\t\tcategory: value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setOrderByOption',\n\t\tvalue: function setOrderByOption(value) {\n\t\t\tthis.props.setAttributes({\n\t\t\t\torderBy: value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'showExcerpt',\n\t\tvalue: function showExcerpt() {\n\t\t\tvar value = this.state.showExcerpt;\n\n\t\t\t// Update the state.\n\t\t\tthis.setState({ 'showExcerpt': !value, 'showFullContent': value }, function () {\n\t\t\t\tthis.props.setAttributes({ showExcerpt: !value });\n\t\t\t\tthis.props.setAttributes({ showFullContent: false });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'showFullContent',\n\t\tvalue: function showFullContent() {\n\t\t\tvar value = this.state.showFullContent;\n\n\t\t\t// Update the state.\n\t\t\tthis.setState({ 'showFullContent': !value, 'showExcerpt': value }, function () {\n\t\t\t\tthis.props.setAttributes({ showFullContent: !value });\n\t\t\t\tthis.props.setAttributes({ showExcerpt: false });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'fetchDownloadCategories',\n\t\tvalue: function fetchDownloadCategories() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar request = apiFetch({\n\t\t\t\tpath: '/wp/v2/download_category?' + Object(querystringify__WEBPACK_IMPORTED_MODULE_0__[\"stringify\"])({\n\t\t\t\t\tper_page: -1\n\t\t\t\t})\n\t\t\t});\n\n\t\t\trequest.then(function (downloadCategories) {\n\n\t\t\t\tif (_this2.downloadCategoriesRequest !== request) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t_this2.setState({ downloadCategories: downloadCategories });\n\t\t\t});\n\n\t\t\tthis.downloadCategoriesRequest = request;\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    setAttributes = _props.setAttributes;\n\t\t\tvar align = attributes.align,\n\t\t\t    number = attributes.number,\n\t\t\t    columns = attributes.columns,\n\t\t\t    showBuyButton = attributes.showBuyButton,\n\t\t\t    showPrice = attributes.showPrice,\n\t\t\t    showThumbnails = attributes.showThumbnails,\n\t\t\t    showExcerpt = attributes.showExcerpt,\n\t\t\t    showFullContent = attributes.showFullContent,\n\t\t\t    showPagination = attributes.showPagination,\n\t\t\t    order = attributes.order,\n\t\t\t    orderBy = attributes.orderBy,\n\t\t\t    category = attributes.category;\n\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tFragment,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tBlockControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(BlockAlignmentToolbar, {\n\t\t\t\t\t\tvalue: align,\n\t\t\t\t\t\tonChange: this.setAlignment,\n\t\t\t\t\t\tcontrols: ['wide', 'full']\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tInspectorControls,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelBody,\n\t\t\t\t\t\t{ title: __('Download Settings') },\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Number of downloads'),\n\t\t\t\t\t\t\tvalue: number,\n\t\t\t\t\t\t\tonChange: this.setDownloadsToShow,\n\t\t\t\t\t\t\tmin: MIN_DOWNLOADS,\n\t\t\t\t\t\t\tmax: MAX_DOWNLOADS\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tlabel: __('Columns'),\n\t\t\t\t\t\t\tvalue: columns,\n\t\t\t\t\t\t\tonChange: this.setColumns,\n\t\t\t\t\t\t\tmin: MIN_COLUMNS,\n\t\t\t\t\t\t\tmax: MAX_COLUMNS\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Buy Button'),\n\t\t\t\t\t\t\tchecked: !!showBuyButton,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn setAttributes({ showBuyButton: !showBuyButton });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Price'),\n\t\t\t\t\t\t\tchecked: !!showPrice,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn setAttributes({ showPrice: !showPrice });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Thumbnails'),\n\t\t\t\t\t\t\tchecked: !!showThumbnails,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn setAttributes({ showThumbnails: !showThumbnails });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Excerpt'),\n\t\t\t\t\t\t\tchecked: !!showExcerpt,\n\t\t\t\t\t\t\tonChange: this.showExcerpt\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Full Content'),\n\t\t\t\t\t\t\tchecked: !!showFullContent,\n\t\t\t\t\t\t\tonChange: this.showFullContent\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\t\t\tlabel: __('Show Pagination'),\n\t\t\t\t\t\t\tchecked: !!showPagination,\n\t\t\t\t\t\t\tonChange: function onChange() {\n\t\t\t\t\t\t\t\treturn setAttributes({ showPagination: !showPagination });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Order By'),\n\t\t\t\t\t\t\tvalue: orderBy,\n\t\t\t\t\t\t\toptions: this.getOrderByOptions(),\n\t\t\t\t\t\t\tonChange: this.setOrderByOption\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Order'),\n\t\t\t\t\t\t\tvalue: order,\n\t\t\t\t\t\t\toptions: this.getOrderOptions(),\n\t\t\t\t\t\t\tonChange: this.setOrderOption\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\t\tlabel: __('Show Downloads From Category'),\n\t\t\t\t\t\t\tvalue: category,\n\t\t\t\t\t\t\toptions: this.getDownloadCategories(),\n\t\t\t\t\t\t\tonChange: this.setDownloadCategory\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tDisabled,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(ServerSideRender, {\n\t\t\t\t\t\tblock: 'easydigitaldownloads/downloads',\n\t\t\t\t\t\tattributes: this.props.attributes\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn DownloadsEdit;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DownloadsEdit);\n\n//# sourceURL=webpack:///./includes/blocks/downloads/edit.js?");

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

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\n\n/**\n * Decode a URI encoded string.\n *\n * @param {String} input The URI encoded string.\n * @returns {String} The decoded string.\n * @api private\n */\nfunction decode(input) {\n  return decodeURIComponent(input.replace(/\\+/g, ' '));\n}\n\n/**\n * Simple query string parser.\n *\n * @param {String} query The query string that needs to be parsed.\n * @returns {Object}\n * @api public\n */\nfunction querystring(query) {\n  var parser = /([^=?&]+)=?([^&]*)/g\n    , result = {}\n    , part;\n\n  //\n  // Little nifty parsing hack, leverage the fact that RegExp.exec increments\n  // the lastIndex property so we can continue executing this loop until we've\n  // parsed all results.\n  //\n  for (;\n    part = parser.exec(query);\n    result[decode(part[1])] = decode(part[2])\n  );\n\n  return result;\n}\n\n/**\n * Transform a query string to an object.\n *\n * @param {Object} obj Object that should be transformed.\n * @param {String} prefix Optional prefix.\n * @returns {String}\n * @api public\n */\nfunction querystringify(obj, prefix) {\n  prefix = prefix || '';\n\n  var pairs = [];\n\n  //\n  // Optionally prefix with a '?' if needed\n  //\n  if ('string' !== typeof prefix) prefix = '?';\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));\n    }\n  }\n\n  return pairs.length ? prefix + pairs.join('&') : '';\n}\n\n//\n// Expose the module.\n//\nexports.stringify = querystringify;\nexports.parse = querystring;\n\n\n//# sourceURL=webpack:///./node_modules/querystringify/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../includes/blocks/downloads */ \"./includes/blocks/downloads/index.js\");\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\nvar registerCoreBlocks = function registerCoreBlocks() {\n\t[_includes_blocks_downloads__WEBPACK_IMPORTED_MODULE_1__].forEach(function (_ref) {\n\t\tvar name = _ref.name,\n\t\t    settings = _ref.settings;\n\n\t\tregisterBlockType(name, settings);\n\t});\n};\nregisterCoreBlocks();\n\n//# sourceURL=webpack:///./src/index.js?");

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