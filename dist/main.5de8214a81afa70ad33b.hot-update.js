"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatematrix_config"]("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSelectedOptions: () => (/* binding */ getSelectedOptions)\n/* harmony export */ });\n/* harmony import */ var _filterHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterHelper.js */ \"./src/filterHelper.js\");\n/* harmony import */ var _skuGeneration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skuGeneration.js */ \"./src/skuGeneration.js\");\n/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules.js */ \"./src/rules.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.js */ \"./src/reset.js\");\n/* harmony import */ var _pdfGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdfGenerator.js */ \"./src/pdfGenerator.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n\n\nfunction getSelectedOptions() {\n  alert('getSelectedOptions called');\n  var form = $('#full-filter-form');\n  var selectedOptions = [];\n\n  // Handle radio inputs\n  form.find('input[type=\"radio\"]:checked').each(function () {\n    var id = $(this).attr('id');\n    var value = $(this).val();\n    var dataName = $(this).attr('data-name');\n    selectedOptions.push({\n      id: id,\n      value: value,\n      dataName: dataName\n    });\n  });\n\n  // Handle checkbox inputs (special handling for Accessories)\n  form.find('input[type=\"checkbox\"]:checked').each(function () {\n    var id = $(this).attr('id');\n    var value = $(this).attr('id'); // Use an empty string if the value is falsy\n    var dataName = $(this).attr('data-name');\n    selectedOptions.push({\n      id: id,\n      value: value,\n      dataName: dataName\n    });\n  });\n\n  // Handle text inputs\n  form.find('input[type=\"text\"], input[type=\"number\"]').each(function () {\n    var id = $(this).attr('id');\n    var value = $(this).val() || ''; // Use an empty string if the value is falsy\n    var dataName = $(this).attr('data-name');\n    selectedOptions.push({\n      id: id,\n      value: value,\n      dataName: dataName\n    });\n  });\n\n  // Handle select elements\n  form.find('select').each(function () {\n    var id = $(this).attr('id');\n    var value = $(this).find('option:selected').text();\n    var dataName = $(this).attr('data-name');\n    selectedOptions.push({\n      id: id,\n      value: value,\n      dataName: dataName\n    });\n  });\n  console.log(selectedOptions);\n  return selectedOptions;\n}\nfunction updateAccessoriesDisplay(selectedOptionElement, options, selectedOptions) {\n  var isMatrixTouchSystemSelected = options.isMatrixTouchSystemSelected,\n    isTouchSensorSelected = options.isTouchSensorSelected,\n    isNightLightSelected = options.isNightLightSelected,\n    isAntiFogSelected = options.isAntiFogSelected,\n    isCCTSyncSelected = options.isCCTSyncSelected,\n    values = options.values;\n  if (isMatrixTouchSystemSelected) {\n    return updateMatrixTouchSystem(selectedOptionElement, isNightLightSelected, selectedOptions);\n  }\n  if (isTouchSensorSelected) {\n    return updateTouchSensor(selectedOptionElement, isAntiFogSelected, isNightLightSelected, selectedOptions);\n  }\n  if (isCCTSyncSelected) {\n    return updateCCTSync(selectedOptionElement, isAntiFogSelected, isNightLightSelected, selectedOptions);\n  }\n  return updateStandardAccessories(selectedOptionElement, values, selectedOptions);\n}\nfunction updateMatrixTouchSystem(element, isNightLightSelected, selectedOptions) {\n  var text = isNightLightSelected ? 'Matrix Touch System & Night Light (TL)' : 'Matrix Touch System (TR)';\n  updateSelectedOption(element, text, selectedOptions);\n}\nfunction updateTouchSensor(element, isAntiFogSelected, isNightLightSelected, selectedOptions) {\n  var text;\n  if (isAntiFogSelected && isNightLightSelected) {\n    text = 'All Accessories (AL)';\n  } else if (isNightLightSelected) {\n    text = 'Night Light & Touch Sensor (NT)';\n  } else if (isAntiFogSelected) {\n    text = 'Anti-Fog & Touch Sensor (AT)';\n  } else {\n    text = 'Touch Sensor (TS)';\n  }\n  updateSelectedOption(element, text, selectedOptions);\n}\nfunction updateCCTSync(element, isAntiFogSelected, isNightLightSelected, selectedOptions) {\n  var text;\n  if (isAntiFogSelected && isNightLightSelected) {\n    text = 'CCTSync Anti-Fog & Night Light (CL)';\n  } else if (isNightLightSelected) {\n    text = 'CCTSync & Night Light (CN)';\n  } else if (isAntiFogSelected) {\n    text = 'CCTSync & Anti-Fog (CF)';\n  } else {\n    text = 'CCTSync (CT)';\n  }\n  updateSelectedOption(element, text, selectedOptions);\n}\nfunction updateStandardAccessories(element, values, selectedOptions) {\n  var selectedAccessories = values.filter(function (value) {\n    return value === 'Anti-Fog (AF)' || value === 'Night Light (NL)';\n  });\n  var text = selectedAccessories.length > 1 ? 'Anti-Fogs & Night Light (AN)' : values[values.length - 1] || 'Wall Switch Only (NA)';\n  updateSelectedOption(element, text, selectedOptions);\n}\n\n// Main function\nfunction updateSelectedOptionsDisplay(filterInstances) {\n  var filtersData = filterInstances[0].filtersData;\n  var options = {\n    isMatrixTouchSystemSelected: false,\n    isTouchSensorSelected: false,\n    isAntiFogSelected: false,\n    isNightLightSelected: false,\n    isCCTSyncSelected: false,\n    values: []\n  };\n  var selectedOptions = getSelectedOptions();\n  filtersData.forEach(function (filter) {\n    var originalFilterKeys = filter.originalFilterKeys;\n    var values = Array.from(filter.values);\n\n    // Update options based on all filters\n    options.isMatrixTouchSystemSelected = options.isMatrixTouchSystemSelected || values.includes('Matrix Touch System');\n    options.isTouchSensorSelected = options.isTouchSensorSelected || values.includes('Touch Sensor - Light Controls Only');\n    options.isAntiFogSelected = options.isAntiFogSelected || values.includes('Anti-Fog (AF)');\n    options.isNightLightSelected = options.isNightLightSelected || values.includes('Night Light (NL)');\n    options.isCCTSyncSelected = options.isCCTSyncSelected || values.includes('CCTSync');\n    options.values = [].concat(_toConsumableArray(options.values), values);\n    originalFilterKeys.forEach(function (key) {\n      if (key === 'Driver') {\n        key = \"Dimming\";\n      }\n      // Handle Hanging Technique\n      if (key === 'Hanging Techniques') {\n        var selectedOptionElement = $(\".selected-option[filter-target=\\\"Hanging Techniques\\\"]\");\n        updateSelectedOption(selectedOptionElement, values[values.length - 1] || '', selectedOptions);\n      } else if (key === 'Accessories' || key === 'Mirror Controls') {\n        var _selectedOptionElement = $(\".selected-option[filter-target=\\\"\".concat(key, \"\\\"]\"));\n        updateAccessoriesDisplay(_selectedOptionElement, options, selectedOptions);\n      } else {\n        var _selectedOptionElement2 = $(\".selected-option[filter-target=\\\"\".concat(key, \"\\\"]\"));\n        updateSelectedOption(_selectedOptionElement2, values[values.length - 1] || '', selectedOptions);\n      }\n    });\n  });\n}\nfunction updateSelectedOption(selectedOptionElement, text, selectedOptions) {\n  if (selectedOptionElement) {\n    var filterTarget = selectedOptionElement.attr('filter-target');\n\n    // Check if the filter target is 'Accessories'\n    if (filterTarget === 'Accessories') {\n      // If 'Accessories' is not in the selected options, clear the text\n      if (!selectedOptions.some(function (option) {\n        return option.dataName === 'Accessories' || option.dataName === 'Mirror Controls';\n      })) {\n        selectedOptionElement.text('');\n        selectedOptionElement.css('display', 'none');\n        return;\n      }\n    }\n\n    // if selectedOptionElement is just numbers, add a double quote to the end\n    if (filterTarget === 'Width' && !isNaN(text) && text !== '' && text !== null) {\n      selectedOptionElement.text(text ? text + '\" x' : '');\n      selectedOptionElement.css('display', text ? 'block' : 'none');\n    } else if (filterTarget === 'Height' && !isNaN(text) && text !== '' && text !== null) {\n      selectedOptionElement.text(text ? text + '\"' : '');\n      selectedOptionElement.css('display', text ? 'block' : 'none');\n    } else if (filterTarget === 'Diameter' && !isNaN(text) && text !== '' && text !== null) {\n      selectedOptionElement.text(text ? text + '\" Diameter' : '');\n      selectedOptionElement.css('display', text ? 'block' : 'none');\n    } else {\n      selectedOptionElement.text(text ? text : '');\n      selectedOptionElement.css('display', text ? 'block' : 'none');\n    }\n  }\n}\nfunction updateConfigurator() {\n  var selectedOptions = getSelectedOptions();\n  (0,_skuGeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateSku)(selectedOptions); // Generate the SKU this has to be called before apply rules. \n\n  applyRules(selectedOptions, _rules_js__WEBPACK_IMPORTED_MODULE_2__.rules);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.showHideSizesBasedOffStyle)(selectedOptions);\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.updateOrientation)(selectedOptions); // Add this line\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.forSubmissionSkuAndQuantity)();\n}\nfunction applyRules(selectedOptions, rules) {\n  Object.entries(rules).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n      ruleKey = _ref2[0],\n      ruleValue = _ref2[1];\n    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.matchesCombination)(selectedOptions, ruleKey)) {\n      _filterHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].disableOptions(ruleValue.disable);\n      _filterHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableOptions(ruleValue.enable);\n      _filterHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableAndClickOptions(ruleValue.showAndClick);\n    }\n  });\n}\n$(document).ready(function () {\n  var form = $('#full-filter-form');\n  form.on('change', 'input, select', updateConfigurator);\n\n  // Initial update\n  updateConfigurator();\n\n  // Add these lines after your existing event listeners\n  $('#Width, #Height').on('input', function () {\n    updateConfigurator();\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.updateOrientation)(getSelectedOptions()); // Add this line\n  });\n\n  $('#Custom-Size-Checkbox').on('change', function () {\n    updateConfigurator();\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.updateOrientation)(getSelectedOptions()); // Add this line\n  });\n});\n\nwindow.fsAttributes = window.fsAttributes || [];\nwindow.fsAttributes.push(['cmsfilter', function (filterInstances) {\n  // The `renderitems` event runs whenever the list renders items after filtering.\n  filterInstances[0].listInstance.on('renderitems', function () {\n    updateSelectedOptionsDisplay(filterInstances);\n    showLoaderAndFadeInContent(1000);\n  });\n}]);\n(0,_reset_js__WEBPACK_IMPORTED_MODULE_4__.initializeReset)();\ndocument.addEventListener('DOMContentLoaded', function () {});\nfunction showLoaderAndFadeInContent(timeout) {\n  // hide product collection and show loader for 3 seconds\n  $('#loader').show();\n  $('#product-collection').hide();\n  $('#tag-wrapper').hide();\n  setTimeout(function () {\n    $('#loader').hide();\n    $('#product-collection').fadeIn(600); // Add fade in animation\n    $('#tag-wrapper').fadeIn(400); // Add fade in animation\n  }, timeout);\n}\n$(document).ready(function () {\n  showLoaderAndFadeInContent(5000);\n\n  // Add a submit event listener to the Request-A-Quote form\n  $('#wf-form-Request-A-Quote').on('submit', function (event) {\n    event.preventDefault(); // Prevent the form from submitting normally\n\n    // Log form submission\n    console.log('Form submitted');\n\n    // Call the PDF generation function with the selected options\n    var selectedOptions = getSelectedOptions();\n    console.log('Selected options:', selectedOptions);\n    (0,_pdfGenerator_js__WEBPACK_IMPORTED_MODULE_5__.generatePdf)(selectedOptions, 'save');\n  });\n  $('#download-button').on('click', function () {\n    var selectedOptions = getSelectedOptions();\n    console.log('Download button clicked');\n    console.log('Selected options:', selectedOptions);\n    (0,_pdfGenerator_js__WEBPACK_IMPORTED_MODULE_5__.generatePdf)(selectedOptions, 'newWindow'); // Call the PDF generation function\n    // break so it only runs once\n    return false;\n  });\n});\n\n//# sourceURL=webpack://matrix-config/./src/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9558f68706f37a16c840")
/******/ })();
/******/ 
/******/ }
);