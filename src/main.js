import FilterHelper from './filterHelper.js';
import { generateSku } from './skuGeneration.js';
import { rules } from './rules.js';
import { matchesCombination } from './utils.js';
import { initializeReset } from './reset.js';
import { showHideSizesBasedOffStyle } from './utils.js';

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
  form.find('input[type="text"]').each(function() {
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

  console.log('Selected Options:', selectedOptions); // Debugging line
  return selectedOptions;
}


function updateSelectedOptionsDisplay(filterInstances) {
  // Access the filtersData array
  const filtersData = filterInstances[0].filtersData;

  // Iterate through the filtersData array and access the selected tags (values)
  filtersData.forEach((filter) => {
    // Access the originalFilterKeys array, which contains the category names
    const originalFilterKeys = filter.originalFilterKeys;

    // Access the values (selected tags) for each filter
    const values = Array.from(filter.values);

    // Iterate through the originalFilterKeys and values
    originalFilterKeys.forEach((key, index) => {
      // Find the associated .selected-option element using the filter-target attribute
      const selectedOptionElement = $(`.selected-option[filter-target="${key}"]`);

      // Render the selected tag to the .selected-option element
      if (selectedOptionElement) {
        selectedOptionElement.text(values[index] || ''); // If the value is cleared, set an empty string
        selectedOptionElement.css('display', values[index] ? 'block' : 'none'); // Hide if the value is cleared
      }
    });
  });
}



function updateConfigurator() {
  const selectedOptions = getSelectedOptions();
  console.log('Selected Options in updateConfigurator:', selectedOptions); // Debugging line
  applyRules(selectedOptions, rules);
  generateSku(selectedOptions);

  showHideSizesBasedOffStyle(selectedOptions);

  
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
    console.log('cmsfilter Successfully loaded!');

    // The `renderitems` event runs whenever the list renders items after filtering.
    filterInstances[0].listInstance.on('renderitems', () => {
      updateSelectedOptionsDisplay(filterInstances);
    });
  },
]);

initializeReset();




