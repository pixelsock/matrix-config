const FilterHelper = {
  disableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Disabling element: ${id}`); // Debug line
      element.parent().addClass('is-disabled');
      element.parent().removeClass('is-active');
      element.prop('disabled', true);
    });
  },

  enableAndClickOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Enabling and clicking element: ${id}`); // Debug line
      element.parent().removeClass('is-disabled');
      element.parent().addClass('is-active');
      element.prop('disabled', false);
      element.click();
    });
  },

  enableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Enabling element: ${id}`); // Debug line
      element.parent().removeClass('is-disabled');
      element.prop('disabled', false);
    });
  },
};

function getSelectedOptions() {
  const form = $('#full-filter-form');
  const selectedOptions = [];
  
  // Handle radio and checkbox inputs
  form.find('input[type="radio"]:checked, input[type="checkbox"]:checked').each(function() {
    const id = $(this).attr('id');
    const value = $(this).val();
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
  selectedOptions.forEach(option => {
    const inputElement = $(`#${option.id}`);
    const categoryDiv = inputElement.closest('.filters1_filter-group');
    const selectedOptionValue = option.value;

    // Determine the filter target based on the input element's name or data-name attribute
    const filterTarget =  inputElement.attr('data-name');

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
}






function containsKeywords(option, keywords) {
  return keywords.some(keyword => option.value.includes(keyword));
}

function matchesCombination(selectedOptions, combination) {
  const andConditions = combination.split('&&').map(str => str.trim());

  if (andConditions.length > 1) {
    return andConditions.every(cond => selectedOptions.some(option => option.value.includes(cond)));
  }

  return selectedOptions.some(option => option.value.includes(combination.trim()));
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




const rules = {
  'Wall Switch': {
    showAndClick: [],
    disable: ['Adjustable'],
    enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    resetKey: [],
  },
  'Touch Sensor': {
    showAndClick: [],
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
    disable: ['Night Light', 'Both-Direct-And-Indirect'],
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
    disable: ['Night Light', 'Direct', 'Both-Direct-And-Indirect'],
    enable: [],
    resetKey: [],
  },
  'Adjustable': {
    showAndClick: ['High', 'Non-Dimming'],
    disable: ['ELV-Dimmable', '0-10-Dimmable'],
    enable: [],
    resetKey: [],
  }
};


$(document).ready(function() {
  const form = $('#full-filter-form');
  updateSelectedOptionsDisplay(getSelectedOptions()); // Pass selectedOptions here

form.on('change', 'input, select', updateConfigurator);


 

  // Initial update
  updateConfigurator();
});





// TEST FUNCTIONS
function logAllInputs() {
  const inputs = $('#full-filter-form').find('input, select');
  const inputDetails = inputs.map(function() {
    return {
      type: $(this).attr('type'),
      name: $(this).attr('name'),
      id: $(this).attr('id'),
      dataName: $(this).attr('data-name'),
      cmsFilterField: $(this).attr('fs-cmsfilter-field'),
      value: $(this).val()
    };
  }).get();
  console.log(JSON.stringify(inputDetails, null, 2));
}

// Call the function to log the inputs
logAllInputs();
