webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: Context, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\eniss\\OneDrive\\Desktop\\Kursonomia\\client\\context\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var initialState = {
  user: null
};
var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])();

var rootReducer = function rootReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });

    default:
      return state;
  }
};

var Provider = function Provider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(rootReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user"))
    });
  }, []);
  axios__WEBPACK_IMPORTED_MODULE_5__["default"].interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    var res = error.response;

    if (res.status === 401 && res.config && !res.config__isRetryRequest) {
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("/api/logout").then(function (data) {
          console.log("/401 error > logout");
          dispatch({
            type: "LOGOUT"
          });
          window.localStorage.removeItem("user");
          router.push("login");
        })["catch"](function (err) {
          console.log("AXIOS INTERCEPTORS ERR", err);
          reject(error);
        });
      });
    }

    return Promise.reject(error);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getCsrfToken = /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return C_Users_eniss_OneDrive_Desktop_Kursonomia_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("https://kursonomia-server.onrender.com/api/csrf-token");

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                //console.log("CSRF", data);
                axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers["X-CSRF-Token"] = data.getCsrfToken;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getCsrfToken() {
        return _ref2.apply(this, arguments);
      };
    }();

    getCsrfToken();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(Provider, "CWXkBfVANc7h/TpEjdlj6Zdi6Y0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Provider;


var _c;

$RefreshReg$(_c, "Provider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsImNvbmZpZ19faXNSZXRyeVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZXJyIiwiZ2V0Q3NyZlRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUU7QUFEYSxDQUFyQjtBQUdBLElBQU1DLE9BQU8sZ0JBQUdDLDJEQUFhLEVBQTdCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNyQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLE9BQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkosWUFBSSxFQUFFSyxNQUFNLENBQUNFO0FBQWhDOztBQUNGLFNBQUssUUFBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CSixZQUFJLEVBQUU7QUFBekI7O0FBQ0Y7QUFDRSxhQUFPSSxLQUFQO0FBTko7QUFRRCxDQVREOztBQVVBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNQQyx3REFBVSxDQUFDUCxXQUFELEVBQWNKLFlBQWQsQ0FESDtBQUFBLE1BQzFCSyxLQUQwQjtBQUFBLE1BQ25CTyxRQURtQjs7QUFFakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsWUFBUSxDQUFDO0FBQ1BMLFVBQUksRUFBRSxPQURDO0FBRVBDLGFBQU8sRUFBRVEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBWDtBQUZGLEtBQUQsQ0FBUjtBQUlELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQUMsK0NBQUssQ0FBQ0MsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJDLEdBQTVCLENBQ0UsVUFBVUQsUUFBVixFQUFvQjtBQUNsQixXQUFPQSxRQUFQO0FBQ0QsR0FISCxFQUlFLFVBQVVFLEtBQVYsRUFBaUI7QUFDZixRQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBaEI7O0FBQ0EsUUFBSUcsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBZixJQUFzQkQsR0FBRyxDQUFDRSxNQUExQixJQUFvQyxDQUFDRixHQUFHLENBQUNHLHNCQUE3QyxFQUFxRTtBQUNuRSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENYLHFEQUFLLENBQ0ZZLEdBREgsQ0FDTyxhQURQLEVBRUdDLElBRkgsQ0FFUSxVQUFDQyxJQUFELEVBQVU7QUFDZEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0F6QixrQkFBUSxDQUFDO0FBQUVMLGdCQUFJLEVBQUU7QUFBUixXQUFELENBQVI7QUFDQVcsZ0JBQU0sQ0FBQ0MsWUFBUCxDQUFvQm1CLFVBQXBCLENBQStCLE1BQS9CO0FBQ0F6QixnQkFBTSxDQUFDMEIsSUFBUCxDQUFZLE9BQVo7QUFDRCxTQVBILFdBUVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RKLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0csR0FBdEM7QUFDQVIsZ0JBQU0sQ0FBQ1AsS0FBRCxDQUFOO0FBQ0QsU0FYSDtBQVlELE9BYk0sQ0FBUDtBQWNEOztBQUNELFdBQU9LLE9BQU8sQ0FBQ0UsTUFBUixDQUFlUCxLQUFmLENBQVA7QUFDRCxHQXZCSDtBQXlCQVYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTTBCLFlBQVk7QUFBQSxpV0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSXBCLDZDQUFLLENBQUNZLEdBQU4sQ0FDckIsdURBRHFCLENBREo7O0FBQUE7QUFBQTtBQUNYRSxvQkFEVyxvQkFDWEEsSUFEVztBQUluQjtBQUNBZCw2REFBSyxDQUFDcUIsUUFBTixDQUFlQyxPQUFmLENBQXVCLGNBQXZCLElBQXlDUixJQUFJLENBQUNNLFlBQTlDOztBQUxtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaQSxZQUFZO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQU9BQSxnQkFBWTtBQUNiLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxzQkFDRSxxRUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUU7QUFBRXBDLFdBQUssRUFBTEEsS0FBRjtBQUFTTyxjQUFRLEVBQVJBO0FBQVQsS0FBekI7QUFBQSxjQUErQ0Y7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0EvQ0Q7O0dBQU1ELFE7VUFFV0sscUQ7OztLQUZYTCxRO0FBZ0ROIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzc3ZjFhMzkzYjNmY2U4ZTVmZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG59O1xyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiTE9HSU5cIixcclxuICAgICAgcGF5bG9hZDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWdfX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoXCIvYXBpL2xvZ291dFwiKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLzQwMSBlcnJvciA+IGxvZ291dFwiKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcImxvZ2luXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQVhJT1MgSU5URVJDRVBUT1JTIEVSUlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Q3NyZlRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcImh0dHBzOi8va3Vyc29ub21pYS1zZXJ2ZXIub25yZW5kZXIuY29tL2FwaS9jc3JmLXRva2VuXCJcclxuICAgICAgKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIkNTUkZcIiwgZGF0YSk7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVG9rZW5cIl0gPSBkYXRhLmdldENzcmZUb2tlbjtcclxuICAgIH07XHJcbiAgICBnZXRDc3JmVG9rZW4oKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCB7IENvbnRleHQsIFByb3ZpZGVyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=