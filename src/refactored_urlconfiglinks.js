
window.onload=function(){
  document.querySelector(".fs_cmssort_button").click();
};

$(document).ready(function() {
  // Function to update the text based on the selected radio button
  const updateProductLineText = () => {
    const selectedValues = [];
    $('input[name^="Product-Line"]:checked').each(function() {
      selectedValues.push($(this).next().text());
    });
    if (selectedValues.length > 1) {
      $('#product-line-selection').text('View Selections Below');
    } else if (selectedValues.length === 1) {
      $('#product-line-selection').text(selectedValues[0]);
    } else {
      $('#product-line-selection').text('Select...');
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

  // Listen for changes to the form with ID "#wf-form-Filter-5"
  $('#wf-form-Filter-5').on('change', function() {
    updateProductLineText();
    updateStyleText();
  });

  // Helper function for decoding, modifying, and encoding parameters
  const formatParam = (param, codes) => {
    let decodedParam = decodeURIComponent(param || '');
    if (codes.hasOwnProperty(decodedParam)) {
      decodedParam += ` (${codes[decodedParam]})`;
    }
    return encodeURIComponent(decodedParam.replace(/ /g, '+'));
  };

  // Function for building the configuration url
  $('.button-configure-round').each(function() {
    const baseUrl = "/configure/";
    const productLine = $(this).attr('product-line') || '';
    const mirrorStyle = $(this).attr('mirror-style') || '';
    const productSku = $(this).attr('product-sku');
    const mirrorSku = productSku ? productSku.slice(0, 3) : '';
    const lightDirection = $(this).attr('lighting-direction') || '';
    const lightDirectionFirstLetter = lightDirection.charAt(0);
    const mountingOrientation = $(this).attr('mounting-orientation') || '';

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

    // ... other codes for other params

    const frameColor = $(this).attr('frame-color');
    const frameThickness = $(this).attr('frame-thickness');

    // ... other params

    const formattedFrameColor = formatParam(frameColor, frameColorCodes);
    const formattedFrameThickness = formatParam(frameThickness, frameThicknessCodes);

    // ... formatted other params

    const params = {
      "frame+color": formattedFrameColor,
      "frame+thickness": formattedFrameThickness,
      "mirror+style": mirrorStyle ? `${mirrorStyle.replace(/ /g, '+')}+(${mirrorSku})` : '',
      "mirror+controls": "Wall+Switch+Only",
      "light+direction": lightDirection ? lightDirection.replace(/ /g, '+') + `+(${lightDirectionFirstLetter})` : '',
      "orientation": mountingOrientation ? mountingOrientation.replace(/ /g, '+') + "+(1)" : ''
    };

    // Filter out keys with empty values
    const filteredParams = Object.fromEntries(Object.entries(params).filter(([key, value]) => value));

    const queryString = Object.keys(filteredParams)
      .map(key => `${key}=${filteredParams[key]}`)
      .join("&");

    const fullUrl = `${baseUrl}${productLine}?${queryString}`;
    console.log("Final URL:", fullUrl);

    $(this).attr('href', fullUrl);
  });
});
