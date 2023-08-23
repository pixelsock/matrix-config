import { getSelectedOptions } from './main.js';

const resetRules = {
  'Matrix Touch System': {
    ifSelected: ['*'],
    resetKey: ['accessories'],
  },
  'Wall Switch Only': {
    ifSelected: ['Adjustable'], // this is the id not the value
    resetKey: ['color temperature'] // this is the category filter key (always lowercased no dashes)
  },
  'Inset': {
    ifSelected: ['Indirect'],
    resetKey: ['light direction'],
    fallback: ['Both Direct And Indirect']
  },
  'No Frost': {
    ifSelected: ['Indirect'],
    resetKey: ['light direction'],
    fallback: ['Both Direct And Indirect']
  },
  'Edge': {
    ifSelected: ['Both Direct And Indirect'],
    resetKey: ['light direction'],
    fallback: ['Indirect']
  },
  'Touch Sensor': {
    ifSelected: ['Night-Light'],
    resetKey: ['accessories'],
  },
  
  'size' : {
    resetKey: ['size', 'width', 'diameter', 'height'],
    ifSelected: ['*']
  },
};

function resetFilters(resetKeys) {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      const [filterInstance] = filterInstances;
      console.log('filterInstance', filterInstance); // Log filterInstance
      console.log('resetKeys', resetKeys); // Log resetKeys
      resetKeys.forEach((key) => {
        console.log(`Resetting ${key} filter...`);
        filterInstance.resetFilters([key]).then(() => {
          console.log(`${key} filter reset successfully`);
        }).catch(error => {
          console.error(`Error resetting ${key} filter:`, error);
        });
      });
    },
  ]);
}


function matchesRule(clickedValue, ruleKey) {
  // Split the ruleKey by "||" to handle OR conditions
  const orConditions = ruleKey.split('||').map(str => str.trim());

  // Check for OR conditions (any must match)
  return orConditions.some(orCondition => {
    // Split each OR condition by "&&" to handle AND conditions
    const andConditions = orCondition.split('&&').map(str => str.trim());

    // Check for AND conditions (all must match)
    return andConditions.every(condition => clickedValue.includes(condition));
  });
}

function handleClick(event) {
  const clickedElementValue = event.target.value;
  console.log(`Clicked value: ${clickedElementValue}`); // Debug line

  // Iterate over the keys in resetRules and find the matching rule
  for (const ruleKey in resetRules) {
    if (matchesRule(clickedElementValue, ruleKey)) {
      const rule = resetRules[ruleKey];
      if (rule && (areOptionsSelected(rule.ifSelected) || rule.ifSelected.includes('*'))) {
        console.log('attempting to click fallback')
        // If there's a fallback option, click it
        if (rule.fallback) {
          rule.fallback.forEach(fallbackOption => {
            // Find the input elements with the corresponding value
            const fallbackElements = $(`#full-filter-form input[value="${fallbackOption}"]`);

            // Iterate over the NodeList and click each element
            fallbackElements.each(function() {
              const fallbackElement = $(this);
              setTimeout(() => {
                fallbackElement.click();
                console.log(`Clicking fallback option: ${fallbackOption}`); // Debug line
              }, 100);
            });
          });
        } else {
          // Otherwise, reset the filters
          // Use setTimeout to delay the reset logic until after the click event has been processed
          setTimeout(() => {
            resetFilters(rule.resetKey);
          }, 0);
        }
      }
    }
  }
}

function areOptionsSelected(ifSelected) {
  const selectedOptions = getSelectedOptions(); // Get the currently selected options
  return ifSelected.some(option => selectedOptions.some(selected => selected.value === option));
}

// This function is called in main.js
function initializeReset() {
  document.querySelectorAll('#full-filter-form input').forEach(element => {
    element.addEventListener('click', handleClick);
  });

  // Add an event listener for the custom size checkbox
  document.getElementById('Custom-Size-Checkbox').addEventListener('change', () => {
    // Trigger the reset logic for the 'size' rule
    resetFilters(resetRules['size'].resetKey);
  });
}

export { initializeReset };
