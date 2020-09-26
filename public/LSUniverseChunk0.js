(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LSUniverseChunk0"],{

/***/ "./lsuniverse/JSScripts/network/Network_CreateTicket.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_CreateTicket.js ***!
  \**************************************************************/
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

/***/ }),

/***/ "./lsuniverse/JSScripts/network/Network_LoginUser.js":
/*!***********************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_LoginUser.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkLoginUser", function() { return _networkLoginUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Route */ "./lsuniverse/JSScripts/services/Route.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var _networkLoginUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_1__["getRoute"])('login'), {
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

  return function _networkLoginUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lsuniverse/JSScripts/network/Network_PasswordRecover.js":
/*!*****************************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_PasswordRecover.js ***!
  \*****************************************************************/
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

/***/ "./lsuniverse/JSScripts/network/Network_RegisterUser.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/JSScripts/network/Network_RegisterUser.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_networkRegisterUser", function() { return _networkRegisterUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Route */ "./lsuniverse/JSScripts/services/Route.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var _networkRegisterUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var rawResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(Object(_services_Route__WEBPACK_IMPORTED_MODULE_1__["getRoute"])('register'), {
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

  return function _networkRegisterUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./lsuniverse/JSScripts/reducers/actions/Action_Changepassword.js":
/*!************************************************************************!*\
  !*** ./lsuniverse/JSScripts/reducers/actions/Action_Changepassword.js ***!
  \************************************************************************/
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

/***/ }),

/***/ "./lsuniverse/JSScripts/reducers/actions/Action_Login.js":
/*!***************************************************************!*\
  !*** ./lsuniverse/JSScripts/reducers/actions/Action_Login.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action_Login", function() { return Action_Login; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_Network_LoginUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/Network_LoginUser */ "./lsuniverse/JSScripts/network/Network_LoginUser.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var loginUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_network_Network_LoginUser__WEBPACK_IMPORTED_MODULE_1__["_networkLoginUser"])(data);

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

  return function loginUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Action_Login = function Action_Login(data) {
  return function (dispatch) {
    return loginUser(data);
  };
};

/***/ }),

/***/ "./lsuniverse/JSScripts/reducers/actions/Action_Register.js":
/*!******************************************************************!*\
  !*** ./lsuniverse/JSScripts/reducers/actions/Action_Register.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action_Register", function() { return Action_Register; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_Network_RegisterUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/Network_RegisterUser */ "./lsuniverse/JSScripts/network/Network_RegisterUser.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var registerUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_network_Network_RegisterUser__WEBPACK_IMPORTED_MODULE_1__["_networkRegisterUser"])(data);

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

  return function registerUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Action_Register = function Action_Register(data) {
  return function (dispatch) {
    return registerUser(data);
  };
};

/***/ }),

/***/ "./lsuniverse/JSScripts/reducers/actions/Action_Tickets.js":
/*!*****************************************************************!*\
  !*** ./lsuniverse/JSScripts/reducers/actions/Action_Tickets.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action_CreateTicket", function() { return Action_CreateTicket; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_Network_CreateTicket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/Network_CreateTicket */ "./lsuniverse/JSScripts/network/Network_CreateTicket.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var createTicket = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, id) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_network_Network_CreateTicket__WEBPACK_IMPORTED_MODULE_1__["_networkCreateTicketAnswer"])(data, id);

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

  return function createTicket(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Action_CreateTicket = function Action_CreateTicket(data, id) {
  return function (dispatch) {
    return createTicket(data, id);
  };
};

/***/ }),

/***/ "./lsuniverse/JSScripts/services/Cookies.js":
/*!**************************************************!*\
  !*** ./lsuniverse/JSScripts/services/Cookies.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
var getCookie = function getCookie(name) {
  var cookies = "; ".concat(document.cookie);
  var parts = cookies.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(';').shift();
};

/***/ }),

/***/ "./lsuniverse/JSScripts/services/RoutersRequireAuth.js":
/*!*************************************************************!*\
  !*** ./lsuniverse/JSScripts/services/RoutersRequireAuth.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutersRequireAuth", function() { return RoutersRequireAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var RoutersRequireAuth = function RoutersRequireAuth(_ref) {
  var children = _ref.children,
      authed = _ref.authed,
      rest = _objectWithoutProperties(_ref, ["children", "authed"]);

  var checkAuth = function checkAuth() {
    var token = localStorage.getItem('auth_token');

    try {
      var _decode = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token),
          exp = _decode.exp;

      if (!token) {
        return false;
      }

      if (exp === undefined || exp === null) {
        localStorage.removeItem('auth_token');
        return false;
      }

      if (exp < new Date().getTime() / 1000) {
        localStorage.removeItem('auth_token');
        return false;
      }
    } catch (error) {
      window.location.href = "/login/?redirectTo=".concat(window.location.pathname);
    }

    return true;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: function render(props) {
      return checkAuth() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child) {
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, _objectSpread({}, child.props));
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: {
          pathname: '/login',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RoutersRequireAuth);

/***/ }),

/***/ "./lsuniverse/Themes/Default/App.js":
/*!******************************************!*\
  !*** ./lsuniverse/Themes/Default/App.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-top-loading-bar */ "./node_modules/react-top-loading-bar/dist/index.modern.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home */ "./lsuniverse/Themes/Default/pages/Home.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Login */ "./lsuniverse/Themes/Default/pages/Login.js");
