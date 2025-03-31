/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/products-page.js ***!
  \******************************/
$(document).ready(function () {
  // Function to update the display text based on selected options for a specific dropdown
  function updateSelectedOptionsDisplay(dropdownId, displayId) {
    var selectedOptions = [];
    $("#".concat(dropdownId, " .filters5_form-checkbox1 input:checked")).each(function () {
      var label = $(this).siblings('span').text();
      selectedOptions.push(label);
    });
    var displayText;
    if (selectedOptions.length === 1) {
      displayText = selectedOptions[0];
    } else if (selectedOptions.length > 1) {
      displayText = 'Multiple Selections';
    } else {
      displayText = 'Select...';
    }
    $("#".concat(displayId)).text(displayText);
  }

  // Add a change event listener to the checkboxes for the first dropdown
  $('#w-dropdown-list-2 .filters5_form-checkbox1 input').on('change', function () {
    updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');
  });

  // Add a change event listener to the checkboxes for the second dropdown
  $('#w-dropdown-list-3 .filters5_form-checkbox1 input').on('change', function () {
    updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');
  });

  // Initial update for both dropdowns
  updateSelectedOptionsDisplay('w-dropdown-list-2', 'product-line-selection');
  updateSelectedOptionsDisplay('w-dropdown-list-3', 'style-selection');
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHNQYWdlLmJ1aWxkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQzNCO0VBQ0EsU0FBU0MsNEJBQTRCQSxDQUFDQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtJQUMzRCxJQUFNQyxlQUFlLEdBQUcsRUFBRTtJQUMxQk4sQ0FBQyxLQUFBTyxNQUFBLENBQUtILFVBQVUsNENBQXlDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFlBQVc7TUFDekUsSUFBTUMsS0FBSyxHQUFHVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFDN0NMLGVBQWUsQ0FBQ00sSUFBSSxDQUFDSCxLQUFLLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsSUFBSUksV0FBVztJQUNmLElBQUlQLGVBQWUsQ0FBQ1EsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNoQ0QsV0FBVyxHQUFHUCxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsTUFBTSxJQUFJQSxlQUFlLENBQUNRLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDckNELFdBQVcsR0FBRyxxQkFBcUI7SUFDckMsQ0FBQyxNQUFNO01BQ0xBLFdBQVcsR0FBRyxXQUFXO0lBQzNCO0lBRUFiLENBQUMsS0FBQU8sTUFBQSxDQUFLRixTQUFTLENBQUUsQ0FBQyxDQUFDTSxJQUFJLENBQUNFLFdBQVcsQ0FBQztFQUN0Qzs7RUFFQTtFQUNBYixDQUFDLENBQUMsbURBQW1ELENBQUMsQ0FBQ2UsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO0lBQzdFWiw0QkFBNEIsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsQ0FBQztFQUM3RSxDQUFDLENBQUM7O0VBRUY7RUFDQUgsQ0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztJQUM3RVosNEJBQTRCLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7RUFDdEUsQ0FBQyxDQUFDOztFQUVGO0VBQ0FBLDRCQUE0QixDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDO0VBQzNFQSw0QkFBNEIsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztBQUN0RSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdHJpeC1jb25maWcvLi9zcmMvcHJvZHVjdHMtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBkaXNwbGF5IHRleHQgYmFzZWQgb24gc2VsZWN0ZWQgb3B0aW9ucyBmb3IgYSBzcGVjaWZpYyBkcm9wZG93blxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZE9wdGlvbnNEaXNwbGF5KGRyb3Bkb3duSWQsIGRpc3BsYXlJZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICQoYCMke2Ryb3Bkb3duSWR9IC5maWx0ZXJzNV9mb3JtLWNoZWNrYm94MSBpbnB1dDpjaGVja2VkYCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gJCh0aGlzKS5zaWJsaW5ncygnc3BhbicpLnRleHQoKTtcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5wdXNoKGxhYmVsKTtcbiAgICB9KTtcblxuICAgIGxldCBkaXNwbGF5VGV4dDtcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGlzcGxheVRleHQgPSBzZWxlY3RlZE9wdGlvbnNbMF07XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgZGlzcGxheVRleHQgPSAnTXVsdGlwbGUgU2VsZWN0aW9ucyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlUZXh0ID0gJ1NlbGVjdC4uLic7XG4gICAgfVxuXG4gICAgJChgIyR7ZGlzcGxheUlkfWApLnRleHQoZGlzcGxheVRleHQpO1xuICB9XG5cbiAgLy8gQWRkIGEgY2hhbmdlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjaGVja2JveGVzIGZvciB0aGUgZmlyc3QgZHJvcGRvd25cbiAgJCgnI3ctZHJvcGRvd24tbGlzdC0yIC5maWx0ZXJzNV9mb3JtLWNoZWNrYm94MSBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICB1cGRhdGVTZWxlY3RlZE9wdGlvbnNEaXNwbGF5KCd3LWRyb3Bkb3duLWxpc3QtMicsICdwcm9kdWN0LWxpbmUtc2VsZWN0aW9uJyk7XG4gIH0pO1xuXG4gIC8vIEFkZCBhIGNoYW5nZSBldmVudCBsaXN0ZW5lciB0byB0aGUgY2hlY2tib3hlcyBmb3IgdGhlIHNlY29uZCBkcm9wZG93blxuICAkKCcjdy1kcm9wZG93bi1saXN0LTMgLmZpbHRlcnM1X2Zvcm0tY2hlY2tib3gxIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZVNlbGVjdGVkT3B0aW9uc0Rpc3BsYXkoJ3ctZHJvcGRvd24tbGlzdC0zJywgJ3N0eWxlLXNlbGVjdGlvbicpO1xuICB9KTtcblxuICAvLyBJbml0aWFsIHVwZGF0ZSBmb3IgYm90aCBkcm9wZG93bnNcbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb25zRGlzcGxheSgndy1kcm9wZG93bi1saXN0LTInLCAncHJvZHVjdC1saW5lLXNlbGVjdGlvbicpO1xuICB1cGRhdGVTZWxlY3RlZE9wdGlvbnNEaXNwbGF5KCd3LWRyb3Bkb3duLWxpc3QtMycsICdzdHlsZS1zZWxlY3Rpb24nKTtcbn0pOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInVwZGF0ZVNlbGVjdGVkT3B0aW9uc0Rpc3BsYXkiLCJkcm9wZG93bklkIiwiZGlzcGxheUlkIiwic2VsZWN0ZWRPcHRpb25zIiwiY29uY2F0IiwiZWFjaCIsImxhYmVsIiwic2libGluZ3MiLCJ0ZXh0IiwicHVzaCIsImRpc3BsYXlUZXh0IiwibGVuZ3RoIiwib24iXSwic291cmNlUm9vdCI6IiJ9