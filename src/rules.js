const rules = {
    'Wall Switch': {
      showAndClick: [],
      disable: ['Adjustable'],
      enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      excludeProductLines: [],
     
    },
    'Touch Sensor': {
      showAndClick: [],
      disable: ['Night-Light'],
      enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable', 'Adjustable'],
      excludeProductLines: [],
    },
    'Matrix Touch System': {
      showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
      disable: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      enable: [],
      excludeProductLines: [],
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
      
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
      excludeProductLines: [],
     
    },
    'Edge': {
      showAndClick: [],
      disable: ['Night Light', 'Both-Direct-And-Indirect'],
      enable: ['Direct', 'Indirect'],
      excludeProductLines: [],
      
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
      
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
      enable: [],
      excludeProductLines: [],
      
    },
    'Round': {
      showAndClick: ['Indirect', 'Vertical Mounting'],
      disable: ['Night-Light', 'Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      excludeProductLines: ['Deco', 'Future'],
      
    },
    'Touch && Adjustable': {
      showAndClick: ['High', 'Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable', 'Standard'],
      enable: [],
      excludeProductLines: [],
     
    },
    'Frame Color': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
    },
    'Frame Thickness': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
    }
  };

  export { rules };