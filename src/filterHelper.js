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

  export default FilterHelper;
