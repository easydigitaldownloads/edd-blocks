!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.autop}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t,n){var o=n(29).Symbol;e.exports=o},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t,n){var o=n(21),r=n(22),a=n(23),l=n(24);e.exports=function(e){return o(e)||r(e)||a(e)||l()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(25);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(26),r=n(3);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){var o;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){var o=n(27),r=n(39),a=/&(?:amp|lt|gt|quot|#39);/g,l=RegExp(a.source);e.exports=function(e){return(e=o(e))&&l.test(e)?e.replace(a,r):e}},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var o=n(8);e.exports=function(e){if(Array.isArray(e))return o(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var o=n(8);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var o=n(28);e.exports=function(e){return null==e?"":o(e)}},function(e,t,n){var o=n(6),r=n(32),a=n(33),l=n(34),c=o?o.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},function(e,t,n){var o=n(30),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(31))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var o=n(35),r=n(38);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},function(e,t,n){var o=n(6),r=n(36),a=n(37),l=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):a(e)}},function(e,t,n){var o=n(6),r=Object.prototype,a=r.hasOwnProperty,l=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[c]=n:delete e[c]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var o=n(40)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=o},function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},,,function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return W})),n.d(o,"settings",(function(){return Q}));var r=n(9),a=n.n(r),l=n(10),c=n.n(l),i=n(11),s=n.n(i),u=n(3),d=n.n(u),f=n(12),p=n.n(f),b=n(13),h=n.n(b),w=n(7),m=n.n(w),y=n(0),g=n(14),v=n(15),O=n.n(v),j=function(e){var t=e.showThumbnails,n=e.image;return t&&n?Object(y.createElement)(y.RawHTML,{className:"edd_download_image"},n):null},_=n(16),E=n.n(_),x=n(1);function C(e){return e?E()(e).trim():Object(x.__)("(Untitled)")}var D=function(e){var t=e.link,n=e.title,o=e.className,r=e.showCount,a=e.count,l=e.type;return"tag"===l||"category"===l?Object(y.createElement)(y.Fragment,null,Object(y.createElement)("div",{className:"edd-download-term-title"},Object(y.createElement)("h3",{className:o},Object(y.createElement)("a",{href:t,target:"_blank"},C(n))),r&&Object(y.createElement)("span",{className:"edd-download-term-count"},"(",a,")"))):Object(y.createElement)(y.Fragment,null,Object(y.createElement)("h3",{className:o},Object(y.createElement)("a",{href:t,target:"_blank"},C(n))))},S=n(4),k=function(e){var t=e.description,n=e.showDescription,o=e.className;return n?Object(y.createElement)(y.RawHTML,{className:o},Object(S.autop)(t)):null},T=function(e){var t=e.content,n=e.showFullContent,o=e.className;return n?Object(y.createElement)(y.RawHTML,{className:o},Object(S.autop)(t)):null},A=function(e){var t=e.price;return e.showPrice?Object(y.createElement)("div",{className:"edd_price"},Object(y.createElement)(y.RawHTML,null,t)):null},P=n(2),B=function(e){var t=e.purchaseLink;return e.showBuyButton?Object(y.createElement)(P.Disabled,null,Object(y.createElement)("div",{className:"edd_download_buy_button"},Object(y.createElement)(y.RawHTML,null,t))):null},F=function(e){var t=e.attributes,n=t.showThumbnails,o=t.showDescription,r=t.showFullContent,a=t.showPrice,l=t.showBuyButton,c=e.download.info,i=c.image,s=c.link,u=c.title,d=c.excerpt,f=c.content,p=c.price,b=c.purchase_link;return Object(y.createElement)("div",{className:"edd_download"},Object(y.createElement)("div",{className:"edd_download_inner"},Object(y.createElement)(j,{image:i,showThumbnails:n}),Object(y.createElement)(D,{title:u,link:s,className:"edd_download_title"}),Object(y.createElement)(k,{description:d,showDescription:o,className:"edd_download_excerpt"}),Object(y.createElement)(T,{content:f,showFullContent:r,className:"edd_download_full_content"}),Object(y.createElement)(A,{price:p,showPrice:a}),Object(y.createElement)(B,{purchaseLink:b,showBuyButton:l})))},N=n(5),R=n(17),L=n(18),M=n(19),I=n.n(M);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}var H=function(e){p()(n,e);var t=U(n);function n(){var e;return c()(this,n),(e=t.apply(this,arguments)).setDownloadCategory=e.setDownloadCategory.bind(d()(e)),e.showDescription=e.showDescription.bind(d()(e)),e.showFullContent=e.showFullContent.bind(d()(e)),e.state={isLoading:!1,showDescription:!0,showFullContent:!1,downloads:[]},e}return s()(n,[{key:"componentDidMount",value:function(){this.fetchDownloads()}},{key:"componentDidUpdate",value:function(e){var t=this.props.attributes,n=(t.category,t.number,t.order,t.orderBy,t.showEmpty,t.type),o=wp.data.select("core/editor").getEditorSettings().alignWide;e.attributes;"downloads"===n&&this.fetchDownloads(),o||this.props.setAttributes({align:void 0})}},{key:"componentWillUnmount",value:function(){delete this.downloadsRequest}},{key:"getOrderOptions",value:function(){return[{value:"asc",label:Object(x.__)("Ascending")},{value:"desc",label:Object(x.__)("Descending")}]}},{key:"getOrderByOptions",value:function(){var e;return"downloads"===this.props.attributes.type&&(e=[{value:"date",label:Object(x.__)("Date Created")},{value:"earnings",label:Object(x.__)("Earnings")},{value:"id",label:Object(x.__)("ID")},{value:"price",label:Object(x.__)("Price")},{value:"random",label:Object(x.__)("Random")},{value:"sales",label:Object(x.__)("Sales")},{value:"name",label:Object(x.__)("Slug")},{value:"title",label:Object(x.__)("Title")}]),e}},{key:"getDownloadCategories",value:function(){var e=this.props.downloadCategories;return[{value:"all",label:Object(x.__)("All")}].concat(a()(e.map((function(e){return{value:e.id,label:e.name}}))))}},{key:"getBlockTypes",value:function(){return[{value:"downloads",label:Object(x.__)("Downloads")},{value:"download_categories",label:Object(x.__)("Download Categories")},{value:"download_tags",label:Object(x.__)("Download Tags")}]}},{key:"setDownloadCategory",value:function(e){"all"===e&&(e=void 0),this.props.setAttributes({category:e})}},{key:"showDescription",value:function(){var e=this.state.showDescription;this.setState({showDescription:!e,showFullContent:e},(function(){this.props.setAttributes({showDescription:!e}),this.props.setAttributes({showFullContent:!1})}))}},{key:"showFullContent",value:function(){var e=this.state.showFullContent;this.setState({showFullContent:!e,showDescription:e},(function(){this.props.setAttributes({showFullContent:!e}),this.props.setAttributes({showDescription:!1})}))}},{key:"fetchDownloads",value:function(){var e=this,t=this.getOrderByOptions(),n=this.props.attributes,o=n.category,r=n.number,a=n.order,l=n.orderBy,c=l;switch(c){case"id":c="ID";break;case"random":c="rand";break;default:c=l}var i={number:r,order:a,orderby:c};Object(g.isUndefined)(o)||(i.category=o);var s=edd_blocks_global_vars.url;t.find((function(e){return e.value===l}))||(i.orderby="date");var u=I()({url:Object(R.addQueryArgs)("".concat(s,"/?edd-api=products"),i)});u.then((function(t){e.downloadsRequest}))}},{key:"renderDownloads",value:function(){var e=this.state.downloads.products,t=this.props,n=(t.downloadCategories,t.downloadTags,this.props.attributes),o=n.columns;if("downloads"===n.type)return Object(y.createElement)("div",{className:O()("edd_downloads_list","edd_download_columns_"+o)},e.map((function(e){return Object(y.createElement)(F,{download:e,key:e.info.id.toString(),attributes:n})})))}},{key:"render",value:function(){var e,t,n=this,o=this.props,r=o.attributes,a=o.setAttributes,l=o.downloadTags,c=o.downloadCategories,i=r.align,s=r.number,u=r.columns,d=r.showBuyButton,f=r.showPrice,p=r.showThumbnails,b=r.showDescription,h=r.showFullContent,w=r.showPagination,m=r.order,g=r.orderBy,v=r.category,O=r.type,j=(r.showTitle,r.showCount,r.showEmpty,this.state.isLoading),_=this.state.downloads.products;if(e="downloads"===O?Object(x.__)("Show Excerpt"):Object(x.__)("Show Description"),"downloads"===O&&(t=Object(x.__)("Loading downloads")),j)return Object(y.createElement)(y.Fragment,null,Object(y.createElement)(P.Placeholder,{icon:"download",label:t},Object(y.createElement)(P.Spinner,null)));var E=Object(y.createElement)(N.InspectorControls,null,Object(y.createElement)(P.PanelBody,{title:Object(x.__)("Settings")},Object(y.createElement)(P.SelectControl,{label:Object(x.__)("Display"),value:O,options:this.getBlockTypes(),onChange:function(e){return a({type:e})}}),"downloads"===O&&Object(y.createElement)(P.RangeControl,{label:Object(x.__)("Downloads Per Page"),value:s,onChange:function(e){a({number:e}),n.fetchDownloads()},min:1,max:100}),Object(y.createElement)(P.RangeControl,{label:Object(x.__)("Columns"),value:u,onChange:function(e){return a({columns:e})},min:1,max:6}),"downloads"===O&&Object(y.createElement)(P.ToggleControl,{label:Object(x.__)("Show Buy Button"),checked:!!d,onChange:function(){return a({showBuyButton:!d})}}),"downloads"===O&&Object(y.createElement)(P.ToggleControl,{label:Object(x.__)("Show Price"),checked:!!f,onChange:function(){return a({showPrice:!f})}}),Object(y.createElement)(P.ToggleControl,{label:Object(x.__)("Show Thumbnails"),checked:!!p,onChange:function(){return a({showThumbnails:!p})}}),Object(y.createElement)(P.ToggleControl,{label:e,checked:!!b,onChange:this.showDescription}),"downloads"===O&&Object(y.createElement)(P.ToggleControl,{label:Object(x.__)("Show Full Content"),checked:!!h,onChange:this.showFullContent}),"downloads"===O&&Object(y.createElement)(P.ToggleControl,{label:Object(x.__)("Show Pagination"),checked:!!w,onChange:function(){return a({showPagination:!w})}}),Object(y.createElement)(P.SelectControl,{label:Object(x.__)("Order By"),value:g,options:this.getOrderByOptions(),onChange:function(e){return a({orderBy:e})}}),Object(y.createElement)(P.SelectControl,{label:Object(x.__)("Order"),value:m,options:this.getOrderOptions(),onChange:function(e){return a({order:e})}}),"downloads"===O&&Object(y.createElement)(P.SelectControl,{label:Object(x.__)("Show Downloads From Category"),value:v,options:this.getDownloadCategories(),onChange:this.setDownloadCategory}))),C=Array.isArray(_)&&_.length;Array.isArray(l)&&l.length,Array.isArray(c)&&c.length;return C||"downloads"!==O?Object(y.createElement)(y.Fragment,null,E,Object(y.createElement)(N.BlockControls,null,Object(y.createElement)(N.BlockAlignmentToolbar,{value:i,onChange:function(e){return a({align:e})},controls:["wide","full"]})),Object(y.createElement)("div",{className:this.props.className},this.renderDownloads())):Object(y.createElement)(y.Fragment,null,E,Object(y.createElement)(P.Placeholder,{icon:"download",label:Object(x.__)("Loading downloads")},Array.isArray(_)?Object(x.__)("No downloads found."):Object(y.createElement)(P.Spinner,null)))}}]),n}(y.Component),q=Object(L.withSelect)((function(e,t){var n=t.attributes,o=(n.showEmpty,n.order),r={per_page:-1,orderby:n.orderBy,order:o},a=e("core").getEntityRecords;return{downloadCategories:a("taxonomy","download_category",r),downloadTags:a("taxonomy","download_tag",r)}}))(H),W="easydigitaldownloads/downloads",Q={title:Object(x.__)("Downloads"),description:Object(x.__)("Display Downloads, Categories and Tags from Easy Digital Downloads."),icon:"download",category:"widgets",keywords:[Object(x.__)("downloads"),Object(x.__)("edd")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"easy-digital-downloads"}},edit:q,save:function(){return null}},$=n(20);[o].forEach((function(e){var t=e.name,n=e.settings;Object($.registerBlockType)(t,n)}))}]);
//# sourceMappingURL=main.js.map