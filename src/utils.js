// utils.js
import { rules } from './rules.js';

export function containsKeywords(option, keywords) {
  return keywords.some(keyword => option.value.includes(keyword));
}

export function matchesCombination(selectedOptions, combination) {
  const andConditions = combination.split('&&').map(str => str.trim());
  const orConditions = combination.split('||').map(str => str.trim());

  if (andConditions.length > 1) {
    return andConditions.every(cond => {
      if (cond.startsWith('!')) {
        const negatedRule = cond.slice(1);
        return selectedOptions.every(option => {
          const rule = rules[option.key];
          return !rule || !rule.excludeProductLines || !rule.excludeProductLines.includes(negatedRule);
        });
      } else {
        return selectedOptions.some(option => option.value.includes(cond));
      }
    });
  } else if (orConditions.length > 1) {
    return orConditions.some(cond => {
      if (cond.startsWith('!')) {
        const negatedRule = cond.slice(1);
        return selectedOptions.every(option => {
          const rule = rules[option.key];
          return !rule || !rule.excludeProductLines || !rule.excludeProductLines.includes(negatedRule);
        });
      } else {
        return selectedOptions.some(option => option.value.includes(cond));
      }
    });
  } else {
    const cond = combination.trim();
    if (cond.startsWith('!')) {
      const negatedRule = cond.slice(1);
      return selectedOptions.every(option => {
        const rule = rules[option.key];
        return !rule || !rule.excludeProductLines || !rule.excludeProductLines.includes(negatedRule);
      });
    } else {
      return selectedOptions.some(option => option.value.includes(cond));
    }
  }
}
export function showHideSizesBasedOffStyle(selectedOptions) {
  const roundSizeFields = document.querySelectorAll('.diameter');
  const standardSizeFields = document.querySelectorAll('.standard');
  const customSizeCheckbox = selectedOptions.find(option => option.dataName === 'Custom Size Checkbox');
  const isCustomSize = customSizeCheckbox && customSizeCheckbox.value === 'Custom-Size-Checkbox';

  if (selectedOptions.some(option => option.value.includes('Round'))) {
    roundSizeFields.forEach(field => field.classList.remove('hide'));
    standardSizeFields.forEach(field => field.classList.add('hide'));
  } else {
    roundSizeFields.forEach(field => field.classList.add('hide'));
    standardSizeFields.forEach(field => field.classList.remove('hide'));
  }

  if (isCustomSize) {
    const widthOption = selectedOptions.find(option => option.dataName === 'Width');
    const heightOption = selectedOptions.find(option => option.dataName === 'Height');
    
    if (widthOption && heightOption) {
      const width = parseInt(widthOption.value);
      const height = parseInt(heightOption.value);
      
      if (!isNaN(width) && !isNaN(height)) {
        const orientationInputs = document.querySelectorAll('input[name="Orientation"]');
        
        if (width > height) {
          orientationInputs.forEach(input => {
            if (input.value === 'Horizontal Mounting') {
              input.click(); // Use click() instead of checked = true
            }
          });
        } else {
          orientationInputs.forEach(input => {
            if (input.value === 'Vertical Mounting') {
              input.click(); // Use click() instead of checked = true
            }
          });
        }
      }
    }
  }
}

export function forSubmissionSkuAndQuantity() {
  const productSku = document.querySelector('#productSku').textContent;
  const quantity = document.querySelector('[name="Quantity"]').value;
  const skuLabel = document.querySelector('#form-sku-label');
  const quantityLabel = document.querySelector('#form-quantity-label');

  // Set the value of the SKU input field
  const skuInput = document.querySelector('#form-sku');
  skuInput.value = productSku;

  // Set the value of the quantity input field
  const quantityInput = document.querySelector('#form-quantity');
  quantityInput.value = quantity;

  // Set the text content of the SKU and quantity labels
  skuLabel.textContent = productSku;

  if (quantity) {
    quantityLabel.textContent = quantity;
    quantityLabel.style.color = '#0d0d0d';
  } else {
    quantityLabel.textContent = 'Quantity not specified';
    quantityLabel.style.color = 'rgb(224, 113, 115)';
  }

  // Update the quantity .selected-option text
  const quantitySelectedOption = document.querySelector('.selected-option[data-name="Quantity"]');
  if (quantitySelectedOption) {
    updateSelectedOption($(quantitySelectedOption), quantity);
  }
}
  

  
// Function to check if an option is excluded for the current product line
export const productLine = $('#product-line').text().trim();
export const isExcluded = (optionKey) => {
  const rule = rules[optionKey];
  if (!rule) {
    console.warn(`No rule found for option key: ${optionKey}`);
    return false;
  }
  if (!Array.isArray(rule.excludeProductLines)) {
    console.warn(`excludeProductLines is not an array for option key: ${optionKey}`);
    return false;
  }
  return rule.excludeProductLines.includes(productLine);
};

// Function to check if the custom size checkbox is checked
export const isCustomSize = () => {
  const customSizeCheckbox = selectedOptions.find(option => option.dataName === 'Custom Size Checkbox');
  if (!customSizeCheckbox) {
    console.warn('Custom Size Checkbox not found');
    return false;
  } else {
  return true;
  }
};

// Add this new function to handle orientation changes
export function updateOrientation(selectedOptions) {
  const customSizeCheckbox = selectedOptions.find(option => option.dataName === 'Custom Size Checkbox');
  const isCustomSize = customSizeCheckbox && customSizeCheckbox.value === 'Custom-Size-Checkbox';

  if (isCustomSize) {
    const widthOption = selectedOptions.find(option => option.dataName === 'Width');
    const heightOption = selectedOptions.find(option => option.dataName === 'Height');
    
    if (widthOption && heightOption) {
      const width = parseInt(widthOption.value);
      const height = parseInt(heightOption.value);
      
      if (!isNaN(width) && !isNaN(height)) {
        const orientationInputs = document.querySelectorAll('input[name="Orientation"]');
        
        if (width > height) {
          orientationInputs.forEach(input => {
            if (input.value === 'Horizontal Mounting') {
              input.click();
            }
          });
        } else {
          orientationInputs.forEach(input => {
            if (input.value === 'Vertical Mounting') {
              input.click();
            }
          });
        }
      }
    }
  }
}