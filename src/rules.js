const rules = {
    'Wall Switch': {
      showAndClick: [],
      disable: ['Adjustable'],
      enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      resetKey: ['Color Temperature'],
      resetApplied: false,
    },
    'Touch Sensor': {
      showAndClick: [],
      disable: ['Night-Light'],
      enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable', 'Adjustable'],
      resetKey: [],
      resetApplied: false,
    },
    'Matrix Touch System': {
      showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
      disable: ['Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      enable: [],
      resetKey: [],
      resetApplied: false,
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      resetKey: ['Mirror Style'],
      resetApplied: false,
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      resetKey: ['Mirror Style'],
      resetApplied: false,
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
      resetKey: ['Light Direction'],
      resetApplied: false,
    },
    'Edge': {
      showAndClick: [],
      disable: ['Night Light', 'Both-Direct-And-Indirect'],
      enable: ['Direct', 'Indirect'],
      resetApplied: false,
      resetKey: [],
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      resetKey: ['Mirror Style'],
      resetApplied: false,
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
      enable: [],
      resetKey: [],
      resetApplied: false,
    },
    'Round': {
      showAndClick: ['Indirect', 'Vertical Mounting'],
      disable: ['Night Light', 'Direct', 'Both-Direct-And-Indirect'],
      enable: [],
      resetKey: [],
      resetApplied: false,
    },
    'Adjustable': {
      showAndClick: ['High', 'Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable', 'Standard'],
      enable: ['High', 'Non-Dimming'],
      resetKey: [],
      resetApplied: false,
    }
  };

  export { rules };