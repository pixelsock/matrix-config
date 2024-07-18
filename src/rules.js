import { productLine } from "./utils";

const rules = {
    'Wall Switch': {
      showAndClick: [],
      disable: ['Adjustable'],
      enable: ['High', 'Non-Dimming','Night-Light', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      excludeProductLines: ['Anti-Ligature'],
     
    },
    'Touch Sensor': {
      showAndClick: ['Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable'],
      enable: ['High', 'Non-Dimming', 'Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'Adjustable'],
      excludeProductLines: ['Anti-Ligature'],
    },
    'Matrix Touch System': {
      showAndClick: ['Adjustable', 'High', 'Non-Dimming'],
      disable: ['Anti-Fog', '5000', '4000', '3000', '3500','2700', 'Standard', 'ELV-Dimmable', '0-10-Dimmable'],
      enable: [],
      excludeProductLines: ['Anti-Ligature'],
    },
    'Inward Lighting': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Deco', 'Anti-Ligature'],
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line', 'Anti-Ligature'],
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line', 'Anti-Ligature'],
      
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
      excludeProductLines: ['Bright Line'],
     
    },
    'Edge': {
      showAndClick: [],
      disable: ['Both-Direct-And-Indirect'],
      enable: [ 'Direct', 'Indirect'],
      excludeProductLines: ['Bright Line', 'Anti-Ligature'],
      
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line', 'Anti-Ligature'],
      
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Anti-Fog'],
      enable: [],
      excludeProductLines: ['Bright Line', 'Anti-Ligature'],
      
    },
    '! Round':{
      showAndClick: [],
      disable: [],
      enable: ['Horizontal-Mounting'],
      excludeProductLines: [],
    },
    
    'Round': {
      showAndClick: ['Vertical Mounting'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Horizontal-Mounting'],
      enable: [],
      excludeProductLines: ['Deco', 'Future', 'Bright Line', 'Anti-Ligature'],
      
    },
   
    '! Round Full Frame Edge': {
      showAndClick: [],
      disable: [],
      enable: ['Matrix-Touch-System'],
      excludeProductLines: [],
    },

    'Round Full Frame Edge': {
      showAndClick: [],
      disable: ['Matrix-Touch-System'],
      enable: [],
      excludeProductLines: ['Deco', 'Future', 'Bright Line', 'Anti-Ligature'],
    },

    'Stadium Full Frame Inset': {
      showAndClick: ['Both-Direct-And-Indirect'],
      disable: ['Direct','Indirect'],
      enable: ['Both-Direct-And-Indirect'],
      excludeProductLines: ['Deco', 'Future', 'Bright Line', 'Anti-Ligature'],
    },

    'Stadium Full Frame Edge': {
      showAndClick: ['Indirect'],
      disable: ['Direct','Both-Direct-And-Indirect'],
      enable: ['Indirect'],
      excludeProductLines: ['Deco', 'Future', 'Bright Line', 'Anti-Ligature'],
    },
    
 
    'Touch && Adjustable': {
      showAndClick: ['High', 'Non-Dimming'],
      disable: ['ELV-Dimmable', '0-10-Dimmable', 'Standard'],
      enable: [],
      excludeProductLines: ['Anti-Ligature'],
     
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
      excludeProductLines: ['Future', 'Classic', 'Bright Line', 'Anti-Ligature'],
    }
  };

  if (productLine === 'Future') {
    rules['Edge'] = {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line', 'Anti-Ligature'],
    };
  }

  export { rules };