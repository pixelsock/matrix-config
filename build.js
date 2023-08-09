const FilterHelper = {
  disableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Found element with ID ${id}:`, element); // Add this line
      console.log(`Parent of element:`, element.parent()); // And this one
      element.parent().addClass('is-disabled');
      element.parent().removeClass('is-active');
      element.prop('disabled', true);
    });
  },
  
  
  enableAndClickOptions(optionIds) {
    if (!Array.isArray(optionIds)) {
      console.error('enableAndClickOptions: optionIds should be an array');
      return;
    }

    optionIds.forEach(id => {
      const element = $(`#${id}`);
      if (element.length === 0) {
        console.error(`enableAndClickOptions: No element found with ID ${id}`);
        return;
      }

      const filterGroup = element.parent();
      filterGroup.removeClass('is-disabled');
      filterGroup.addClass('is-active');
      element.prop('disabled', false);
      element.click();
    });
  },

  enableOptions(optionIds) {
    if (!Array.isArray(optionIds)) {
      console.error('enableOptions: optionIds should be an array');
      return;
    }

    optionIds.forEach(id => {
      const element = $(`#${id}`);
      if (element.length === 0) {
        console.error(`enableOptions: No element found with ID ${id}`);
        return;
      }

      const parentElement = element.parent();
      if (parentElement.length === 0) {
        console.error(`enableOptions: No parent element found for element with ID ${id}`);
        return;
      }

      if (!parentElement.hasClass('is-disabled')) {
        console.warn(`enableOptions: Parent element of ${id} does not have 'is-disabled' class`);
      }

      parentElement.removeClass('is-disabled');
      if (parentElement.hasClass('is-disabled')) {
        console.error(`enableOptions: Failed to remove 'is-disabled' class from parent element of ${id}`);
      }

      element.prop('disabled', false);
      if (element.prop('disabled')) {
        console.error(`enableOptions: Failed to enable element with ID ${id}`);
      }
    });
  },

  containsOption(selectedOptions, optionNames) {
    return optionNames.some(optionName =>
      selectedOptions.some(option => option.value === optionName)
    );
  },
  
  

  applyRules(selectedOptions, rules) {
    console.log('Applying rules with selected options:', selectedOptions);
  
    // Loop through all rules
    Object.entries(rules).forEach(([ruleKey, ruleValue]) => {
      console.log(`Checking rule: ${ruleKey}`); // Debug line
      console.log(`Rule value: ${JSON.stringify(ruleValue)}`); // Added debug line
      // Split the rule key by '&&', '||', or other separators if needed
      // and trim the resulting strings
      const ruleKeys = ruleKey.split(/\s*&&\s*|\s*\|\|\s*/).map(str => str.trim());
  
      console.log(`Rule keys: ${ruleKeys}`); // Added debug line

      // Check if the selected options contain the rule key
      if (this.containsOption(selectedOptions, ruleKeys)) {
        console.log(`Rule keys found in selected options: ${ruleKeys}`); // Added debug line

        // Then hide, enable, and show/click options as defined by the rule
        console.log(`Disabling options: ${ruleValue.disable}`); // Added debug line
        this.disableOptions(ruleValue.disable);
        console.log(`Enabling options: ${ruleValue.enable}`); // Added debug line
        this.enableOptions(ruleValue.enable);
        console.log(`Enabling and clicking options: ${ruleValue.showAndClick}`); // Added debug line
        this.enableAndClickOptions(ruleValue.showAndClick);
      } else {
        console.log(`Rule keys not found in selected options: ${ruleKeys}`); // Added debug line

        // If the rule key is not in the selected options, skip this rule
        return;
      }
    });
  }, 
}; // End of FilterHelper object


