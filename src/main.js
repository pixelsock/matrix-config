// DEVELOPMENT BUILD - Updated 2025-01-08 15:39
import FilterHelper from './filterHelper.js';
import { generateSku } from './skuGeneration.js';
import { rules } from './rules.js';
import { matchesCombination } from './utils.js';
import { initializeReset } from './reset.js';
import { showHideSizesBasedOffStyle, forSubmissionSkuAndQuantity, updateOrientation } from './utils.js';
import { generatePdf } from './pdfGenerator.js';
import { generatePolishedPdf } from './polishedPdfGenerator.js';
import { generateSuspendedPdf } from './suspendedPdfGenerator.js';

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


function updateAccessoriesDisplay(selectedOptionElement, options, selectedOptions) {
  const {
    isMatrixTouchSystemSelected,
    isTouchSensorSelected,
    isNightLightSelected,
    isAntiFogSelected,
    isCCTSyncSelected,
    values
  } = options;

  if (isMatrixTouchSystemSelected) {
    return updateMatrixTouchSystem(selectedOptionElement, isNightLightSelected, selectedOptions);
  }

  if (isTouchSensorSelected) {
    return updateTouchSensor(selectedOptionElement, isAntiFogSelected, isNightLightSelected, selectedOptions);
  }

  if (isCCTSyncSelected) {
    return updateCCTSync(selectedOptionElement, isAntiFogSelected, isNightLightSelected, selectedOptions);
  }

  return updateStandardAccessories(selectedOptionElement, values, selectedOptions);
}

function updateMatrixTouchSystem(element, isNightLightSelected, selectedOptions) {
  const text = isNightLightSelected
    ? 'Matrix Touch System & Night Light (TL)'
    : 'Matrix Touch System (TR)';
  updateSelectedOption(element, text, selectedOptions);
}

function updateTouchSensor(element, isAntiFogSelected, isNightLightSelected, selectedOptions) {
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
  updateSelectedOption(element, text, selectedOptions);
}

function updateCCTSync(element, isAntiFogSelected, isNightLightSelected, selectedOptions) {
  let text;
  if (isAntiFogSelected && isNightLightSelected) {
    text = 'CCTSync Anti-Fog & Night Light (CL)';
  } else if (isNightLightSelected) {
    text = 'CCTSync & Night Light (CN)';
  } else if (isAntiFogSelected) {
    text = 'CCTSync & Anti-Fog (CF)';
  } else {
    text = 'CCTSync (CT)';
  }
  updateSelectedOption(element, text, selectedOptions);
} 

function updateStandardAccessories(element, values, selectedOptions) {
  const selectedAccessories = values.filter(value => 
    value === 'Anti-Fog (AF)' || value === 'Night Light (NL)'
  );
  const text = selectedAccessories.length > 1
    ? 'Anti-Fogs & Night Light (AN)'
    : values[values.length - 1] || 'Wall Switch Only (NA)';
  updateSelectedOption(element, text, selectedOptions);
}

// Main function
function updateSelectedOptionsDisplay(filterInstances) {
  // Test comment for development branch
  const filtersData = filterInstances[0].filtersData;
  let options = {
    isMatrixTouchSystemSelected: false,
    isTouchSensorSelected: false,
    isAntiFogSelected: false,
    isNightLightSelected: false,
    isCCTSyncSelected: false,
    values: []
  };

  const selectedOptions = getSelectedOptions();

  filtersData.forEach((filter) => {
    const originalFilterKeys = filter.originalFilterKeys;
    const values = Array.from(filter.values);

    // Update options based on all filters
    options.isMatrixTouchSystemSelected = options.isMatrixTouchSystemSelected || values.includes('Matrix Touch System');
    options.isTouchSensorSelected = options.isTouchSensorSelected || values.includes('Touch Sensor - Light Controls Only');
    options.isAntiFogSelected = options.isAntiFogSelected || values.includes('Anti-Fog (AF)');
    options.isNightLightSelected = options.isNightLightSelected || values.includes('Night Light (NL)');
    options.isCCTSyncSelected = options.isCCTSyncSelected || values.includes('CCTSync');
    options.values = [...options.values, ...values];

    originalFilterKeys.forEach((key) => {
      if (key === 'Driver') {
        key = "Dimming"
      }
      // Handle Hanging Technique
      if (key === 'Hanging Techniques') {
        const selectedOptionElement = $(`.selected-option[filter-target="Hanging Techniques"]`);
        updateSelectedOption(selectedOptionElement, values[values.length - 1] || '', selectedOptions);
      } else if (key === 'Accessories' || key === 'Mirror Controls') {
        const selectedOptionElement = $(`.selected-option[filter-target="${key}"]`);
        updateAccessoriesDisplay(selectedOptionElement, options, selectedOptions);
      } else {
        const selectedOptionElement = $(`.selected-option[filter-target="${key}"]`);
        updateSelectedOption(selectedOptionElement, values[values.length - 1] || '', selectedOptions);
      }
    });
  });
}