/* harmony import */ var _pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Dashboard/Dashboard */ "./lsuniverse/Themes/Default/pages/Dashboard/Dashboard.js");
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Register */ "./lsuniverse/Themes/Default/pages/Register.js");
/* harmony import */ var _pages_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ForgetPassword */ "./lsuniverse/Themes/Default/pages/ForgetPassword.js");
/* harmony import */ var _misc_VerifyUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./misc/VerifyUser */ "./lsuniverse/Themes/Default/misc/VerifyUser.js");
/* harmony import */ var _JSScripts_services_Route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../JSScripts/services/Route */ "./lsuniverse/JSScripts/services/Route.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/*
* Pages
 */









var App = function App(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  /*
  * Implementing Progress Fancy Progress Bar
  */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setProgress(50);
    setTimeout(function () {
      return setProgress(100);
    }, 1200);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "#34406c",
    progress: progress,
    onLoaderFinished: function onLoaderFinished() {
      return setProgress(0);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/',
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/login',
    component: _pages_Login__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/register',
    component: _pages_Register__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/forget-password',
    component: _pages_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/verify',
    component: _misc_VerifyUser__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/dashboard',
    component: _pages_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./lsuniverse/Themes/Default/assets/img/database.png":
/*!***********************************************************!*\
  !*** ./lsuniverse/Themes/Default/assets/img/database.png ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = "/images/database.png?b98ba5c0e5491ca95d40c92d36eaac38";

/***/ }),

/***/ "./lsuniverse/Themes/Default/assets/img/what-we-offer.png":
/*!****************************************************************!*\
  !*** ./lsuniverse/Themes/Default/assets/img/what-we-offer.png ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = "/images/what-we-offer.png?09b07f381b297ad2c230a5845bec745d";

/***/ }),

/***/ "./lsuniverse/Themes/Default/assets/img/world-points.png":
/*!***************************************************************!*\
  !*** ./lsuniverse/Themes/Default/assets/img/world-points.png ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "/images/world-points.png?dfa35e0480fedef15e0c3631c3525709";

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Footer.js":
/*!********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Footer.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto  px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex flex-col md:flex-row py-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl",
    href: "#"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-gray-500 md:mb-6"
  }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "FAQ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Help")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Support")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-gray-500 md:mb-6"
  }, "Social"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Linkedin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Twitter")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-gray-500 md:mb-6"
  }, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mt-2 inline-block mr-2 md:block md:mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "no-underline hover:underline text-gray-800 hover:text-orange-500"
  }, "Contact")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.freepik.com/free-photos-vectors/background",
    className: "text-gray-500"
  }, "Background vector created by freepik - www.freepik.com"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Heading.js":
/*!*********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Heading.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_database_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/database.png */ "./lsuniverse/Themes/Default/assets/img/database.png");
/* harmony import */ var _assets_img_database_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_database_png__WEBPACK_IMPORTED_MODULE_1__);



var Heading = function Heading(props) {
  var settings = window._settings;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-24 mt-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "my-4 text-5xl font-bold leading-tight"
  }, settings['heading-text']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "leading-normal text-2xl mb-8"
  }, settings['heading-text-desc'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-3/5 py-6 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-full md:w-4/5 z-50",
    src: _assets_img_database_png__WEBPACK_IMPORTED_MODULE_1___default.a
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Navbar.js":
/*!********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Navbar.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../JSScripts/services/Auth */ "./lsuniverse/JSScripts/services/Auth.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Navbar = function Navbar(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  var categories = props.categories.data;
  var settings = window._settings; // State of mobile navbar

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var _turnOnMobileNavbar = function _turnOnMobileNavbar(e) {
    setHidden(false);

    if (!hidden) {
      setHidden(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    id: "header",
    className: "fixed w-full z-30 top-0 text-white bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-4 flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: settings['logo'],
    className: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block lg:hidden pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "nav-toggle",
    className: "flex items-center p-1",
    onClick: _turnOnMobileNavbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-6 w-6",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Menu"), hidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  }), !hidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fffff",
    d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 ".concat(hidden ? 'hidden' : '', " lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20"),
    id: "nav-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset lg:flex justify-end flex-1 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: '/',
    className: "inline-block py-2 px-4 text-white font-bold no-underline"
  }, t("home.nav-home"))), categories.map(function (category, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "mr-3 lg:mb-0 mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "inline-block py-2 px-4 text-white font-bold no-underline",
      to: "/page/".concat(category.slug)
    }, category.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: Object(_JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_4__["getToken"])() ? '/dashboard/index' : '/login',
    id: "navAction",
    className: "mx-auto lg:mx-0 hover:underline _bg-light_gray text-white font-bold rounded mt-24 lg:mt-0 py-2 px-8 shadow opacity-75"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-user"
  }), " \xA0 ", t("home.auth")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "border-b border-gray-100 opacity-25 my-0 py-0"
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.categories
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Navbar));

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/SVGSepartor2.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/SVGSepartor2.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SVGSepartor2 = function SVGSepartor2(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "wave-top",
    viewBox: "0 0 1439 147",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-1.000000, -14.000000)",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "wave",
    fill: "#f8fafc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(1.000000, 15.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",
    opacity: "0.100000001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",
    opacity: "0.100000001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",
    opacity: "0.200000003"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SVGSepartor2);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/SVGSeprator.js":
