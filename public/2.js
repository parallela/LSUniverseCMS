(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./lsuniverse/JSScripts/network/Network_PasswordRecover.js":
/*!*****************************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_PasswordRecover.js ***!
  \*****************************************************************/
/*! exports provided: _networkPasswordFirstStep, _networkPasswordFinalStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkPasswordFirstStep", function() { return _networkPasswordFirstStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkPasswordFinalStep", function() { return _networkPasswordFinalStep; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Route */ "./lsuniverse/JSScripts/services/Route.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var _networkPasswordFirstStep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_1__["getRoute"])('forget_generate'), {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
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

  return function _networkPasswordFirstStep(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _networkPasswordFinalStep = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_1__["getRoute"])('forget_change'), {
              method: 'POST',
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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

  return function _networkPasswordFinalStep(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lsuniverse/JSScripts/reducers/actions/Action_Changepassword.js":
/*!************************************************************************!*\
  !*** ./lsuniverse/JSScripts/reducers/actions/Action_Changepassword.js ***!
  \************************************************************************/
/*! exports provided: Action_Changepassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action_Changepassword", function() { return Action_Changepassword; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_Network_PasswordRecover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/Network_PasswordRecover */ "./lsuniverse/JSScripts/network/Network_PasswordRecover.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var FirstStep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_network_Network_PasswordRecover__WEBPACK_IMPORTED_MODULE_1__["_networkPasswordFirstStep"])(data);

          case 2:
            req = _context.sent;
            _context.next = 5;
            return req;

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function FirstStep(_x) {
    return _ref.apply(this, arguments);
  };
}();

var SecondStep = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_network_Network_PasswordRecover__WEBPACK_IMPORTED_MODULE_1__["_networkPasswordFinalStep"])(data);

          case 2:
            req = _context2.sent;
            _context2.next = 5;
            return req;

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function SecondStep(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var Action_Changepassword = function Action_Changepassword(data, step) {
  return function (dispatch) {
    return step === 2 ? SecondStep(data) : FirstStep(data);
  };
};

/***/ })

}]);