const rules = {
  'Wall Switch': {
    showAndClick: [],
    disable: ['Adjustable'],
    enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    resetKey: [],
  },
  'Touch Sensor': {
    showAndClick: ['Adjustable'],
    disable: ['Night-Light'],
    enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    resetKey: [],
  },
  'Matrix Touch System': {
    showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
    disable: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    enable: [],
    resetKey: ['color temperature'],
  },
  'Thin Frame': {
    showAndClick: [],
    disable: [],
    enable: [],
    resetKey: ['mirror style'],
  },
  'Wide Frame': {
    showAndClick: [],
    disable: [],
    enable: [],
    resetKey: ['mirror style'],
  },
  'Inset': {
    showAndClick: [],
    disable: ['Indirect'],
    enable: ['Direct', 'Both-Direct-And-Indirect'],
    resetKey: ['light direction'],
  },
  'Edge': {
    showAndClick: [],
    disable: ['Night-Light', 'Both-Direct-And-Indirect'],
    enable: ['Direct', 'Indirect'],
    resetKey: [],
  },
  'Thin Frame && Edge': {
    showAndClick: ['Indirect'],
    disable: ['Direct', 'Both-Direct-And-Indirect'],
    enable: [],
    resetKey: ['mirror style'],
  },
  'No Frost': {
    showAndClick: ['Indirect'],
    disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
    enable: [],
    resetKey: [],
  },
  'Round': {
    showAndClick: ['Indirect', 'Vertical Mounting'],
    disable: ['Night-Light', 'Direct', 'Both-Direct-And-Indirect'],
    enable: [],
    resetKey: [],
  },
  'Adjustable': {
    showAndClick: ['High', 'Non-Dimming'],
    disable: ['ELV-Dimmable', '0-10-Dimmable'],
    enable: [],
    resetKey: [],
  }
}; // End of rules object



// Function to gather all selected options
function gatherSelectedOptions() {
  const selectedOptions = [];
  $('#full-filter-form input[type="radio"]:checked').each(function() {
    const optionValue = $(this).attr('value');
    const optionId = $(this).attr('id');
    selectedOptions.push({ value: optionValue, id: optionId });
    console.log('Found selected option:', { value: optionValue, id: optionId }); // Debug line
  });
  
  console.log('All selected options:', selectedOptions); // Added debug line
  
  return selectedOptions;
}


$(document).ready(function() {
  const initialSelectedOptions = gatherSelectedOptions();
  console.log('Initial selected options:', initialSelectedOptions);
  FilterHelper.applyRules(initialSelectedOptions, rules);
});


// Function to handle changes
function handleChange() {
  // Gather the selected options
  const selectedOptions = gatherSelectedOptions();

  // Find the parent filter group of the changed input element
  const filterGroup = $(this).closest('.filters1_filter-group');

  // Get the filter-target of the filter group
  const filterTarget = filterGroup.find('.selected-option').attr('filter-target');

  // If filterTarget exists, convert it to lowercase
  const filterTargetLower = filterTarget ? filterTarget.toLowerCase() : '';

  // Find the corresponding filter-target element and update its text content
  const selectedOptionElement = filterGroup.find('.selected-option');
  selectedOptionElement.text($(this).val());

  // Show the selected-option element if you wish (e.g., if it's hidden by default)
  selectedOptionElement.show();

  console.log(`Updated filter target: ${filterTargetLower} with value: ${$(this).val()}`); // Debug line

  // Apply the rules based on the selected options
  FilterHelper.applyRules(selectedOptions, rules);
}

// Attach the change event handler to all radio buttons inside the form
$(document).ready(function() {
  $('#full-filter-form input[type="radio"]').change(handleChange);

  // Gather the initial selected options and apply rules accordingly
  const initialSelectedOptions = gatherSelectedOptions();
  FilterHelper.applyRules(initialSelectedOptions, rules);
});

$(document).ready(function() {
  // Iterate over each radio input element
  $('input[type="radio"]').each(function() {
    // Extract the value and id of the radio button
    const optionValue = $(this).attr('value');
    const optionId = $(this).attr('id');

    // Find the associated label for this radio button
    const associatedLabel = $(`label[for="${optionId}"]`);

    // Extract the tag from the label, if there is any specific attribute used to define tags
    // (replace 'data-tag' with the actual attribute name used to define tags, if applicable)
    const associatedTag = associatedLabel.attr('data-tag') || 'No Tag Defined';

    // Log the value, id, and associated tag
    console.log(`Option Value: ${optionValue}, Option ID: ${optionId}, `);
  });
});



// End of build.js