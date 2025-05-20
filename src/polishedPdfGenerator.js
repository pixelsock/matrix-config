import { jsPDF } from "jspdf";
import './fonts/Inter-Bold-bold.js';
import './fonts/Inter-Regular-normal.js';

export function generatePolishedPdf(selectedOptions, buttonId) {
  console.log('Generating Polished Mirror PDF with options:', selectedOptions);
  const doc = new jsPDF();  
  setDocStyles(doc);
  renderHeader(doc);
  renderItemCode(doc, selectedOptions);
  renderSkuAndDate(doc);
  renderSelectedImage(doc);
  renderPolishedDetails(doc, selectedOptions);
  renderFooter(doc);
  
  let skuString = $('#productSku').text();
  const filename = skuString + '.pdf';
 
  // Save the PDF
  doc.save(filename);
}

function setDocStyles(doc) {
  doc.setFont("Inter");
  doc.setTextColor(20, 20, 20);
  doc.setDrawColor(209, 209, 209);
  doc.setFillColor(239, 239, 239);
  doc.rect(0, 0, 210, 300, 'F');
  doc.setCharSpace(0.25);
}

function renderHeader(doc) {
  doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e2abfbd5f18f06696996ba_usa.png', 'PNG', 165, 3, 40, 5, 'right'); 
  doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e27f2a344c637a5c2038d4_logo.png', 'PNG', 5, 283, 33, 10);
  doc.setFont("Inter", "bold");
  drawHeaderLines(doc);
}

