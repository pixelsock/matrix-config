import { productLine } from "./utils";

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
    'Inward Lighting': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Deco'],
    },
    'Thin Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line'],
    },
    'Wide Frame': {
      showAndClick: [],
      disable: [],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line'],
      
    },
    'Inset': {
      showAndClick: [],
      disable: ['Indirect'],
      enable: ['Direct', 'Both-Direct-And-Indirect'],
      excludeProductLines: ['Bright Line'],
     
    },
    'Edge': {
      showAndClick: [],
      disable: ['Night-Light', 'Both-Direct-And-Indirect'],
      enable: [ 'Direct', 'Indirect'],
      excludeProductLines: ['Bright Line'],
      
    },
    'Thin Frame && Edge': {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      excludeProductLines: ['Future', 'Classic', 'Bright Line'],
      
    },
    
    'No Frost': {
      showAndClick: ['Indirect'],
      disable: ['Direct', 'Both-Direct-And-Indirect', 'Night-Light', 'Anti-Fog'],
      enable: [],
      excludeProductLines: ['Bright Line'],
      
    },
    '! Round':{
      showAndClick: [],
      disable: [],
      enable: ['Horizontal-Mounting'],
      excludeProductLines: [],
    },
    
    'Round': {
      showAndClick: ['Vertical Mounting'],
      disable: ['Night-Light', 'Direct', 'Both-Direct-And-Indirect', 'Horizontal-Mounting'],
      enable: [],
      excludeProductLines: ['Deco', 'Future', 'Bright Line'],
      
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
      excludeProductLines: ['Deco', 'Future', 'Bright Line'],
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
      excludeProductLines: ['Future', 'Classic', 'Bright Line'],
    }
  };

  if (productLine === 'Future') {
    rules['Edge'] = {
      showAndClick: ['Indirect'],
      disable: ['Both-Direct-And-Indirect', 'Direct'],
      enable: [],
      excludeProductLines: ['Future', 'Classic'],
    };
  }

  export { rules };