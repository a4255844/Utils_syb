(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\n// 语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) \r\n// 功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 \r\nfunction concat(array, ...values) {\r\n  let arr = [...array]\r\n  //遍历values,将value或者value中的元素添加到arr中\r\n  values.forEach(item => {\r\n    if (Array.isArray(item)) {\r\n      arr.push(...item)\r\n    } else {\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n// 1. 自定义map方法\r\nfunction map(array, callback) {\r\n  // 创建一个空数组\r\n  let arr = []\r\n  //遍历数组当前数组\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //添加到数组中\r\n    arr.push(result)\r\n  }\r\n  //返回数组\r\n  return arr\r\n}\r\n// 2. 自定义reduce方法\r\nfunction reduce(array, callback, initValue) {\r\n  let total = initValue //的到初始值\r\n  //遍历当前数组\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果,赋值给total\r\n    total = callback(total, element, index)\r\n  }\r\n  //返回total\r\n  return total\r\n}\r\n// 3. 自定义filter方法\r\nfunction filter(array, callback) {\r\n  // 创建一个空数组\r\n  let arr = []\r\n  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,添加到arr\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //如果为真，则添加到arr\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  //返回数组\r\n  return arr\r\n}\r\n// 4. 自定义find方法\r\nfunction find(array, callback) {\r\n  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,返回结果并退出循环\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //如果为真，返回该元素\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined //如果全部为false，返回undefined\r\n}\r\n// 5. 自定义findIndex方法\r\nfunction findIndex(array, callback) {\r\n  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,返回该元素的下标并退出循环\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //如果为真，返回该元素的下标\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1 //全为false,则返回-1\r\n}\r\n// 6. 自定义every方法\r\nfunction every(array, callback) {\r\n  //遍历数组当前数组,调用callback得到一个布尔值，如果全为true则返回true，如果其中一个为false则返回false\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //如果不为真，则直接返回false\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true //全部为真，返回true\r\n}\r\n// 7. 自定义some方法\r\nfunction some(array, callback) {\r\n  //遍历数组当前数组,调用callback得到一个布尔值，如果其中有一个为true,则直接返回true,否则返回false\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    //调用callback得到结果\r\n    const result = callback(element, index)\r\n    //如果为真，则直接返回true\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false //全部为false，返回false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n// 1. 理解: \r\n// 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n// 如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\r\n// 2. 实现:\r\n// 方法一: 递归 + reduce() + concat()\r\n\r\n\r\nfunction flatten1(array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_1__[\"reduce\"])(array, (pre, item) => {\r\n    if (!Array.isArray(item)) {\r\n      pre.push(item)\r\n    } else {\r\n      pre = Object(_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])(pre, flatten1(item))\r\n    }\r\n    return pre\r\n  }, [])\r\n}\r\n\r\n// 方法二: ... + some() + concat()\r\nfunction flatten2(array) {\r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], ...array)\r\n  while (Object(_declares__WEBPACK_IMPORTED_MODULE_1__[\"some\"])(arr, item => Array.isArray(item))) {\r\n    arr = Object(_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], ...arr)\r\n  }\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n// 语法: var new_array = slice(array, [begin[, end]])\r\n// 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\nfunction slice(array, begin, end) {\r\n  let arr = []\r\n  //如果传入的数组为空，直接返回\r\n  if (array.length === 0) return arr\r\n  //如果没有传递begin或end\r\n  begin = begin || 0\r\n  end = end || array.length\r\n  //如果begin和end的值超出范围\r\n  if (begin < 0) begin = 0\r\n  if (end > array.length) end = array.length\r\n  //遍历数组，返回对应的结果\r\n  for (let index = begin; index < end; index++) {\r\n    arr.push(array[index])\r\n  }\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n// 1). 理解:\r\n//         创建一个不重复的数组副本, 只有首次出现的元素才会被保留\r\n//         如: uniq([2, 3, 2, 7, 6, 7]) ==> [2, 3, 7, 6]\r\n// 2). 实现:\r\n//         方法1: 利用forEach()和indexOf()\r\n//                说明: 本质是双重遍历, 效率差些\r\n//         方法2: 利用forEach() + 对象容器\r\n//                说明: 只需一重遍历, 效率高些\r\n//         方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n//                说明: 编码简洁\r\n\r\n\r\n//方法1: 利用forEach()和indexOf()\r\n//       说明: 本质是双重遍历, 效率差些\r\nfunction unique1(array) {\r\n  let arr = []\r\n  array.forEach(item => {\r\n    if (arr.indexOf(item) === -1) {\r\n      arr.push(item)\r\n    }\r\n  });\r\n  return arr\r\n}\r\n//         方法2: 利用forEach() + 对象容器\r\n//                说明: 只需一重遍历, 效率高些\r\nfunction unique2(array) {\r\n  let arr = []\r\n  let obj = {}  //属性名是item,属性值是true\r\n  array.forEach(item => {\r\n    // if(!obj[item]) \r\n    if (!obj.hasOwnProperty(item)) {\r\n      arr.push(item)\r\n      obj[item] = true\r\n    }\r\n  })\r\n  return arr\r\n}\r\n//         方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n//                说明: 编码简洁\r\nfunction unique3(array) {\r\n  // return Array.from(new Set(array))\r\n  return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply(fn, obj, args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  // 在obj中添加tempFn属性，让其等于这个函数\r\n  obj.tempFn = fn\r\n  //调用obj中的tempFn方法，改变this指向\r\n  const result = obj.tempFn(...args)\r\n  //删除tempFn方法\r\n  delete obj.tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind(fn, obj, ...args) {\r\n  return (...args2) => {\r\n    //调用原来函数，指定this为obj,参数列表由args和args2一次组成\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn, obj, ...args, ...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call(fn, obj, ...args) {\r\n  // console.log('call()');\r\n  // this(...args)\r\n  //如果obj为undefined或null时，this指向window\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  // 在obj中添加tempFn属性，让其等于这个函数\r\n  obj.tempFn = fn\r\n  //调用obj中的tempFn方法，改变this指向\r\n  const result = obj.tempFn(...args)\r\n  //删除tempFn方法\r\n  delete obj.tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n//用于返回防抖函数的工具函数\r\nfunction debounce(callback, delay) {\r\n  return function (event) {\r\n\r\n    // if(callback.setTimeoutId) { \r\n    if (callback.hasOwnProperty('setTimeoutId')) { //判断定时器id是否存在\r\n      clearTimeout(callback.setTimeoutId) //如果存在则清除当前定时器\r\n    }\r\n    // 保存定时器id到callback函数\r\n    callback.setTimeoutId = setTimeout(() => { //进入定时器，准备执行事件函数\r\n      callback.call(this, event) //执行事件函数\r\n      delete callback.setTimeoutId //执行完毕后，删除对应的setTimeoutId属性(定时器id)\r\n    }, delay);\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n//用于返回节流函数的工具函数\r\nfunction throttle(callback, delay) {\r\n  let pre = 0 //用来记录之前的时间，默认为0才能第一次一定执行\r\n  return function (event) { //节流函数/真正的事件回调函数，this是事件的调用者\r\n    console.log('事件 throttle');\r\n    //记录每次事件触发的时间\r\n    const current = Date.now()\r\n    if (current - pre > delay) { //进行判断 只有离上一次调用callback的时间差大于delay\r\n      callback.call(this, event) //调用handleClick函数(真正处理事件的)\r\n      pre = current //当事件回调函数调用后记录当前时间\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: call, apply, bind, throttle, debounce, map, filter, find, findIndex, some, every, reduce, unique1, unique2, unique3, concat, slice, flatten1, flatten2, flatten3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten3\"]; });\n\n/*\r\n入口js文件\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/index.js?");

/***/ })

/******/ });
});