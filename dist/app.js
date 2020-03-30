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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sink.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sink.ts":
/*!*****************!*\
  !*** ./sink.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// MyName with type string stores Ben (me!)\r\nvar myName = \"Ben\";\r\n// NumStates constant with type number, stores 50\r\nvar numStates = 50;\r\n// Sum with type number, adds 5 & 4 to store 9\r\nvar sum = 5 + 4;\r\n// Creates sayHello function to alert when called\r\nfunction sayHello() {\r\n    // Alert displays `Hello World!` when function called\r\n    alert(\"Hello World!\");\r\n}\r\n// Calls the sayHello function to run\r\nsayHello();\r\n// Creates function that takes person:Patron console.logs\r\nfunction checkAge(person) {\r\n    if (person.age < 21) {\r\n        console.log(\"Sorry \" + person.name + \", you are not old enough to drink..\");\r\n    }\r\n    else {\r\n        console.log(\"Party on, \" + person.name + \"!\");\r\n    }\r\n}\r\n// Array of patrons as objects with name and age properties\r\nvar patrons = [\r\n    { name: \"Ben\", age: 22 },\r\n    { name: \"Andrew\", age: 23 },\r\n    { name: \"Will\", age: 16 },\r\n    { name: \"Abigail\", age: 20 }\r\n];\r\n// Array function that runs checkAge on each value in array\r\npatrons.forEach(function (per) {\r\n    checkAge(per);\r\n});\r\nvar veggies = [\r\n    { rank: 1, type: \"Celery\" },\r\n    { rank: 2, type: \"Broccoli\" },\r\n    { rank: 3, type: \"Cauliflower\" },\r\n    { rank: 4, type: \"Zucchini\" },\r\n    { rank: 5, type: \"Asparagus\" }\r\n];\r\nconsole.log(\"Favorite Veggies:\");\r\n// Array function that console.logs each value in array\r\nveggies.forEach(function (veggie) {\r\n    console.log(veggie.rank + \": \" + veggie.type);\r\n});\r\n// Function that takes a string and returns length\r\nfunction getLength(word) {\r\n    return word.length;\r\n}\r\n// Declares variable wLength that stores length of Hello World\r\nvar wLength = getLength(\"Hello World\");\r\n// Conditional statement that console.logs based on even or odd wLength\r\nif (wLength % 2) {\r\n    console.log(\"The world is nice and even!\");\r\n}\r\nelse {\r\n    console.log(\"The world is an odd place!\");\r\n}\r\n\n\n//# sourceURL=webpack:///./sink.ts?");

/***/ })

/******/ });