/*!*************************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/SVGSeprator.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SVGSepartor = function SVGSepartor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative -mt-12 lg:-mt-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 1428 174",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-2.000000, 44.000000)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496",
    opacity: "0.100000001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z",
    opacity: "0.100000001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z",
    id: "Path-4",
    opacity: "0.200000003"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-4.000000, 76.000000)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SVGSepartor);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Section1.js":
/*!**********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Section1.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_world_points_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/world-points.png */ "./lsuniverse/Themes/Default/assets/img/world-points.png");
/* harmony import */ var _assets_img_world_points_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_world_points_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_what_we_offer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/what-we-offer.png */ "./lsuniverse/Themes/Default/assets/img/what-we-offer.png");
/* harmony import */ var _assets_img_what_we_offer_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_what_we_offer_png__WEBPACK_IMPORTED_MODULE_2__);




var Section1 = function Section1(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-white border-b py-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container max-w-5xl mx-auto m-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
  }, "What we offer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5/6 sm:w-1/2 p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-3xl text-gray-800 font-bold leading-none mb-3"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-600 mb-8"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Images from: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-orange-500 underline",
    href: "https://undraw.co/"
  }, "undraw.co"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full sm:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_what_we_offer_png__WEBPACK_IMPORTED_MODULE_2___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap flex-col-reverse sm:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full sm:w-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_world_points_png__WEBPACK_IMPORTED_MODULE_1___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full sm:w-1/2 p-6 mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "align-middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-3xl text-gray-800 font-bold leading-none mb-3"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-600 mb-8"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Images from: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-orange-500 underline",
    href: "https://undraw.co/"
  }, "undraw.co")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section1);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Section2.js":
/*!**********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Section2.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Section2 = function Section2(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-white border-b py-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto flex flex-wrap pt-4 pb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex flex-wrap no-underline hover:no-underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "w-full text-gray-600 text-xs md:text-sm px-6"
  }, "xGETTING STARTED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold text-xl text-gray-800 px-6"
  }, "Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-800 text-base px-6 mb-5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline  text-white bg-gray-900 font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Action")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex flex-wrap no-underline hover:no-underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "w-full text-gray-600 text-xs md:text-sm px-6"
  }, "xGETTING STARTED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold text-xl text-gray-800 px-6"
  }, "Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-800 text-base px-6 mb-5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline bg-gray-900  text-white font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Action")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "flex flex-wrap no-underline hover:no-underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "w-full text-gray-600 text-xs md:text-sm px-6"
  }, "xGETTING STARTED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold text-xl text-gray-800 px-6"
  }, "Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-800 text-base px-6 mb-5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline bg-gray-900 text-white font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Action"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section2);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/Section3.js":
/*!**********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/Section3.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Section3 = function Section3(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-gray-100 py-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto px-2 pt-4 pb-12 text-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-8 text-3xl font-bold text-center border-b-4"
  }, "Free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "w-full text-center text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full pt-6 text-3xl text-gray-600 font-bold text-center"
  }, "\xA30 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-base"
  }, "for one user")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline _bg-light_gray text-white font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Sign Up")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-8 text-3xl font-bold text-center border-b-4"
  }, "Free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "w-full text-center text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full pt-6 text-3xl text-gray-600 font-bold text-center"
  }, "\xA30 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-base"
  }, "for one user")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline _bg-light_gray text-white font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Sign Up")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-8 text-3xl font-bold text-center border-b-4"
  }, "Pro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "w-full text-center text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "border-b py-4"
  }, "Thing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full pt-6 text-3xl text-gray-600 font-bold text-center"
  }, "\xA3x.99 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-base"
  }, "/ per user")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "hover:underline _bg-light_gray text-white font-bold rounded my-6 py-2 px-8 shadow-lg"
  }, "Sign Up")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section3);

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/alerts/Alert_Message.js":
/*!**********************************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/alerts/Alert_Message.js ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Alert_Message = function Alert_Message(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      errorClassType = _useState2[0],
      setErrorClassType = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    switch (props.type) {
      case "error":
        setErrorClassType("bg-red-100 border-red-500 text-red-700");
        break;

      case "server_error":
        setErrorClassType("bg-red-100 border-red-800 text-red-600");
        break;

      case "success":
        setErrorClassType("bg-green-100 border-green-500 text-green-700");
        break;

      case "warning":
        setErrorClassType("bg-orange-100 border-orange-500 text-orange-700");
        break;
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "animate__animated animate__headShake"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-l-4 p-4 ".concat(errorClassType),
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-disc px-4"
  }, Object.entries(props.data).map(function (msg, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key
    }, msg[1]);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert_Message);
Alert_Message.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/user/Main.js":
/*!***********************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/user/Main.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





var Main = function Main(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  var userData = props.userData;
  var counters = props.userCounters;
  var userAltData = props.userAltData;

  var Logout = function Logout() {
    localStorage.removeItem('auth_token');
    window.location.href = window._env.GLOBAL_URL;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, t("user.welcome"), " ", userData.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: Logout,
    href: "#"
  }, t("auth.logout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap justify-between my-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-1/2 md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 font-bold"
  }, counters.services, " ", t('user.active-services')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 text-sm block"
  }, t('home.click-to-open'), ".")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-1/2 md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-6 h-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 font-bold"
  }, counters.tickets, " ", t('user.open-tickets'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 text-sm block"
  }, t('home.click-to-open'), ".")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full mt-2 md:mt-0 md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full h-12 w-12 flex items-center justify-center _bg-light_gray"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-6 h-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 font-bold"
  }, "TODO ", t('user.invoices')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-gray-700 text-sm block"
  }, t('home.click-to-open'), ".")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col flex-wrap w-full md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold my-4"
  }, t('home.recent'), " ", t('user.active-services')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "text-gray-700 text-sm w-full"
  }, userAltData.services.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "No active services") : null, userAltData.services.map(function (service, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "my-2 border-b-2 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/dashboard/services/".concat(service.id)
    }, ">", service.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap flex-col w-full md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold my-4"
  }, t('home.recent'), " ", t('user.tickets')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "text-gray-700 text-sm w-full"
  }, userAltData.tickets.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "No recent tickets") : null, userAltData.tickets.map(function (ticket, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "my-2 border-b-2 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/dashboard/ticket/".concat(ticket.id)
    }, ticket.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full flex-col md:w-1/3 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-bold my-4"
  }, t('home.recent'), " ", t('user.invoices')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full rounded bg-white shadow-md p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "text-gray-700 text-sm w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 border-b-2 "
  }, "Lorem, ipsum dolor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 border-b-2 "
  }, "Lorem, ipsum dolor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 border-b-2 "
  }, "Lorem, ipsum dolor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 border-b-2 "
  }, "Lorem, ipsum dolor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2"
  }, "Lorem, ipsum dolor.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);
Main.propTypes = {
  userData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  userCounters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  userAltData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./lsuniverse/Themes/Default/components/user/Sidebar.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/Themes/Default/components/user/Sidebar.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/dashboard */ "./lsuniverse/Themes/Default/routes/dashboard.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var Sidebar = function Sidebar(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();

  var isActive = function isActive(path) {
    var currentPath = window.location.pathname;

    if (currentPath === path) {
      return "bg-gray-800 hover:bg-gray-900";
    }

    return "";
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap w-full md:w-1/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded overflow-hidden shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-6 py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, t('home.quick-menu')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex-row space-y-2"
  }, _routes_dashboard__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (route, key) {
    if (route.show) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "flex-1 mr-2",
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/dashboard".concat(route.path),
        className: "text-center block border border-gray-800 ".concat(isActive("/dashboard".concat(route.path)), " rounded py-2 px-4 text-white")
      }, route.name));
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./lsuniverse/Themes/Default/containers/HomeLayout.js":
/*!************************************************************!*\
  !*** ./lsuniverse/Themes/Default/containers/HomeLayout.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./lsuniverse/Themes/Default/components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./lsuniverse/Themes/Default/components/Footer.js");
/* harmony import */ var _components_SVGSeprator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SVGSeprator */ "./lsuniverse/Themes/Default/components/SVGSeprator.js");
/* harmony import */ var _components_SVGSepartor2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SVGSepartor2 */ "./lsuniverse/Themes/Default/components/SVGSepartor2.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./lsuniverse/Themes/Default/components/Loading.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var HomeLayout = function HomeLayout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setInterval(function () {
      setLoading(false);
    }, 1500);
  });
  return !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-24"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

