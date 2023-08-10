const rules = {
    'Wall Switch': {
      showAndClick: [],
      disable: ['Adjustable'],
      enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      resetKey: [],
    },
    'Touch Sensor': {
      showAndClick: [],
      disable: ['Night-Light'],
      enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable', 'Adjustable'],
      resetKey: [],
    },
    'Matrix Touch System': {
      showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
      disable: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      enable: [],
      resetKey: ['color temperature'],
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      resetKey: ['mirror style'],
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      resetKey: ['mirror style'],
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
      resetKey: ['light direction'],
    },
    'Edge': {
      showAndClick: [],
      disable: ['Night Light', 'Both-Direct-And-Indirect'],
      enable: ['Direct', 'Indirect'],
      resetKey: [],
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      resetKey: ['mirror style'],
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
      enable: [],
      resetKey: [],
    },
    'Round': {
      showAndClick: ['Indirect', 'Vertical Mounting'],
      disable: ['Night Light', 'Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      resetKey: [],
    },
    'Adjustable': {
      showAndClick: ['High', 'Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable', 'Standard'],
      enable: [],
      resetKey: [],
    }
  };

  export { rules };