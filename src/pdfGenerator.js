import { jsPDF } from "jspdf";
import './fonts/Inter-Bold-bold.js';
import './fonts/Inter-Regular-normal.js';
import { skuMapping } from './skuGeneration';
import { isExcluded, productLine, isCustomSize } from './utils';




export function generatePdf(selectedOptions, buttonId) {
  const doc = new jsPDF();  
  setDocStyles(doc);
  renderHeader(doc);
  renderItemCode(doc);
  renderSkuAndDate(doc, selectedOptions);
  renderSelectedImage(doc);
  renderStyleDetails(doc, selectedOptions);
  renderFooter(doc);
  let skuString = $('#productSku').text();
  const filename = skuString + '.pdf';
 
  // Attach to submit button
  if (buttonId === 'newWindow') {
  doc.save(filename);
  } else if (buttonId === 'save') {
    doc.save(filename);
  }

  // Log the SKU for PDF
  console.log('SKU for PDF:', $('#productSku').text());

  
}



function setDocStyles(doc) {
  doc.setFont("Inter");
  doc.setTextColor(20, 20, 20);
  doc.setDrawColor(209, 209, 209);
  doc.setFillColor(239, 239, 239);
  doc.rect(0, 0, 210, 300, 'F'); // make the entire page this fill color
  doc.setCharSpace(0.25);
}

function renderHeader(doc) {
    // Header Start
    doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e2abfbd5f18f06696996ba_usa.png', 'PNG', 165, 3, 40, 5, 'right'); 
    doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e27f2a344c637a5c2038d4_logo.png', 'PNG', 5, 283, 33, 10);
    doc.setFont("Inter", "bold");
    drawHeaderLines(doc);
    // Header End
  }
  


function renderSkuAndDate(doc) {
   
  
      // Date
      doc.setFontSize(10);
      doc.setFont("Inter", "normal");
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      doc.text("Created @matrixmirrors.com on: " + month + "/" + day + "/" + year, 199, 69, 'right');

}


function renderSelectedImage(doc) {
  // Selected Image
  const photo = $('#selected-image').attr('src');
  const encodedPhotoURL = encodeURIComponent(photo);
  doc.addImage(encodedPhotoURL, 'JPEG', 46, 12, 65, 65);
}

