// This is a jquery plugin that will build the logic for a configuration page for a product customization tool.
// The app will listen for specific events and then build the logic to display the selected options.
// Once the user has selected all of the options the app will export the data in a downloadable pdf. 
const { jsPDF } = window.jspdf;

const doc = new jsPDF();

    
  

// on page load
$(document).ready(function() {
    // set the values of the options to the selected values. 
    // each option group has form fields and the group (class="grid-options") which has a unique id's: style-grid, orientation-grid, direction-grid, temp-grid, size-grid (made up of input fields: height, width, diameter, and quantity), accessories-grid, output-grid, and dimming-grid.
    // each time a user selects an option the app will update and display the values of the selected options.
    // each option group has a display area that will display the selected options. These are the divs with the id "{option}-value".
    // for example, the style option group has a display area with the id "style-value" and the orientation option group has a display area with the id "orientation-value".
   
    // set the values of the style options
    var style = $('#style-grid').find('input:checked').val();
    $('#style-value').html(style);
    $('#quote-style').html(style);
    var styleSku = $('#style-grid').find('input:checked').parent().attr('data-sku');
    

    // set the values of the orientation options
    var orientation = $('#orientation-grid').find('input:checked').val();
    $('#orientation-value').html(orientation);
    $('#quote-orientation').html(orientation);
    var orientationSku = $('#orientation-grid').find('input:checked').parent().attr('data-sku');
    $('#mounting-sku').html(orientationSku);

    // set the values of the direction options
    var direction = $('#direction-grid').find('input:checked').val();
    $('#direction-value').html(direction);
    $('#quote-direction').html(direction);
    var directionSku = $('#direction-grid').find('input:checked').parent().attr('data-sku');
    $('#direction-sku').html(directionSku);

    // set the values of the temp options
    var temp = $('#temp-grid').find('input:checked').val();
    $('#temp-value').html(temp);

    // set the values of the size options (height, width, diameter, quantity)
    var height = $('#height').val();
    $('#height-value').html(height);
    var width = $('#width').val();
    $('#width-value').html(width);
    var diameter = $('#diameter').val();
    $('#diameter-value').html(diameter);
    var quantity = $('#quantity').val();
    $('#quantity-value').html(quantity);


    // set the values of the accessories options
    var accessories = $('#accessories-grid').find('input:checked').val();
    $('#accessories-value').html(accessories);

    // set the values of the output options
    var output = $('#output-grid').find('input:checked').val();
    $('#output-value').html(output);

    // set the values of the dimming options
    var dimming = $('#dimming-grid').find('input:checked').val();
    $('#dimming-value').html(dimming);


    // When a selection is made get the attribute "data-sku" in each option group and display the value in the element with the id {section}-sku. For example the style option group has a display area with the id "style-sku" and the orientation option group has a display area with the id "orientation-sku".

    // get the value of the style option group's data-sku attribute and display it in the style-sku div
    var styleSku = $('#style-grid').parent().attr('data-sku');
    $('#style-sku').html(styleSku);
    var skuWrapper = $('#sku-wrapper').html();
    $('#quote-sku').html(skuWrapper);


    // get the value of the orientation option group's data-sku attribute and display it in the orientation-sku div
    var orientationSku = $('#orientation-grid').parent().attr('data-sku');
    $('#mounting-sku').html(orientationSku);

    // get the value of the direction option group's data-sku attribute and display it in the direction-sku div
    var directionSku = $('#direction-grid').parent().attr('data-sku');
    $('#direction-sku').html(directionSku);

    // get the value of the temp option group's data-sku attribute and display it in the temp-sku div
    var tempSku = $('#temp-grid').parent().attr('data-sku');
    $('#temp-sku').html(tempSku);

    // get the value of the accessories option group's data-sku attribute and display it in the accessories-sku div
    var accessoriesSku = $('#accessories-grid').parent().attr('data-sku');
    $('#accessories-sku').html(accessoriesSku);

    // get the value of the output option group's data-sku attribute and display it in the output-sku div
    var outputSku = $('#output-grid').parent().attr('data-sku');
    $('#output-sku').html(outputSku);

    // get the value of the dimming option group's data-sku attribute and display it in the dimming-sku div
    var dimmingSku = $('#dimming-grid').parent().attr('data-sku');
    $('#dimming-sku').html(dimmingSku);




}); // end of document ready

