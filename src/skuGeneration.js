
// Define the mapping object
const skuMapping = {
    'Mirror Style': {
      'Full Frame Inset': '01',
      'Full Frame Edge': '02',
      'Double Long Side Inset': '03',
      'Double Long Side Edge': '04',
      'No Frost': '05',
      'Double Short Side Edge': '06',
      'Double Short Side Inset': '07',
      'Single Long Side Inset': '09',
      'Single Long Side Edge': '08',
      'Single Short Side Edge': '10',
      'Single Short Side Inset': '11',
      'Round Full Frame Edge': '21',
      'Round No Frost': '51',
    },
    'Frame Color':{
      'Black Metal': 'BM',
      'Silver Metal': 'SM',
      'Gold Metal': 'GM',
    },
    'Frame Thickness': {
      'Thin Frame': 'T',
      'Wide Frame': 'W',
    },
    'Orientation': {
      'Vertical Mounting': '1',
      'Horizontal Mounting': '2',
    },
    'Light Direction': {
      'Direct': 'D',
      'Indirect': 'I',
      'Both Direct And Indirect': 'B',
    },
    'Color Temperature': {
      '2700': '27',
      '3000': '30',
      '3500': '35',
      '4000': '40',
      '5000': '50',
      'Adjustable': '00',
    },
    'Mirror Controls': {
      'Touch Sensor - Light Controls Only': 'TS',
      'Matrix Touch System': 'TR',
      'Wall Switch Only': 'NA',
    },
    'Accessories': {
      'Matrix Touch System': 'TR',
      'Night-Light': 'NL',
      'Night Light && Touch Sensors': 'NT',
      'Anti-Fog': 'AF',
      'Anti-Fog && Night-Light': 'AN',
      'Anti-Fog && Touch Sensors': 'AT',
    },
    'Light Output': {
      'Standard': 'S',
      'High': 'H',
    },
    'Dimming': {
      'Non-Dimming': 'N',
      'ELV Dimmable': 'E',
      '0-10 Dimmable': 'V',
    },
  
  };

  
  function getPrefix() {
    const productLine = $('#product-line').text().trim();
    if (productLine.includes('Classic')) return 'L';
    if (productLine.includes('Future')) return 'F';
    if (productLine.includes('Deco')) return 'D'; // Return 'D' for Deco
    return ''; // Default case
  }
  
  function generateSku(selectedOptions) {
    // Define the SKU components
    const skuComponents = {
      'Mirror Style': '',
      'Light Direction': '',
      'Width': '',
      'Height': '',
      'Light Output': '',
      'Color Temperature': '',
      'Dimming': '',
      'Orientation': '',
      'Accessories': '',
      'Frame Color': '',
    };
  
    let mirrorControlsValue = null;
  
    // Handle the size logic first
    const sizeSku = getSizeSku();
    skuComponents['Width'] = sizeSku.width;
    skuComponents['Height'] = sizeSku.height;
  
    // Define a variable to hold the accessories SKU
let accessoriesSku = '';

selectedOptions.forEach(option => {
  const category = option.dataName;
  const value = option.value;

  // Check if the category and value are defined in the mapping
  if (skuMapping[category] && skuMapping[category][value]) {
    let skuComponent = skuMapping[category][value];
    if (category === 'Accessories') {
      // Concatenate the accessories SKU components
      accessoriesSku += skuComponent;
    } else {
      skuComponents[category] = skuComponent;
    }

    // Store the value of Mirror Controls for later use
    if (category === 'Mirror Controls') {
      mirrorControlsValue = value;
    }
  } else {
    console.warn('Undefined SKU component for category:', category, 'value:', value);
  }
});

// Handle special logic for Mirror Controls and Accessories
switch (mirrorControlsValue) {
  case 'Wall Switch Only':
    if (accessoriesSku === 'NLAF') accessoriesSku = 'AN'; // Both Night-Light and Anti-Fog selected
    else if (accessoriesSku === '') accessoriesSku = 'NA'; // No accessories selected
    break;
  case 'Matrix Touch System':
    accessoriesSku = 'TR';
    break;
  case 'Touch Sensor - Light Controls Only':
    if (accessoriesSku === 'AF') accessoriesSku = 'AT'; // Touch Sensor and Anti-Fog selected
    else if (accessoriesSku === 'NL') accessoriesSku = 'NT'; // Touch Sensor and Night-Light selected
    else if (accessoriesSku === '') accessoriesSku = 'TS'; // No accessories selected
    break;
  // ... other cases if needed ...
}

delete skuComponents['Mirror Controls'];

skuComponents['Accessories'] = accessoriesSku;

 // Get the prefix
  const prefix = getPrefix();

  // If the product line is Deco, prepend the frame thickness to the mirror style SKU
  if (prefix === 'D') {
    const frameThicknessOption = selectedOptions.find(option => option.dataName === 'Frame Thickness');
    if (frameThicknessOption) {
      const frameThickness = skuMapping['Frame Thickness'][frameThicknessOption.value];
      skuComponents['Mirror Style'] = frameThickness + skuComponents['Mirror Style'];
      delete skuComponents['Frame Thickness'];
    }
  }

  // Build the SKU string in the correct order
  if (prefix != 'D') {
    const sku = prefix + Object.values(skuComponents).join('-');
    $('#productSku').text(sku);
  } else {
    const sku = Object.values(skuComponents).join('-');
    $('#productSku').text(sku);
  }; 

  
}


  
  function getSizeSku() {
    let widthSku = '0000';
    let heightSku = '0000';
  
    // Check if custom size switch is turned on
    if ($('#Custom-Size-Checkbox').is(':checked')) {
      // Custom size logic
      const width = $('#Width').val();
      const height = $('#Height').val();
      const diameter = $('#Diameter').val();
  
      // If diameter is defined, use it for both width and height
      if (diameter) {
        widthSku = heightSku = String(diameter).padStart(4, '0');
      }
  
      // If width and height are defined, use them
      if (width && height) {
        widthSku = width;
        heightSku = height;
      }
    } else {
      // Standard size logic
      const standardSize = $('#Standard-Size').val();
      if (standardSize) {
        [widthSku, heightSku] = standardSize.replace(/\"/g, '').split('x');
      }
    }
  
    return {
      width: widthSku,
      height: heightSku
    };
  }
  
  
  
  export { generateSku, skuMapping };
