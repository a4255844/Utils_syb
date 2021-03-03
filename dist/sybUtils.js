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

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n/*  \r\n2. chunk(array, size): 将数组拆分成多个 size 长度的区块，\r\n   每个区块组成小数组,整体组成一个二维数组\r\n*/\r\nfunction chunk(array, size = 1) {\r\n  const bigArr = []  //创建大数组\r\n  let smallArr = []  //创建小数组\r\n  if (size < 1) size = 1\r\n  if (!array.length) return bigArr\r\n\r\n  array.forEach(item => {\r\n    //如果smallArr的长度为0，将smallArr添加到bigArr内,\r\n    if (!smallArr.length) bigArr.push(smallArr)\r\n    smallArr.push(item)\r\n    if (smallArr.length === size) { //如果长度等于size,则清空数组\r\n      smallArr = []\r\n    }\r\n\r\n  });\r\n  return bigArr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compact; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \r\n1. compact(array): 返回数组中所有真值元素组成的新数组\r\n*/\r\n\r\nfunction compact(array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, item => item)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

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

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/*\r\n1. difference(arr1, arr2)\r\n        得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)\r\n        如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]\r\n*/\r\n\r\n//两组数组的方法\r\nfunction difference(arr1, arr2) {\r\n  if (arr1.length === 0) {\r\n    return []\r\n  } else if (arr2.length === 0) {\r\n    return [...arr1]\r\n  }\r\n\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => arr2.indexOf(item) === -1)\r\n}\r\n//两组以上数组的方法\r\nfunction differences(arr1, ...arrays) {\r\n  if (arr1.length === 0) {\r\n    return []\r\n  } else if (arrays.length === 0) {\r\n    return [...arr1]\r\n  }\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => {\r\n    let result = true //上来默认设置为没有该元素\r\n    // arrays.forEach(array => {  //效率过低，forEach无法中断\r\n    //   if (array.indexOf(item) !== -1) { \r\n    //     result = false  //这里可以中断\r\n    //   }\r\n    // })\r\n    for (let index = 0; index < arrays.length; index++) {\r\n      const array = arrays[index];\r\n      if (array.indexOf(item) !== -1) {\r\n        result = false  //如果有修改结果为false\r\n        break   //这里可以中断\r\n      }\r\n    }\r\n    return result\r\n  })\r\n\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \r\n 1. drop(array, count):\r\n        得到当前数组过滤掉左边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认是1\r\n        如: drop([1,3,5,7], 2) ===> [5, 7]\r\n    2. dropRight(array, count):\r\n        得到当前数组过滤掉右边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认是1\r\n        如: dropRight([1,3,5,7], 2) ===> [1, 3]\r\n\r\n*/\r\n\r\nfunction drop(array, count = 1) {\r\n  if (!array.length) return []\r\n  if (count < 1) count = 1\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, (item, index) => index >= count)\r\n}\r\nfunction dropRight(array, count = 1) {\r\n  if (!array.length) return []\r\n  if (count < 1) count = 1\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, (item, index) => index < array.length - count)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/drop.js?");

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

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\n/*\r\n  mergeArray(arr1, arr2):\r\n        将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\r\n        如: mergeArray([1,3,5,7,5], [5, 8]) ==> [1, 3, 5, 7, 5, 8]\r\n*/\r\nfunction mergeArray(array, ...arrays) {\r\n  const result = [...array]\r\n  if (arrays.length === 0) {\r\n    return result\r\n  }\r\n  arrays.forEach(itemArr => {\r\n    itemArr.forEach(item => {\r\n      if (result.indexOf(item) === -1) result.push(item)\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\n/* \r\n1. pull(array, ...values):\r\n        删除原数组中与value相同的元素, 返回所有删除元素的数组\r\n        说明: 原数组发生了改变\r\n        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]\r\n    2. pullAll(array, values):\r\n        功能与pull一致, 只是参数变为数组\r\n        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]\r\n*/\r\nfunction pull(array, ...values) {\r\n  const result = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    if (values.indexOf(element) !== -1) { //如果values内有数组中的元素\r\n      array.splice(index, 1)  //删除原数组中相同的元素\r\n      result.push(element)  //将删除的元素保存到新数组\r\n      index--  //删除后元素会位移，所以需要--\r\n    }\r\n  }\r\n  return result  //返回新数组\r\n}\r\nfunction pullAll(array, values) {\r\n  return pull(array, ...values)\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/pull.js?");

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

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \r\n  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error\r\n  2. 能处理多种类型的请求: GET/POST/PUT/DELETE\r\n  3. 函数的参数为一个配置对象\r\n      {\r\n        url: '',   // 请求地址\r\n        method: '',   // 请求方式GET/POST/PUT/DELETE\r\n        params: {},  // GET/DELETE请求的query参数\r\n        data: {}, // POST或DELETE请求的请求体参数 \r\n      }\r\n  4. 响应json数据自动解析为js的对象/数组\r\n*/\r\n/* 发送任意类型请求的函数 */\r\nfunction axios({\r\n  method = \"GET\",\r\n  url,\r\n  params = {},\r\n  data = {}\r\n}) {\r\n  //准备query参数:根据params创建query参数\r\n  let queryStr = ''\r\n  Object.keys(params).forEach(key => {\r\n    queryStr += `&${key}=${params[key]}`\r\n  })\r\n  if (queryStr) {\r\n    url += '?' + queryStr.substring(1)\r\n  }\r\n  //准备请求体参数: 把data转换为JSON字符串\r\n  data = JSON.stringify(data)\r\n  return new Promise((resolve, reject) => {\r\n    //创建xhr对象\r\n    const xhr = new XMLHttpRequest()\r\n    // 初始化\r\n    xhr.open(method, url)\r\n    method = method.toUpperCase()\r\n    //发送请求\r\n    //   1.发送带有query参数的请求 get delete\r\n    //   2.发送带有请求体参数的请求 post put \r\n    if (method === 'POST' || method === 'PUT') {\r\n      xhr.setRequestHeader('Content-Type', 'appLication/json;charset=utf-8')\r\n      xhr.send(data)\r\n    } else { //GET  DELETE\r\n      xhr.send()\r\n    }\r\n    //监视请求的状态\r\n    xhr.onreadystatechange = () => {\r\n      const { status, readyState, statusText } = xhr\r\n      if (readyState !== 4) return\r\n      if (status >= 200 && status < 300) {\r\n        const response = {\r\n          data: JSON.parse(xhr.response),\r\n          status,\r\n          statusText\r\n        }\r\n        resolve(response)\r\n      } else {\r\n        reject(new Error('request error status is ' + status))\r\n      }\r\n    }\r\n  })\r\n}\r\n/* 发送特定请求的静态方法 */\r\naxios.get = function (url, opstions) {\r\n  return axios(Object.assign(opstions, { url, method: 'GET' }))\r\n}\r\naxios.post = function (url, opstions) {\r\n  return axios({ url, method: 'POST', data: { ...opstions } })\r\n}\r\naxios.put = function (url, opstions) {\r\n  return axios({ url, method: 'PUT', data: { ...opstions } })\r\n}\r\naxios.delete = function (url) {\r\n  return axios({ url, method: 'DELETE' })\r\n}\r\n// 暴露 axios对象\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios);\n\n//# sourceURL=webpack://aUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/da/priority-queue.js":
/*!**********************************!*\
  !*** ./src/da/priority-queue.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PriorityQueue; });\n\r\n/* \r\n自定义优先级队列\r\n使用数组封装\r\n*/\r\nfunction PriorityQueue() {\r\n  //用于保存元素的数据的数组\r\n  this.arr = []  //比较常规的方式，缺点是外部会看到此属性\r\n  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法\r\n  // 创建方法是必须用this\r\n  // Stack.prototype.push = function\r\n  // this.push = function 此方式必须写在构造函数内部\r\n  this.QueueElement = function (data, priority) {\r\n    this.data = data\r\n    this.priority = priority\r\n  }\r\n}\r\n\r\n// 入队列\r\nPriorityQueue.prototype.enqueue = function (data, priority) {\r\n  //要求priority在[0,100]之间，剖则抛出异常\r\n  if (priority < 0 || priority > 100) {\r\n    throw new Error('优先级值必须在0到100之间')\r\n  }\r\n  //创建一个新的元素\r\n  const queueElement = new this.QueueElement(data, priority)\r\n  //将元素添加到this.arr当中，如果是空的，直接添加\r\n  if (!this.arr.length) {\r\n    this.arr.push(queueElement)\r\n  } else { //如果this.arr内有元素，则需要遍历并判断：（越小优先级越高）\r\n    for (let index = 0; index < this.arr.length; index++) {\r\n      if (this.arr[index].priority > priority) {\r\n        this.arr.splice(index, 0, queueElement)\r\n        return\r\n      }\r\n    }\r\n    // 如果上面没找到，直接放在最后面\r\n    this.arr.push(queueElement)\r\n  }\r\n}\r\n//出队列\r\nPriorityQueue.prototype.dequeue = function () {\r\n  return this.arr.shift()\r\n}\r\n//查看队头\r\nPriorityQueue.prototype.front = function () {\r\n  return this.arr[0]\r\n}\r\n//栈中元素的个数\r\nPriorityQueue.prototype.size = function () {\r\n  return this.arr.length\r\n}\r\n//是否是空栈\r\nPriorityQueue.prototype.isEmpty = function () {\r\n  if (this.arr.length) return false\r\n  else return true\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/da/priority-queue.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n\r\n/* \r\n自定义队列类型\r\n使用数组封装\r\n*/\r\nfunction Queue() {\r\n  //用于保存元素的数据的数组\r\n  this.arr = []  //比较常规的方式，缺点是外部会看到此属性\r\n  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法\r\n  // 创建方法是必须用this\r\n  // Stack.prototype.push = function\r\n  // this.push = function\r\n}\r\n// 入队列\r\nQueue.prototype.enqueue = function (element) {\r\n  return this.arr.push(element)\r\n}\r\n//出队列\r\nQueue.prototype.dequeue = function () {\r\n  return this.arr.shift()\r\n}\r\n//查看队头\r\nQueue.prototype.front = function () {\r\n  return this.arr[0]\r\n}\r\n//栈中元素的个数\r\nQueue.prototype.size = function () {\r\n  return this.arr.length\r\n}\r\n//是否是空栈\r\nQueue.prototype.isEmpty = function () {\r\n  if (this.arr.length) return false\r\n  else return true\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/sort.js":
/*!************************!*\
  !*** ./src/da/sort.js ***!
  \************************/
/*! exports provided: bubbleSort, insertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return bubbleSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return insertSort; });\n/* \r\n实现冒泡排序：\r\n        注意事项： 两层嵌套的循环\r\n                   外层循环每次次数会-1\r\n*/\r\nfunction bubbleSort(array) {\r\n  let temp = ''\r\n  for (let index = array.length; index > 0; index--) {\r\n    for (let j = 0; j < index - 1; j++) {\r\n      if (array[j] > array[j + 1]) {\r\n        // temp = array[j]\r\n        // array[j] = array[j + 1]\r\n        // array[j + 1] = temp\r\n        // es6的语法\r\n        [array[j + 1], array[j]] = [array[j], array[j + 1]]\r\n      }\r\n    }\r\n  }\r\n  return array\r\n}\r\n//插入排序\r\nfunction insertSort(array) {\r\n  //假设第一个元素已经排好序\r\n  const len = array.length\r\n  for (let i = 1; i < len; i++) {\r\n    const start = array[i]\r\n    let preIndex = i - 1\r\n    while (preIndex >= 0 && array[preIndex] > start) {\r\n      array[preIndex + 1] = array[preIndex]\r\n      preIndex--\r\n    }\r\n    array[preIndex + 1] = start\r\n    // let j\r\n    // for (j = i - 1; j >= 0; j--) {\r\n    //   if (array[j] > start) {\r\n    //     array[j + 1] = array[j]\r\n    //   } else {\r\n    //     break\r\n    //   }\r\n    // }\r\n    // array[j + 1] = start\r\n  }\r\n  return array\r\n}\n\n//# sourceURL=webpack://aUtils/./src/da/sort.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stack; });\n\r\n/* \r\n自定义栈类型\r\n使用数组封装\r\n*/\r\nfunction Stack() {\r\n  //用于保存元素的数据的数组\r\n  this.arr = []  //比较常规的方式，缺点是外部会看到此属性\r\n  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法\r\n  // 创建方法是必须用this\r\n  // Stack.prototype.push = function\r\n  // this.push = function\r\n}\r\n// 入栈\r\nStack.prototype.push = function (element) {\r\n  return this.arr.push(element)\r\n}\r\n//出栈\r\nStack.prototype.pop = function () {\r\n  return this.arr.pop()\r\n}\r\n//查看栈顶元素\r\nStack.prototype.peek = function () {\r\n  return this.arr[this.arr.length - 1]\r\n}\r\n//栈中元素的个数\r\nStack.prototype.size = function () {\r\n  return this.arr.length\r\n}\r\n//是否是空栈\r\nStack.prototype.isEmpty = function () {\r\n  if (this.arr.length) return false\r\n  else return true\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/eventBus/index.js":
/*!*******************************!*\
  !*** ./src/eventBus/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nlet eventBus = {}\r\nlet callbackContainer = {}\r\n// 1. on(eventName, callback): 绑定事件监听\r\neventBus.on = function (eventName, callback) {\r\n  let callbacks = callbackContainer[eventName]\r\n  if (!callbacks) { //callbacks应该为数组\r\n    callbackContainer[eventName] = callbacks = []\r\n  }\r\n  callbacks.push(callback) //保存函数\r\n}\r\n// 2. emit(eventName, data): 分发事件\r\neventBus.emit = function (eventName, data) {\r\n  const callbacks = callbackContainer[eventName]  //取出储存回调的数组\r\n  if (callbacks && callbacks !== 'undefinde') {\r\n    callbacks.forEach(callback => {\r\n      setTimeout(() => {  //异步调用函数\r\n        callback(data)\r\n      });\r\n    })\r\n  }\r\n}\r\n// 3. off(eventName): 删除事件, 不传参数则删除所有\r\neventBus.off = function (eventName) {\r\n  if (eventName === undefined) {\r\n    callbackContainer = {}\r\n  } else {\r\n    delete callbackContainer[eventName]\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventBus);\n\n//# sourceURL=webpack://aUtils/./src/eventBus/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n//用于返回节流函数的工具函数\r\nfunction throttle(callback, delay) {\r\n  let pre = 0 //用来记录之前的时间，默认为0才能第一次一定执行\r\n  return function (event) { //节流函数/事件回调函数，this是事件的调用者\r\n    console.log('事件 throttle');\r\n    //记录每次事件触发的时间\r\n    const current = Date.now()\r\n    if (current - pre > delay) { //进行判断 只有离上一次调用callback的时间差大于delay\r\n      callback.call(this, event) //调用handleClick函数(真正处理事件的)\r\n      pre = current //当事件回调函数调用后记录当前时间\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: call, apply, bind, throttle, debounce, map, filter, find, findIndex, some, every, reduce, unique1, unique2, unique3, concat, slice, flatten1, flatten2, flatten3, compact, chunk, difference, differences, mergeArray, pull, pullAll, drop, dropRight, newInstance, myInstanceOf, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, reverseString, palindrome, truncate, Stack, Queue, PriorityQueue, bubbleSort, insertSort, axios, PubSub, eventBus, Promise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_1__[\"apply\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_6__[\"unique3\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_8__[\"slice\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten3\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_9__[\"flatten3\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_11__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_12__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull__WEBPACK_IMPORTED_MODULE_14__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop__WEBPACK_IMPORTED_MODULE_15__[\"dropRight\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_instanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/instanceOf */ \"./src/object/instanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_instanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return _da_stack__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _da_queue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./da/queue */ \"./src/da/queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return _da_queue__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./da/priority-queue */ \"./src/da/priority-queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return _da_priority_queue__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _da_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./da/sort */ \"./src/da/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bubbleSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"bubbleSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertSort\", function() { return _da_sort__WEBPACK_IMPORTED_MODULE_25__[\"insertSort\"]; });\n\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./axios */ \"./src/axios/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"axios\", function() { return _axios__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return _pubsub__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./eventBus */ \"./src/eventBus/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eventBus\", function() { return _eventBus__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./promise */ \"./src/promise/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Promise\", function() { return _promise__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/*\r\n入口js文件\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n/*\r\n 实现浅拷贝\r\n        方法一: 利用ES6语法\r\n        方法二: 利用ES5语法 for in\r\n*/\r\n// ES6语法\r\nfunction clone1(target) {\r\n  if (target instanceof Array) {\r\n    return [...target]\r\n    // return target.slice()\r\n    // return [].concat(target)\r\n    // return Array.from(target)\r\n    // return target.filter(item => true)\r\n  } else if (target !== null && typeof target === 'object') {\r\n    return { ...target }\r\n  } else {  //如果既不是数组也不是对象\r\n    return target\r\n  }\r\n}\r\n//ES5语法\r\nfunction clone2(target) {\r\n\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    const newTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        newTarget[key] = target[key];\r\n      }\r\n    }\r\n    return newTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\n/* \r\n 1). 大众乞丐版\r\n            问题1: 函数属性会丢失\r\n            问题2: 循环引用会出错\r\n*/\r\nfunction deepClone1(target) {\r\n\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n/* \r\n  2). 面试基础版本\r\n            解决问题1: 函数属性丢失\r\n            无法解决: 循环引用,栈内存溢出\r\n*/\r\nfunction deepClone2(target) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    const newTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        newTarget[key] = deepClone2(target[key]) //递归实现深度克隆\r\n      }\r\n    }\r\n    return newTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n/*\r\n 3). 面试加强版本\r\n            解决问题: 循环引用正常,函数属性会丢失\r\n            解决思路：\r\n                目标：同一个对象/数组只能被克隆一次\r\n                创建克隆对象前：如果克隆对象已经存在，直接返回\r\n                创建克隆对象后：保存克隆对象\r\n                保存的容器结构：key: target, value: newTarget\r\n            \r\n*/\r\nfunction deepClone3(target, map = new Map()) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    let newTarget = map.get(target)\r\n    // map中存在对应的克隆对象，直接将其返回\r\n    if (newTarget) {\r\n      return newTarget  //不要对同一个对象进行多次clone\r\n    }\r\n    newTarget = target instanceof Array ? [] : {}\r\n    map.set(target, newTarget) //保存到map容器，以便下次进行对比\r\n    for (const key in target) {\r\n      if (target.hasOwnProperty(key)) {\r\n        newTarget[key] = deepClone3(target[key], map) //递归实现深度克隆\r\n      }\r\n    }\r\n    return newTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n/* \r\n 4). 面试加强版本2(优化遍历性能)\r\n            数组: while | for | forEach() 优于 for-in | keys()&forEach()\r\n            对象: for-in 与 keys()&forEach() 差不多\r\n*/\r\nfunction deepClone4(target, map = new Map()) {\r\n  if (target instanceof Array || (target !== null && typeof target === 'object')) {\r\n    let newTarget = map.get(target)\r\n    // map中存在对应的克隆对象，直接将其返回\r\n    if (newTarget) {\r\n      return newTarget  //不要对同一个对象进行多次clone\r\n    }\r\n    if (target instanceof Array) {\r\n      newTarget = []\r\n      map.set(target, newTarget) //保存到map容器，以便下次进行对比\r\n      target.forEach((item, index) => {\r\n        newTarget[index] = deepClone4(item, map)\r\n      })\r\n    } else {\r\n      newTarget = {}\r\n      map.set(target, newTarget) //保存到map容器，以便下次进行对比\r\n      for (const key in target) {\r\n        if (target.hasOwnProperty(key)) {\r\n          newTarget[key] = deepClone4(target[key], map) //递归实现深度克隆\r\n        }\r\n      }\r\n    }\r\n    return newTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/instanceOf.js":
/*!**********************************!*\
  !*** ./src/object/instanceOf.js ***!
  \**********************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\n/*\r\n  2. 自定义instanceof工具函数\r\n        语法: myInstanceOf(obj, Type)\r\n        功能: 判断obj是否是Type类型的实例\r\n        实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\r\n*/\r\nfunction myInstanceOf(obj, Type) {\r\n  let protoObj = obj.__proto__\r\n  while (protoObj !== null) {  //只要protoObj != null,就继续循环\r\n    if (protoObj === Type.prototype) return true  //判断protoObj 是否 === type,如果相等，返回true\r\n    protoObj = protoObj.__proto__    //赋值到下一层proto\r\n  }\r\n  return false  //如果跳出循环,返回false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/instanceOf.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n/* \r\n    语法: object mergeObject(...objs)\r\n    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)\r\n*/\r\n\r\nfunction mergeObject(...objs) {\r\n  let result = {}\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      const value = obj[key]\r\n      //如果result里没有key那么把key添加到result\r\n      if (!result.hasOwnProperty(key)) {\r\n        result[key] = value\r\n      } else { //如果result里有key那么把key的值和value合并成一个数组\r\n        //concat的第一个参数必须是数组，此处不能确定所，以用[]代替\r\n        result[key] = Object(_array_concat__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], result[key], value)\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function/apply */ \"./src/function/apply.js\");\n/* \r\n 1. 自定义new工具函数\r\n        语法: newInstance(Fn, ...args)\r\n        功能: 创建Fn构造函数的实例对象\r\n        实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\n*/\r\n\r\nfunction newInstance(Fn, ...args) {\r\n  let obj = {}\r\n  const result = Object(_function_apply__WEBPACK_IMPORTED_MODULE_0__[\"apply\"])(Fn, obj, args) //改变Fn的this指向obj\r\n  if (result instanceof Object) { //判断返回值是否为对象，如果是则返回该结果\r\n    return result\r\n  }\r\n  //如果不是，则指定obj.__proto__ = Fn.prototype,\r\n  //这样做的目的是：让obj原型对象的constructor重新指回Fn构造函数\r\n  obj.__proto__ = Fn.prototype\r\n  return obj\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/promise/index.js":
/*!******************************!*\
  !*** ./src/promise/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PENDING = 'pending'\r\nconst RESOLVED = 'resolved'\r\nconst REJECTED = 'rejected'\r\n\r\n/* promise 构造函数 */\r\nfunction Promise(excutor) {\r\n  const that = this\r\n  that.status = PENDING\r\n  that.data = undefined\r\n  that.callBacks = []\r\n  function resolve(value) {\r\n    if (that.status !== PENDING) return\r\n    that.status = RESOLVED\r\n    that.data = value\r\n    if (that.callBacks.length) {\r\n      setTimeout(() => {\r\n        that.callBacks.forEach(cbsObj => {\r\n          cbsObj.onResolved(value)\r\n        });\r\n      });\r\n    }\r\n  }\r\n  function reject(reason) {\r\n    if (that.status !== PENDING) return\r\n    that.status = REJECTED\r\n    that.data = reason\r\n    if (that.callBacks.length) {\r\n      setTimeout(() => {\r\n        that.callBacks.forEach(cbsObj => {\r\n          cbsObj.onRejected(reason)\r\n        });\r\n      });\r\n    }\r\n  }\r\n\r\n  try {\r\n    excutor(resolve, reject)\r\n  } catch (error) {\r\n    reject(error)\r\n  }\r\n\r\n}\r\n/* \r\n     1. then方法返回一个新的promise,它的返回值决定新promise的状态和值\r\n      1) 抛异常: 返回的是一个失败的promsie\r\n      2) 值:     返回一个成功的promsie\r\n      3) promise: 返回的结果根据这个promsie的结果决定 \r\n    */\r\n\r\nPromise.prototype.then = function (onResolved, onRejected) {\r\n  const that = this\r\n  /* 如果用户未指定对应的回调函数,把对应的值传递下去: */\r\n  onResolved = typeof onResolved === 'function' ? onResolved : value => value //把value传递下去 \r\n  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason } //把reason传递下去\r\n\r\n  return new Promise((resolve, reject) => {\r\n    function handle(callBack) {\r\n      try {\r\n        const result = callBack(that.data)\r\n        if (result instanceof Promise) { //如果返回值是promsie\r\n          result.then(\r\n            value => resolve(value),\r\n            reason => reject(reason)\r\n          )\r\n        } else { //如果返回值是普通值\r\n          resolve(result)\r\n        }\r\n      } catch (error) {  //如果抛出异常\r\n        reject(error)\r\n      }\r\n    }\r\n\r\n    if (that.status === RESOLVED) {  //如果状态为对应状态,则直接异步执行回调函数\r\n      setTimeout(() => {\r\n        handle(onResolved)\r\n      });\r\n    } else if (that.status === REJECTED) {\r\n      setTimeout(() => {\r\n        handle(onRejected)\r\n      });\r\n    } else {  //如果状态为PENDING,保存对应的回调函数\r\n      that.callBacks.push({\r\n        onResolved() {\r\n          handle(onResolved)\r\n        },\r\n        onRejected() {\r\n          handle(onRejected)\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n\r\nPromise.prototype.catch = function (onRejected) {\r\n  /* 返回一个promise 直接返回.then即可 */\r\n  return this.then(undefined, onRejected)\r\n}\r\n\r\nPromise.resolve = function (value) {\r\n  /* 返回一个成功的promsie,如果传入的值也是一个promise,那么返回的promsie的状态由传入的promsie来决定 */\r\n\r\n  return new Promise((resolve, reject) => {\r\n    if (value instanceof Promise) {\r\n      value.then(resolve, reject)\r\n    } else {\r\n      resolve(value)\r\n    }\r\n  })\r\n}\r\n\r\nPromise.reject = function (value) {\r\n  /*接收一个值,返回一个失败的promsie */\r\n  return new Promise((resolve, reject) => {\r\n    reject(value)\r\n  })\r\n}\r\nPromise.all = function (values) {\r\n  /* 接受一个promsie数组,如果全部成功,返回成功的promsie数组,其中有一个失败,则返回第一个失败的prosmie */\r\n  return new Promise((resolve, reject) => {\r\n    const promises = new Array(values.length) //创建一个用于保存成功promsie结果的数组,指定长度\r\n    let current = 0 //记录当前成功的个数的变量\r\n    values.forEach((value, index) => {\r\n      value.then(\r\n        value => {\r\n          current++  //每成功一个,记录个数\r\n          promises[index] = value  //将成功的promsie放入数组中对应的位置\r\n          if (current === values.length) { //如果长度和成功个数相等,则表示成功\r\n            resolve(promises) //返回成功的promise数组\r\n          }\r\n        },\r\n        reason => { //如果其中有一个失败,直接返回失败的promsie\r\n          reject(reason)\r\n        }\r\n      )\r\n    })\r\n  })\r\n}\r\nPromise.race = function (values) {\r\n  /* 接收一个promise数组,返回第一个成功或失败的promsie */\r\n  return new Promise((resolve, reject) => {\r\n    values.forEach(value => {\r\n      value.then(resolve, reject)\r\n    })\r\n  })\r\n}\r\n/* 扩展:返回一个指定延时时间的promsie,\r\n        如果传入的值也是一个promise,那么返回的promsie的状态由传入的promsie来决定\r\n*/\r\nPromise.resolveDelay = function (value, time) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      if (value instanceof Promise) {\r\n        value.then(resolve, reject)\r\n      } else {\r\n        resolve(value)\r\n      }\r\n    }, time);\r\n  })\r\n}\r\n/* 扩展:返回一个指定延时时间失败的promsie */\r\nPromise.rejectDelay = function (value, time) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      reject(value)\r\n    }, time);\r\n  })\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise);\n\n//# sourceURL=webpack://aUtils/./src/promise/index.js?");

/***/ }),

/***/ "./src/pubsub/index.js":
/*!*****************************!*\
  !*** ./src/pubsub/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pubsub = {}\r\n/* 设计一个用来存储消息名和回调的容器\r\n    {\r\n      msg1 : {\r\n       uid_1 : callback,\r\n       uid_2 : callback\r\n      },\r\n      msg2 : {\r\n       uid_3 : callback\r\n      }\r\n    }\r\n*/\r\nlet callbackContainer = {}\r\nlet id = 0\r\n//  pubsub语法\r\n// 1. subscribe(msgName,callback): 订阅消息,并返回有一个标识token\r\npubsub.subscribe = function (msg, callback) {\r\n\r\n  if (!callbackContainer[msg]) {\r\n    const callbacks = {} //用于储存函数\r\n    callbackContainer[msg] = callbacks\r\n  }\r\n  const token = `uid_${++id}_${msg}` //生成 token\r\n  callbackContainer[msg][token] = callback  //保存函数\r\n  return token\r\n\r\n}\r\n// 2. publish(msgName,data) 异步发布消息\r\npubsub.publish = function (msg, data) {\r\n  if (callbackContainer[msg]) {\r\n    const callbacks = callbackContainer[msg]\r\n    Object.values(callbacks).forEach(callback => {\r\n      setTimeout(() => {\r\n        callback(msg, data)\r\n      })\r\n    })\r\n  }\r\n}\r\n// 3. publishSync(msgName,data)同步发送消息\r\npubsub.publishSync = function (msg, data) {\r\n  if (callbackContainer[msg] && callbackContainer[msg] !== 'undefined') {\r\n    const callbacks = callbackContainer[msg]\r\n    Object.values(callbacks).forEach(callback => {\r\n      callback(msg, data)\r\n    })\r\n  }\r\n}\r\n// 4. unsubscribe(flag): 根据flag取消订阅 \r\npubsub.unsubscribe = function (flag) {\r\n  if (flag === undefined) {  //未传入flag\r\n    callbackContainer = {}\r\n  } else if (typeof flag === 'string' && flag.indexOf('uid_') === 0) { //传入的是token\r\n    Object.values(callbackContainer).forEach(callbacks => {\r\n      delete callbacks[flag]\r\n    })\r\n    // const msg = flag.split('_')[2]\r\n    // callbackContainer[msg] && delete callbackContainer[msg][flag]\r\n  } else {   //传入的是msg\r\n    delete callbackContainer[flag]\r\n  }\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pubsub);\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/pubsub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n/* \r\n 1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n 2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n 3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n\r\n*/\r\nfunction reverseString(str) {\r\n  return str.split('').reverse().join('')\r\n}\r\nfunction palindrome(str) {\r\n  return str === reverseString(str)\r\n}\r\nfunction truncate(str, num) {\r\n  return str.length > num ? str.substring(0, num) + '...' : str\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/string/index.js?");

/***/ })

/******/ });
});