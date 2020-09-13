(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./lsuniverse/JSScripts/services/Cookies.js":
/*!**************************************************!*\
  !*** ./lsuniverse/JSScripts/services/Cookies.js ***!
  \**************************************************/
/*! exports provided: getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
var getCookie = function getCookie(name) {
  var cookies = "; ".concat(document.cookie);
  var parts = cookies.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(';').shift();
};

/***/ })

}]);