function updateSelectedOption(selectedOptionElement, text, selectedOptions) {
  if (selectedOptionElement) {
    const filterTarget = selectedOptionElement.attr('filter-target');
    
    // Check if the filter target is 'Accessories'
    if (filterTarget === 'Accessories') {
      // If 'Accessories' is not in the selected options, clear the text
      if (!selectedOptions.some(option => option.dataName === 'Accessories' || option.dataName === 'Mirror Controls')) {
        selectedOptionElement.text('');
        selectedOptionElement.css('display', 'none');
        return;
      }
    }

    // if selectedOptionElement is just numbers, add a double quote to the end
    if (filterTarget === 'Width' && !isNaN(text) && text !== '' && text !== null) {
      selectedOptionElement.text(text ? text + '" x' : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    } else if (filterTarget === 'Height' && !isNaN(text) && text !== '' && text !== null) {
      selectedOptionElement.text(text ? text + '"' : '');
      selectedOptionElement.css('display', text ? 'block' : 'none');
    } else if (filterTarget === 'Diameter' && !isNaN(text) && text !== '' && text !== null) {
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
  updateOrientation(selectedOptions); // Add this line
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

  // Add these lines after your existing event listeners
  $('#Width, #Height').on('input', function() {
    updateConfigurator();
    updateOrientation(getSelectedOptions()); // Add this line
  });
  $('#Custom-Size-Checkbox').on('change', function() {
    updateConfigurator();
    updateOrientation(getSelectedOptions()); // Add this line
  });
});

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsfilter',
  (filterInstances) => {
    // The `renderitems` event runs whenever the list renders items after filtering.
    filterInstances[0].listInstance.on('renderitems', () => {
      updateSelectedOptionsDisplay(filterInstances);
      showLoaderAndFadeInContent(1000);
    });
  },
]);

initializeReset();

document.addEventListener('DOMContentLoaded', function() {
  
});

function showLoaderAndFadeInContent(timeout) {
  // hide product collection and show loader for 3 seconds
  $('#loader').show();
  $('#product-collection').hide();
  $('#tag-wrapper').hide();
  setTimeout(function() {
    $('#loader').hide();
    $('#product-collection').fadeIn(600); // Add fade in animation
    $('#tag-wrapper').fadeIn(400); // Add fade in animation
  }, timeout);
}

$(document).ready(function() {
 
showLoaderAndFadeInContent(5000);

  // Add a submit event listener to the Request-A-Quote form
  $('#wf-form-Request-A-Quote').on('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Log form submission
    console.log('Form submitted');

    // Call the appropriate PDF generation function based on product line
    const selectedOptions = getSelectedOptions();
    const productLine = $('#product-line').text();
    console.log('Selected options:', selectedOptions);
    
    if (productLine.includes('Polished')) {
      generatePolishedPdf(selectedOptions, 'save');
    } else if (productLine.includes('Suspended')) {
      generateSuspendedPdf(selectedOptions, 'save');
    } else {
      generatePdf(selectedOptions, 'save');
    }
  });
  
  $('#download-button').on('click', function() {
    const selectedOptions = getSelectedOptions();
    const productLine = $('#product-line').text();
    console.log('Download button clicked');
    console.log('Selected options:', selectedOptions);
    
    if (productLine.includes('Polished')) {
      generatePolishedPdf(selectedOptions, 'newWindow');
    } else if (productLine.includes('Suspended')) {
      generateSuspendedPdf(selectedOptions, 'newWindow');
    } else {
      generatePdf(selectedOptions, 'newWindow');
    }
    // break so it only runs once
    return false;
  });

});