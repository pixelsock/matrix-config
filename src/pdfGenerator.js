import { jsPDF } from "jspdf";
import './fonts/Inter-Bold-bold.js';
import './fonts/Inter-Regular-normal.js'




export function generatePdf(selectedOptions) {
  const doc = new jsPDF();
 
    doc.setFont("Inter");
    doc.setTextColor(20, 20, 20);


  // Header
  doc.setFillColor(239, 239, 239);
  // make the entire page this fill color

  doc.rect(0, 0, 210, 300, 'F'); // make the entire page this fill color
  doc.setFillColor(209, 209, 209);
  doc.line(0, 50, 210, 50, 'F'); // Line to separate header

  // SKU
  const skuString = $('#productSku').text();
  doc.setFontSize(16);
  doc.setFont("Inter", "bold");
  doc.text(skuString, 200, 38, 'right');

    // Date
    doc.setFontSize(12);
    doc.setFont("Inter", "normal");
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    doc.text("Date: " + month + "/" + day + "/" + year, 200, 45, 'right');

  // Selected Image
  const photo = $('#selected-image').attr('src');
  const encodedPhotoURL = encodeURIComponent(photo);
  doc.addImage(encodedPhotoURL, 'JPEG', 115, 57, 80, 80);

  // Logo Image
  doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/639c0e32c9a6a2d8f219ec71_download.png', 'PNG', 5, 0, 40, 40);
  doc.setFont("Inter", "bold");


  // Footer
  doc.setFillColor(239, 239, 239);
  doc.rect(0, 280, 210, 20, 'F');
  doc.setFillColor(209, 209, 209);
  doc.line(0, 280, 210, 280, 'F'); // Line to separate footer

  // URL of the image
const bottomImageURL = 'https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e19b0c14f492b3df6818e3_bottom_image.jpg';

// Add the image to the PDF

doc.addImage(bottomImageURL, 'JPEG', 10, 148.5, 190, 138); // Adjust the position and size as needed
doc.line(0, 148.5, 210, 148.5, 'F'); // Line to separate image




  // Collect values for Frame Color, Frame Thickness, and Mirror Style
  let frameColor = '';
  let frameThickness = '';
  let mirrorStyle = '';
  let productLine = $('#product-line').text();

  selectedOptions.forEach(option => {
    const { dataName, value } = option;
    if (dataName === 'Frame Color') frameColor = value;
    if (dataName === 'Frame Thickness') frameThickness = value;
    if (dataName === 'Mirror Style') mirrorStyle = value;
  });

// Set up column positions
const col1 = 15;
const col2 = 60;
const col3 = 110;

// Title for Mirror Specs
doc.setFont("Inter", "bold");
doc.setFontSize(15);
doc.setCharSpace(1);
doc.text('MIRROR SPECS', col1, 63);
// add an underline under mirror specs
doc.line(col1, 66, col2, 66);




// Style Details
doc.setFont("Inter");
doc.setFontSize(24);
doc.setCharSpace(.25)
const styleDetails = productLine + ' ' + frameThickness + ' ' + frameColor + ' ' + mirrorStyle;
doc.text(doc.splitTextToSize(styleDetails.toUpperCase(), 148), 197, 15, 'right'); // Wrapped text

// Reset Font Size
doc.setFontSize(12);

// Function to add text with different styles for label and value
function addDetail(label, value, x, y) {
    doc.setFont("Inter", "bold");
    doc.text(label, x, y);
    const labelWidth = doc.getTextWidth(label) + 2; // Adding 2 units of space
    if (value === 'N/A') {
      doc.setTextColor(224, 113, 115); // Setting the color to red
    }
    doc.setFont("Inter", "normal");
    doc.text(value, x + labelWidth, y);
    doc.setTextColor(20, 20, 20); // Resetting the color to default
  }
  
  // Size Details
  let sizeDetailsLabel = '';
  let sizeDetailsValue = '';
  if (mirrorStyle.toLocaleLowerCase().includes('round')) {
    const diameterOption = selectedOptions.find(option => option.dataName === 'Diameter');
    sizeDetailsLabel = 'Size: ';
    sizeDetailsValue = diameterOption ? diameterOption.value : 'N/A';
  } else if (selectedOptions.find(option => option.dataName === 'Standard Size')) {
    const standardSizeOption = selectedOptions.find(option => option.dataName === 'Standard Size');
    if (standardSizeOption && standardSizeOption.value) {
      const [width, height] = standardSizeOption.value.split('x');
      sizeDetailsLabel = 'Width: ';
      sizeDetailsValue = width + ' | Height: ' + height;
    } else {
      sizeDetailsLabel = 'Width: ';
      sizeDetailsValue = 'N/A | Height: N/A';
    }
  } else {
    const widthOption = selectedOptions.find(option => option.dataName === 'Width');
    const heightOption = selectedOptions.find(option => option.dataName === 'Height');
    const width = widthOption ? widthOption.value : 'N/A';
    const height = heightOption ? heightOption.value : 'N/A';
    sizeDetailsLabel = 'Width: ';
    sizeDetailsValue = width + ' | Height: ' + height;
  }
  addDetail(sizeDetailsLabel, sizeDetailsValue, col1, 72); // Start at 75
  
  // Other Details
  const details = [
    { label: 'Quantity: ', value: selectedOptions.find(option => option.dataName === 'Quantity')?.value || 'N/A' },
    { label: 'Orientation: ', value: selectedOptions.find(option => option.dataName === 'Orientation')?.value || 'N/A' },
    { label: 'Light Output: ', value: selectedOptions.find(option => option.dataName === 'Light Output')?.value || 'N/A' },
    { label: 'Color Temperature: ', value: selectedOptions.find(option => option.dataName === 'Color Temperature')?.value || 'N/A' },
    { label: 'Dimming: ', value: selectedOptions.find(option => option.dataName === 'Dimming')?.value || 'N/A' },
    { label: 'Accessories: ', value: selectedOptions.find(option => option.dataName === 'Accessories')?.value || 'N/A' },
    { label: 'Mirror Controls: ', value: selectedOptions.find(option => option.dataName === 'Mirror Controls')?.value || 'N/A' },
  ];
  
  details.forEach((detail, index) => {
    addDetail(detail.label, detail.value, col1, 80 + index * 8);
  });
  




 // Footer Details
 doc.setFont("Inter", "bold");
 doc.setFontSize(10);
 doc.setCharSpace(.25)
 let footerText = '6464 Warren Drive, Norcross, GA 30093 - (678) 580-5717 - matrixmirrors.com'
 doc.text(footerText.toUpperCase(), 100, 290, 'center');

 // Attach to submit button
   doc.output('pdfobjectnewwindow');

}