/***/ }),

/***/ "./lsuniverse/Themes/Default/containers/UserLayout.js":
/*!************************************************************!*\
  !*** ./lsuniverse/Themes/Default/containers/UserLayout.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var _components_user_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user/Sidebar */ "./lsuniverse/Themes/Default/components/user/Sidebar.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var UserLayout = function UserLayout(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto mt-6 mb-48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap flex-col-reverse md:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_user_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (UserLayout);

/***/ }),

/***/ "./lsuniverse/Themes/Default/misc/VerifyUser.js":
/*!******************************************************!*\
  !*** ./lsuniverse/Themes/Default/misc/VerifyUser.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var VerifyUser = function VerifyUser(props) {
  var token = new URLSearchParams(window.location.search).get('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      valid = _useState2[0],
      setValid = _useState2[1];

  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();

  var request = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var req;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/auth/verify/".concat(token), {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              }).then(function (res) {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                  setValid(false);
                  return false;
                } // If there's no any server errors or etc. We can continue with response as json format


                return res.json();
              }).then(function (res) {
                res.message === "verified" ? setValid(true) : setValid(false);
              });

            case 2:
              req = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function request() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    request();
  }, [token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container mx-auto text-center pt-24 mt-6 mb-48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap flex-col-reverse md:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded overflow-hidden shadow-lg p-4 text-center flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, valid ? t('auth.account-verified') : t('auth.account-verification-failed')))))));
};

/* harmony default export */ __webpack_exports__["default"] = (VerifyUser);

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Dashboard/Billling.js":
/*!***************************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Dashboard/Billling.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var _containers_UserLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/UserLayout */ "./lsuniverse/Themes/Default/containers/UserLayout.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Billing = function Billing(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // Inputs


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      address1 = _useState4[0],
      setAddress1 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      address2 = _useState6[0],
      setAddress2 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      phone = _useState8[0],
      setPhone = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      city = _useState10[0],
      setCity = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      region = _useState12[0],
      setRegion = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      zipcode = _useState14[0],
      setZipCode = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      mailinglist = _useState16[0],
      setMailingList = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState18 = _slicedToArray(_useState17, 2),
      securityQuestion = _useState18[0],
      setSecurityQuestion = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState20 = _slicedToArray(_useState19, 2),
      securityQuestionAns = _useState20[0],
      setSecurityQuestionAns = _useState20[1];

  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.user.loading) {
      setLoading(false);
      var details = props.user.data.details;
      setAddress1(details.street_address_1);
    }
  }, [props.user.loading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UserLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, t('user.user-billing-details'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap space-x-2 my-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap -mx-3 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("user.user-address-1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail1",
    type: "text",
    placeholder: "",
    value: address1,
    onChange: function onChange(e) {
      return setAddress1(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("user.user-address-2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail2",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("home.city")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail3",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("user.phone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail4",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("home.region")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail5",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("home.zipcode")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail6",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("user.security-question")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail7",
    type: "text",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-64 px-3 mb-6 md:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, t("user.security-question-answer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "detail7",
    type: "text",
    placeholder: ""
  }))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Billing));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Dashboard/Dashboard.js":
/*!****************************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Dashboard/Dashboard.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/dashboard */ "./lsuniverse/Themes/Default/routes/dashboard.js");
/* harmony import */ var _JSScripts_services_RoutersRequireAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../JSScripts/services/RoutersRequireAuth */ "./lsuniverse/JSScripts/services/RoutersRequireAuth.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../JSScripts/reducers/actions/Action_User */ "./lsuniverse/JSScripts/reducers/actions/Action_User.js");







var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var location = window.location.pathname; // Dispatch user alt data to dashnaord components

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_JSScripts_reducers_actions_Action_User__WEBPACK_IMPORTED_MODULE_5__["Action_GetUserAltData"]);
  }, []); // Redirect user to the index dashboard page if the user don't specified second path name

  if (location === "/dashboard") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: '/dashboard/index'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JSScripts_services_RoutersRequireAuth__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: '/dashboard'
  }, _routes_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route, key) {
    return route.component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: key,
      exact: true,
      path: "/dashboard".concat(route.path),
      render: function render(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props);
      }
    }) : null;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Dashboard/Index.js":
