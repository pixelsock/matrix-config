

// TEST FUNCTIONS
export function logAllInputs() {
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
  