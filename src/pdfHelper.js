import { isExcluded } from './utils';

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
  };

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


export const circlePositions = [
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

const PDFHelper = {
   setDocStyles(doc) {
        doc.setFont("Inter");
        doc.setTextColor(20, 20, 20);
        doc.setDrawColor(209, 209, 209);
        doc.setFillColor(239, 239, 239);
        doc.rect(0, 0, 210, 300, 'F'); // make the entire page this fill color
        doc.setCharSpace(0.25);
      },
      renderStyleText(doc, styleDetails) {
        doc.setFont("Inter", "bold");
        doc.setFontSize(75);
        doc.setCharSpace(0.25);
        doc.text(12, 10, styleDetails.toUpperCase(), null, -90);
        doc.setFontSize(10); // Reset Font Size
        doc.setFont("Inter", "normal");
      },
      drawHeaderLines(doc) {
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
      },
      renderHeader(doc) {
        // Header Start
        doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e2abfbd5f18f06696996ba_usa.png', 'PNG', 165, 3, 40, 5, 'right'); 
        doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/64e27f2a344c637a5c2038d4_logo.png', 'PNG', 5, 283, 33, 10);
        doc.setFont("Inter", "bold");
        // Header End
      },
      renderHeaderOpener(doc, headerText) {
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
      },
      renderItemCode(doc, selectedOptions) {
        const productLine = $('#product-line').text();
        let isPolished = false;
        if(productLine.includes('Polished')) {
          isPolished = true;
        }
        
        // Special handling for Polished Mirrors
        if (productLine.includes('Polished')) {
          doc.setCharSpace(0.5);
          doc.setFontSize(12);
          doc.text("ITEM CODE", 46, 90);
          
          doc.text("Size", 57, 164.5, 'left');
          doc.text("Hanging Technique", 107, 164.5, 'left');
          doc.text("Mounting Orientation", 155, 164.5, 'left');
          return;
        }

        // Regular handling for other product lines
        doc.setCharSpace(0.5);
        doc.setFontSize(12);
        doc.text("ITEM CODE", 46, 90);
        doc.setFontSize(10);
        doc.text("Quantity Requested:", 190, 74, 'right');
        doc.text("Additional Specification Notes", 47, 122, 'left');
        doc.text("Type", 57, 164.5, 'left');
        doc.text("Style", 107, 164.5, 'left');
        doc.text("Lighitng Style", 155, 164.5, 'left');
        doc.text("Size", 57, 194.5, 'left');
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
      },
        renderSkuAndDate(doc) {
   
  
            // Date
            doc.setFontSize(10);
            doc.setFont("Inter", "normal");
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            doc.text("Created @matrixmirrors.com on: " + month + "/" + day + "/" + year, 199, 69, 'right');
      
      },
      renderSelectedImage(doc) {
        // Selected Image
        const photo = $('#selected-image').attr('src');
        const encodedPhotoURL = encodeURIComponent(photo);
        doc.addImage(encodedPhotoURL, 'JPEG', 46, 12, 65, 65);
      },
      renderSizeDetails(doc, selectedOptions) {
        let sizeDetailsLabel = '';
        let sizeDetailsValue = '';
        let sizeDetailsSku = '';
      
        const mirrorStyleOption = selectedOptions.find(option => option.dataName === 'Mirror Style');
      
        if (mirrorStyleOption && mirrorStyleOption.value.toLowerCase().includes('round')) {
          const diameterOption = selectedOptions.find(option => option.dataName === 'Diameter');
          sizeDetailsLabel = 'Size: ';
          sizeDetailsValue = diameterOption ? diameterOption.value : 'N/A';
          sizeDetailsSku = diameterOption ? diameterOption.value : 'N/A';
        } else if (selectedOptions.find(option => option.dataName === 'Standard Size' && option.value != '')) {
          const standardSizeOption = selectedOptions.find(option => option.dataName === 'Standard Size');
          if (standardSizeOption && standardSizeOption.value) {
            const [width, height] = standardSizeOption.value.split('x');
            sizeDetailsLabel = 'W: ';
            sizeDetailsValue = width + ' H: ' + height;
            sizeDetailsSku = width + height;
          } else {
            sizeDetailsLabel = 'W: ';
            sizeDetailsValue = 'N/A H: N/A';
            sizeDetailsSku = 'N/A';
          }
        } else {
          const widthOption = selectedOptions.find(option => option.dataName === 'Width');
          const heightOption = selectedOptions.find(option => option.dataName === 'Height');
          const width = widthOption ? widthOption.value + '"' : 'N/A';
          const height = heightOption ? heightOption.value + '"' : 'N/A';
          sizeDetailsLabel = 'W: ';
          sizeDetailsValue = width + ' H: ' + height;
          sizeDetailsSku = width + height;
        }
      
        const sizeSku = sizeDetailsSku.replace(/\"/g, '')
        addDetail(doc, sizeDetailsValue, 50, 201, sizeDetailsLabel); // Start at 75
        addSku(doc, sizeSku, 4);
    
        
      },
      
      renderFooter(doc) {
        // Footer
        doc.line(43, 280, 210, 280); // Line to separate footer
        doc.setFont("Inter", "bold");
        doc.setFontSize(8);
        doc.setCharSpace(0.25);
        let footerText = '6464 Warren Drive, Norcross, GA 30093 - (678) 580-5717 - matrixmirrors.com';
        doc.text(footerText.toUpperCase(), 118, 290, 'center');
      },
      drawCirclesWithNumbers(doc) {
        const productLine = $('#product-line').text();
        
        // Special handling for Polished Mirrors
        if (productLine.includes('Polished')) {
          const polishedCirclePositions = [
            { first: { x: 50, y: 110, gap: 5}, second: { x: 52, y: 163 } },
            { first: { x: 100, y: 110, gap: 15}, second: { x: 102, y: 163 } },
            { first: { x: 150, y: 110, gap: 5}, second: { x: 150, y: 163 } }
          ];

          doc.setFont("Inter", "bold");
          polishedCirclePositions.forEach((positions, index) => {
            const lineLength = positions.first.gap ? positions.first.gap / 2 : 2.5;
            
            if (index < polishedCirclePositions.length - 1) {
              doc.line(positions.first.x - lineLength, positions.first.y - 5, positions.first.x + lineLength, positions.first.y - 5);
            }

            doc.circle(positions.first.x, positions.first.y, 2.5);
            doc.text((index + 1).toString(), positions.first.x, positions.first.y + 1.5, 'center');
            
            doc.circle(positions.second.x, positions.second.y, 2.5);
            doc.text((index + 1).toString(), positions.second.x, positions.second.y + 1.5, 'center');
          });
          return;
        }

        // Regular handling for other product lines
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
      
    }

    export default PDFHelper;