/*!************************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Dashboard/Index.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_user_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user/Sidebar */ "./lsuniverse/Themes/Default/components/user/Sidebar.js");
/* harmony import */ var _components_user_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user/Main */ "./lsuniverse/Themes/Default/components/user/Main.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../JSScripts/reducers/actions/Action_User */ "./lsuniverse/JSScripts/reducers/actions/Action_User.js");
/* harmony import */ var _containers_UserLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../containers/UserLayout */ "./lsuniverse/Themes/Default/containers/UserLayout.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Index = function Index(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var userData = props.user.data;
  var userAltData = props.userAltData.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      ticketsCounter = _useState2[0],
      setTicketsCounter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      servicesCounter = _useState4[0],
      setServicesCounter = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      invoicesCounter = _useState6[0],
      setInvoicesCounter = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.userAltData.loading) {
      setTicketsCounter(userAltData.tickets.length);
      setServicesCounter(userAltData.services.length);
    }
  }, [props.userAltData.loading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UserLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_user_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userAltData: userAltData,
    userData: userData,
    userCounters: {
      tickets: ticketsCounter,
      services: servicesCounter
    }
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    userAltData: state.userAltData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Index));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Dashboard/TicketAnswers.js":
/*!********************************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Dashboard/TicketAnswers.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_UserLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/UserLayout */ "./lsuniverse/Themes/Default/containers/UserLayout.js");
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_Tickets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../JSScripts/reducers/actions/Action_Tickets */ "./lsuniverse/JSScripts/reducers/actions/Action_Tickets.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/alerts/Alert_Message */ "./lsuniverse/Themes/Default/components/alerts/Alert_Message.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../JSScripts/reducers/actions/Action_User */ "./lsuniverse/JSScripts/reducers/actions/Action_User.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var TicketAnswers = function TicketAnswers(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      reply = _useState2[0],
      setReply = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      ticket = _useState4[0],
      setTicket = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      serverError = _useState8[0],
      setServerError = _useState8[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var data = {
    content: reply
  };
  var user = props.user.data;

  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_5__["useParams"])(),
      id = _useParams.id;

  var messageDivBox = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var scrollToBottom = function scrollToBottom() {
    // Scroll into the last reply
    if (messageDivBox.current !== null) {
      messageDivBox.current.scrollTop = messageDivBox.current.scrollHeight;
    }

    return true;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!props.userAltData.loading) {
      setTicket(props.userAltData.data.tickets.filter(function (t) {
        return t.id === parseInt(id);
      })[0]);
    }
  }, [props.userAltData.loading]);

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var create_ticket, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              create_ticket = props.Action_CreateTicket(data, ticket.id).then(function (res) {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                  setServerError({
                    "server": res.statusText
                  });
                  setTimeout(function () {
                    setServerError("");
                  }, 5000);
                  return false;
                } // If there's no any server errors or etc. We can continue with response as json format


                return res.json();
              });
              _context.next = 4;
              return create_ticket;

            case 4:
              res = _context.sent;

              if (!res) {
                _context.next = 17;
                break;
              }

              if (!res.errors) {
                _context.next = 10;
                break;
              }

              setErrors(res.errors); // Remove errors after 5 seconds

              setTimeout(function () {
                setErrors("");
              }, 5000);
              return _context.abrupt("return", false);

            case 10:
              if (!res.message) {
                _context.next = 16;
                break;
              }

              setReply("");
              dispatch(_JSScripts_reducers_actions_Action_User__WEBPACK_IMPORTED_MODULE_9__["Action_GetUserAltData"]);
              return _context.abrupt("return", true);

            case 16:
              throw new Error(t("app.invalid-response"));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_UserLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded  shadow-lg p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, t('user.ticket-answers'), ": ", ticket.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), errors.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "error",
    data: errors
  }), serverError.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "server_error",
    data: serverError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "overflow-auto h-56",
    ref: messageDivBox,
    onLoad: scrollToBottom
  }, ticket.answers === undefined || ticket.answers.length === 0 ? t("user.no-ticket-replies") : ticket.answers.map(function (ans, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex flex-wrap space-x-2 my-2",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "max-w-full w-full lg:max-w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-gray-700 text-base"
    }, ans.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex mb-2 mt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "w-10 h-10 rounded-full mr-4",
      src: "https://www.gravatar.com/avatar/".concat(user.email),
      alt: "Avatar of ".concat(user.name)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-gray-900 leading-none"
    }, user.id === ans.user_id ? user.name : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-red-400"
    }, ans.user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-gray-600"
    }, ans.created_at))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2 mb-2 lg:min-w-full text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "w-full text-black resize-y border rounded focus:outline-none focus:shadow-outline",
    onChange: function onChange(e) {
      return setReply(e.target.value);
    },
    value: reply
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: _handleSubmit,
    className: "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 mb-2 rounded-full"
  }, t("home.reply")))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    userAltData: state.userAltData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  Action_CreateTicket: _JSScripts_reducers_actions_Action_Tickets__WEBPACK_IMPORTED_MODULE_6__["Action_CreateTicket"]
})(TicketAnswers));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Dashboard/Tickets.js":
/*!**************************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Dashboard/Tickets.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_UserLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/UserLayout */ "./lsuniverse/Themes/Default/containers/UserLayout.js");
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Tickets = function Tickets(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tickets = _useState4[0],
      setTickets = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoading(true);

    if (!props.userAltData.loading) {
      setLoading(false);
      setTickets(props.userAltData.data.tickets);
    }
  }, [props.userAltData.loading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UserLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded overflow-hidden shadow-lg p-4 flex flex-col justify-between leading-normal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-bold text-xl mb-2 mt-2"
  }, t('user.tickets'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm mb-4 mt-4"
  }, t("user.ticket-amount", {
    ticket_number: tickets.length
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap space-x-2 my-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex w-full flex-col p-4"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa-3x fas fa-circle-notch fa-spin"
  }) : tickets.map(function (ticket, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "border-gray-800 flex flex-row mb-2",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/dashboard/ticket/".concat(ticket.id),
      className: "select-none cursor-pointer bg-gray-800 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"
    }, ticket.status === "open" ? "🔓" : "🔐"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-1 pl-1 mr-16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "font-medium"
    }, ticket.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-600 text-sm"
    }, ticket.status === "open" ? t("home.open") : t("home.closed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-gray-600 text-xs"
    }, ticket.created_at)));
  })))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userAltData: state.userAltData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Tickets));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/ForgetPassword.js":
