/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmatrix_config"] = self["webpackChunkmatrix_config"] || []).push([["vendor.webpack"],{

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/* globals __webpack_hash__ */\nif (true) {\n\t/** @type {undefined|string} */\n\tvar lastHash;\n\tvar upToDate = function upToDate() {\n\t\treturn /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;\n\t};\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\tvar check = function check() {\n\t\tmodule.hot\n\t\t\t.check(true)\n\t\t\t.then(function (updatedModules) {\n\t\t\t\tif (!updatedModules) {\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] Cannot find update. \" +\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\n\t\t\t\t\t);\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] (Probably because of restarting the webpack-dev-server)\"\n\t\t\t\t\t);\n\t\t\t\t\tif (typeof window !== \"undefined\") {\n\t\t\t\t\t\twindow.location.reload();\n\t\t\t\t\t}\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (!upToDate()) {\n\t\t\t\t\tcheck();\n\t\t\t\t}\n\n\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\n\t\t\t\tif (upToDate()) {\n\t\t\t\t\tlog(\"info\", \"[HMR] App is up to date.\");\n\t\t\t\t}\n\t\t\t})\n\t\t\t.catch(function (err) {\n\t\t\t\tvar status = module.hot.status();\n\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] Cannot apply update. \" +\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\n\t\t\t\t\t);\n\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\tif (typeof window !== \"undefined\") {\n\t\t\t\t\t\twindow.location.reload();\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t}\n\t\t\t});\n\t};\n\tvar hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\n\thotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\n\t\tlastHash = currentHash;\n\t\tif (!upToDate() && module.hot.status() === \"idle\") {\n\t\t\tlog(\"info\", \"[HMR] Checking for updates on the server...\");\n\t\t\tcheck();\n\t\t}\n\t});\n\tlog(\"info\", \"[HMR] Waiting for update signal from WDS...\");\n} else {}\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nmodule.exports = new EventEmitter();\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/webpack/hot/log.js?");

/***/ })

}]);