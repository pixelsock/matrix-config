"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmatrix_config"] = self["webpackChunkmatrix_config"] || []).push([["vendor.core-js"],{

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isConstructor = __webpack_require__(/*! ../internals/is-constructor */ \"./node_modules/core-js/internals/is-constructor.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\n\nvar $TypeError = TypeError;\n\n// `Assert: IsConstructor(argument) is true`\nmodule.exports = function (argument) {\n  if (isConstructor(argument)) return argument;\n  throw $TypeError(tryToString(argument) + ' is not a constructor');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/a-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument) {\n  if (typeof argument == 'object' || isCallable(argument)) return argument;\n  throw $TypeError(\"Can't set \" + $String(argument) + ' as a prototype');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] === undefined) {\n  defineProperty(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar charAt = (__webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt);\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (it, Prototype) {\n  if (isPrototypeOf(Prototype, it)) return it;\n  throw $TypeError('Incorrect invocation');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $String = String;\nvar $TypeError = TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw $TypeError($String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = lengthOfArrayLike(O);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el !== el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value !== value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call -- required for testing\n    method.call(null, argument || function () { return 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\n\nvar $TypeError = TypeError;\n\n// `Array.prototype.{ reduce, reduceRight }` methods implementation\nvar createMethod = function (IS_RIGHT) {\n  return function (that, callbackfn, argumentsLength, memo) {\n    aCallable(callbackfn);\n    var O = toObject(that);\n    var self = IndexedObject(O);\n    var length = lengthOfArrayLike(O);\n    var index = IS_RIGHT ? length - 1 : 0;\n    var i = IS_RIGHT ? -1 : 1;\n    if (argumentsLength < 2) while (true) {\n      if (index in self) {\n        memo = self[index];\n        index += i;\n        break;\n      }\n      index += i;\n      if (IS_RIGHT ? index < 0 : length <= index) {\n        throw $TypeError('Reduce of empty array with no initial value');\n      }\n    }\n    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n    return memo;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.reduce` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduce\n  left: createMethod(false),\n  // `Array.prototype.reduceRight` method\n  // https://tc39.es/ecma262/#sec-array.prototype.reduceright\n  right: createMethod(true)\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\nvar $Array = Array;\nvar max = Math.max;\n\nmodule.exports = function (O, start, end) {\n  var length = lengthOfArrayLike(O);\n  var k = toAbsoluteIndex(start, length);\n  var fin = toAbsoluteIndex(end === undefined ? length : end, length);\n  var result = $Array(max(fin - k, 0));\n  var n = 0;\n  for (; k < fin; k++, n++) createProperty(result, n, O[k]);\n  result.length = n;\n  return result;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/array-slice-simple.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis([].slice);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/array-slice.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  try {\n    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  } catch (error) { return false; } // workaround of old WebKit + `eval` bug\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar $Object = Object;\n\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source, exceptions) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {\n      defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n    }\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (error1) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (error2) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n// `CreateIterResultObject` abstract operation\n// https://tc39.es/ecma262/#sec-createiterresultobject\nmodule.exports = function (value, done) {\n  return { value: value, done: done };\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/create-iter-result-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPropertyKey(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ \"./node_modules/core-js/internals/make-built-in.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, name, descriptor) {\n  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });\n  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });\n  return defineProperty.f(target, name, descriptor);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/define-built-in-accessor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ \"./node_modules/core-js/internals/make-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nmodule.exports = function (O, key, value, options) {\n  if (!options) options = {};\n  var simple = options.enumerable;\n  var name = options.name !== undefined ? options.name : key;\n  if (isCallable(value)) makeBuiltIn(value, name, options);\n  if (options.global) {\n    if (simple) O[key] = value;\n    else defineGlobalProperty(key, value);\n  } else {\n    try {\n      if (!options.unsafe) delete O[key];\n      else if (O[key]) simple = true;\n    } catch (error) { /* empty */ }\n    if (simple) O[key] = value;\n    else definePropertyModule.f(O, key, {\n      value: value,\n      enumerable: false,\n      configurable: !options.nonConfigurable,\n      writable: !options.nonWritable\n    });\n  } return O;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/define-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/define-global-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/document-all.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\nvar documentAll = typeof document == 'object' && document.all;\n\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot\n// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing\nvar IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;\n\nmodule.exports = {\n  all: documentAll,\n  IS_HTMLDDA: IS_HTMLDDA\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/document-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar classList = documentCreateElement('span').classList;\nvar DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;\n\nmodule.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/dom-token-list-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js/internals/engine-is-deno.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nmodule.exports = !IS_DENO && !IS_NODE\n  && typeof window == 'object'\n  && typeof document == 'object';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-browser.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-deno.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-deno.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n/* global Deno -- Deno case */\nmodule.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-deno.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios-pebble.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-ios-pebble.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\n// eslint-disable-next-line redos/no-vulnerable -- safe\nmodule.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nmodule.exports = classof(global.process) === 'process';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target         - name of the target object\n  options.global         - target is the global object\n  options.stat           - export as static methods of target\n  options.proto          - export as prototype methods of target\n  options.real           - real prototype method for the `pure` version\n  options.forced         - export even if the native feature is available\n  options.bind           - bind methods to the target, required for the `pure` version\n  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe         - use the simple assignment of property instead of delete + defineProperty\n  options.sham           - add a flag to not completely full polyfills\n  options.enumerable     - export as enumerable property\n  options.dontCallGetSet - prevent calling a getter on target\n  options.name           - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || defineGlobalProperty(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.dontCallGetSet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty == typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    defineBuiltIn(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js/internals/function-uncurry-this-clause.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar RegExpPrototype = RegExp.prototype;\n\nmodule.exports = function (KEY, exec, FORCED, SHAM) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) !== 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () {\n      execCalled = true;\n      return null;\n    };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    FORCED\n  ) {\n    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      var uncurriedNativeMethod = uncurryThis(nativeMethod);\n      var $exec = regexp.exec;\n      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };\n        }\n        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };\n      }\n      return { done: false };\n    });\n\n    defineBuiltIn(String.prototype, KEY, methods[0]);\n    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);\n  }\n\n  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js/internals/function-uncurry-this-clause.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-function-prototype-bind -- safe\n  var test = (function () { /* empty */ }).bind();\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return typeof test != 'function' || test.hasOwnProperty('prototype');\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-bind-native.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar call = Function.prototype.call;\n\nmodule.exports = NATIVE_BIND ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\n\nvar FunctionPrototype = Function.prototype;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;\n\nvar EXISTS = hasOwn(FunctionPrototype, 'name');\n// additional protection from minified / mangled / dropped function names\nvar PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';\nvar CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));\n\nmodule.exports = {\n  EXISTS: EXISTS,\n  PROPER: PROPER,\n  CONFIGURABLE: CONFIGURABLE\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-name.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-accessor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nmodule.exports = function (object, key, method) {\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-uncurry-this-accessor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = function (fn) {\n  // Nashorn bug:\n  //   https://github.com/zloirock/core-js/issues/1128\n  //   https://github.com/zloirock/core-js/issues/1130\n  if (classofRaw(fn) === 'Function') return uncurryThis(fn);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-uncurry-this-clause.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ \"./node_modules/core-js/internals/function-bind-native.js\");\n\nvar FunctionPrototype = Function.prototype;\nvar call = FunctionPrototype.call;\nvar uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);\n\nmodule.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {\n  return function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar aFunction = function (argument) {\n  return isCallable(argument) ? argument : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)\n    || getMethod(it, '@@iterator')\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (argument, usingIterator) {\n  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;\n  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));\n  throw $TypeError(tryToString(argument) + ' is not iterable');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return isNullOrUndefined(func) ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar floor = Math.floor;\nvar charAt = uncurryThis(''.charAt);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\n// eslint-disable-next-line redos/no-vulnerable -- safe\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d{1,2}|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d{1,2})/g;\n\n// `GetSubstitution` abstract operation\n// https://tc39.es/ecma262/#sec-getsubstitution\nmodule.exports = function (matched, str, position, captures, namedCaptures, replacement) {\n  var tailPos = position + matched.length;\n  var m = captures.length;\n  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n  if (namedCaptures !== undefined) {\n    namedCaptures = toObject(namedCaptures);\n    symbols = SUBSTITUTION_SYMBOLS;\n  }\n  return replace(replacement, symbols, function (match, ch) {\n    var capture;\n    switch (charAt(ch, 0)) {\n      case '$': return '$';\n      case '&': return matched;\n      case '`': return stringSlice(str, 0, position);\n      case \"'\": return stringSlice(str, tailPos);\n      case '<':\n        capture = namedCaptures[stringSlice(ch, 1, -1)];\n        break;\n      default: // \\d\\d?\n        var n = +ch;\n        if (n === 0) return match;\n        if (n > m) {\n          var f = floor(n / 10);\n          if (f === 0) return match;\n          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);\n          return match;\n        }\n        capture = captures[n - 1];\n    }\n    return capture === undefined ? '' : capture;\n  });\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/get-substitution.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar check = function (it) {\n  return it && it.Math === Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || this || Function('return this')();\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\n// eslint-disable-next-line es/no-object-hasown -- safe\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (a, b) {\n  try {\n    // eslint-disable-next-line no-console -- safe\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  } catch (error) { /* empty */ }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thanks to IE8 for its funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a !== 7;\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar $Object = Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !$Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) === 'String' ? split(it, '') : $Object(it);\n} : $Object;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = uncurryThis(Function.toString);\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (!isCallable(store.inspectSource)) {\n  store.inspectSource = function (it) {\n    return functionToString(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ \"./node_modules/core-js/internals/weak-map-basic-detection.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar TypeError = global.TypeError;\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  /* eslint-disable no-self-assign -- prototype methods protection */\n  store.get = store.get;\n  store.has = store.has;\n  store.set = store.set;\n  /* eslint-enable no-self-assign -- prototype methods protection */\n  set = function (it, metadata) {\n    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    store.set(it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return store.get(it) || {};\n  };\n  has = function (it) {\n    return store.has(it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return hasOwn(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return hasOwn(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(argument) {\n  return classof(argument) === 'Array';\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\n// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = $documentAll.IS_HTMLDDA ? function (argument) {\n  return typeof argument == 'function' || argument === documentAll;\n} : function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar noop = function () { /* empty */ };\nvar empty = [];\nvar construct = getBuiltIn('Reflect', 'construct');\nvar constructorRegExp = /^\\s*(?:class|function)\\b/;\nvar exec = uncurryThis(constructorRegExp.exec);\nvar INCORRECT_TO_STRING = !constructorRegExp.exec(noop);\n\nvar isConstructorModern = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  try {\n    construct(noop, empty, argument);\n    return true;\n  } catch (error) {\n    return false;\n  }\n};\n\nvar isConstructorLegacy = function isConstructor(argument) {\n  if (!isCallable(argument)) return false;\n  switch (classof(argument)) {\n    case 'AsyncFunction':\n    case 'GeneratorFunction':\n    case 'AsyncGeneratorFunction': return false;\n  }\n  try {\n    // we can't check .prototype since constructors produced by .bind haven't it\n    // `Function#toString` throws on some built-it function in some legacy engines\n    // (for example, `DOMQuad` and similar in FF41-)\n    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));\n  } catch (error) {\n    return true;\n  }\n};\n\nisConstructorLegacy.sham = true;\n\n// `IsConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-isconstructor\nmodule.exports = !construct || fails(function () {\n  var called;\n  return isConstructorModern(isConstructorModern.call)\n    || !isConstructorModern(Object)\n    || !isConstructorModern(function () { called = true; })\n    || called;\n}) ? isConstructorLegacy : isConstructorModern;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value === POLYFILL ? true\n    : value === NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n// we can't use just `it == null` since of `document.all` special case\n// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec\nmodule.exports = function (it) {\n  return it === null || it === undefined;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-null-or-undefined.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar $documentAll = __webpack_require__(/*! ../internals/document-all */ \"./node_modules/core-js/internals/document-all.js\");\n\nvar documentAll = $documentAll.all;\n\nmodule.exports = $documentAll.IS_HTMLDDA ? function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;\n} : function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = false;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar $Object = Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js/internals/try-to-string.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\nvar lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ \"./node_modules/core-js/internals/length-of-array-like.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar $TypeError = TypeError;\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar ResultPrototype = Result.prototype;\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_RECORD = !!(options && options.IS_RECORD);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator, 'normal', condition);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_RECORD) {\n    iterator = iterable.iterator;\n  } else if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && isPrototypeOf(ResultPrototype, result)) return result;\n      } return new Result(false);\n    }\n    iterator = getIterator(iterable, iterFn);\n  }\n\n  next = IS_RECORD ? iterable.next : iterator.next;\n  while (!(step = call(next, iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator, 'throw', error);\n    }\n    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\n\nmodule.exports = function (iterator, kind, value) {\n  var innerResult, innerError;\n  anObject(iterator);\n  try {\n    innerResult = getMethod(iterator, 'return');\n    if (!innerResult) {\n      if (kind === 'throw') throw value;\n      return value;\n    }\n    innerResult = call(innerResult, iterator);\n  } catch (error) {\n    innerError = true;\n    innerResult = error;\n  }\n  if (kind === 'throw') throw value;\n  if (innerError) throw innerResult;\n  anObject(innerResult);\n  return value;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype);\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterator-create-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-define.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-define.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar FunctionName = __webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ \"./node_modules/core-js/internals/iterator-create-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar PROPER_FUNCTION_NAME = FunctionName.PROPER;\nvar CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];\n\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    }\n\n    return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {\n          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {\n      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);\n    } else {\n      INCORRECT_VALUES_NAME = true;\n      defaultIterator = function values() { return call(nativeIterator, this); };\n    }\n  }\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });\n  }\n  Iterators[NAME] = defaultIterator;\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterator-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\nelse if (IS_PURE) IteratorPrototype = create(IteratorPrototype);\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif (!isCallable(IteratorPrototype[ITERATOR])) {\n  defineBuiltIn(IteratorPrototype, ITERATOR, function () {\n    return this;\n  });\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\n// `LengthOfArrayLike` abstract operation\n// https://tc39.es/ecma262/#sec-lengthofarraylike\nmodule.exports = function (obj) {\n  return toLength(obj.length);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/length-of-array-like.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").CONFIGURABLE);\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar enforceInternalState = InternalStateModule.enforce;\nvar getInternalState = InternalStateModule.get;\nvar $String = String;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\nvar stringSlice = uncurryThis(''.slice);\nvar replace = uncurryThis(''.replace);\nvar join = uncurryThis([].join);\n\nvar CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {\n  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;\n});\n\nvar TEMPLATE = String(String).split('String');\n\nvar makeBuiltIn = module.exports = function (value, name, options) {\n  if (stringSlice($String(name), 0, 7) === 'Symbol(') {\n    name = '[' + replace($String(name), /^Symbol\\(([^)]*)\\)/, '$1') + ']';\n  }\n  if (options && options.getter) name = 'get ' + name;\n  if (options && options.setter) name = 'set ' + name;\n  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {\n    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });\n    else value.name = name;\n  }\n  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {\n    defineProperty(value, 'length', { value: options.arity });\n  }\n  try {\n    if (options && hasOwn(options, 'constructor') && options.constructor) {\n      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });\n    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable\n    } else if (value.prototype) value.prototype = undefined;\n  } catch (error) { /* empty */ }\n  var state = enforceInternalState(value);\n  if (!hasOwn(state, 'source')) {\n    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');\n  } return value;\n};\n\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n// eslint-disable-next-line no-extend-native -- required\nFunction.prototype.toString = makeBuiltIn(function toString() {\n  return isCallable(this) && getInternalState(this).source || inspectSource(this);\n}, 'toString');\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/make-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nvar ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `Math.trunc` method\n// https://tc39.es/ecma262/#sec-math.trunc\n// eslint-disable-next-line es/no-math-trunc -- safe\nmodule.exports = Math.trunc || function trunc(x) {\n  var n = +x;\n  return (n > 0 ? floor : ceil)(n);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/math-trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar macrotask = (__webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set);\nvar Queue = __webpack_require__(/*! ../internals/queue */ \"./node_modules/core-js/internals/queue.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ \"./node_modules/core-js/internals/engine-is-ios-pebble.js\");\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"./node_modules/core-js/internals/engine-is-webos-webkit.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise;\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\nvar notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!microtask) {\n  var queue = new Queue();\n\n  var flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (fn = queue.get()) try {\n      fn();\n    } catch (error) {\n      if (queue.head) notify();\n      throw error;\n    }\n    if (parent) parent.enter();\n  };\n\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    // workaround of WebKit ~ iOS Safari 10.1 bug\n    promise.constructor = Promise;\n    then = bind(promise.then, promise);\n    notify = function () {\n      then(flush);\n    };\n  // Node.js without promises\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessage\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    // `webpack` dev server bug on IE global methods - use bind(fn, global)\n    macrotask = bind(macrotask, global);\n    notify = function () {\n      macrotask(flush);\n    };\n  }\n\n  microtask = function (fn) {\n    if (!queue.head) notify();\n    queue.add(fn);\n  };\n}\n\nmodule.exports = microtask;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\n\nvar $TypeError = TypeError;\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aCallable(resolve);\n  this.reject = aCallable(reject);\n};\n\n// `NewPromiseCapability` abstract operation\n// https://tc39.es/ecma262/#sec-newpromisecapability\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nvar $TypeError = TypeError;\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw $TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* global ActiveXObject -- old IE, WSH */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    activeXDocument = new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = typeof document != 'undefined'\n    ? document.domain && activeXDocument\n      ? NullProtoObjectViaActiveX(activeXDocument) // old IE\n      : NullProtoObjectViaIFrame()\n    : NullProtoObjectViaActiveX(activeXDocument); // WSH\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\n// eslint-disable-next-line es/no-object-create -- safe\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nexports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var props = toIndexedObject(Properties);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ \"./node_modules/core-js/internals/v8-prototype-define-bug.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\n\nvar $TypeError = TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar ENUMERABLE = 'enumerable';\nvar CONFIGURABLE = 'configurable';\nvar WRITABLE = 'writable';\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {\n    var current = $getOwnPropertyDescriptor(O, P);\n    if (current && current[WRITABLE]) {\n      O[P] = Attributes.value;\n      Attributes = {\n        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],\n        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],\n        writable: false\n      };\n    }\n  } return $defineProperty(O, P, Attributes);\n} : $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar $Object = Object;\nvar ObjectPrototype = $Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {\n  var object = toObject(O);\n  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];\n  var constructor = object.constructor;\n  if (isCallable(constructor) && object instanceof constructor) {\n    return constructor.prototype;\n  } return object instanceof $Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar push = uncurryThis([].push);\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (hasOwn(O, key = names[i++])) {\n    ~indexOf(result, key) || push(result, key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable no-proto -- safe */\nvar uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ \"./node_modules/core-js/internals/function-uncurry-this-accessor.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');\n    setter(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar $TypeError = TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw $TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar concat = uncurryThis([].concat);\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-constructor-detection.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js/internals/promise-native-constructor.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"./node_modules/core-js/internals/engine-is-browser.js\");\nvar IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ \"./node_modules/core-js/internals/engine-is-deno.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\nvar SPECIES = wellKnownSymbol('species');\nvar SUBCLASSING = false;\nvar NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);\n\nvar FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {\n  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);\n  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);\n  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n  // We can't detect it synchronously, so just check versions\n  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;\n  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution\n  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {\n    // Detect correctness of subclassing with @@species support\n    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });\n    var FakePromise = function (exec) {\n      exec(function () { /* empty */ }, function () { /* empty */ });\n    };\n    var constructor = promise.constructor = {};\n    constructor[SPECIES] = FakePromise;\n    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;\n    if (!SUBCLASSING) return true;\n  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;\n});\n\nmodule.exports = {\n  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,\n  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,\n  SUBCLASSING: SUBCLASSING\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/promise-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-native-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-native-constructor.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/promise-native-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-statics-incorrect-iteration.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js/internals/promise-native-constructor.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js/internals/promise-constructor-detection.js\").CONSTRUCTOR);\n\nmodule.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {\n  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/promise-statics-incorrect-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/queue.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/queue.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nvar Queue = function () {\n  this.head = null;\n  this.tail = null;\n};\n\nQueue.prototype = {\n  add: function (item) {\n    var entry = { item: item, next: null };\n    var tail = this.tail;\n    if (tail) tail.next = entry;\n    else this.head = entry;\n    this.tail = entry;\n  },\n  get: function () {\n    var entry = this.head;\n    if (entry) {\n      var next = this.head = entry.next;\n      if (next === null) this.tail = null;\n      return entry.item;\n    }\n  }\n};\n\nmodule.exports = Queue;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/queue.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar $TypeError = TypeError;\n\n// `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (isCallable(exec)) {\n    var result = call(exec, R, S);\n    if (result !== null) anObject(result);\n    return result;\n  }\n  if (classof(R) === 'RegExp') return call(regexpExec, R, S);\n  throw $TypeError('RegExp#exec called on incompatible receiver');\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */\n/* eslint-disable regexp/no-useless-quantifier -- testing */\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar getInternalState = (__webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").get);\nvar UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ \"./node_modules/core-js/internals/regexp-unsupported-dot-all.js\");\nvar UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ \"./node_modules/core-js/internals/regexp-unsupported-ncg.js\");\n\nvar nativeReplace = shared('native-string-replace', String.prototype.replace);\nvar nativeExec = RegExp.prototype.exec;\nvar patchedExec = nativeExec;\nvar charAt = uncurryThis(''.charAt);\nvar indexOf = uncurryThis(''.indexOf);\nvar replace = uncurryThis(''.replace);\nvar stringSlice = uncurryThis(''.slice);\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  call(nativeExec, re1, 'a');\n  call(nativeExec, re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;\n\nif (PATCH) {\n  patchedExec = function exec(string) {\n    var re = this;\n    var state = getInternalState(re);\n    var str = toString(string);\n    var raw = state.raw;\n    var result, reCopy, lastIndex, match, i, object, group;\n\n    if (raw) {\n      raw.lastIndex = re.lastIndex;\n      result = call(patchedExec, raw, str);\n      re.lastIndex = raw.lastIndex;\n      return result;\n    }\n\n    var groups = state.groups;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = call(regexpFlags, re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = replace(flags, 'y', '');\n      if (indexOf(flags, 'g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = stringSlice(str, re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = call(nativeExec, sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = stringSlice(match.input, charsAdded);\n        match[0] = stringSlice(match[0], charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/\n      call(nativeReplace, match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    if (match && groups) {\n      match.groups = object = create(null);\n      for (i = 0; i < groups.length; i++) {\n        group = groups[i];\n        object[group[0]] = match[group[1]];\n      }\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.hasIndices) result += 'd';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.unicodeSets) result += 'v';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-get-flags.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-get-flags.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js/internals/object-is-prototype-of.js\");\nvar regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar RegExpPrototype = RegExp.prototype;\n\nmodule.exports = function (R) {\n  var flags = R.flags;\n  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)\n    ? call(regExpFlags, R) : flags;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-get-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nvar UNSUPPORTED_Y = fails(function () {\n  var re = $RegExp('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') !== null;\n});\n\n// UC Browser bug\n// https://github.com/zloirock/core-js/issues/1008\nvar MISSED_STICKY = UNSUPPORTED_Y || fails(function () {\n  return !$RegExp('a', 'y').sticky;\n});\n\nvar BROKEN_CARET = UNSUPPORTED_Y || fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = $RegExp('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') !== null;\n});\n\nmodule.exports = {\n  BROKEN_CARET: BROKEN_CARET,\n  MISSED_STICKY: MISSED_STICKY,\n  UNSUPPORTED_Y: UNSUPPORTED_Y\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nmodule.exports = fails(function () {\n  var re = $RegExp('.', 's');\n  return !(re.dotAll && re.exec('\\n') && re.flags === 's');\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-unsupported-dot-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError\nvar $RegExp = global.RegExp;\n\nmodule.exports = fails(function () {\n  var re = $RegExp('(?<a>b)', 'g');\n  return re.exec('b').groups.a !== 'b' ||\n    'b'.replace(re, '$<a>c') !== 'bc';\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/regexp-unsupported-ncg.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\n\nvar $TypeError = TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (isNullOrUndefined(it)) throw $TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ \"./node_modules/core-js/internals/define-built-in-accessor.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineBuiltInAccessor(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (target, TAG, STATIC) {\n  if (target && !STATIC) target = target.prototype;\n  if (target && !hasOwn(target, TO_STRING_TAG)) {\n    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ \"./node_modules/core-js/internals/define-global-property.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || defineGlobalProperty(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.32.2',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',\n  license: 'https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE',\n  source: 'https://github.com/zloirock/core-js'\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aConstructor = __webpack_require__(/*! ../internals/a-constructor */ \"./node_modules/core-js/internals/a-constructor.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar charAt = uncurryThis(''.charAt);\nvar charCodeAt = uncurryThis(''.charCodeAt);\nvar stringSlice = uncurryThis(''.slice);\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = toString(requireObjectCoercible($this));\n    var position = toIntegerOrInfinity(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = charCodeAt(S, position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING\n          ? charAt(S, position)\n          : first\n        : CONVERT_TO_STRING\n          ? stringSlice(S, position, position + 2)\n          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").PROPER);\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar non = '\\u200B\\u0085\\u180E';\n\n// check that a method works with the correct list\n// of whitespaces and has a correct name\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    return !!whitespaces[METHOD_NAME]()\n      || non[METHOD_NAME]() !== non\n      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);\n  });\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/string-trim-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar replace = uncurryThis(''.replace);\nvar ltrim = RegExp('^[' + whitespaces + ']+');\nvar rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = toString(requireObjectCoercible($this));\n    if (TYPE & 1) string = replace(string, ltrim, '');\n    if (TYPE & 2) string = replace(string, rtrim, '$1');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.es/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.es/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar $String = global.String;\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol('symbol detection');\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,\n  // of course, fail.\n  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/symbol-constructor-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice */ \"./node_modules/core-js/internals/array-slice.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ \"./node_modules/core-js/internals/validate-arguments-length.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar Dispatch = global.Dispatch;\nvar Function = global.Function;\nvar MessageChannel = global.MessageChannel;\nvar String = global.String;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar $location, defer, channel, port;\n\nfails(function () {\n  // Deno throws a ReferenceError on `location` access without `--location` flag\n  $location = global.location;\n});\n\nvar run = function (id) {\n  if (hasOwn(queue, id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar eventListener = function (event) {\n  run(event.data);\n};\n\nvar globalPostMessageDefer = function (id) {\n  // old engines have not location.origin\n  global.postMessage(String(id), $location.protocol + '//' + $location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(handler) {\n    validateArgumentsLength(arguments.length, 1);\n    var fn = isCallable(handler) ? handler : Function(handler);\n    var args = arraySlice(arguments, 1);\n    queue[++counter] = function () {\n      apply(fn, undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = eventListener;\n    defer = bind(port.postMessage, port);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (\n    global.addEventListener &&\n    isCallable(global.postMessage) &&\n    !global.importScripts &&\n    $location && $location.protocol !== 'file:' &&\n    !fails(globalPostMessageDefer)\n  ) {\n    defer = globalPostMessageDefer;\n    global.addEventListener('message', eventListener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toIntegerOrInfinity(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar trunc = __webpack_require__(/*! ../internals/math-trunc */ \"./node_modules/core-js/internals/math-trunc.js\");\n\n// `ToIntegerOrInfinity` abstract operation\n// https://tc39.es/ecma262/#sec-tointegerorinfinity\nmodule.exports = function (argument) {\n  var number = +argument;\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return number !== number || number === 0 ? 0 : trunc(number);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-integer-or-infinity.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar $Object = Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return $Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar $TypeError = TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw $TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar $String = String;\n\nmodule.exports = function (argument) {\n  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');\n  return $String(argument);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\nvar $String = String;\n\nmodule.exports = function (argument) {\n  try {\n    return $String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// V8 ~ Chrome 36-\n// https://bugs.chromium.org/p/v8/issues/detail?id=3334\nmodule.exports = DESCRIPTORS && fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty(function () { /* empty */ }, 'prototype', {\n    value: 42,\n    writable: false\n  }).prototype !== 42;\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/v8-prototype-define-bug.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\nvar $TypeError = TypeError;\n\nmodule.exports = function (passed, required) {\n  if (passed < required) throw $TypeError('Not enough arguments');\n  return passed;\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/validate-arguments-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/weak-map-basic-detection.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ \"./node_modules/core-js/internals/symbol-constructor-detection.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar Symbol = global.Symbol;\nvar WellKnownSymbolsStore = shared('wks');\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name)) {\n    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)\n      ? Symbol[name]\n      : createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("\n// a string of all valid unicode whitespaces\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002' +\n  '\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-disable es/no-array-prototype-indexof -- required for testing */\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js/internals/function-uncurry-this-clause.js\");\nvar $indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar nativeIndexOf = uncurryThis([].indexOf);\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;\nvar FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf(this, searchElement, fromIndex) || 0\n      : $indexOf(this, searchElement, fromIndex);\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f);\nvar defineIterator = __webpack_require__(/*! ../internals/iterator-define */ \"./node_modules/core-js/internals/iterator-define.js\");\nvar createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ \"./node_modules/core-js/internals/create-iter-result-object.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return createIterResultObject(undefined, true);\n  }\n  switch (kind) {\n    case 'keys': return createIterResultObject(index, false);\n    case 'values': return createIterResultObject(target[index], false);\n  } return createIterResultObject([index, target[index]], false);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nvar values = Iterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n// V8 ~ Chrome 45- bug\nif (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {\n  defineProperty(values, 'name', { value: 'values' });\n} catch (error) { /* empty */ }\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $reduce = (__webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js/internals/array-reduce.js\").left);\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\n// Chrome 80-82 has a critical bug\n// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982\nvar CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;\nvar FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');\n\n// `Array.prototype.reduce` method\n// https://tc39.es/ecma262/#sec-array.prototype.reduce\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    var length = arguments.length;\n    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar nativeReverse = uncurryThis([].reverse);\nvar test = [1, 2];\n\n// `Array.prototype.reverse` method\n// https://tc39.es/ecma262/#sec-array.prototype.reverse\n// fix for Safari 12.0 bug\n// https://bugs.webkit.org/show_bug.cgi?id=188794\n$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {\n  reverse: function reverse() {\n    // eslint-disable-next-line no-self-assign -- dirty hack\n    if (isArray(this)) this.length = this.length;\n    return nativeReverse(this);\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.array.reverse.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js/internals/promise-statics-incorrect-iteration.js\");\n\n// `Promise.all` method\n// https://tc39.es/ecma262/#sec-promise.all\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        remaining++;\n        call($promiseResolve, C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.catch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js/internals/promise-constructor-detection.js\").CONSTRUCTOR);\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js/internals/promise-native-constructor.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\n\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\n\n// `Promise.prototype.catch` method\n// https://tc39.es/ecma262/#sec-promise.prototype.catch\n$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {\n  'catch': function (onRejected) {\n    return this.then(undefined, onRejected);\n  }\n});\n\n// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`\nif (!IS_PURE && isCallable(NativePromiseConstructor)) {\n  var method = getBuiltIn('Promise').prototype['catch'];\n  if (NativePromisePrototype['catch'] !== method) {\n    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });\n  }\n}\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.catch.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar task = (__webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set);\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js/internals/microtask.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js/internals/host-report-errors.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar Queue = __webpack_require__(/*! ../internals/queue */ \"./node_modules/core-js/internals/queue.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js/internals/promise-native-constructor.js\");\nvar PromiseConstructorDetection = __webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js/internals/promise-constructor-detection.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nvar PROMISE = 'Promise';\nvar FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;\nvar NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;\nvar NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar setInternalState = InternalStateModule.set;\nvar NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;\nvar PromiseConstructor = NativePromiseConstructor;\nvar PromisePrototype = NativePromisePrototype;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\n\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\n\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && isCallable(then = it.then) ? then : false;\n};\n\nvar callReaction = function (reaction, state) {\n  var value = state.value;\n  var ok = state.state === FULFILLED;\n  var handler = ok ? reaction.ok : reaction.fail;\n  var resolve = reaction.resolve;\n  var reject = reaction.reject;\n  var domain = reaction.domain;\n  var result, then, exited;\n  try {\n    if (handler) {\n      if (!ok) {\n        if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n        state.rejection = HANDLED;\n      }\n      if (handler === true) result = value;\n      else {\n        if (domain) domain.enter();\n        result = handler(value); // can throw\n        if (domain) {\n          domain.exit();\n          exited = true;\n        }\n      }\n      if (result === reaction.promise) {\n        reject(TypeError('Promise-chain cycle'));\n      } else if (then = isThenable(result)) {\n        call(then, result, resolve, reject);\n      } else resolve(result);\n    } else reject(value);\n  } catch (error) {\n    if (domain && !exited) domain.exit();\n    reject(error);\n  }\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  microtask(function () {\n    var reactions = state.reactions;\n    var reaction;\n    while (reaction = reactions.get()) {\n      callReaction(reaction, state);\n    }\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  call(task, global, function () {\n    var promise = state.facade;\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          call(then, value,\n            bind(internalResolve, wrapper, state),\n            bind(internalReject, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({ done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED_PROMISE_CONSTRUCTOR) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromisePrototype);\n    aCallable(executor);\n    call(Internal, this);\n    var state = getInternalPromiseState(this);\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  };\n\n  PromisePrototype = PromiseConstructor.prototype;\n\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: new Queue(),\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n\n  // `Promise.prototype.then` method\n  // https://tc39.es/ecma262/#sec-promise.prototype.then\n  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {\n    var state = getInternalPromiseState(this);\n    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n    state.parent = true;\n    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;\n    reaction.fail = isCallable(onRejected) && onRejected;\n    reaction.domain = IS_NODE ? process.domain : undefined;\n    if (state.state === PENDING) state.reactions.add(reaction);\n    else microtask(function () {\n      callReaction(reaction, state);\n    });\n    return reaction.promise;\n  });\n\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalPromiseState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {\n    nativeThen = NativePromisePrototype.then;\n\n    if (!NATIVE_PROMISE_SUBCLASSING) {\n      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs\n      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {\n        var that = this;\n        return new PromiseConstructor(function (resolve, reject) {\n          call(nativeThen, that, resolve, reject);\n        }).then(onFulfilled, onRejected);\n      // https://github.com/zloirock/core-js/issues/640\n      }, { unsafe: true });\n    }\n\n    // make `.constructor === Promise` work for native promise-based APIs\n    try {\n      delete NativePromisePrototype.constructor;\n    } catch (error) { /* empty */ }\n\n    // make `instanceof Promise` work for native promise-based APIs\n    if (setPrototypeOf) {\n      setPrototypeOf(NativePromisePrototype, PromisePrototype);\n    }\n  }\n}\n\n$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// TODO: Remove this module from `core-js@4` since it's split to modules listed below\n__webpack_require__(/*! ../modules/es.promise.constructor */ \"./node_modules/core-js/modules/es.promise.constructor.js\");\n__webpack_require__(/*! ../modules/es.promise.all */ \"./node_modules/core-js/modules/es.promise.all.js\");\n__webpack_require__(/*! ../modules/es.promise.catch */ \"./node_modules/core-js/modules/es.promise.catch.js\");\n__webpack_require__(/*! ../modules/es.promise.race */ \"./node_modules/core-js/modules/es.promise.race.js\");\n__webpack_require__(/*! ../modules/es.promise.reject */ \"./node_modules/core-js/modules/es.promise.reject.js\");\n__webpack_require__(/*! ../modules/es.promise.resolve */ \"./node_modules/core-js/modules/es.promise.resolve.js\");\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.race.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.race.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js/internals/a-callable.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\nvar PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ \"./node_modules/core-js/internals/promise-statics-incorrect-iteration.js\");\n\n// `Promise.race` method\n// https://tc39.es/ecma262/#sec-promise.race\n$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aCallable(C.resolve);\n      iterate(iterable, function (promise) {\n        call($promiseResolve, C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.race.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.reject.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.reject.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js/internals/promise-constructor-detection.js\").CONSTRUCTOR);\n\n// `Promise.reject` method\n// https://tc39.es/ecma262/#sec-promise.reject\n$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {\n  reject: function reject(r) {\n    var capability = newPromiseCapabilityModule.f(this);\n    call(capability.reject, undefined, r);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.reject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.resolve.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.resolve.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ \"./node_modules/core-js/internals/promise-native-constructor.js\");\nvar FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(/*! ../internals/promise-constructor-detection */ \"./node_modules/core-js/internals/promise-constructor-detection.js\").CONSTRUCTOR);\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\n\nvar PromiseConstructorWrapper = getBuiltIn('Promise');\nvar CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;\n\n// `Promise.resolve` method\n// https://tc39.es/ecma262/#sec-promise.resolve\n$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {\n  resolve: function resolve(x) {\n    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.promise.resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ \"./node_modules/core-js/internals/function-name.js\").PROPER);\nvar defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ \"./node_modules/core-js/internals/define-built-in.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar $toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ \"./node_modules/core-js/internals/regexp-get-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar nativeToString = RegExpPrototype[TO_STRING];\n\nvar NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });\n// FF44- RegExp#toString has a wrong name\nvar INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;\n\n// `RegExp.prototype.toString` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.tostring\nif (NOT_GENERIC || INCORRECT_NAME) {\n  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var pattern = $toString(R.source);\n    var flags = $toString(getRegExpFlags(R));\n    return '/' + pattern + '/' + flags;\n  }, { unsafe: true });\n}\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js/internals/function-uncurry-this-clause.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\n// eslint-disable-next-line es/no-string-prototype-endswith -- safe\nvar nativeEndsWith = uncurryThis(''.endsWith);\nvar slice = uncurryThis(''.slice);\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.endsWith` method\n// https://tc39.es/ecma262/#sec-string.prototype.endswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = toString(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = that.length;\n    var end = endPosition === undefined ? len : min(toLength(endPosition), len);\n    var search = toString(searchString);\n    return nativeEndsWith\n      ? nativeEndsWith(that, search, end)\n      : slice(that, end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\nvar stringIndexOf = uncurryThis(''.indexOf);\n\n// `String.prototype.includes` method\n// https://tc39.es/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~stringIndexOf(\n      toString(requireObjectCoercible(this)),\n      toString(notARegExp(searchString)),\n      arguments.length > 1 ? arguments[1] : undefined\n    );\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@match logic\nfixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.es/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = requireObjectCoercible(this);\n      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);\n      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match\n    function (string) {\n      var rx = anObject(this);\n      var S = toString(string);\n      var res = maybeCallNative(nativeMatch, rx, S);\n\n      if (res.done) return res.value;\n\n      if (!rx.global) return regExpExec(rx, S);\n\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = toString(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js/internals/is-callable.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ \"./node_modules/core-js/internals/to-integer-or-infinity.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ \"./node_modules/core-js/internals/get-substitution.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar REPLACE = wellKnownSymbol('replace');\nvar max = Math.max;\nvar min = Math.min;\nvar concat = uncurryThis([].concat);\nvar push = uncurryThis([].push);\nvar stringIndexOf = uncurryThis(''.indexOf);\nvar stringSlice = uncurryThis(''.slice);\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\n// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n  return false;\n})();\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {\n  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';\n\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.es/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);\n      return replacer\n        ? call(replacer, searchValue, O, replaceValue)\n        : call(nativeReplace, toString(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace\n    function (string, replaceValue) {\n      var rx = anObject(this);\n      var S = toString(string);\n\n      if (\n        typeof replaceValue == 'string' &&\n        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&\n        stringIndexOf(replaceValue, '$<') === -1\n      ) {\n        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);\n        if (res.done) return res.value;\n      }\n\n      var functionalReplace = isCallable(replaceValue);\n      if (!functionalReplace) replaceValue = toString(replaceValue);\n\n      var global = rx.global;\n      var fullUnicode;\n      if (global) {\n        fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n\n      var results = [];\n      var result;\n      while (true) {\n        result = regExpExec(rx, S);\n        if (result === null) break;\n\n        push(results, result);\n        if (!global) break;\n\n        var matchStr = toString(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = toString(result[0]);\n        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);\n        var captures = [];\n        var replacement;\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = concat([matched], captures, position, S);\n          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);\n          replacement = toString(apply(replaceValue, undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n\n      return accumulatedResult + stringSlice(S, nextSourcePosition);\n    }\n  ];\n}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js/internals/function-apply.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js/internals/function-call.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js/internals/function-uncurry-this.js\");\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ \"./node_modules/core-js/internals/is-null-or-undefined.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js/internals/get-method.js\");\nvar arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ \"./node_modules/core-js/internals/array-slice-simple.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\nvar MAX_UINT32 = 0xFFFFFFFF;\nvar min = Math.min;\nvar $push = [].push;\nvar exec = uncurryThis(/./.exec);\nvar push = uncurryThis($push);\nvar stringSlice = uncurryThis(''.slice);\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  // eslint-disable-next-line regexp/no-empty-group -- required for testing\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] === 'c' ||\n    // eslint-disable-next-line regexp/no-empty-group -- required for testing\n    'test'.split(/(?:)/, -1).length !== 4 ||\n    'ab'.split(/(?:ab)*/).length !== 2 ||\n    '.'.split(/(.?)(.?)/).length !== 4 ||\n    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = toString(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return call(nativeSplit, string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = call(regexpExec, separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          push(output, stringSlice(string, lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !exec(separatorCopy, '')) push(output, '');\n      } else push(output, stringSlice(string, lastLastIndex));\n      return output.length > lim ? arraySlice(output, 0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.es/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);\n      return splitter\n        ? call(splitter, separator, O, limit)\n        : call(internalSplit, toString(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (string, limit) {\n      var rx = anObject(this);\n      var S = toString(string);\n      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);\n\n      if (res.done) return res.value;\n\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (UNSUPPORTED_Y ? 'g' : 'y');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;\n        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          push(A, stringSlice(S, p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            push(A, z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      push(A, stringSlice(S, p));\n      return A;\n    }\n  ];\n}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ \"./node_modules/core-js/internals/function-uncurry-this-clause.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toString = __webpack_require__(/*! ../internals/to-string */ \"./node_modules/core-js/internals/to-string.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\n// eslint-disable-next-line es/no-string-prototype-startswith -- safe\nvar nativeStartsWith = uncurryThis(''.startsWith);\nvar stringSlice = uncurryThis(''.slice);\nvar min = Math.min;\n\nvar CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');\n// https://github.com/zloirock/core-js/pull/702\nvar MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {\n  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');\n  return descriptor && !descriptor.writable;\n}();\n\n// `String.prototype.startsWith` method\n// https://tc39.es/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = toString(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = toString(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith(that, search, index)\n      : stringSlice(that, index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\nvar forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ \"./node_modules/core-js/internals/string-trim-forced.js\");\n\n// `String.prototype.trim` method\n// https://tc39.es/ecma262/#sec-string.prototype.trim\n$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {\n  trim: function trim() {\n    return $trim(this);\n  }\n});\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/es.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nvar handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);\n}\n\nhandlePrototype(DOMTokenListPrototype, 'DOMTokenList');\n\n\n//# sourceURL=webpack://matrix-config/./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ })

}]);