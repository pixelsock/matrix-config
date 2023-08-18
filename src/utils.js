// utils.js

export function containsKeywords(option, keywords) {
    return keywords.some(keyword => option.value.includes(keyword));
  }
  
  export function matchesCombination(selectedOptions, combination) {
    const andConditions = combination.split('&&').map(str => str.trim());
  
    if (andConditions.length > 1) {
      return andConditions.every(cond => selectedOptions.some(option => option.value.includes(cond)));
    }
  
    return selectedOptions.some(option => option.value.includes(combination.trim()));
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