function renderStyleDetails(doc, selectedOptions) {
    const skuString = $('#productSku').text();
    const productLine = $('#product-line').text();
    const skuStringNoDash = skuString.replace(/-/g, '');
    const skuStringFirstFour = skuStringNoDash.substring(0, 4);
    const styleDetails = productLine + ' ' + skuStringFirstFour;
    const mirrorStyleOption = selectedOptions.find(option => option.dataName === 'Mirror Style');
    const frameThicknessOption = !isExcluded('Frame Thickness') ? selectedOptions.find(option => option.dataName === 'Frame Thickness') : null;
    const lightDirectionOption = selectedOptions.find(option => option.dataName === 'Light Direction');
    const frameColorOption = !isExcluded('Frame Color') ? selectedOptions.find(option => option.dataName === 'Frame Color') : null;
  
    // Accessing the value property of frameColorOption, mirrorStyleOption, and lightDirectionOption
    const headerText = 'Your Custom Configuration For ' + productLine +
    (frameThicknessOption ? ' ' + frameThicknessOption.value : '') +
    (frameColorOption ? ' ' + frameColorOption.value : '') +
    ' ' + mirrorStyleOption.value + ' ' + lightDirectionOption.value;
    renderHeaderOpener(doc, headerText);
    renderStyleText(doc, styleDetails);
    renderSizeDetails(doc, selectedOptions);
    renderOtherDetails(doc, selectedOptions);
  }

  function renderHeaderOpener(doc, headerText) {
    doc.setFontSize(16);
    doc.setFont("Inter", "bold");
    const lines = doc.splitTextToSize(headerText, 85);
    let yPosition = 20;
    for (let i = 0; i < lines.length; i++) {
      doc.text(118, yPosition, lines[i], 'left');
      yPosition += 7; // Increment Y position for each line; you may adjust this value as needed
    }
    doc.setFontSize(12); // Reset Font Size
    doc.setFont("Inter", "normal");
  }


  
  function renderStyleText(doc, styleDetails) {
    doc.setFont("Inter", "bold");
    doc.setFontSize(65);
    doc.setCharSpace(0.25);
    doc.text(12, 10, styleDetails.toUpperCase(), null, -90);
    doc.setFontSize(10); // Reset Font Size
    doc.setFont("Inter", "normal");
  }

  function renderSizeDetails(doc, selectedOptions) {
    let sizeDetailsLabel = '';
    let sizeDetailsValue = '';
    let sizeDetailsSku = '';
  
    
    const mirrorStyleOption = selectedOptions.find(option => option.dataName === 'Mirror Style');
  
    const standardSizeOption = selectedOptions.find(option => option.dataName === 'Standard Size');
    const standardDiameterOption = selectedOptions.find(option => option.dataName === 'Standard Diameter');
   
    
    if (mirrorStyleOption && mirrorStyleOption.value.toLowerCase().includes('round') && isCustomSize ) {
      const diameterOption = selectedOptions.find(option => option.dataName === 'Diameter');
      sizeDetailsLabel = 'Diameter: ';
      sizeDetailsValue = diameterOption ? diameterOption.value + '"' : 'N/A';
      sizeDetailsSku = diameterOption ? '00' + diameterOption.value : 'N/A';
    } else if (standardSizeOption && standardSizeOption.value) {
      const [width, height] = standardSizeOption.value.split('x');
      sizeDetailsLabel = 'W: ';
      sizeDetailsValue = width + ' H: ' + height;
      sizeDetailsSku = width + height;
    } else if (standardDiameterOption && mirrorStyleOption.value.toLowerCase().includes('round') &&standardDiameterOption.value) {
      sizeDetailsLabel = 'Diameter: ';
      sizeDetailsValue = standardDiameterOption ? standardDiameterOption.value.substring(0, standardDiameterOption.value.indexOf('"')+1) : 'N/A';
      sizeDetailsSku = standardDiameterOption ? '00' + standardDiameterOption.value.substring(0, standardDiameterOption.value.indexOf('"')) : 'N/A';
    } else {
      const widthOption = selectedOptions.find(option => option.dataName === 'Width');
      const heightOption = selectedOptions.find(option => option.dataName === 'Height');
      const width = widthOption ? widthOption.value + '"' : 'N/A';
      const height = heightOption ? heightOption.value + '"': 'N/A';
      sizeDetailsLabel = 'W: ';
      sizeDetailsValue = width + ' H: ' + height;
      sizeDetailsSku = width + '-' + height;
    }
  
    const sizeSku = sizeDetailsSku.replace(/\"/g, '')
    addDetail(doc, sizeDetailsValue, 50, 201, sizeDetailsLabel); // Start at 75
    addSku(doc, sizeSku, 4);

    
  }

  const circlePositions = [
    { first: { x: 50, y: 110, gap: 5}, second: { x: 52, y: 163 } },
    { first: { x: 65, y: 110, gap: 15}, second: { x: 102, y: 163 } },
    { first: { x: 80, y: 110, gap: 5}, second: { x: 150, y: 163 } },
    { first: { x: 100, y:110, gap: 25 }, second: { x: 52, y: 193 } },
    { first: { x: 120, y:110, gap: 5 }, second: { x: 102, y: 193 } },
    { first: { x: 135, y:110, gap: 15 }, second: { x: 150, y: 193 } },
    { first: { x: 150, y:110, gap: 5 }, second: { x: 52, y: 223 } },
    { first: { x: 160, y:110, gap: 5 }, second: { x: 102, y: 223 } },
    { first: { x: 175, y:110, gap: 15 }, second: { x: 150, y: 223 } },
  ];

  // push circles based on logic
  if (!isExcluded('Frame Color')) {
    circlePositions.push(
      { first: { x: 195, y:110, gap: 15, }, second: { x: 52, y: 253, } },
      { first: { x: 46, y:120.5, gap: 5, custom: ' ', circle:false}, second: { x: 103, y: 253, custom: '*', circle: false} },
     )} else {
      circlePositions.push(
        { first: { x: 195, y:110, gap: 5, custom: ' ', circle: false }, second: { x: 48, y: 253, custom: '*', circle: false} },
     )
    }
  function drawCirclesWithNumbers(doc) {
   
  
      doc.setFont("Inter", "bold");
      circlePositions.forEach((positions, index) => {
       
        // Calculate the line length based on the gap value
        const lineLength = positions.first.gap ? positions.first.gap / 2 : 2.5;
        // Allow for custom text to be rendered in the circle
        const firstText = positions.first.custom || (index + 1).toString();
        const secondText = positions.second.custom || (index + 1).toString();
        // set defaul for circle1 & 2
        const circle1 = positions.first.circle === false ? false : true;
        const circle2 = positions.second.circle === false ? false : true;
    
        // Draw a line for the first position only if it's not the last one
        if (index < circlePositions.length - 1) {
          doc.line(positions.first.x - lineLength, positions.first.y - 5, positions.first.x + lineLength, positions.first.y - 5);
        }
    
        // Draw the circle for the first position
        if (circle1) {
        doc.circle(positions.first.x, positions.first.y, 2.5);
        }
        doc.text(firstText, positions.first.x, positions.first.y + 1.5, 'center');
        
    
        // Draw the circle for the second position
        if (circle2) {
        doc.circle(positions.second.x, positions.second.y, 2.5);
        }
        doc.text(secondText, positions.second.x, positions.second.y + 1.5, 'center');
        
      });
    }

    
  
    function drawHeaderLines(doc) {
      // Draw vertical lines
      doc.line(43, 0, 43, 300); // 43 from the left
      doc.line(207, 0, 207, 300); // 207 from the left
      
      // Draw horizontal lines
      doc.line(43, 12, 210, 12); // Line to separate header
      doc.line(46, 0, 46, 77); // Left line of the selected image
      doc.line(111, 0, 111, 77); // Right line of the selected image 
      doc.line(114, 0, 114, 77); // Right line of the selected image
      doc.line(43, 77, 210, 77); // Line to separate header from selected image  
      doc.line(43, 78, 210, 78); // Second Line to separate header from selected image  
      doc.line(46, 135, 200, 135); // Line to take notes
      doc.line(46, 145, 200, 145); // Second Line to take notes
      doc.line(43, 153, 207, 153); // Line to separate header from notes
      doc.line(43, 154, 207, 154); // Line to separate header from notes
    }
  
    function renderItemCode(doc) {
      // Item Code Start
      doc.setCharSpace(0.5);
      doc.setFontSize(12);
      doc.text("ITEM CODE", 46, 90);
      doc.setFontSize(10);
      doc.text("Quantity Requested:", 190, 74, 'right');
      doc.text("Additional Specification Notes", 47, 122, 'left');
    doc.text("Type", 57, 164.5, 'left');
    doc.text("Style", 107, 164.5, 'left');
    doc.text("Lighitng Style", 155, 164.5, 'left');
    if (isCustomSize) {
    doc.text("Custom Size", 57, 194.5, 'left');
    } else {
      doc.text("Size", 57, 194.5, 'left');
    }
    doc.text("Output", 107, 194.5, 'left');
    doc.text("Color Temperature", 155, 194.5, 'left');
    doc.text("Driver", 57, 224.5, 'left');
    doc.text("Mounting", 107, 224.5, 'left');
    if (!isExcluded('Frame Color')) {
    doc.text("Frame Color", 155, 224.5, 'left');
    doc.text("Accessories", 57, 254.5, 'left');
    doc.text("Mirror Controls", 105, 254.5, 'left');
    } else {
      doc.text("Accessories", 155, 224.5, 'left');
      doc.text("Mirror Controls", 50, 254.5, 'left');
    }
    doc.setFontSize(10);
    doc.setTextColor(224, 113, 115); // set to red
    doc.setCharSpace(.25);
    doc.setFont("Inter", "normal");
    doc.text("(Mirrors with touch contols have to use a non dimming driver)", 46, 127, 'left');
    doc.setTextColor(20, 20, 20); // set to black
    // Item Code End
    
  
    // Draw cirlcles with numbers
    drawCirclesWithNumbers(doc);
  
  
    }
  
    function renderOtherDetails(doc, selectedOptions) {
      try {
        const defaultMaxWidth = 40;

    const details = [
        { label: 'Quantity', sku: false, value: selectedOptions.find(option => option.dataName === 'Quantity')?.value || 'N/A', x: 198, y: 74 },
        { circle: 2,value: selectedOptions.find(option => option.dataName === 'Mirror Style')?.value || 'N/A', x: 100, y: 171 },
        { circle: 3, value: selectedOptions.find(option => option.dataName === 'Light Direction')?.value || 'N/A', x: 148, y: 171 },
        // size is next but brought in from the previous function
        { circle: 5, value: selectedOptions.find(option => option.dataName === 'Light Output')?.value || 'N/A', x: 100, y: 201 },
        { circle: 6, value: selectedOptions.find(option => option.dataName === 'Color Temperature')?.value || 'N/A', x: 148, y: 201 },        
        { circle: 7, value: selectedOptions.find(option => option.dataName === 'Dimming')?.value || 'N/A', x: 50, y: 231 },
        { circle: 8, value: selectedOptions.find(option => option.dataName === 'Orientation')?.value || 'N/A', x: 100, y: 231 },
        
      ];

 

 // Conditionally add product line-specific options
  if (!isExcluded('Frame Color')) {
    if (productLine === 'Anti-Ligature') {
      details.push({ circle: 9, value: selectedOptions.find(option => option.dataName === 'Frame Color')?.value || 'N/A', x: 148, y: 231 },
      { maxWidth: 60, label: 'Accessories', circle: 10, value: selectedOptions.find(option => option.dataName === 'Accessories')?.value || 'N/A', x: 50, y: 261 },
          {  maxWidth: 95, sku: false, value: selectedOptions.find(option => option.dataName === 'Mirror Controls')?.value || 'Wall Switch Only', x: 105, y: 261 },
          );
    } else {
details.push({ circle: 9, value: selectedOptions.find(option => option.dataName === 'Frame Color')?.value || 'N/A', x: 148, y: 231 },
    { maxWidth: 60, label: 'Accessories', circle: 10, value: selectedOptions.find(option => option.dataName === 'Accessories')?.value || 'N/A', x: 50, y: 261 },
        {  maxWidth: 95, sku: false, value: selectedOptions.find(option => option.dataName === 'Mirror Controls')?.value || 'N/A', x: 105, y: 261 },
        );
  } } else {
    details.push({ label: 'Accessories', circle: 9, value: selectedOptions.find(option => option.dataName === 'Accessories')?.value || 'N/A', x: 148, y: 231 },
    {  maxWidth: 115, sku: false, value: selectedOptions.find(option => option.dataName === 'Mirror Controls')?.value || 'N/A', x: 50, y: 261 },);
  }
  if (!isExcluded('Frame Thickness')) {
    details.push({ circle: 1, value: selectedOptions.find(option => option.dataName === 'Frame Thickness')?.value || 'N/A', x: 50, y: 171 }
     );
  } else {
    details.push({ label: 'Product Line', circle: 1, value: productLine , x: 50, y: 171 });
  }
  
  if (details.some(detail => detail.value === 'Touch Sensor - Light Controls Only')) {
    //details.find(detail => detail.label === 'Mirror Controls Specs').value = 'Matrix Touch System is a triple touch system with built in ON/OFF/Dimming, Color Temperature, & Anti-Fog controls';
    const accessoriesDetail = details.find(detail => detail.label === 'Accessories');
    if (accessoriesDetail) {
      accessoriesDetail.value = 'Touch Sensor';
    }
}



  
      if (details.some(detail => detail.value === 'Matrix Touch System')) {
        
        const accessoriesDetail = details.find(detail => detail.label === 'Accessories');
        if (accessoriesDetail) {
          accessoriesDetail.value = 'Matrix Touch System';
        }
    }


    
      
    details.forEach(detail => {
  let skuText = ''; // Declare skuText here to make it accessible throughout this block

  // Provide default values if sku and label are not defined
  const sku = detail.hasOwnProperty('sku') ? detail.sku : true;
  const maxWidth = detail.maxWidth !== undefined ? detail.maxWidth : defaultMaxWidth;

  let text = detail.value;
  const dataName = detail.label || selectedOptions.find(option => option.value === detail.value)?.dataName;

  // Determine the SKU text for the current detail
  if (sku && skuMapping[dataName]) {
    // If the dataName is "Accessories", handle the custom logic
    if (dataName === 'Accessories') {
      selectedOptions.forEach(option => {
        if (option.dataName === 'Accessories' && skuMapping['Accessories'][option.value]) {
          skuText += skuMapping['Accessories'][option.value];
        }
      });
      // Special handling for "Matrix Touch System"
      if (details.some(detail => detail.value === 'Matrix Touch System' && skuText === 'NL')) {
        skuText = 'TL';
        text = 'Matrix Touch System & Night Light';
      } else if (details.some(detail => detail.value === 'Matrix Touch System' && skuText === '')) {
        skuText = 'TR'; // Use the appropriate SKU code
      } else if (skuText === 'NLAF') {
        skuText = 'AN'; // Both Night-Light and Anti-Fog selected
        text = 'Anti-Fog & Night Light';
      } else if (details.some(detail => detail.value === 'Touch Sensor - Light Controls Only')) {
        if (skuText === 'AF') {
        skuText = 'AT';
        text = 'Anti-Fog & Touch Sensor';
        } else if (skuText === 'NL') {
          skuText = 'NT';
          text = 'Night Light & Touch Sensor';
        } else {
          skuText = 'TS';
          text = 'Touch Sensor';
        } // Use the appropriate SKU code
      }
    } else {
      skuText = skuMapping[dataName][text]; // Use simple mapping for other categories
    }
    text = skuText + ' - ' + text;
  }

  if (text === 'Matrix Touch System') {
    text = 'Matrix Touch System is a triple touch system with built in ON/OFF/Dimming, Color Temperature, & Anti-Fog controls'; 
  }

  if (detail.value === 'N/A') {
    skuText = 'N/A';
    if (detail.label != 'Quantity') {
      text = 'N/A - Not Selected'
    }
    doc.setTextColor(224, 113, 115);
  } else {
    doc.setTextColor(0, 0, 0);
  }

  let lines = [text];
  if (maxWidth !== false) {
    lines = doc.splitTextToSize(text, maxWidth);
  }
  for (let i = 0; i < lines.length; i++) {
    doc.text(lines[i], detail.x, detail.y + (i * (detail.gap || 5)));
  }

  if (typeof skuText === 'undefined') {
    console.error('skuText is undefined for the detail:', detail);
  }

  // If a circle index is provided, render the SKU above the corresponding circle
  if (detail.circle !== undefined) {
    doc.setFontSize(18);
    doc.setFont("Inter", "bold");
    const circlePosition = circlePositions[detail.circle - 1]; // Get the position of the corresponding circle
    if (circlePosition) {
      doc.text(skuText, circlePosition.first.x, circlePosition.first.y - 7, 'center'); // Render SKU above the circle
    }
    doc.setFontSize(10);
    doc.setFont("Inter", "normal");
  }
});
    } catch (e) {
      console.error('Error in renderOtherDetails:', e);
    }
  }
  
  
  
  // Helper function to add text with different styles for label and value
  function addDetail(doc, value, x, y, label = '') {
    if (label) {
      doc.text(label, x, y);
      x += doc.getTextWidth(label) + 2; // Adding 2 units of space
    }
    if (value === 'N/A') {
      doc.setTextColor(224, 113, 115); // Setting the color to red
    }
   
    doc.setFont("Inter", "normal");
    doc.text(value, x, y);
    doc.setTextColor(20, 20, 20); // Resetting the color to default
  }

  // Helper Function Add Sku

  function addSku(doc, skuText, circleIndex) {
        doc.setFontSize(18);
        doc.setFont("Inter", "bold");
      const circlePosition = circlePositions[circleIndex - 1]; // Get the position of the corresponding circle
      if (circlePosition) {
        doc.text(skuText, circlePosition.first.x, circlePosition.first.y - 7, 'center'); // Render SKU above the circle
      }
      doc.setFontSize(10);
      doc.setFont("Inter", "normal");
  };

function renderFooter(doc) {
  // Footer
  doc.line(43, 280, 210, 280); // Line to separate footer
  doc.setFont("Inter", "bold");
  doc.setFontSize(8);
  doc.setCharSpace(0.25);
  let footerText = '6464 Warren Drive, Norcross, GA 30093 - (678) 580-5717 - matrixmirrors.com';
  doc.text(footerText.toUpperCase(), 118, 290, 'center');
}