/*!***********************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/ForgetPassword.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../JSScripts/services/Auth */ "./lsuniverse/JSScripts/services/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/logo.png */ "./lsuniverse/Themes/Default/assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/alerts/Alert_Message */ "./lsuniverse/Themes/Default/components/alerts/Alert_Message.js");
/* harmony import */ var _JSScripts_services_Cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../JSScripts/services/Cookies */ "./lsuniverse/JSScripts/services/Cookies.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_Changepassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../JSScripts/reducers/actions/Action_Changepassword */ "./lsuniverse/JSScripts/reducers/actions/Action_Changepassword.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ForgetPassword = function ForgetPassword(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])();
  var token = new URLSearchParams(window.location.search).get('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      serverError = _useState4[0],
      setServerError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      password = _useState12[0],
      setPassword = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      rePassword = _useState14[0],
      setRePassword = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState16 = _slicedToArray(_useState15, 2),
      step = _useState16[0],
      setStep = _useState16[1];

  var date = new Date();
  var data = {
    email: email,
    password: password,
    re_password: rePassword,
    token: token
  };

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var change_pw, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setLoading(true);
              change_pw = props.Action_Changepassword(data, step).then(function (res) {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                  setServerError({
                    "server": res.statusText
                  });
                  setTimeout(function () {
                    setServerError("");
                  }, 5000);
                  setLoading(false);
                  return false;
                } // If there's no any server errors or etc. We can continue with response as json format


                return res.json();
              });
              _context.next = 5;
              return change_pw;

            case 5:
              res = _context.sent;

              if (!res) {
                _context.next = 18;
                break;
              }

              setLoading(false);

              if (!res.errors) {
                _context.next = 12;
                break;
              }

              setErrors(res.errors); // Remove errors after 5 seconds

              setTimeout(function () {
                setErrors("");
              }, 5000);
              return _context.abrupt("return", false);

            case 12:
              if (!(res.message === "valid" || res.message === "success")) {
                _context.next = 17;
                break;
              }

              // Check current step
              if (step === 2) {
                setMessage({
                  "success-reset-password": t("auth.password-changed")
                }); // Redirect to login page after 3 seconds

                setTimeout(function () {
                  window.location.href = '/login';
                }, 3000);
              } else {
                setMessage({
                  "success-send-email": t("auth.reset-password-success")
                });
              }

              return _context.abrupt("return", true);

            case 17:
              throw new Error(t("app.invalid-response"));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    token ? setStep(2) : setStep(1);
  }, [token]);
  return !Object(_JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_2__["getToken"])() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "max-w-xs w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "mx-auto h-24 w-auto",
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Workflow"
  }), errors.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "error",
    data: errors
  }), serverError.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "server_error",
    data: serverError
  }), message.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "success",
    data: message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mt-6 text-center text-3xl leading-9 font-extrabold text-white"
  }, t("home.forget-password"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: _handleSubmit,
    className: "mt-8",
    action: "#",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded-md shadow-sm"
  }, step === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "firstStep"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Email address",
    name: "email",
    type: "email",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Email address",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), step === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "secondStep"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "password",
    name: "password",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    minLength: 8,
    placeholder: "Repeat the new password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "password",
    name: "repassword",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    minLength: 8,
    placeholder: "Repeat the new password",
    onChange: function onChange(e) {
      return setRePassword(e.target.value);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white _bg-light_gray hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), !loading ? t("auth.reset-button") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-circle-notch fa-spin"
  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: '/'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, {
  Action_Changepassword: _JSScripts_reducers_actions_Action_Changepassword__WEBPACK_IMPORTED_MODULE_9__["Action_Changepassword"]
})(ForgetPassword));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Home.js":
/*!*************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Home.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_HomeLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/HomeLayout */ "./lsuniverse/Themes/Default/containers/HomeLayout.js");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Heading */ "./lsuniverse/Themes/Default/components/Heading.js");
/* harmony import */ var _components_Section1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section1 */ "./lsuniverse/Themes/Default/components/Section1.js");
/* harmony import */ var _components_SVGSeprator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SVGSeprator */ "./lsuniverse/Themes/Default/components/SVGSeprator.js");
/* harmony import */ var _components_SVGSepartor2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SVGSepartor2 */ "./lsuniverse/Themes/Default/components/SVGSepartor2.js");
/* harmony import */ var _components_Section2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Section2 */ "./lsuniverse/Themes/Default/components/Section2.js");
/* harmony import */ var _components_Section3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Section3 */ "./lsuniverse/Themes/Default/components/Section3.js");











