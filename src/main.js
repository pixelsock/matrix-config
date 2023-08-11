import FilterHelper from './filterHelper.js';
import { generateSku } from './skuGeneration.js';
import { rules } from './rules.js';
import { matchesCombination } from './utils.js';

function getSelectedOptions() {
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


function updateSelectedOptionsDisplay(selectedOptions) {
  // Clear all displayed selected options
  $('.selected-option').text('').css('display', 'none');

  selectedOptions.forEach(option => {
    const inputElement = $(`#${option.id}`);
    const categoryDiv = inputElement.closest('.filters1_filter-group');
    const selectedOptionValue = option.value;

    // Determine the filter target based on the input element's name or data-name attribute
    const filterTarget = inputElement.attr('data-name');

    // Find the .selected-option element with the matching filter target, update its text, and make it visible
    const selectedOptionDiv = categoryDiv.find(`.selected-option[filter-target="${filterTarget}"]`);
    selectedOptionDiv.text(selectedOptionValue);
    selectedOptionDiv.css('display', 'block'); // Make it visible
  });
}




function updateConfigurator() {
  const selectedOptions = getSelectedOptions();
  console.log('Selected Options in updateConfigurator:', selectedOptions); // Debugging line
  applyRules(selectedOptions, rules);
  updateSelectedOptionsDisplay(selectedOptions); // Update the display of selected options
  generateSku(selectedOptions);

  
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
  updateSelectedOptionsDisplay(getSelectedOptions()); // Pass selectedOptions here

form.on('change', 'input, select', updateConfigurator);

// Call this function whenever the selections change
 

  // Initial update
  updateConfigurator();
});



