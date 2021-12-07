"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkWebpack"] = self["webpackChunkWebpack"] || []).push([["src_components_page_index_js"],{

/***/ "./src/components/heading/index.js":
/*!*****************************************!*\
  !*** ./src/components/heading/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Heading\": () => (/* binding */ Heading)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/heading/styles.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Hello\";\n\n    _classCallCheck(this, Heading);\n\n    this.text = text;\n    this.h1 = document.createElement(\"h1\");\n    this.body = document.getElementById(\"root\");\n  }\n\n  _createClass(Heading, [{\n    key: \"render\",\n    value: function render() {\n      var pageName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n      this.h1.innerText = \"\".concat(this.text, \" '\").concat(lodash__WEBPACK_IMPORTED_MODULE_0___default().upperFirst(pageName), \"' page\");\n      this.h1.setAttribute(\"class\", \"text-h1\");\n\n      if (this.body) {\n        this.body.appendChild(this.h1);\n      }\n    }\n  }]);\n\n  return Heading;\n}();\n\n//# sourceURL=webpack://Webpack/./src/components/heading/index.js?");

/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _assets_tez2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/tez2.png */ \"./src/assets/tez2.png\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/image/styles.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Image = /*#__PURE__*/function () {\n  function Image() {\n    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _assets_tez2_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    _classCallCheck(this, Image);\n\n    this.src = src;\n    this.body = document.getElementById(\"root\");\n    this.img = document.createElement(\"img\");\n  }\n\n  _createClass(Image, [{\n    key: \"render\",\n    value: function render() {\n      this.img.setAttribute(\"alt\", \"OMG\");\n      this.img.setAttribute(\"width\", \"300\");\n      this.img.setAttribute(\"src\", this.src);\n      this.img.setAttribute(\"class\", \"img\");\n\n      if (this.body) {\n        this.body.appendChild(this.img);\n      }\n    }\n  }]);\n\n  return Image;\n}();\n\n//# sourceURL=webpack://Webpack/./src/components/image/index.js?");

/***/ }),

/***/ "./src/components/page/index.js":
/*!**************************************!*\
  !*** ./src/components/page/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ByePage\": () => (/* binding */ ByePage)\n/* harmony export */ });\n/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../heading */ \"./src/components/heading/index.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/components/image/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ByePage = /*#__PURE__*/function () {\n  function ByePage() {\n    _classCallCheck(this, ByePage);\n  }\n\n  _createClass(ByePage, [{\n    key: \"render\",\n    value: function render() {\n      var h1 = new _heading__WEBPACK_IMPORTED_MODULE_0__.Heading();\n      var img2 = new _image__WEBPACK_IMPORTED_MODULE_1__.Image();\n      img2.render();\n      h1.render(\"index 2\");\n      console.log(\"development\");\n    }\n  }]);\n\n  return ByePage;\n}();\n\n//# sourceURL=webpack://Webpack/./src/components/page/index.js?");

/***/ }),

/***/ "./src/components/heading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/heading/styles.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/components/heading/styles.scss?");

/***/ }),

/***/ "./src/components/image/styles.scss":
/*!******************************************!*\
  !*** ./src/components/image/styles.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/components/image/styles.scss?");

/***/ }),

/***/ "./src/assets/tez2.png":
/*!*****************************!*\
  !*** ./src/assets/tez2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15acb824bff477d61d20.png\";\n\n//# sourceURL=webpack://Webpack/./src/assets/tez2.png?");

/***/ })

}]);