var Home = function Home(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_HomeLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SVGSeprator__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section1__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section2__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Section3__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SVGSepartor2__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Login.js":
/*!**************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Login.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/logo.png */ "./lsuniverse/Themes/Default/assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../JSScripts/reducers/actions/Action_Login */ "./lsuniverse/JSScripts/reducers/actions/Action_Login.js");
/* harmony import */ var _JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../JSScripts/services/Auth */ "./lsuniverse/JSScripts/services/Auth.js");
/* harmony import */ var _components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/alerts/Alert_Message */ "./lsuniverse/Themes/Default/components/alerts/Alert_Message.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Login = function Login(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      serverError = _useState8[0],
      setServerError = _useState8[1];

  var fromUrl = new URLSearchParams(window.location.search).get('redirectTo');

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var data = {
    email: email,
    password: password
  };

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var login, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              e.preventDefault();
              login = props.Action_Login(data).then(function (res) {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                  setServerError({
                    "server": res.statusText
                  });
                  setTimeout(function () {
                    setServerError("");
                  }, 5000);
                  setLoading(false);
                  return false;
                } // If there's no any server errors or etc. We can continue with response as json format


                return res.json();
              }); // Await the request

              _context.next = 5;
              return login;

            case 5:
              res = _context.sent;

              if (!res) {
                _context.next = 19;
                break;
              }

              setLoading(false);

              if (!res.errors) {
                _context.next = 12;
                break;
              }

              setErrors(res.errors); // Remove errors after 5 seconds

              setTimeout(function () {
                setErrors("");
              }, 5000);
              return _context.abrupt("return", false);

            case 12:
              if (!res.access_token) {
                _context.next = 18;
                break;
              }

              localStorage.setItem('auth_token', res.access_token);
              window.location.href = fromUrl !== null ? fromUrl : '/';
              return _context.abrupt("return", true);

            case 18:
              throw new Error(t("app.invalid-response"));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return !Object(_JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_7__["getToken"])() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "max-w-xs w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "mx-auto h-24 w-auto",
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Workflow"
  }), errors.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "error",
    data: errors
  }), serverError.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "server_error",
    data: serverError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mt-6 text-center text-3xl leading-9 font-extrabold text-white"
  }, t("home.login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: _handleSubmit,
    className: "mt-8",
    action: "#",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Email address",
    name: "email",
    type: "email",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Email address",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Password",
    name: "password",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    minLength: 8
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-6 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-sm leading-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: '/forget-password',
    className: "font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
  }, t("auth.reset-button"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-sm leading-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: '/register',
    className: "font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
  }, t("home.register")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white _bg-light_gray hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), !loading ? t("home.login") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-circle-notch fa-spin"
  }))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: '/'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  Action_Login: _JSScripts_reducers_actions_Action_Login__WEBPACK_IMPORTED_MODULE_6__["Action_Login"]
})(Login));

