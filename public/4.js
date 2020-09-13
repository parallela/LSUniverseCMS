(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./lsuniverse/JSScripts/network/Network_CreateTicket.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_CreateTicket.js ***!
  \**************************************************************/
/*! exports provided: _networkCreateTicket, _networkCreateTicketAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkCreateTicket", function() { return _networkCreateTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkCreateTicketAnswer", function() { return _networkCreateTicketAnswer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Auth */ "./lsuniverse/JSScripts/services/Auth.js");
/* harmony import */ var _services_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Route */ "./lsuniverse/JSScripts/services/Route.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var _networkCreateTicket = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_2__["getRoute"])('create_user_ticket'), {
              method: 'POST',
              headers: {
                'Accept': 'applicaiton/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(Object(_services_Auth__WEBPACK_IMPORTED_MODULE_1__["getToken"])())
              },
              body: JSON.stringify(data)
            });

          case 2:
            rawResponse = _context.sent;
            return _context.abrupt("return", rawResponse);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _networkCreateTicket(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _networkCreateTicketAnswer = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, id) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_2__["getRoute"])('create_user_ticket_answer', {
              id: id
            }), {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(Object(_services_Auth__WEBPACK_IMPORTED_MODULE_1__["getToken"])())
              },
              body: JSON.stringify(data)
            });

          case 2:
            rawResponse = _context2.sent;
            return _context2.abrupt("return", rawResponse);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _networkCreateTicketAnswer(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

}]);