const FilterHelper = {
  disabledByRules: [],

  disableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Disabling element: ${id}`); // Debug line
      element.parent().addClass('is-disabled');
      this.disabledByRules.push(id);
    });
  },
  
  enableAndClickOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      const index = this.disabledByRules.indexOf(id);
      if (index > -1) {
        this.disabledByRules.splice(index, 1);
      }
      if (this.disabledByRules.includes(id)) {
        return;
      }
      console.log(`Enabling and clicking element: ${id}`); // Debug line
      element.parent().removeClass('is-disabled');
      console.log(`Attempting to click element: ${id}`);
      element.prop('disabled', false);
      element.click();
    });
  },

  enableOptions(rules) {
    const allOptionIds = [].concat(...Object.values(rules).map(rule => rule.hide));
    allOptionIds.forEach(id => {
      if (!this.disabledByRules.includes(id)) {
        const element = $(`#${id}`);
        console.log(`Enabling element: ${id}`); // Debug line
        element.parent().removeClass('is-disabled');
        element.prop('disabled', false);
      }
    });
  },

  containsOption(selectedOptions, optionName) {
    return selectedOptions.some(set => Array.from(set).some(option => option.includes(optionName)));
  },

  applyRules(filterInstance, selectedOptions, rules, resetPerformed, isApplyRulesRunning) {
    isApplyRulesRunning = true; // Set the variable to true before changing the selection

    // First, enable all options that shouldn't be disabled
    this.enableOptions(rules);

    // Loop through all rules
    Object.entries(rules).forEach(([ruleKey, ruleValue]) => {
      // Check if the selected options contain the rule key
      if (this.containsOption(selectedOptions, ruleKey)) {
        // If the rule key is in the selected options, hide and show/click options as defined by the rule
        this.disableOptions(ruleValue.hide);
        this.enableAndClickOptions(ruleValue.showAndClick);

        // If a resetKey is defined for the rule, and a reset hasn't been performed for that key yet...
        if (ruleValue.resetKey && !resetPerformed[ruleKey]) {
          ruleValue.resetKey.forEach(key => {
            filterInstance.resetFilters([key]); // Reset the filter
            resetPerformed[ruleKey] = true; // Set the resetPerformed variable to true for the rule key
          });
        }
      } else {
        // If the rule key is not in the selected options and a reset has been performed for the rule key, set the resetPerformed variable to false for the rule key
        if (resetPerformed[ruleKey]) {
          resetPerformed[ruleKey] = false;
        }
      }
    });

    isApplyRulesRunning = false; // Set the variable to false after changing the selection
  }
};

const rules = {
  'Wall Switch': {
    showAndClick: [],
    hide: ['Adjustable'],
    resetKey: ['color temperature'],
  },
  'Matrix Touch System': {
    showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
    hide: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    resetKey: ['accessories'],
  },
  'Inset': {
    showAndClick: ['Direct', 'Both Direct & Indirect'],
    hide: [],
    resetKey: [],
  },
  'Edge': {
    showAndClick: ['Direct', 'Indirect'],
    hide: ['Night Light'],
    resetKey: [],
  },
  'No Frost': {
    showAndClick: ['Indirect'],
    hide: [],
    resetKey: [],
  },
  'Round': {
    showAndClick: ['Indirect', 'Vertical Mounting'],
    hide: ['Night Light'],
    resetKey: [],
  },
  'Adjustable': {
    showAndClick: ['High', 'Non-Dimming'],
    hide: [],
    resetKey: [],
  }
};

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsfilter',
  (filterInstances) => {
    console.log('cmsfilter Successfully loaded!');
    console.log('Filter Instances:', filterInstances);

    let isApplyRulesRunning = false; // Global variable to prevent infinite loop of event emissions
    let resetPerformed = {}; // Global variable to track if the reset operation has been performed for a specific option

    filterInstances.forEach((filterInstance) => {
      filterInstance.listInstance.on('renderitems', (renderedItems) => {
        if (!isApplyRulesRunning) { // Only call applyRules if it wasn't the function that caused the event to be emitted
          const selectedOptions = [];
          filterInstance.filtersData.forEach((filterData) => {
            selectedOptions.push(filterData.values);
          });
          FilterHelper.applyRules(filterInstance, selectedOptions, rules, resetPerformed, isApplyRulesRunning);
        }
    
  
        filterInstance.filtersData.forEach((filterData) => {
          const selectedOption = document.querySelector(`.selected-option[filter-target="${filterData.filterKeys[0]}"]`);
  
          if (selectedOption) {
            if (filterData.values.size > 0) { // Check if the filter is active
  
              // Get the selected values
              let selectedValues = Array.from(filterData.values).join(',');
  
              // Add a prefix to the selected values based on the filter key
              selectedValues = filterData.filterKeys[0] === 'width' ? `W: ${selectedValues}` : filterData.filterKeys[0] === 'height' ? `H: ${selectedValues}` : selectedValues;
  
              // Add a suffix to the selected values based on the filter key
              selectedValues += filterData.filterKeys[0] === 'diameter' ? '" in diameter' : '';
  
              // Update the text content of the selected-option element
              selectedOption.textContent = selectedValues;
  
              // Change the display property of the selected-option element to block
              selectedOption.style.display = 'block';
            } else {
              // If the filter is not active (i.e., the value is deleted from a text input element), set the textContent of the selected-option element to an empty string and hide it
              selectedOption.textContent = '';
              selectedOption.style.display = 'none';
            }
          } else {
            console.log(`No selected-option element found for filter key: ${filterData.filterKeys[0]}`);
          }
        });
      });
    });
   },
  ]);
