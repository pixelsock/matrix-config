$(document).ready(function() {
  // Function to update the text based on the selected radio button
  const updateProductLineText = () => {
    const selectedValues = [];
    $('input[name^="Product-Line"]:checked').each(function() {
      selectedValues.push($(this).next().text());
    });
    if (selectedValues.length > 1 ) {
      $('#product-line-selection').text('View Selections Below');
      $('.grid-list6_item').hide(); // Hide all .grid-list6_item elements
    } else if (selectedValues.length === 1) {
      $('#product-line-selection').text(selectedValues[0]);
      $('.grid-list6_item').show(); // Show all .grid-list6_item elements
    } else {
      $('#product-line-selection').text('Select...');
      $('.grid-list6_item').hide(); // Hide all .grid-list6_item elements
    }
  };

  

  // Function to update the text based on the selected checkboxes
  const updateStyleText = () => {
    const selectedValues = [];
    $('input[name^="Filter-One-Option"]:checked').each(function() {
      selectedValues.push($(this).attr('id'));
    });
    if (selectedValues.length > 0) {
      $('#style-selection').text('View Selections Below');
    } else {
      $('#style-selection').text('Select...');
    }
  };

  // Run the functions once when the page loads
  updateProductLineText();
  updateStyleText();

 // Function to debounce another function
const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

// Listen for changes to the form with ID "#wf-form-Products-Filter"
$('#wf-form-Products-Filter').on('change', debounce(function() {
  updateProductLineText();
  updateStyleText();
}, 200)); // 300ms debounce



  // Helper function for decoding, modifying, and encoding parameters
  const formatParam = (param, codes) => {
    let decodedParam = param || '';
    if (codes.hasOwnProperty(decodedParam)) {
      decodedParam += ` (${codes[decodedParam]})`;
    }
    return encodeURIComponent(decodedParam).replace(/%20/g, '+');
  };

  // Function for building the configuration url
  $('.button-configure-round').each(function() {
    const baseUrl = "/configure/";
    const productSku = $(this).attr('product-sku') || '';
    const productLine = $(this).attr('product-line') || '';
    const mirrorStyleName = $(this).attr('mirror-style') || '';
    const lightDirectionName = $(this).attr('lighting-direction') || '';
  
    let mirrorStyleCode;
    if (productSku[0] === 'T' || productSku[0] === 'W') {
      mirrorStyleCode = productSku.substring(1, 3); // Get the middle two characters of productSku
    } else {
      mirrorStyleCode = productSku.substring(0, 3); // Get the first three characters of productSku
    }
  
    const lightDirectionCode = productSku.substring(3); // Get the rest of productSku
  
    const mirrorStyle = `${mirrorStyleName} (${mirrorStyleCode})`;
    const lightDirection = `${lightDirectionName} (${lightDirectionCode})`;
  
    const mountingOrientation = $(this).attr('mounting-orientation') || '';
    const frameColor = $(this).attr('frame-color') || '';
    const frameThickness = $(this).attr('frame-thickness') || '';
  
    const frameColorCodes = {
      "White Frame": "WF",
      "Gold Frame": "GF",
      "Black Frame": "BF",
      "Silver Frame": "SF"
    };
  
    const frameThicknessCodes = {
      "Wide Frame": "W",
      "Thin Frame": "T"
    };
  
    const params = {
      "frame+color": formatParam(frameColor, frameColorCodes),
      "frame+thickness": formatParam(frameThickness, frameThicknessCodes),
      "mirror+style": formatParam(mirrorStyle, {}),
      "mirror+controls": "Wall+Switch+Only",
      "light+direction": lightDirection ? encodeURIComponent(lightDirection).replace(/%20/g, '+') : '',
      "orientation": mountingOrientation ? encodeURIComponent(mountingOrientation + " (1)").replace(/%20/g, '+') : ''
    };
  
    // Filter out keys with empty values
    const filteredParams = Object.fromEntries(Object.entries(params).filter(([key, value]) => value));
  
    const queryString = Object.keys(filteredParams)
      .map(key => `${key}=${filteredParams[key]}`)
      .join("&");
  
    const fullUrl = `${baseUrl}${productLine}?${queryString}`;
  
    $(this).attr('href', fullUrl);
  });
});
