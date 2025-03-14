import { jsPDF } from "jspdf";
import './fonts/Inter-Bold-bold.js';
import './fonts/Inter-Regular-normal.js';
import { skuMapping } from './skuGeneration';
import { isExcluded, productLine } from './utils';


export class PDFGenerator { 
  constructor(selectedOptions) {
    this.selectedOptions = selectedOptions;
    this.doc = new jsPDF();
    // Define circle positions for item codes (matches the format in pdfGenerator.js)
    this.circlePositions = [
      { first: { x: 50, y: 110, gap: 5 }, second: { x: 52, y: 163 } },
      { first: { x: 65, y: 110, gap: 15 }, second: { x: 102, y: 163 } },
      { first: { x: 80, y: 110, gap: 5 }, second: { x: 150, y: 163 } },
      { first: { x: 100, y: 110, gap: 25 }, second: { x: 52, y: 193 } },
      { first: { x: 120, y: 110, gap: 5 }, second: { x: 102, y: 193 } },
      { first: { x: 135, y: 110, gap: 15 }, second: { x: 150, y: 193 } },
      { first: { x: 150, y: 110, gap: 5 }, second: { x: 52, y: 223 } },
      { first: { x: 160, y: 110, gap: 5 }, second: { x: 102, y: 223 } },
      { first: { x: 175, y: 110, gap: 15 }, second: { x: 150, y: 223 } },
      { first: { x: 190, y: 110, gap: 5 }, second: { x: 52, y: 253 } }, // Position for circle 10 (Accessories)
    ];
    
    // Store the product line for later use
  }

  generatePDF(buttonId) {
    console.log('Generating PDF with options:', this.selectedOptions, 'and buttonId:', buttonId);
    this.setStyles();
    this.renderHeader();
    this.renderItemCode();
    this.renderSkuAndDate();
    this.renderSelectedImage();
    this.renderStyleText();
    this.renderFooter();

    const skuString = $('#productSku').text();
    const filename = `${skuString}.pdf`;
    console.log('SKU for PDF:', skuString);

    if (buttonId === 'newWindow') {
      this.doc.output('dataurlnewwindow');
    } else if (buttonId === 'save') {
      this.doc.save(filename);
    }
  }

  setStyles() {
    const { doc } = this;
    doc.setFont("Inter");
    doc.setTextColor(20, 20, 20);
    doc.setDrawColor(209, 209, 209);
    doc.setFillColor(239, 239, 239);
    doc.rect(0, 0, 210, 300, 'F');
    doc.setCharSpace(0.25);
  }

  renderHeader() {
    const { doc } = this;
    doc.addImage(
      'https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e2abfbd5f18f06696996ba_usa.png',
      'PNG',
      165,
      3,
      40,
      5,
      'right'
    );
    doc.addImage(
      'https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e27f2a344c637a5c2038d4_logo.png',
      'PNG',
      5,
      283,
      33,
      10
    );
    doc.setFont("Inter", "bold");
    this.drawHeaderLines();
  }

  renderItemCode() {
    const { doc } = this;
    doc.setCharSpace(0.5);
    doc.setFontSize(12);
    doc.text("ITEM CODE", 46, 90);
    doc.setFontSize(10);
    doc.text("Quantity Requested:", 190, 74, 'right');
    doc.text("Additional Specification Notes", 47, 122, 'left');
    
    // Render section headings with singular terms
    doc.text("Type", 57, 164.5, 'left');
    doc.text("Style", 107, 164.5, 'left');
    doc.text("Lighting Style", 155, 164.5, 'left');
    
    doc.text("Glass Size", 57, 194.5, 'left');
    doc.text("Output", 107, 194.5, 'left');
    doc.text("Color Temperature", 155, 194.5, 'left');
    
    doc.text("Driver", 57, 224.5, 'left');
    doc.text("Mounting", 107, 224.5, 'left');
    doc.text("Frame Color", 155, 224.5, 'left');
    
    doc.text("Accessories", 57, 254.5, 'left');
    doc.text("* Mirror Controls", 107, 254.5, 'left');
    
    doc.setFontSize(10);
    doc.setTextColor(224, 113, 115); // set to red
    doc.setCharSpace(.25);
    doc.setFont("Inter", "normal");
    doc.text("(Mirrors with touch controls have to use a non dimming driver)", 46, 127, 'left');
    doc.setTextColor(20, 20, 20); // set to black
    
    // Draw circles with numbers
    this.drawCirclesWithNumbers();
    
    // Render details for suspended mirror
    this.renderSuspendedDetails();
  }

