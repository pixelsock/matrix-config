/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/products-page.js":
/*!******************************!*\
  !*** ./src/products-page.js ***!
  \******************************/
/***/ (() => {

eval("$(document).ready(function () {\n  // Function to update the display text based on selected options for a specific dropdown\n  function updateSelectedOptionsDisplay(dropdownId, displayId) {\n    var selectedOptions = [];\n    $(\"#\".concat(dropdownId, \" .filters5_form-checkbox1 input:checked\")).each(function () {\n      var label = $(this).siblings('span').text();\n      selectedOptions.push(label);\n    });\n    var displayText;\n    if (selectedOptions.length === 1) {\n      displayText = selectedOptions[0];\n    } else if (selectedOptions.length > 1) {\n      displayText = 'Multiple Selections';\n    } else {\n      displayText = 'Select...';\n    }\n    $(\"#\".concat(displayId)).text(displayText);\n  }\n\n  // Add a change event listener to the checkboxes for the first dropdown\n  $('#w-dropdown-list-2 .filters5_form-checkbox1 input').on('change', function () {\n    updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');\n  });\n\n  // Add a change event listener to the checkboxes for the second dropdown\n  $('#w-dropdown-list-3 .filters5_form-checkbox1 input').on('change', function () {\n    updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');\n  });\n\n  // Initial update for both dropdowns\n  updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');\n  updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');\n});\n\n//# sourceURL=webpack://matrix-config/./src/products-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/products-page.js"]();
/******/ 	
/******/ })()
;