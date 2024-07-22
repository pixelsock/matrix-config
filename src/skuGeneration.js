// Define the mapping object
const skuMapping = {
    'Mirror Style': {
      'Full Frame Inset': '01',
      'Full Frame Edge': '02',
      'Full Frame Inward Lighting': '05',
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
      'Oval No Frost': '52',
      'Oval Full Frame Edge': '22',
      'Stadium Full Frame Inset': '23',
      'Stadium Full Frame Edge': '22',
      'Stadium No Frost': '53',
    },
    'Frame Color':{
      'Black Frame': 'BF',
      'Silver Frame': 'SF',
      'Gold Frame': 'GF',
      'White Frame': 'WF',
      
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
      'Matrix Touch System && Night-Light': 'TL',
      'Touch Sensors && Anti-Fog && Night-Light': 'AL',
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
    'Product Line': {
      'Bright Line': 'B', // Return 'B' for Bright Line
      'Classic': 'L',
      'Future': 'F',
      'Deco': 'D',
      'Anti-Ligature': 'L',
    }
  
  };
  if ($('#product-line').text() === 'Anti-Ligature') {
    skuMapping['Mirror Style']['Double Long Side Inset'] = '33';
}

  function getPrefix() {
    const productLine = $('#product-line').text();
    if (productLine.includes('Classic')) return 'L';
    if (productLine.includes('Future')) return 'F';
    if (productLine.includes('Deco')) return 'D'; // Return 'D' for Deco
    if (productLine.includes('Bright')) return 'B'; // Return 'B' for Bright Line
    if (productLine.includes('Anti-Ligature')) return 'L';
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
      'Accessories': ''      
    };

    // if (productLine === 'Deco') { add frame thickness to skuComponents }
    if (getPrefix() === 'D') {
      skuComponents['Frame Thickness'] = '';
    }    


  
    let mirrorControlsValue = null;
  
    // Handle the size logic first
    const sizeSku = getSizeSku();
    skuComponents['Width'] = sizeSku.width;
    skuComponents['Height'] = sizeSku.height;
  
    // Define a variable to hold the accessories SKU
let accessoriesSku = '';

let isCustomSize = false;
  if (selectedOptions.find(option => option.dataName === 'Custom Size Checkbox')) {
   
    isCustomSize = true;
  }

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

    if (category === 'Custom Size Checkbox' && value === 'Custom-Size-Checkbox') {
      isCustomSize = true;
     // console.log('Custom Size Checkbox is checked');
    }

    // Store the value of Mirror Controls for later use
    if (category === 'Mirror Controls') {
      mirrorControlsValue = value;
    }
  } 

  if (category === 'Mirror Style' && value.includes('Round') && isCustomSize) {
    let diameter = $('#Diameter').val();
    if (diameter) {
    skuComponents['Height'] = diameter;
    skuComponents['Width'] = '00';
    } else {
      skuComponents['Height'] = '';
      skuComponents['Width'] = '';
    }
    
    
  } else if (category === 'Mirror Style' && value.includes('Round') && !isCustomSize) {
    let standardDiameter = $('#Standard-Diameter').val();
    if (standardDiameter) {
    skuComponents['Height'] = String(standardDiameter).slice(0, 2);
    skuComponents['Width'] = '00';
    } else {
      skuComponents['Height'] = '';
      skuComponents['Width'] = '';
    }
    
    
  }
});

// Handle special logic for Mirror Controls and Accessories
switch (mirrorControlsValue) {
  case 'Wall Switch Only':
    console.log('accessoriesSku Wall Switch Only', accessoriesSku);
    if (accessoriesSku === 'NLAF') accessoriesSku = 'AN'; // Both Night-Light and Anti-Fog selected
    else if (accessoriesSku === '') accessoriesSku = 'NA'; // No accessories selected
    break;
  case 'Matrix Touch System':
    console.log('accessoriesSku Matrix Touch System', accessoriesSku);
    if (accessoriesSku === 'NL') accessoriesSku = 'TL';
    else if (accessoriesSku === '') accessoriesSku = 'TR';
    break;
  case 'Touch Sensor - Light Controls Only':
    console.log('accessoriesSku Touch Sensor - Light Controls Only', accessoriesSku);
    if (accessoriesSku === 'AF') accessoriesSku = 'AT'; // Touch Sensor and Anti-Fog selected
    else if (accessoriesSku === 'NL') accessoriesSku = 'NT'; // Touch Sensor and Night-Light selected
    else if (accessoriesSku === '') accessoriesSku = 'TS'; // No accessories selected
    else if (accessoriesSku === 'NLAF') accessoriesSku = 'AL'; // All accessories selected
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
    console.log('Generated SKU:', sku);
  } else {
    const sku = Object.values(skuComponents).join('-');
    $('#productSku').text(sku);
    console.log('Generated SKU:', sku);
  }; 

  
}


  
  function getSizeSku() {
    // Check if the mirror style is round
    let widthSku = '';
    let heightSku = '';
  
    // Check if custom size switch is turned on
    if ($('#Custom-Size-Checkbox').is(':checked')) {
      // Custom size logic
      const width = $('#Width').val();
      const height = $('#Height').val();
      const diameter = $('#Diameter').val();
  
      // If diameter is defined, use it for both width and height
      if (diameter) {
        heightSku = String(diameter).slice(0, 2);
        widthSku = '00'
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
      height: heightSku,
    };
  }
  
  
  
  
  export { generateSku, skuMapping, getPrefix };