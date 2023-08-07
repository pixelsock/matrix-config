const FilterHelper = {
  disableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`.${id}`);
      console.log(`Disabling element: ${id}`); // Debug line
      element.parent().addClass('is-disabled');
      element.prop('disabled', true);
      
      const inputElement = element.find('input');
      if (inputElement.length > 0) {
        inputElement.prop('disabled', true);
      }
    });
  },
  
  enableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`.${id}`);
      console.log(`Enabling element: ${id}`); // Debug line
      element.parent().removeClass('is-disabled');
      element.prop('disabled', false);
      
      const inputElement = element.find('input');
      if (inputElement.length > 0) {
        inputElement.prop('disabled', false);
      }
    });
  },
  enableOptions(optionIds) {
    optionIds.forEach(id => {
      const element = $(`#${id}`);
      console.log(`Enabling element: ${id}`); // Debug line
      element.parent().removeClass('is-disabled');
      element.prop('disabled', false);
      
      const inputElement = element.find('input');
      if (inputElement) {
        inputElement.prop('disabled', false);
      }
    });
  },

  containsOption(selectedOptions, optionName) {
    return selectedOptions.some(set => Array.from(set).some(option => option.includes(optionName)));
  },

    applyRules(filterInstance, selectedOptions, rules) {
      // Check if filters are being reset
      if (filterInstance.isResettingFilters) {
        return;  // Skip this function if filters are being reset
      }
  
      // Check if selected options have changed
      if (JSON.stringify(filterInstance.previousSelectedOptions) !== JSON.stringify(selectedOptions)) {
        // Update previous selected options
        filterInstance.previousSelectedOptions = selectedOptions;
  
        // Create a Set to track which rules have been applied in this render
        const appliedRules = new Set();
  
        Object.entries(rules).forEach(([ruleKey, ruleValue]) => {
          if (this.containsOption(selectedOptions, ruleKey) && !appliedRules.has(ruleKey)) {
            // Mark this rule as applied
            appliedRules.add(ruleKey);
  
            this.disableOptions(ruleValue.hide);
            this.enableOptions(ruleValue.enable);
            this.enableAndClickOptions(ruleValue.showAndClick);
  
            if (ruleValue.resetKey.length > 0) {
              filterInstance.isResettingFilters = true;  // Set flag before resetting filters
              filterInstance.resetFilters(ruleValue.resetKey)  // Reset filters using built-in function
                .then(() => {
                  filterInstance.isResettingFilters = false;  // Reset flag after resetting filters
                })
                .catch((error) => {
                  console.error('Error resetting filters:', error);
                  filterInstance.isResettingFilters = false;
                });
            }
          }
        });
      }
    }
};  // End FilterHelper
  
const rules = {
  'Wall Switch': {
    showAndClick: [],
    hide: ['Adjustable'],
    enable: ['High', 'Non-Dimming', 'Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    resetKey: ['color temperature'],
  },
  'Matrix Touch System': {
    showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
    hide: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
    enable: [],
    resetKey: ['accessories'],
  },
  'Inset': {
    showAndClick: ['Direct', 'Both Direct & Indirect'],
    hide: [],
    enable: [],
    resetKey: [],
  },
  'Edge': {
    showAndClick: ['Direct', 'Indirect'],
    hide: ['Night Light'],
    enable: [],
    resetKey: [],
  },
  'No Frost': {
    showAndClick: ['Indirect'],
    hide: [],
    enable: [],
    resetKey: [],
  },
  'Round': {
    showAndClick: ['Indirect', 'Vertical Mounting'],
    hide: ['Night Light'],
    enable: [],
    resetKey: [],
  },
  'Adjustable': {
    showAndClick: ['High', 'Non-Dimming'],
    hide: [],
    enable: [],
    resetKey: [],
  }
};

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsfilter',
  (filterInstances) => {
    console.log('cmsfilter Successfully loaded!');
    console.log('Filter Instances:', filterInstances);

    filterInstances.forEach((filterInstance) => {
      filterInstance.isResettingFilters = false; // Add a flag to check if filters are being reset

      filterInstance.listInstance.on('renderitems', () => {
        const selectedOptions = [];
        filterInstance.filtersData.forEach((filterData) => {
          // Existing logic to manage selected options
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
              // If the filter is not active, set the textContent of the selected-option element to an empty string and hide it
              selectedOption.textContent = '';
              selectedOption.style.display = 'none';
            }
          } else {
            console.log(`No selected-option element found for filter key: ${filterData.filterKeys[0]}`);
          }

          // Then proceed with new rule application logic
          selectedOptions.push(filterData.values);
        });

        // Apply the rules
        FilterHelper.applyRules(filterInstance, selectedOptions, rules);
      });
    });
  },
]);