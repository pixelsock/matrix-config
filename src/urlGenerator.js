// The purpose of this module is to generate a URL based on the user inputed product code. 
// TODO: This is not working yet and needs to be built out and tested.
function generateUrl(productCode) {
    // Define the base URL
    const baseUrl = "https://localhost:3001/configure/deco-webflow-only?";
  
    // Split the product code into components
    const [prefix, mirrorStyle, frameColor, width, height, lightOutput, dimming, orientation, mirrorControls, frameThickness] = productCode.split('-');
  
    // Define a mapping from SKU components to URL parameters
    const urlMapping = {
      'L': 'mirror+controls=Matrix+Touch+System',
      '01': 'mirror+style=Full+Frame+Inset',
      'B': 'frame+color=Black+Metal+%28BF%29',
      'T': 'frame+thickness=Thin+Frame',
      // ... other mappings ...
    };
  
    // Construct the URL using the mapping
    const urlComponents = [
      urlMapping[prefix],
      urlMapping[mirrorStyle],
      urlMapping[frameColor],
      `size=${width}%22x${height}%22`,
      // ... other components ...
    ];
  
    // Join the components into the final URL
    const url = baseUrl + urlComponents.join('&');
  
    return url;
  }
  
  const productCode = "L01-B-24-36-H-00-N-2-TR-BM-T";
  const url = generateUrl(productCode);
  console.log(url);
  