  renderSkuAndDate() {
    const { doc } = this;
    doc.setFontSize(10);
    doc.setFont("Inter", "normal");
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    doc.text(`Created @matrixmirrors.com on: ${month}/${day}/${year}`, 199, 69, 'right');
  }

  renderSelectedImage() {
    const { doc } = this;
    const photo = $('#selected-image').attr('src');
    const encodedPhotoURL = encodeURIComponent(photo);
    doc.addImage(encodedPhotoURL, 'JPEG', 46, 12, 65, 65);
  }

  renderStyleText() {
    const { doc } = this;
    const productLineText = $('#product-line').text();
    const skuString = $('#productSku').text();
    const skuStringNoDash = skuString.replace(/-/g, '');
    const skuStringFirstFour = skuStringNoDash.substring(0, 4);
    const styleDetails = `${productLineText} ${skuStringFirstFour}`;
    
    doc.setFont("Inter", "bold");
    doc.setFontSize(50);
    doc.setCharSpace(0.25);
    doc.text(styleDetails.toUpperCase(), 13, 10, null, -90);
    doc.setFontSize(10);
    doc.setFont("Inter", "normal");
    
    // Add configuration header
    const { selectedOptions } = this;
    const mirrorStyleOption = selectedOptions.find(o => o.dataName === 'Mirror Style');
    const frameThicknessOption = !isExcluded('Frame Thickness')
      ? selectedOptions.find(o => o.dataName === 'Frame Thickness')
      : null;
    const lightDirectionOption = selectedOptions.find(o => o.dataName === 'Light Direction');
    const frameColorOption = !isExcluded('Frame Color')
      ? selectedOptions.find(o => o.dataName === 'Frame Color')
      : null;

    const headerText = `Your Custom Configuration For ${productLineText} ${frameThicknessOption ? frameThicknessOption.value : ''} ${frameColorOption ? frameColorOption.value : ''} ${mirrorStyleOption ? mirrorStyleOption.value : ''} ${lightDirectionOption ? lightDirectionOption.value : ''}`;
    this.renderHeaderOpener(headerText);
  }

  renderHeaderOpener(headerText) {
    const { doc } = this;
    doc.setFontSize(16);
    doc.setFont("Inter", "bold");
    const lines = doc.splitTextToSize(headerText, 85);
    let yPosition = 20;
    lines.forEach(line => {
      doc.text(118, yPosition, line, 'left');
      yPosition += 7;
    });
    doc.setFontSize(12);
    doc.setFont("Inter", "normal");
  }