function drawHeaderLines(doc) {
  // Vertical lines
  doc.line(43, 0, 43, 300);
  doc.line(207, 0, 207, 300);
  
  // Horizontal lines
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


function renderSkuAndDate(doc) {
   
  
    // Date
    doc.setFontSize(8);
    doc.setFont("Inter", "normal");
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    doc.text("Created @matrixmirrors.com on: " + month + "/" + day + "/" + year, 118, 69, 'left');

}

function renderSelectedImage(doc) {
  const imgEl = document.getElementById('selected-image');
  if (imgEl) {
    doc.addImage(imgEl, 'JPEG', 46, 12, 65, 65);
  }
}

function renderItemCode(doc, selectedOptions) {
  doc.setCharSpace(0.5);
  doc.setFontSize(12);
  doc.text("ITEM CODE", 46, 90);
  doc.setFontSize(10);
 
  // Add quantity from selectedOptions
  const quantityOption = selectedOptions.find(option => option.dataName === 'Quantity');
  const quantity = quantityOption?.value || 'N/A';
  doc.text(`Quantity Requested: ${quantity}`, 118, 74, 'left');
  doc.text("Additional Specification Notes", 47, 122, 'left');
}

function renderPolishedDetails(doc, selectedOptions) {
  // Header
  const headerText = 'Your Custom Configuration For Polished Mirror';
  renderHeaderOpener(doc, headerText);
  
  // Side text
  renderStyleText(doc, 'POLISHED MIRROR');

  // Get selected values
  const selectedSize = getSizeText(selectedOptions);
  const selectedHanging = selectedOptions.find(opt => opt.dataName === 'Hanging Techniques')?.value || 'N/A';
  const selectedOrientation = selectedOptions.find(opt => opt.dataName === 'Orientation')?.value || 'N/A';

  // Define top components
  const topComponents = [
    { value: 'MIRR', x: 55, lineWidth: 10 },
    { value: selectedSize === 'N/A' ? 'N/A' : selectedSize, x: 90, lineWidth: 10 },
    { value: getHangingTechniqueCode(selectedOptions), x: 125, lineWidth: 10 },
    { value: getOrientationCode(selectedOptions), x: 160, lineWidth: 10 }
  ];

  // Define bottom circles with custom positions and descriptions
  const bottomCircles = [
    { 
      number: 1, 
      x: 50, 
      y: 163, 
      label: "Type",
      labelX: 55, 
      labelY: 164.5,
      description: "MIRR - Clear silver mirror, 1/4\" thick, pencil polish, copper-free (corrosion resistant), ANSI Z97.1 rated",
      maxWidth: 130
    },
    { 
      number: 2, 
      x: 50, 
      y: 193, 
      label: "Glass Size",
      labelX: 55, 
      labelY: 194.5,
      description: selectedSize,
      maxWidth: 40
    },
    { 
      number: 3, 
      x: 90, 
      y: 193, 
      label: "Mounting",
      labelX: 95, 
      labelY: 194.5,
      description: selectedHanging,
      maxWidth: 40
    },
    { 
      number: 4, 
      x: 145, 
      y: 193, 
      label: "Orientation",
      labelX: 150, 
      labelY: 194.5,
      description: selectedOrientation,
      maxWidth: 40
    }
  ];

  // Draw SKU codes
  doc.setFontSize(18);
  doc.setFont("Inter", "bold");
  topComponents.forEach((component) => {
    if (component.value === 'N/A') {
      doc.setTextColor(224, 113, 115); // Red color for N/A
    } else {
      doc.setTextColor(20, 20, 20); // Default color
    }
    doc.text(component.value, component.x, 103, 'center');
  });
  doc.setTextColor(20, 20, 20); // Reset to default color

  // Draw top circles and numbers
  doc.setFontSize(10);
  topComponents.forEach((component, index) => {
    // Top circle
    doc.circle(component.x, 110, 2.5);
    doc.text((index + 1).toString(), component.x, 111.5, 'center');

    // Draw individual line above each component
    doc.line(component.x - component.lineWidth, 105, component.x + component.lineWidth, 105);
  });

  // Draw bottom circles, numbers, and labels with descriptions
  doc.setFont("Inter", "bold");
  bottomCircles.forEach(circle => {
    // Draw circle
    doc.circle(circle.x, circle.y, 2.5);
    doc.text(circle.number.toString(), circle.x, circle.y + 1.5, 'center');
    
    // Draw label
    doc.text(circle.label, circle.labelX, circle.labelY, 'left');

    // Draw description with wrapping
    doc.setFont("Inter", "normal");
    const lines = doc.splitTextToSize("• " + circle.description, circle.maxWidth);
    lines.forEach((line, index) => {
      doc.text(line, circle.labelX, circle.labelY + 5 + (index * 5), 'left');
    });

    doc.setFont("Inter", "bold");
  });
}

function renderHeaderOpener(doc, headerText) {
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

function renderStyleText(doc, text) {
  doc.setFont("Inter", "bold");
  doc.setFontSize(75);
  doc.setCharSpace(0.25);
  doc.text(12, 10, text, null, -90);
  doc.setFontSize(10);
  doc.setFont("Inter", "normal");
}

function renderValues(doc, selectedOptions) {
  const values = [
    { x: 50, y: 171, value: getSizeText(selectedOptions) },
    { x: 100, y: 171, value: selectedOptions.find(opt => opt.dataName === 'Hanging Techniques')?.value || 'N/A' },
    { x: 150, y: 171, value: selectedOptions.find(opt => opt.dataName === 'Orientation')?.value || 'N/A' }
  ];

  doc.setFont("Inter", "normal");
  values.forEach(item => {
    if (item.value === 'N/A') {
      doc.setTextColor(224, 113, 115);
    } else {
      doc.setTextColor(0, 0, 0);
    }
    doc.text(item.value, item.x, item.y, 'center');
  });
  doc.setTextColor(0, 0, 0);
}

function getSizeText(selectedOptions) {
  const standardSize = selectedOptions.find(opt => opt.dataName === 'Standard Size')?.value;
  if (standardSize) {
    return standardSize.replace(/[^0-9]/g, '');
  }
  
  const width = selectedOptions.find(opt => opt.dataName === 'Width')?.value;
  const height = selectedOptions.find(opt => opt.dataName === 'Height')?.value;
  if (width && height) {
    return `${width}${height}`;
  }
  return 'N/A';
}

function getHangingTechniqueCode(selectedOptions) {
  const technique = selectedOptions.find(opt => opt.dataName === 'Hanging Techniques')?.value;
  const codes = {
    'J-Channels': 'J',
    'Sliver Z-Brackets': 'Z',
    'Anodized Hanger Clips': 'C'
  };
  return codes[technique] || 'N/A';
}

function getOrientationCode(selectedOptions) {
  const orientation = selectedOptions.find(opt => opt.dataName === 'Orientation')?.value;
  const codes = {
    'Vertical Mounting': '1',
    'Horizontal Mounting': '2'
  };
  return codes[orientation] || 'N/A';
}

function renderFooter(doc) {
  doc.line(43, 280, 210, 280);
  doc.setFont("Inter", "bold");
  doc.setFontSize(8);
  doc.setCharSpace(0.25);
  doc.text('6464 Warren Drive, Norcross, GA 30093 - (678) 580-5717 - matrixmirrors.com'.toUpperCase(), 118, 290, 'center');
} 