$(document).ready(function() {
  // Function to update the display text based on selected options for a specific dropdown
  function updateSelectedOptionsDisplay(dropdownId, displayId) {
    const selectedOptions = [];
    $(`#${dropdownId} .filters5_form-checkbox1 input:checked`).each(function() {
      const label = $(this).siblings('span').text();
      selectedOptions.push(label);
    });

    let displayText;
    if (selectedOptions.length === 1) {
      displayText = selectedOptions[0];
    } else if (selectedOptions.length > 1) {
      displayText = 'Multiple Selections';
    } else {
      displayText = 'Select...';
    }

    $(`#${displayId}`).text(displayText);
  }

  // Add a change event listener to the checkboxes for the first dropdown
  $('#w-dropdown-list-2 .filters5_form-checkbox1 input').on('change', function() {
    updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');
  });

  // Add a change event listener to the checkboxes for the second dropdown
  $('#w-dropdown-list-3 .filters5_form-checkbox1 input').on('change', function() {
    updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');
  });

  // Initial update for both dropdowns
  updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');
  updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');
});