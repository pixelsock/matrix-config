
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
    'Accessories': {
      'None': 'NA',
      'Matrix Touch System': 'TR',
      'Night Light': 'NL',
      'Touch Sensors': 'TS',
      'Night Light & Touch Sensors': 'NT',
      'Anti-Fog': 'AF',
      'Anti-Fog & Night Light': 'AN',
      'Anti-Fog & Touch Sensors': 'AT',
    },
    'Light Output': {
      'Standard': 'S',
      'High': 'H',
    },
    'Dimming': {
      'Non-dimming 120V-277V': 'N',
      'ELV 120V-277V': 'E',
      '0-10V 120V-277V': 'V',
    },
  
  };
  
  function generateSku(selectedOptions) {
    let sku = '';
  
    // Handle the size logic first
    const sizeSku = getSizeSku(); // Assuming getSizeSku is the function we defined earlier
    sku += sizeSku;
  
    selectedOptions.forEach(option => {
      const category = option.dataName;
      const value = option.value;
  
      // Check if the category and value are defined in the mapping
      if (skuMapping[category] && skuMapping[category][value]) {
        const skuComponent = skuMapping[category][value];
        sku += skuComponent;
      } else {
        console.warn('Undefined SKU component for category:', category, 'value:', value);
      }
    });
  
    $('#productSku').text(sku);
  }
  
  
  function getSizeSku() {
    // Check if custom size switch is turned on
    if ($('#Custom-Size-Checkbox').is(':checked')) {
      // Custom size logic
      const width = $('#Width').val();
      const height = $('#Height').val();
      const diameter = $('#Diameter').val();
  
      // If diameter is defined, use it
      if (diameter) {
        return String(diameter).padStart(4, '0'); // e.g., "0034"
      }
  
      // If width and height are defined, use them
      if (width && height) {
        return width + height; // e.g., "2023"
      }
    } else {
      // Standard size logic
      const standardSize = $('#Standard-Size').val();
      if (standardSize) {
        return standardSize.replace(/\"/g, '').replace('x', ''); // e.g., "2638" for "26"x38""
      }
    }
  
    // Return a default value or handle an error case if needed
    return '0000';
  }
  
  export { generateSku, skuMapping };
