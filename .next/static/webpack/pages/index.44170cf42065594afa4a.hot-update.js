webpackHotUpdate_N_E("pages/index",{

/***/ "./components/detail.js":
/*!******************************!*\
  !*** ./components/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ \"./node_modules/react-number-format/dist/react-number-format.es.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ \"./components/button.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ \"./components/style.js\");\n\n\n\nvar _jsxFileName = \"/Users/vivienneobrien/Desktop/mh2-tech-test-main/components/detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n/* eslint-disable max-statements */\n\n\n\n\n\n\n\nvar sincePurchased = function sincePurchased(_ref) {\n  var recentValuation = _ref.recentValuation,\n      originalPurchasePrice = _ref.originalPurchasePrice;\n  var sincePurchasedPrice = recentValuation.amount - originalPurchasePrice;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    value: sincePurchasedPrice,\n    displayType: \"text\",\n    thousandSeparator: true,\n    prefix: \"\\xA3\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\nvar account = {\n  uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n  deleted: false,\n  dateCreated: \"2020-12-03T08:55:33.421Z\",\n  currency: \"GBP\",\n  name: \"15 Temple Way\",\n  bankName: \"Residential\",\n  type: \"properties\",\n  subType: \"residential\",\n  originalPurchasePrice: 250000,\n  originalPurchasePriceDate: \"2017-09-03\",\n  recentValuation: {\n    amount: 310000,\n    status: \"good\"\n  },\n  associatedMortgages: [{\n    name: \"HSBC Repayment Mortgage\",\n    uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n    currentBalance: -175000\n  }],\n  canBeManaged: false,\n  postcode: \"BS1 2AA\",\n  lastUpdate: \"2020-12-01T08:55:33.421Z\",\n  updateAfterDays: 30\n};\n\nvar Detail = function Detail(_ref2) {\n  _s();\n\n  Object(_Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    window.fetch(\"/api/account\").then(function (res) {\n      return res.json();\n    }).then(console.log);\n  }, []);\n  var mortgage;\n  var lastUpdate = new Date(account.lastUpdate);\n\n  if (account.associatedMortgages.length) {\n    mortgage = account.associatedMortgages[0];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"Inset\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Estimated Value\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountHeadline\"], {\n        children: new Intl.NumberFormat(\"en-GB\", {\n          style: \"currency\",\n          currency: \"GBP\"\n        }).format(account.recentValuation.amount)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n          children: \"Last updated \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(lastUpdate, \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n          children: \"Next update \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"add\"])(lastUpdate, {\n            days: account.updateAfterDays\n          }), \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Property details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.bankName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.postcode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), mortgage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Mortgage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"] // This is a dummy action\n      , {\n        onClick: function onClick() {\n          return alert(\"You have navigated to the mortgage page\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: new Intl.NumberFormat(\"en-GB\", {\n              style: \"currency\",\n              currency: \"GBP\"\n            }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.associatedMortgages[0].name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Valuation Changes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Purchased for\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"\\xA3199,500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 42\n            }, _this), \"\\xA0 in September 2015\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Since purchase\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: [sincePurchased(account), \" (20%)\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 44\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Annual Appreciation\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"(5%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 48\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"] // This is a dummy action\n    , {\n      onClick: function onClick() {\n        return alert(\"You have navigated to the edit account page\");\n      },\n      children: \"Edit account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRhaWwuanM/MjkwYiJdLCJuYW1lcyI6WyJzaW5jZVB1cmNoYXNlZCIsInJlY2VudFZhbHVhdGlvbiIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZSIsInNpbmNlUHVyY2hhc2VkUHJpY2UiLCJhbW91bnQiLCJhY2NvdW50IiwidWlkIiwiZGVsZXRlZCIsImRhdGVDcmVhdGVkIiwiY3VycmVuY3kiLCJuYW1lIiwiYmFua05hbWUiLCJ0eXBlIiwic3ViVHlwZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGUiLCJzdGF0dXMiLCJhc3NvY2lhdGVkTW9ydGdhZ2VzIiwiY3VycmVudEJhbGFuY2UiLCJjYW5CZU1hbmFnZWQiLCJwb3N0Y29kZSIsImxhc3RVcGRhdGUiLCJ1cGRhdGVBZnRlckRheXMiLCJEZXRhaWwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1vcnRnYWdlIiwiRGF0ZSIsImxlbmd0aCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsImFkZCIsImRheXMiLCJhbGVydCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBV0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQztBQUFBLE1BQTdDQyxlQUE2QyxRQUE3Q0EsZUFBNkM7QUFBQSxNQUE1QkMscUJBQTRCLFFBQTVCQSxxQkFBNEI7QUFDcEUsTUFBTUMsbUJBQW1CLEdBQUdGLGVBQWUsQ0FBQ0csTUFBaEIsR0FBeUJGLHFCQUFyRDtBQUNBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFFQyxtQkFBckI7QUFBMEMsZUFBVyxFQUFDLE1BQXREO0FBQTZELHFCQUFpQixFQUFFLElBQWhGO0FBQXNGLFVBQU0sRUFBQztB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LHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLGtEQUFEO0FBQUEsa0NBQ0UscUVBQUMsK0NBQUQ7QUFBQSx5REFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLCtDQUFEO0FBQUEsMERBQStCO0FBQUEseUJBQVNWLGNBQWMsQ0FBQ0ssT0FBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLCtDQUFEO0FBQUEsK0RBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBERixlQThERSxxRUFBQyw4Q0FBRCxDQUNFO0FBREY7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNbUMsS0FBSyxDQUFDLDZDQUFELENBQVg7QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUVELENBckZEOztHQUFNbEIsTTs7S0FBQUEsTTtBQXVGU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2RldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhZGQsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5cbmltcG9ydCB7XG4gIEFjY291bnRIZWFkbGluZSxcbiAgQWNjb3VudExhYmVsLFxuICBBY2NvdW50U2VjdGlvbixcbiAgQWNjb3VudExpc3QsXG4gIEluZm9UZXh0LFxuICBJbnNldCxcbiAgUm93Q29udGFpbmVyLFxufSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5cbmNvbnN0IHNpbmNlUHVyY2hhc2VkID0gKHtyZWNlbnRWYWx1YXRpb24sIG9yaWdpbmFsUHVyY2hhc2VQcmljZSB9KSA9PiB7XG4gIGNvbnN0IHNpbmNlUHVyY2hhc2VkUHJpY2UgPSByZWNlbnRWYWx1YXRpb24uYW1vdW50IC0gb3JpZ2luYWxQdXJjaGFzZVByaWNlXG4gIHJldHVybiAoXG4gICAgPE51bWJlckZvcm1hdCB2YWx1ZT17c2luY2VQdXJjaGFzZWRQcmljZX0gZGlzcGxheVR5cGU9XCJ0ZXh0XCIgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHByZWZpeD1cIsKjXCIgLz5cbiAgKTtcbn07XG5cbmNvbnN0IGFjY291bnQgPSB7XG4gIHVpZDogXCI2NTE1NmNkYy01Y2ZkLTRiMzQtYjYyNi00OWM4MzU2OWYzNWVcIixcbiAgZGVsZXRlZDogZmFsc2UsXG4gIGRhdGVDcmVhdGVkOiBcIjIwMjAtMTItMDNUMDg6NTU6MzMuNDIxWlwiLFxuICBjdXJyZW5jeTogXCJHQlBcIixcbiAgbmFtZTogXCIxNSBUZW1wbGUgV2F5XCIsXG4gIGJhbmtOYW1lOiBcIlJlc2lkZW50aWFsXCIsXG4gIHR5cGU6IFwicHJvcGVydGllc1wiLFxuICBzdWJUeXBlOiBcInJlc2lkZW50aWFsXCIsXG4gIG9yaWdpbmFsUHVyY2hhc2VQcmljZTogMjUwMDAwLFxuICBvcmlnaW5hbFB1cmNoYXNlUHJpY2VEYXRlOiBcIjIwMTctMDktMDNcIixcbiAgcmVjZW50VmFsdWF0aW9uOiB7IGFtb3VudDogMzEwMDAwLCBzdGF0dXM6IFwiZ29vZFwiIH0sXG4gIGFzc29jaWF0ZWRNb3J0Z2FnZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkhTQkMgUmVwYXltZW50IE1vcnRnYWdlXCIsXG4gICAgICB1aWQ6IFwiZmI0NjMxMjEtYjUxYS00OTBkLTlmMTktZDJlYTc2ZjA1ZTI1XCIsXG4gICAgICBjdXJyZW50QmFsYW5jZTogLTE3NTAwMCxcbiAgICB9LFxuICBdLFxuICBjYW5CZU1hbmFnZWQ6IGZhbHNlLFxuICBwb3N0Y29kZTogXCJCUzEgMkFBXCIsXG4gIGxhc3RVcGRhdGU6IFwiMjAyMC0xMi0wMVQwODo1NTozMy40MjFaXCIsXG4gIHVwZGF0ZUFmdGVyRGF5czogMzAsXG59O1xuXG5jb25zdCBEZXRhaWwgPSAoe30pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3dcbiAgICAgIC5mZXRjaChcIi9hcGkvYWNjb3VudFwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGNvbnNvbGUubG9nKTtcbiAgfSwgW10pO1xuXG4gIGxldCBtb3J0Z2FnZTtcbiAgY29uc3QgbGFzdFVwZGF0ZSA9IG5ldyBEYXRlKGFjY291bnQubGFzdFVwZGF0ZSk7XG4gIGlmIChhY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXMubGVuZ3RoKSB7XG4gICAgbW9ydGdhZ2UgPSBhY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXNbMF07XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbnNldD5cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5Fc3RpbWF0ZWQgVmFsdWU8L0FjY291bnRMYWJlbD5cbiAgICAgICAgPEFjY291bnRIZWFkbGluZT5cbiAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIkdCUFwiLFxuICAgICAgICAgIH0pLmZvcm1hdChhY2NvdW50LnJlY2VudFZhbHVhdGlvbi5hbW91bnQpfVxuICAgICAgICA8L0FjY291bnRIZWFkbGluZT5cbiAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgIHtgTGFzdCB1cGRhdGVkICR7Zm9ybWF0KGxhc3RVcGRhdGUsIFwiZG8gTU1NIHl5eXlcIil9YH1cbiAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgIHtgTmV4dCB1cGRhdGUgJHtmb3JtYXQoXG4gICAgICAgICAgICAgIGFkZChsYXN0VXBkYXRlLCB7IGRheXM6IGFjY291bnQudXBkYXRlQWZ0ZXJEYXlzIH0pLFxuICAgICAgICAgICAgICBcImRvIE1NTSB5eXl5XCJcbiAgICAgICAgICAgICl9YH1cbiAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5Qcm9wZXJ0eSBkZXRhaWxzPC9BY2NvdW50TGFiZWw+XG4gICAgICAgIDxSb3dDb250YWluZXI+XG4gICAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50Lm5hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5iYW5rTmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50LnBvc3Rjb2RlfTwvSW5mb1RleHQ+XG4gICAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgICAgPC9Sb3dDb250YWluZXI+XG4gICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAge21vcnRnYWdlICYmIChcbiAgICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICAgIDxBY2NvdW50TGFiZWw+TW9ydGdhZ2U8L0FjY291bnRMYWJlbD5cbiAgICAgICAgICA8Um93Q29udGFpbmVyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgZHVtbXkgYWN0aW9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBoYXZlIG5hdmlnYXRlZCB0byB0aGUgbW9ydGdhZ2UgcGFnZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkdCUFwiLFxuICAgICAgICAgICAgICAgIH0pLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGFjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXS5jdXJyZW50QmFsYW5jZSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXS5uYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAgKX1cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5WYWx1YXRpb24gQ2hhbmdlczwvQWNjb3VudExhYmVsPlxuICAgICAgICA8Um93Q29udGFpbmVyPlxuICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD5QdXJjaGFzZWQgZm9yJm5ic3A7PHN0cm9uZz7CozE5OSw1MDA8L3N0cm9uZz4mbmJzcDsgaW4gU2VwdGVtYmVyIDIwMTU8L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0ID5TaW5jZSBwdXJjaGFzZSZuYnNwOzxzdHJvbmc+e3NpbmNlUHVyY2hhc2VkKGFjY291bnQpfSAoMjAlKTwvc3Ryb25nPjwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8SW5mb1RleHQ+QW5udWFsIEFwcHJlY2lhdGlvbiZuYnNwOzxzdHJvbmc+KDUlKTwvc3Ryb25nPjwvSW5mb1RleHQ+XG4gICAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgICAgPC9Sb3dDb250YWluZXI+XG4gICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICAvLyBUaGlzIGlzIGEgZHVtbXkgYWN0aW9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiWW91IGhhdmUgbmF2aWdhdGVkIHRvIHRoZSBlZGl0IGFjY291bnQgcGFnZVwiKX1cbiAgICAgID5cbiAgICAgICAgRWRpdCBhY2NvdW50XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0luc2V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/detail.js\n");

/***/ })

})