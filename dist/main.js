/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Button = /*#__PURE__*/function () {\n  function Button() {\n    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Hello\";\n\n    _classCallCheck(this, Button);\n\n    _defineProperty(this, \"btnClass\", \"hello\");\n\n    this.text = text;\n    this.body = document.getElementById(\"root\");\n    this.button = document.createElement(\"button\");\n  }\n\n  _createClass(Button, [{\n    key: \"render\",\n    value: function render() {\n      var x = {\n        x: \"fd\",\n        y: \"dfs\"\n      };\n      console.log(_objectSpread({}, x));\n      this.button.innerText = this.text;\n      this.button.setAttribute(\"class\", this.btnClass);\n\n      if (this.body) {\n        this.body.appendChild(this.button);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent() {\n      var _this = this;\n\n      this.button.addEventListener(\"click\", function () {\n        var p = document.createElement(\"p\");\n        p.innerText = _this.text;\n        p.setAttribute(\"class\", \"text\");\n\n        if (_this.body) {\n          _this.body.appendChild(p);\n        }\n      });\n    }\n  }]);\n\n  return Button;\n}();\n\n//# sourceURL=webpack://Webpack/./src/button.js?");

/***/ }),

/***/ "./src/components/heading/index.js":
/*!*****************************************!*\
  !*** ./src/components/heading/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Heading\": () => (/* binding */ Heading)\n/* harmony export */ });\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/heading/styles.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Hello\";\n\n    _classCallCheck(this, Heading);\n\n    this.text = text;\n    this.h1 = document.createElement(\"h1\");\n    this.body = document.getElementById(\"root\");\n  }\n\n  _createClass(Heading, [{\n    key: \"render\",\n    value: function render() {\n      this.h1.innerText = this.text;\n      this.h1.setAttribute(\"class\", \"text-h1\");\n\n      if (this.body) {\n        this.body.appendChild(this.h1);\n      }\n    }\n  }]);\n\n  return Heading;\n}();\n\n//# sourceURL=webpack://Webpack/./src/components/heading/index.js?");

/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import ME from \"../../assets/tez.png\";\nvar Image = /*#__PURE__*/function () {\n  function Image(src) {\n    _classCallCheck(this, Image);\n\n    this.src = src;\n    this.body = document.getElementById(\"root\");\n    this.img = document.createElement(\"img\");\n  }\n\n  _createClass(Image, [{\n    key: \"render\",\n    value: function render() {\n      this.img.setAttribute(\"alt\", \"OMG\");\n      this.img.setAttribute(\"width\", \"300\");\n      this.img.setAttribute(\"src\", this.src);\n\n      if (this.body) {\n        this.body.appendChild(this.button);\n      }\n    }\n  }]);\n\n  return Image;\n}();\n\n//# sourceURL=webpack://Webpack/./src/components/image/index.js?");

/***/ }),

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\nvar hello = function hello() {\n  console.log(\"hi\");\n};\n\n//# sourceURL=webpack://Webpack/./src/hello-world.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ \"./src/hello-world.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heading */ \"./src/components/heading/index.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image */ \"./src/components/image/index.js\");\n/* harmony import */ var _assets_tez2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/tez2.png */ \"./src/assets/tez2.png\");\n\n\n\n\n\nvar button = new _button__WEBPACK_IMPORTED_MODULE_1__.Button();\nvar buttonBye = new _button__WEBPACK_IMPORTED_MODULE_1__.Button(\"Bye\");\nvar h1 = new _components_heading__WEBPACK_IMPORTED_MODULE_2__.Heading(); // const img1 = new Image();\n\nvar img2 = new _components_image__WEBPACK_IMPORTED_MODULE_3__.Image(_assets_tez2_png__WEBPACK_IMPORTED_MODULE_4__);\n(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__.hello)(); // img1.render();\n\nimg2.render();\nh1.render();\nbutton.addEvent();\nbutton.render();\nbuttonBye.addEvent();\nbuttonBye.render();\nconsole.log(\"development\");\n\n//# sourceURL=webpack://Webpack/./src/index.js?");

/***/ }),

/***/ "./src/components/heading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/heading/styles.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/components/heading/styles.scss?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/styles/style.scss?");

/***/ }),

/***/ "./src/assets/tez2.png":
/*!*****************************!*\
  !*** ./src/assets/tez2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdefb845400ea93db186.png\";\n\n//# sourceURL=webpack://Webpack/./src/assets/tez2.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;