import { jsPDF } from "jspdf";
import './fonts/Inter-Bold-bold.js';
import './fonts/Inter-Regular-normal.js';

export function generatePolishedPdf(selectedOptions, buttonId) {
  console.log('Generating Polished Mirror PDF with options:', selectedOptions);
  const doc = new jsPDF();  
  setDocStyles(doc);
  renderHeader(doc);
  renderItemCode(doc);
  renderSkuAndDate(doc);
  renderSelectedImage(doc);
  renderPolishedDetails(doc, selectedOptions);
  renderFooter(doc);
  
  let skuString = $('#productSku').text();
  const filename = skuString + '.pdf';
 
  if (buttonId === 'newWindow' || buttonId === 'save') {
    doc.save(filename);
  }
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
  doc.setFontSize(10);
  doc.setFont("Inter", "normal");
  var date = new Date();
  doc.text("Created @matrixmirrors.com on: " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear(), 199, 69, 'right');
}

function renderSelectedImage(doc) {
  const photo = $('#selected-image').attr('src');
  const encodedPhotoURL = encodeURIComponent(photo);
  doc.addImage(encodedPhotoURL, 'JPEG', 46, 12, 65, 65);
}

function renderItemCode(doc) {
  doc.setCharSpace(0.5);
  doc.setFontSize(12);
  doc.text("ITEM CODE", 46, 90);
  doc.setFontSize(10);
  doc.text("Quantity Requested:", 190, 74, 'right');
  doc.text("Additional Specification Notes", 47, 122, 'left');
}

function renderPolishedDetails(doc, selectedOptions) {
  // Header
  const headerText = 'Your Custom Configuration For Polished Mirror';
  renderHeaderOpener(doc, headerText);
  
  // Side text
  renderStyleText(doc, 'MIRR');

  // Draw SKU codes and circles
  const skuComponents = [
    { value: 'MIRR', x: 50 },
    { value: getSizeText(selectedOptions), x: 100 },
    { value: getHangingTechniqueCode(selectedOptions), x: 150 },
    { value: getOrientationCode(selectedOptions), x: 200 }
  ];

  // Draw SKU codes
  doc.setFontSize(16);
  doc.setFont("Inter", "bold");
  skuComponents.forEach((component, index) => {
    if (component.value !== 'N/A') {
      doc.text(component.value, component.x, 103, 'center');
    }
  });

  // Draw circles and numbers
  doc.setFontSize(10);
  skuComponents.forEach((component, index) => {
    // Top circle
    doc.circle(component.x, 110, 2);
    doc.text((index + 1).toString(), component.x, 111.5, 'center');

    // Bottom circle
    doc.circle(component.x, 163, 2);
    doc.text((index + 1).toString(), component.x, 164.5, 'center');

    // Connecting line (except for last component)
    if (index < skuComponents.length - 1) {
      doc.line(component.x + 3, 110, component.x + 37, 110);
    }
  });

  // Labels
  doc.setFont("Inter", "normal");
  doc.text("Size", 50, 175, 'center');
  doc.text("Hanging Technique", 100, 175, 'center');
  doc.text("Mounting Orientation", 150, 175, 'center');

  // Values
  renderValues(doc, selectedOptions);
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
  doc.setFontSize(85);
  doc.setCharSpace(1);
  doc.text(15, 10, text, null, -90);
  doc.setFontSize(10);
  doc.setFont("Inter", "normal");
}

function renderValues(doc, selectedOptions) {
  const values = [
    { x: 50, y: 185, value: getSizeText(selectedOptions) },
    { x: 100, y: 185, value: selectedOptions.find(opt => opt.dataName === 'Hanging Techniques')?.value || 'N/A' },
    { x: 150, y: 185, value: selectedOptions.find(opt => opt.dataName === 'Orientation')?.value || 'N/A' }
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