  renderSuspendedDetails() {
    const { doc, selectedOptions } = this;
    try {
      // Get values for each section
      // Use productLine from utils for consistency
      const framelessOption = selectedOptions.find(o => o.dataName === 'Frameless');
      let productLineText = framelessOption ? 'Frameless Suspended Mirror' : 'Suspended Mirror with Frame';
      
      // Get all the option values
      const mirrorStyleValue = selectedOptions.find(o => o.dataName === 'Mirror Style')?.value || 'N/A';
      const lightDirectionValue = selectedOptions.find(o => o.dataName === 'Light Direction')?.value || 'N/A';
      const outputValue = selectedOptions.find(o => o.dataName === 'Light Output')?.value || 'N/A';
      const temperatureValue = selectedOptions.find(o => o.dataName === 'Color Temperature')?.value || 'N/A';
      const dimmingValue = selectedOptions.find(o => o.dataName === 'Dimming')?.value || 'N/A';
      const orientationValue = selectedOptions.find(o => o.dataName === 'Orientation')?.value || 'N/A';
      const quantityValue = selectedOptions.find(o => o.dataName === 'Quantity')?.value || 'N/A';
      const frameColorRaw = selectedOptions.find(o => o.dataName === 'Frame Color')?.value || '';
      const frameColorValue = frameColorRaw.trim() === '' ? 'N/A' : frameColorRaw;
      
      // Extract style code - force 2 characters if it starts with a number
      let styleCode = $('#productSku').text().substring(1, 3) || 'N/A';
      
      // Get size text and SKU
      let sizeText = '';
      let sizeSku = '';
      const standardSizeOption = selectedOptions.find(o => o.dataName === 'Standard Size');
      
      // Use isCustomSize from utils.js to check if custom size is selected
      // Note: Check if we're in a custom size situation by checking for the checkbox
      const customSizeCheckbox = selectedOptions.find(o => o.dataName === 'Custom Size Checkbox');
      const isCustomSizeSelected = customSizeCheckbox && customSizeCheckbox.value === 'Custom-Size-Checkbox';

      if (standardSizeOption && standardSizeOption.value) {
        sizeText = standardSizeOption.value;
        sizeSku = standardSizeOption.value.replace(/[^0-9]/g, '');
      } else if (isCustomSizeSelected) {
        const widthOption = selectedOptions.find(o => o.dataName === 'Width');
        const heightOption = selectedOptions.find(o => o.dataName === 'Height');
        if (widthOption && heightOption && widthOption.value && heightOption.value) {
          sizeText = `Custom Size:\n${widthOption.value}" x ${heightOption.value}"`;
          sizeSku = `${widthOption.value}${heightOption.value}`;
        } else {
          sizeText = 'N/A';
        }
      } else {
        sizeText = 'N/A';
      }
      
      // Get accessories text
      const accessories = selectedOptions.filter(o => o.dataName === 'Accessories').map(o => o.value);
      const mirrorControls = selectedOptions.find(o => o.dataName === 'Mirror Controls')?.value || 'Wall Switch Only';
      
      let accessoriesSku = 'NA';
      let accessoriesText = 'None';
      
      // Use skuMapping for mirror controls instead of hardcoded values
      if (mirrorControls === 'Touch Sensor - Light Controls Only') {
        accessoriesSku = skuMapping['Mirror Controls'][mirrorControls] || 'TS';
        accessoriesText = 'Touch Sensor';
        
        if (accessories.includes('Anti-Fog') && accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['Touch Sensors && Anti-Fog && Night-Light'] || 'AL';
          accessoriesText = 'Anti-Fog, Night Light & Touch Sensor';
        } else if (accessories.includes('Anti-Fog')) {
          accessoriesSku = skuMapping['Accessories']['Anti-Fog && Touch Sensors'] || 'AT';
          accessoriesText = 'Anti-Fog & Touch Sensor';
        } else if (accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['Night Light && Touch Sensors'] || 'NT';
          accessoriesText = 'Night Light & Touch Sensor';
        }
      } else if (mirrorControls === 'CCTSync') {
        accessoriesSku = skuMapping['Mirror Controls'][mirrorControls] || 'CT';
        accessoriesText = 'CCT Sync Switch';
        
        if (accessories.includes('Anti-Fog') && accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['CCTSync && Anti-Fog && Night-Light'] || 'CL';
          accessoriesText = 'CCT Sync, Anti-Fog & Night Light';
        } else if (accessories.includes('Anti-Fog')) {
          accessoriesSku = skuMapping['Accessories']['CCTSync && Anti-Fog'] || 'CF';
          accessoriesText = 'CCT Sync & Anti-Fog';
        } else if (accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['CCTSync && Night-Light'] || 'CN';
          accessoriesText = 'CCT Sync & Night Light';
        }
      } else {
        if (accessories.includes('Anti-Fog') && accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['Anti-Fog && Night-Light'] || 'AN';
          accessoriesText = 'Anti Fog & Night Light';
        } else if (accessories.includes('Anti-Fog')) {
          accessoriesSku = skuMapping['Accessories']['Anti-Fog'] || 'AF';
          accessoriesText = 'Anti-Fog Demister';
        } else if (accessories.includes('Night-Light')) {
          accessoriesSku = skuMapping['Accessories']['Night-Light'] || 'NL';
          accessoriesText = 'Night Light';
        }
      }
      
      // Output wattage info
      let outputDetails = '';
      if (outputValue.includes('Standard')) {
        outputDetails = '(50 lumens/ft, 4.5 watts/ft)';
      } else if (outputValue.includes('High')) {
        outputDetails = '(750 lumens/ft, 8 watts/ft)';
      }
      
      // Add driver notes if needed
      let driverNotes = '';
      if (dimmingValue.includes('Non-Dimming')) {
        driverNotes = '(Mirrors with touch sensor have to use a non-dimming driver)';
      }
      
      // Use skuMapping for frame color
      let frameColorSku = 'N/A';
      
      // Try to find exact match first
      if (frameColorValue !== 'N/A' && skuMapping['Frame Color'][frameColorValue]) {
        frameColorSku = skuMapping['Frame Color'][frameColorValue];
      } 
      // If no exact match, try to find a partial match
      else if (frameColorValue !== 'N/A') {
        for (const key of Object.keys(skuMapping['Frame Color'])) {
          if (frameColorValue.includes(key.split(' ')[0])) {
            frameColorSku = skuMapping['Frame Color'][key];
            break;
          }
        }
      }
      
      // Define all the details to render
      const details = [
        // Type (1)
        { skuText: skuMapping['Product Line']['Suspended'] || 'F', value: productLineText, x: 50, y: 171, circle: 1 },
        
        // Style (2)
        { skuText: styleCode, value: mirrorStyleValue, x: 102, y: 171, circle: 2 },
        
        // Lighting Style (3)
        { skuText: lightDirectionValue !== 'N/A' && skuMapping['Light Direction'][lightDirectionValue] ? 
                  skuMapping['Light Direction'][lightDirectionValue] : 
                  (lightDirectionValue.toLowerCase().startsWith('d') ? 'd' : ''), 
          value: lightDirectionValue, x: 150, y: 171, circle: 3 },
        
        // Glass Size (4)
        { skuText: sizeSku, value: sizeText, x: 50, y: 201, circle: 4 },
        
        // Output (5)
        { skuText: outputValue !== 'N/A' && skuMapping['Light Output'][outputValue] ? 
                  skuMapping['Light Output'][outputValue] : 
                  (outputValue.startsWith('S') ? 'S' : 'H'), 
          value: `${outputValue} ${outputDetails}`, x: 102, y: 201, circle: 5 },
        
        // Color Temperature (6)
        { skuText: temperatureValue !== 'N/A' && skuMapping['Color Temperature'][temperatureValue] ? 
                  skuMapping['Color Temperature'][temperatureValue] : 
                  (temperatureValue.includes('Adjustable') ? '00' : 
                  (temperatureValue.includes('2700') ? '27' :
                  (temperatureValue.includes('3000') ? '30' :
                  (temperatureValue.includes('3500') ? '35' :
                  (temperatureValue.includes('4000') ? '40' :
                  (temperatureValue.includes('5000') ? '50' : '')))))),
          value: temperatureValue, x: 150, y: 201, circle: 6 },
        
        // Driver (7)
        { skuText: dimmingValue !== 'N/A' && skuMapping['Dimming'][dimmingValue] ? 
                  skuMapping['Dimming'][dimmingValue] : 
                  (dimmingValue.includes('0-10') ? 'V' : 
                  (dimmingValue.includes('ELV') ? 'E' :
                  (dimmingValue.includes('Non-Dimming') ? 'N' : ''))),
          value: `${dimmingValue}`, x: 50, y: 231, circle: 7 },
        
        // Mounting (8)
        { skuText: orientationValue !== 'N/A' && skuMapping['Orientation'][orientationValue] ? 
                  skuMapping['Orientation'][orientationValue] : 
                  (orientationValue.includes('Vertical') ? '1' : '2'), 
          value: orientationValue, x: 102, y: 231, circle: 8 },
        
        // Frame Color (9)
        { skuText: frameColorSku, 
          value: frameColorValue, x: 150, y: 231, circle: 9 },
        
        // Accessories (10) - now before Mirror Controls
        { skuText: accessoriesSku, value: accessoriesText, x: 50, y: 261, circle: 10 },
        
        // Mirror Controls (not numbered)
        { skuText: '', value: mirrorControls, x: 107, y: 261, maxWidth: 70 },
        
        // Quantity (not numbered)
        { skuText: '', value: quantityValue, x: 198, y: 74, maxWidth: 30 }
      ];
      
      // Render each detail
      details.forEach(detail => {
        // Determine if SKU or value is exactly 'N/A' after trimming
        const isSkuNA = detail.skuText === 'N/A';
        const isValueNA = detail.value && typeof detail.value === 'string' ? detail.value.trim() === 'N/A' : false;
        let text = detail.value;
        
        // If SKU text exists and value is not 'N/A', prepend it
        if (detail.skuText && !isValueNA && detail.skuText.trim() !== 'N/A') {
          text = `${detail.skuText} - ${text}`;
        }
        
        // Set text color based on whether the value is 'N/A'
        if (isValueNA) {
          text = 'N/A';
          doc.setTextColor(224, 113, 115); // Red
          doc.setFont("Inter", "normal");
        } else {
          doc.setTextColor(0, 0, 0); // Black
          doc.setFont("Inter", "normal");
        }
        
        const maxWidth = detail.maxWidth || 40;
        const lines = doc.splitTextToSize(text, maxWidth);
        lines.forEach((line, i) => {
          if (line && typeof line === 'string' && (line.trim() === 'N/A' || line.trim().includes('N/A'))) {
            doc.setTextColor(224, 113, 115);
          } else {
            doc.setTextColor(0, 0, 0);
          }
          doc.text(line, detail.x, detail.y + (i * 5));
        });
        
        // Draw the SKU on the circle if needed
        if (detail.circle && detail.skuText && !isValueNA && !isSkuNA) {
          doc.setFontSize(18);
          doc.setFont("Inter", "bold");
          const circlePosition = this.circlePositions[detail.circle - 1];
          if (circlePosition) {
            doc.text(detail.skuText, circlePosition.first.x, circlePosition.first.y - 7, 'center');
          }
          doc.setFontSize(10);
          doc.setFont("Inter", "normal");
        }
        
        // Reset text color after each detail
        doc.setTextColor(0, 0, 0);
      });
    } catch (e) {
      console.error('Error rendering suspended details:', e);
    }
  }

