import FilterHelper from './filterHelper.js';
import { generateSku } from './skuGeneration.js';
import { rules } from './rules.js';
import { matchesCombination } from './utils.js';
import { initializeReset } from './reset.js';
import { showHideSizesBasedOffStyle, forSubmissionSkuAndQuantity } from './utils.js';
import { generatePdf } from './pdfGenerator.js';

alert("test")


export function getSelectedOptions() {
  const form = $('#full-filter-form');
  const selectedOptions = [];

  // Handle radio inputs
  form.find('input[type="radio"]:checked').each(function() {
    const id = $(this).attr('id');
    const value = $(this).val();
    const dataName = $(this).attr('data-name');
    selectedOptions.push({ id, value, dataName });
  });

  // Handle checkbox inputs (special handling for Accessories)
  form.find('input[type="checkbox"]:checked').each(function() {
    const id = $(this).attr('id');
    const value = $(this).attr('id'); // Use an empty string if the value is falsy
    const dataName = $(this).attr('data-name');
    selectedOptions.push({ id, value, dataName });
  });

  // Handle text inputs
  form.find('input[type="text"], input[type="number"]').each(function() {
    const id = $(this).attr('id');
    const value = $(this).val() || ''; // Use an empty string if the value is falsy
    const dataName = $(this).attr('data-name');
    selectedOptions.push({ id, value, dataName });
  });

  // Handle select elements
  form.find('select').each(function() {
    const id = $(this).attr('id');
    const value = $(this).find('option:selected').text();
    const dataName = $(this).attr('data-name');
    selectedOptions.push({ id, value, dataName });
  });
console.log(selectedOptions);
  return selectedOptions;
}


function updateAccessoriesDisplay(selectedOptionElement, options) {
  const {
    isMatrixTouchSystemSelected,
    isTouchSensorSelected,
    isNightLightSelected,
    isAntiFogSelected,
    values
  } = options;

  if (isMatrixTouchSystemSelected) {
    return updateMatrixTouchSystem(selectedOptionElement, isNightLightSelected);
  }

  if (isTouchSensorSelected) {
    return updateTouchSensor(selectedOptionElement, isAntiFogSelected, isNightLightSelected);
  }

  return updateStandardAccessories(selectedOptionElement, values);
}

function updateMatrixTouchSystem(element, isNightLightSelected) {
  const text = isNightLightSelected
    ? 'Matrix Touch System & Night Light (TL)'
    : 'Matrix Touch System (TR)';
  updateSelectedOption(element, text);
}

function updateTouchSensor(element, isAntiFogSelected, isNightLightSelected) {
  let text;
  if (isAntiFogSelected && isNightLightSelected) {
    text = 'All Accessories (AL)';
  } else if (isNightLightSelected) {
    text = 'Night Light & Touch Sensor (NT)';
  } else if (isAntiFogSelected) {
    text = 'Anti-Fog & Touch Sensor (AT)';
  } else {
    text = 'Touch Sensor (TS)';
  }
  updateSelectedOption(element, text);
}

function updateStandardAccessories(element, values) {
  const selectedAccessories = values.filter(value => 
    value === 'Anti-Fog (AF)' || value === 'Night Light (NL)'
  );
  const text = selectedAccessories.length > 1
    ? 'Anti-Fogs & Night Light (AN)'
    : values[values.length - 1] || '';
  updateSelectedOption(element, text);
}

// Main function
function updateSelectedOptionsDisplay(filterInstances) {
  const filtersData = filterInstances[0].filtersData;
  let options = {
    isMatrixTouchSystemSelected: false,
    isTouchSensorSelected: false,
    isAntiFogSelected: false,
    isNightLightSelected: false,
    values: []
  };

  filtersData.forEach((filter) => {
    const originalFilterKeys = filter.originalFilterKeys;
    const values = Array.from(filter.values);

    // Update options based on all filters
    options.isMatrixTouchSystemSelected = options.isMatrixTouchSystemSelected || values.includes('Matrix Touch System');
    options.isTouchSensorSelected = options.isTouchSensorSelected || values.includes('Touch Sensor - Light Controls Only');
    options.isAntiFogSelected = options.isAntiFogSelected || values.includes('Anti-Fog (AF)');
    options.isNightLightSelected = options.isNightLightSelected || values.includes('Night Light (NL)');
    options.values = [...options.values, ...values];

    originalFilterKeys.forEach((key) => {
      if (key === 'Driver') {
        key = "Dimming"
      }
      const selectedOptionElement = $(`.selected-option[filter-target="${key}"]`);
      if (key === 'Accessories' || key === 'Mirror Controls') {
        updateAccessoriesDisplay(selectedOptionElement, options);
      } else {
        updateSelectedOption(selectedOptionElement, values[values.length - 1] || '');
      }
    });
  });
}

function updateSelectedOption(selectedOptionElement, text) {
  if (selectedOptionElement) {
    // if selectedOptionElement is just numbers, add a double quote to the end
    if (selectedOptionElement.attr('filter-target') === 'Width' && !isNaN(text) && text !== '' && text !== null) {
      selectedOptionElement.text(text ? text + '" x' : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    } else if (selectedOptionElement.attr('filter-target') === 'Height' && !isNaN(text) && text !== '' && text !== null) {
      selectedOptionElement.text(text ? text + '"' : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    } else if (selectedOptionElement.attr('filter-target') === 'Diameter' && !isNaN(text) && text !== '' && text !== null) {
      selectedOptionElement.text(text ? text + '" Diameter' : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    } else {
      selectedOptionElement.text(text ? text : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    }
  }
}

function updateConfigurator() {
  const selectedOptions = getSelectedOptions();
  generateSku(selectedOptions); // Generate the SKU this has to be called before apply rules. 

  applyRules(selectedOptions, rules);


  showHideSizesBasedOffStyle(selectedOptions);
  forSubmissionSkuAndQuantity();
  
}


function applyRules(selectedOptions, rules) {
  Object.entries(rules).forEach(([ruleKey, ruleValue]) => {
    if (matchesCombination(selectedOptions, ruleKey)) {
      FilterHelper.disableOptions(ruleValue.disable);
      FilterHelper.enableOptions(ruleValue.enable);
      FilterHelper.enableAndClickOptions(ruleValue.showAndClick);
    }
  });
}







$(document).ready(function() {
  const form = $('#full-filter-form');
  
  form.on('change', 'input, select', updateConfigurator);

  

  // Initial update
  updateConfigurator();


});

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsfilter',
  (filterInstances) => {
    // The `renderitems` event runs whenever the list renders items after filtering.
    filterInstances[0].listInstance.on('renderitems', () => {
      updateSelectedOptionsDisplay(filterInstances);
    });
  },
]);

initializeReset();

$(document).ready(function() {
 


  // Add a submit event listener to the Request-A-Quote form
  $('#wf-form-Request-A-Quote').on('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Call the PDF generation function with the selected options
    const selectedOptions = getSelectedOptions();
    generatePdf(selectedOptions, 'save');
  });
  
  $('#download-button').on('click', function() {
    const selectedOptions = getSelectedOptions();
  generatePdf(selectedOptions, 'newWindow'); // Call the PDF generation function
  // break so it only runs once
  return false;



});

}
);