/***/ }),

/***/ "./lsuniverse/Themes/Default/pages/Register.js":
/*!*****************************************************!*\
  !*** ./lsuniverse/Themes/Default/pages/Register.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/logo.png */ "./lsuniverse/Themes/Default/assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-lang */ "./node_modules/react-multi-lang/lib/index.js");
/* harmony import */ var react_multi_lang__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _JSScripts_reducers_actions_Action_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../JSScripts/reducers/actions/Action_Register */ "./lsuniverse/JSScripts/reducers/actions/Action_Register.js");
/* harmony import */ var _JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../JSScripts/services/Auth */ "./lsuniverse/JSScripts/services/Auth.js");
/* harmony import */ var _components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/alerts/Alert_Message */ "./lsuniverse/Themes/Default/components/alerts/Alert_Message.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Register = function Register(props) {
  var t = Object(react_multi_lang__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      rePassword = _useState8[0],
      setRePassword = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      serverError = _useState12[0],
      setServerError = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var data = {
    name: name,
    email: email,
    password: password,
    re_password: rePassword
  };

  var _handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var register, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              e.preventDefault();
              register = props.Action_Register(data).then(function (res) {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                  setServerError({
                    "server": res.statusText
                  });
                  setTimeout(function () {
                    setServerError("");
                  }, 5000);
                  setLoading(false);
                  return false;
                } // If there's no any server errors or etc. We can continue with response as json format


                return res.json();
              }); // Await the request

              _context.next = 5;
              return register;

            case 5:
              res = _context.sent;

              if (!res) {
                _context.next = 19;
                break;
              }

              setLoading(false);

              if (!res.errors) {
                _context.next = 12;
                break;
              }

              setErrors(res.errors); // Remove errors after 5 seconds

              setTimeout(function () {
                setErrors("");
              }, 5000);
              return _context.abrupt("return", false);

            case 12:
              if (!res.message) {
                _context.next = 18;
                break;
              }

              setMessage({
                "success": t("auth.success")
              });
              setLoading(false);
              return _context.abrupt("return", true);

            case 18:
              throw new Error(t("app.invalid-response"));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return !Object(_JSScripts_services_Auth__WEBPACK_IMPORTED_MODULE_7__["getToken"])() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "max-w-xs w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "mx-auto h-24 w-auto",
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Workflow"
  }), errors.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "error",
    data: errors
  }), serverError.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "server_error",
    data: serverError
  }), message.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_alerts_Alert_Message__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "success",
    data: message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "mt-6 text-center text-3xl leading-9 font-extrabold text-white"
  }, t("home.register-2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: _handleSubmit,
    className: "mt-8",
    action: "#",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Email address",
    name: "email",
    type: "email",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Email address",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Password",
    name: "name",
    type: "text",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Full name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    minLength: 4
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Password",
    name: "password",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    minLength: 8
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    "aria-label": "Password",
    name: "re_password",
    type: "password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",
    placeholder: "Confirm password",
    onChange: function onChange(e) {
      return setRePassword(e.target.value);
    },
    minLength: 8
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-6 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-sm leading-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: '/login',
    className: "font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
  }, t("home.already-have-account")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white _bg-light_gray hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
    disabled: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), !loading ? t("home.register-2") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fas fa-circle-notch fa-spin"
  }))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: '/'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  Action_Register: _JSScripts_reducers_actions_Action_Register__WEBPACK_IMPORTED_MODULE_6__["Action_Register"]
})(Register));

/***/ }),

/***/ "./lsuniverse/Themes/Default/routes/dashboard.js":
/*!*******************************************************!*\
  !*** ./lsuniverse/Themes/Default/routes/dashboard.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Dashboard_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Dashboard/Index */ "./lsuniverse/Themes/Default/pages/Dashboard/Index.js");
/* harmony import */ var _pages_Dashboard_Tickets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Dashboard/Tickets */ "./lsuniverse/Themes/Default/pages/Dashboard/Tickets.js");
/* harmony import */ var _pages_Dashboard_TicketAnswers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Dashboard/TicketAnswers */ "./lsuniverse/Themes/Default/pages/Dashboard/TicketAnswers.js");
/* harmony import */ var _pages_Dashboard_Billling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Dashboard/Billling */ "./lsuniverse/Themes/Default/pages/Dashboard/Billling.js");
/*
 * Frontend application routes
 */



 // TODO: Make multilang route names

var DashboardRoutes = [{
  path: '/index',
  component: _pages_Dashboard_Index__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: "Home",
  show: true
}, {
  path: '/tickets',
  component: _pages_Dashboard_Tickets__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: "Tickets",
  show: true
}, {
  path: '/ticket/:id',
  component: _pages_Dashboard_TicketAnswers__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: "Show ticket",
  "static": false
}, {
  path: '/billing',
  component: _pages_Dashboard_Billling__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: "Billing details",
  show: true
}];
/* harmony default export */ __webpack_exports__["default"] = (DashboardRoutes);

/***/ })

}]);