var pdfStatus = false;
var submitButton = document.getElementById('submit-button');
var disabledSubmit = document.getElementById('disabled-submit');

// create a function to check if the required fields are filled out
function checkRequired() {
    var required = document.getElementsByClassName('required');
    
        for (var i = 0; i < required.length; i++) {
             // if the quantity input filed is empty, set the pdfStatus to false
        if (document.getElementById('quantity').value === '') {
            pdfStatus = false;
            console.log('pdfStatus is false');

            break;
        }
            
            if (required[i].innerHTML === '') {
                pdfStatus = false;
                console.log('pdfStatus is false');
                // stop the loop
                break;
            } 
            
            // if the loop has reached the end and all the required fields have a value, set the pdfStatus to true
            else if (i === required.length - 1) {
                pdfStatus = true;
                console.log('pdfStatus is true');
                disabledSubmit.classList.add('hide');
                submitButton.classList.remove('hide');

            }
            
            
            
        }
       
}




   // change on click if the options are changed
   // if any form element is changed, run the function
    $('form').on('change', function() {
        $('#error-message').addClass('hide');
        checkRequired();
    });
   // for style
    $('#style-grid').find('input').on('change', function() {
        var style = $(this).val();
        $('#style-value').html(style);
        $('#quote-style').html(style);
        // reset the sku values
        $('#height-sku').html('');
        $('#width-sku').html('');


        
       
        
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "style-sku"
        var styleSku = $(this).parent().attr('data-sku');
        $('#style-sku').html(styleSku);
       

       console.log('styleSku: ' + styleSku); // console log the value of the option 
    } // end function
    );

   // for orientation
    $('#orientation-grid').find('input').on('change', function() {
        var orientation = $(this).val();
        $('#orientation-value').html(orientation);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "mounting-sku"
        var orientationSku = $(this).parent().attr('data-sku');
        $('#mounting-sku').html(orientationSku);
        $('#quote-orientation').html(orientation);

        console.log('orientation: ' + orientation); // console log the value of the option
    }
    );

    // for direction
    $('#direction-grid').find('input').on('change', function() {
        var direction = $(this).val();
        $('#direction-value').html(direction);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "direction-sku"
        var directionSku = $(this).parent().attr('data-sku');
        $('#direction-sku').html(directionSku);
        $('#quote-direction').html(direction);

        console.log('direction: ' + direction); // console log the value of the option
    }
    );

    // for temp
    $('#temp-grid').find('input').on('change', function() {
        var temp = $(this).val();
        $('#temp-value').html(temp);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "temp-sku"
        var tempSku = $(this).parent().attr('data-sku');
        $('#temp-sku').html(tempSku);
        $('#quote-temp').html(temp);

        console.log('temp: ' + temp); // console log the value of the option
    }
    );

    // for size
    // for height the options are input fields so we need to get the value of the input field as the user types
    $('#height').on('keyup', function() {
        var height = $('#height').val();
        $('#height-value').html(height + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#height-sku').html(height);
        $('#quote-height').html(height);
        console.log('height: ' + height); // console log the value of the option
    }
    );

    // for width the options are input fields so we need to get the value of the input field as the user types
    $('#width').on('keyup', function() {
        var width = $('#width').val();
        $('#width-value').html(width + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#width-sku').html(width);
        $('#quote-width').html(width);
        console.log('width: ' + width); // console log the value of the option
    }
    );

    // for diameter the options are input fields so we need to get the value of the input field as the user types
    $('#diameter').on('keyup', function() {
        var diameter = $('#diameter').val();
        $('#diameter-value').html(diameter + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#quote-diameter').html(diameter);
        $('#height-sku').html(diameter);
        $('#width-sku').html('00'); // set the height sku to 00 since it's not used for diameter
        console.log('diameter: ' + diameter); // console log the value of the option
    }
    );

    
    // for quantity the option is a number input field so we need to get the value of the input field as the user types and click the up and down arrows to change the value so we need to use keyup OR change.
    $('#quantity').on('keyup change', function() {
        var quantity = $('#quantity').val();
        $('#quantity-value').html(quantity);
        $('#quote-quantity').html(quantity);
        console.log('quantity: ' + quantity); // console log the value of the option
    }
    );


    
    // for accessories
    $('#accessories-grid').find('input').on('change', function() {
        var accessories = $(this).val();
        $('#accessories-value').html(accessories);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "accessories-sku"
        var accessoriesSku = $(this).parent().attr('data-sku');
        $('#accessories-sku').html(accessoriesSku);
        $('#quote-accessories').html(accessories);

        console.log('accessories: ' + accessories); // console log the value of the option
    }
    );

    // for output
    $('#output-grid').find('input').on('change', function() {
        var output = $(this).val();
        $('#output-value').html(output);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "output-sku"
        var outputSku = $(this).parent().attr('data-sku');
        $('#output-sku').html(outputSku);
        $('#quote-output').html(output);
        console.log('output: ' + output); // console log the value of the option
    }
    );

    // for dimming
    $('#dimming-grid').find('input').on('change', function() {
        var dimming = $(this).val();
        $('#dimming-value').html(dimming);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "dimming-sku"
        var dimmingSku = $(this).parent().attr('data-sku');
        $('#dimming-sku').html(dimmingSku);
        $('#quote-dimming').html(dimming);
        console.log('dimming: ' + dimming); // console log the value of the option
    }
    );
    // this function refreshes the quote-sku anytime any section is changed
    $('#custom-form').find('input').on('change', function() {
        var skuWrapper = $('#sku-wrapper').html();
        $('#quote-sku').html(skuWrapper);

        
    }
    
    );
    // this is using jspdf.js to generate a pdf of spec sheet. We need to add the logic to generate the pdf based on the selections made by the user and the data that is displayed in the divs with the id's that start with "sku". Only the one's visible to the user should be included in the pdf. The pdf should be generated when the user clicks the "Download PDF" button.
     // set fill color to light grey
     doc.setFillColor( 230, 230, 230 );
     doc.rect(0, 0, 210, 50, 'F');

     
     // create a function to get the value for product sku by going through the divs with the id's that start with "sku" and adding the values to an array IF the div has a value.
        function getValuesForPDF() {
            var skuArray = [];
            var skuString = '';
            $('#sku-wrapper').find('td').each(function() {
                var skuValue = $(this).html();
                // if the value is empty return false, otherwise add the value to the array
                if (skuValue === '') {
                    return false;
                } else {
                    return true,
                    skuArray.push(skuValue);
            }
            });
            skuString = skuArray.join('');
            doc.setFontSize(12);
            doc.text(skuString, 195, 32, 'right');

            // get the current selected photo and add it to the pdf
            var photo = $('#selected-image').attr('src');
            doc.addImage(photo, 'PNG', 100, 55, 100, 100);


            // place a light grey rectangle behind the style name
            doc.setFillColor( 230, 230, 230 );
            doc.rect(100, 155.5, 100.25, 10, 'F');

            // get the style name and add it to the pdf under the photo centered
            var styleName = $('#style-value').html();
            doc.setFont("helvetica", "bold");
            doc.text('Style: ' + styleName, 150, 161, 'center');

            // place a title font left of the photo titled Mirror Specs
            doc.setFont("helvetica", "bold");
            doc.setFontSize(21);
            doc.text('Mirror Specs', 10, 62);

            // subtitle for mirror specs called Mirror Size
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Mirror Size', 10, 72);

            // get the height, width and diameter and add them to the pdf only if they have a value
            var height = $('#height-value').html();
            var width = $('#width-value').html();
            var diameter = $('#diameter-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            if (width !== '"' && diameter === '') {
                doc.text("Width: " + width, 10, 79);
            }
            if (height !== '"' && diameter === '') {
                doc.text("Height: " + height, 35, 79);
            }
            if (diameter !== '') {
                doc.text("Diameter: " + diameter, 10, 79);
            }

            // subtitle for mirror specs called Mirror Quantity
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Mirror Quantity', 10, 90);

            // get the quantity and add it to the pdf
            var quantity = $('#quantity-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(quantity, 10, 97);

            // subtitle for mirror specs called Mounting Orientation
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Mounting Orientation', 10, 108);

            // get the mounting orientation and add it to the pdf
            var orientation = $('#orientation-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(orientation, 10, 115);


            // subtitle for mirror specs called Light Output
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Light Output', 10, 126);

            // get the light output and add it to the pdf
            var output = $('#output-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(output, 10, 133);

            // subtitle for mirror specs called Color Temperature
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Color Temperature', 10, 144);

            // get the color temperature and add it to the pdf
            var colorTemp = $('#temp-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(colorTemp, 10, 151);

            // subtitle for mirror specs called Dimming
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Dimming', 10, 162);

            // get the dimming and add it to the pdf
            var dimming = $('#dimming-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(dimming, 10, 169);

            // subtitle for mirror specs called Accessories
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text('Accessories', 10, 180);
            
            // get the accessories and add them to the pdf
            var accessories = $('#accessories-value').html();
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(accessories, 10, 187);




            

        }
        

    // logo image
    doc.addImage('https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/639c0e32c9a6a2d8f219ec71_download.png', 'PNG', 10, 0, 40, 40);
    doc.setFont("helvetica", "bold");
    doc.text("Matrix Mirrors Custom Spec Sheet", 195, 22, 'right');

   


    
    var downloadButton = document.getElementById('download-button');
    var submitButton = document.getElementById('submit-button');
    var disabledSubmit = document.getElementById('disabled-submit');


    var pdfStatus = false;
    
    // if pdfStatus is false hide the "disabled-submit" button. 
    if (pdfStatus === false) {
        submitButton.classList.add('hide');

    }
    downloadButton.addEventListener('click', function() {
        getValuesForPDF();
            
            
        // if the pdfStatus is true, create the pdf
        if (pdfStatus === true) {
            pdfobjectnewwindow = window.open(doc.output('bloburl'), '_blank');
            pdfobjectnewwindow.focus();
        } else {
            // if the pdfStatus is false, show the error message
            document.getElementById('error-message').classList.remove('hide');
        }



        });

        // create an event listener for the disabled-submit button
        document.getElementById('disabled-submit').addEventListener('click', function() { 
            // show the error message
            document.getElementById('error-message').classList.remove('hide');
        });

        // create an event listener for the submit button
        submitButton.addEventListener('click', function() {
            var skuArray = [];
            var skuString = '';
            $('#sku-wrapper').find('td').each(function() {
                var skuValue = $(this).html();
                // if the value is empty return false, otherwise add the value to the array
                if (skuValue === '') {
                    return false;
                } else {
                    return true,
                    skuArray.push(skuValue);
            }
            });
            skuString = skuArray.join('');
            console.log(skuString);
            var formSku = document.getElementById('form-sku');
            formSku.value = skuString;
            var formSkuLabel = document.getElementById('form-sku-label');
            formSkuLabel.innerHTML = skuString;
            var formQuantity = document.getElementById('form-quantity');
            formQuantity.value = $('#quantity-value').html();
            var formQuantityLabel = document.getElementById('form-quantity-label');
            formQuantityLabel.innerHTML = $('#quantity-value').html();
        });

    