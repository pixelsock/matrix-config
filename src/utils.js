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

    if (selectedOptions.some(option => option.value.includes('Round'))) {
      roundSizeFields.forEach(field => field.classList.remove('hide'));
      standardSizeFields.forEach(field => field.classList.add('hide'));
    } else {
      roundSizeFields.forEach(field => field.classList.add('hide'));
      standardSizeFields.forEach(field => field.classList.remove('hide'));
    
    };
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
}
  

  
// Function to check if an option is excluded for the current product line
export const productLine = $('#product-line').text();
  export const isExcluded = (optionKey) => {
    const rule = rules[optionKey];
    return rule && rule.excludeProductLines && rule.excludeProductLines.includes(productLine);
  };