  drawCirclesWithNumbers() {
    const { doc, circlePositions } = this;
    
    doc.setFont("Inter", "bold");
    // Need to render 10 circles now (added Frame Color and Accessories)
    circlePositions.forEach((positions, index) => {
      if (index < 10) { // Draw 10 circles instead of 9
        // Calculate the line length based on the gap value
        const lineLength = positions.first.gap ? positions.first.gap / 2 : 2.5;
        
        // Draw a line for the first position - removed condition to draw line for all 10 circles
        doc.line(positions.first.x - lineLength, positions.first.y - 5, positions.first.x + lineLength, positions.first.y - 5);
        
        // Draw the circle and number for the first position (top row)
        doc.circle(positions.first.x, positions.first.y, 2.5);
        doc.text((index + 1).toString(), positions.first.x, positions.first.y + 1.5, 'center');
        
        // Draw the circle and number for the second position (grid position)
        doc.circle(positions.second.x, positions.second.y, 2.5);
        doc.text((index + 1).toString(), positions.second.x, positions.second.y + 1.5, 'center');
      }
    });
  }

  renderFooter() {
    const { doc } = this;
    doc.line(43, 280, 210, 280);
    doc.setFont("Inter", "bold");
    doc.setFontSize(8);
    doc.setCharSpace(0.25);
    const footerText = '6464 Warren Drive, Norcross, GA 30093 - (678) 580-5717 - matrixmirrors.com';
    doc.text(footerText.toUpperCase(), 118, 290, 'center');
  }

  drawHeaderLines() {
    const { doc } = this;
    // Vertical lines
    doc.line(43, 0, 43, 300);
    doc.line(207, 0, 207, 300);
    // Horizontal lines for header and selected image sections
    doc.line(43, 12, 210, 12);
    doc.line(46, 0, 46, 77);
    doc.line(111, 0, 111, 77);
    doc.line(114, 0, 114, 77);
    doc.line(43, 77, 210, 77);
    doc.line(43, 78, 210, 78);
    doc.line(46, 135, 200, 135);
    doc.line(46, 145, 200, 145);
    doc.line(43, 153, 207, 153);
    doc.line(43, 154, 207, 154);
  }
}

export function generateSuspendedPdf(selectedOptions, buttonId) {
  const generator = new PDFGenerator(selectedOptions);
  generator.generatePDF(buttonId);
}