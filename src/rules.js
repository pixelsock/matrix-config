const rules = {
    'Wall Switch': {
      showAndClick: [],
      disable: ['Adjustable'],
      enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
     
    },
    'Touch Sensor': {
      showAndClick: [],
      disable: ['Night-Light'],
      enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable', 'Adjustable'],
      
    },
    'Matrix Touch System': {
      showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
      disable: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      enable: [],
      
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
     
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
     
    },
    'Edge': {
      showAndClick: [],
      disable: ['Night Light', 'Both-Direct-And-Indirect'],
      enable: ['Direct', 'Indirect'],
      
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
      enable: [],
      
    },
    'Round': {
      showAndClick: ['Indirect', 'Vertical Mounting'],
      disable: ['Night-Light', 'Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      
    },
    'Adjustable': {
      showAndClick: ['High', 'Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable', 'Standard'],
      enable: ['High', 'Non-Dimming'],
     
    }
  };

  export { rules };