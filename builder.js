// This is a jquery plugin that will build the logic for a configuration page for a product customization tool.
// The app will listen for specific events and then build the logic to display the selected options.
// Once the user has selected all of the options the app will export the data in a downloadable pdf. 


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

    // set the values of the orientation options
    var orientation = $('#orientation-grid').find('input:checked').val();
    $('#orientation-value').html(orientation);

    // set the values of the direction options
    var direction = $('#direction-grid').find('input:checked').val();
    $('#direction-value').html(direction);

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


 // unless the value of the option includes "Round" in the value, hide the "diameter" option's parent div as well as the "diameter" value's parent div
    // and show the "height" and "width" option's parent div as well as the "height" and "width" value's parent div
    if (!style.includes("Round")) {
        $('#diameter').parent().hide();
        $('#diameter-value').parent().hide();
        $('#height').parent().show();
        $('#height-value').parent().show();
        $('#width').parent().show();
        $('#width-value').parent().show();
        $('#orientation-grid').parent().show();
        $('#orientation-value').parent().show();
    }
 
    // Unless the value of the selected style option includes "Inset" or "Frost" in the value, hide the "Idirect" option's parent div

    if (!style.includes("Inset") || !style.includes("Frost")) {
        $('#Indirect').parent().hide();
    }

    // When a selection is made get the attribute "data-sku" in each option group and display the value in the element with the id {section}-sku. For example the style option group has a display area with the id "style-sku" and the orientation option group has a display area with the id "orientation-sku".

    // get the value of the style option group's data-sku attribute and display it in the style-sku div
    var styleSku = $('#style-grid').parent().attr('data-sku');
    $('#style-sku').html(styleSku);

    // get the value of the orientation option group's data-sku attribute and display it in the orientation-sku div
    var orientationSku = $('#orientation-grid').parent().attr('data-sku');
    $('#orientation-sku').html(orientationSku);

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




});



   // change on click if the options are changed
   // for style
    $('#style-grid').find('input').on('change', function() {
        var style = $(this).val();
        $('#style-value').html(style);
        console.log('style: ' + style); // console log the value of the option
        // if the value of the option includes "Round" in the value, show the "diameter" option's parent div as well as the "diameter" 
        // value's parent div, and hide the "height" and "width" option's parent div as well as the "height" and "width" value's parent div
        if (style.includes("Round")) {
            $('#diameter').parent().show();
            $('#diameter-value').parent().show();
            $('#height').parent().hide();
            $('#height-value').parent().hide();
            $('#width').parent().hide();
            $('#width-value').parent().hide();
            $('#orientation-grid').parent().hide();
            $('#orientation-value').parent().hide();
        } else {
            $('#diameter').parent().hide();
            $('#diameter-value').parent().hide();
            $('#height').parent().show();
            $('#height-value').parent().show();
            $('#width').parent().show();
            $('#width-value').parent().show();
            $('#orientation-grid').parent().show();
            $('#orientation-value').parent().show();
        }  // end if

        

        // if the value of the clicked option includes "Edge", show the "#indirect" option's parent div and hide the "#Both-Direct-And-Indirect" option's parent div
        if (style.includes("Edge")) {
            $('#indirect').show();
            $('#direct').show();
            $('#both').hide();
        } else {
            $('#indirect').hide();
            $('#direct').show();
            $('#both').show();
        } // end if

         // if the value of the clicked option includes "Frost" or "Round", show the "#indirect" option's parent div and hide the "#both" option's parent div and the "#direct" option's parent div
        if (style.includes("Frost") || style.includes("Round")) {
            $('#indirect').show();
            $('#direct').hide();
            $('#both').hide();
        } 
       
        
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

        console.log('temp: ' + temp); // console log the value of the option
    }
    );

    // for size
    // for height the options are input fields so we need to get the value of the input field as the user types
    $('#size-grid').find('input').on('keyup', function() {
        var height = $('#height').val();
        $('#height-value').html(height + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#height-sku').html(height);
        console.log('height: ' + height); // console log the value of the option
    }
    );

    // for width the options are input fields so we need to get the value of the input field as the user types
    $('#size-grid').find('input').on('keyup', function() {
        var width = $('#width').val();
        $('#width-value').html(width + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#width-sku').html(width);
        console.log('width: ' + width); // console log the value of the option
    }
    );

    // for diameter the options are input fields so we need to get the value of the input field as the user types
    $('#size-grid').find('input').on('keyup', function() {
        var diameter = $('#diameter').val();
        $('#diameter-value').html(diameter + '"'); // add the " to the value to display it as inches
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
        $('#diameter-sku').html(diameter);
        console.log('diameter: ' + diameter); // console log the value of the option
    }
    );

    // NOTE: quantity isn't in the sku so we don't need to update the sku based on this selection

    
    // for accessories
    $('#accessories-grid').find('input').on('change', function() {
        var accessories = $(this).val();
        $('#accessories-value').html(accessories);
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "accessories-sku"
        var accessoriesSku = $(this).parent().attr('data-sku');
        $('#accessories-sku').html(accessoriesSku);

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

        console.log('dimming: ' + dimming); // console log the value of the option
    }
    );

    // this is using jspdf.js to generate a pdf of spec sheet. We need to add the logic to generate the pdf based on the selections made by the user and the data that is displayed in the divs with the id's that start with "sku". Only the one's visible to the user should be included in the pdf. The pdf should be generated when the user clicks the "Download PDF" button.
    
    var element = document.getElementById('element-to-print');
    var downloadButton = document.getElementById('download-button');
    
    downloadButton.addEventListener('click', function() {
        // make the canvas element visible
        element.style.display = 'block';
        return xepOnline.Formatter.Format('element-to-print', {
            render: 'download',
            pageWidth: '8.5in',
            pageHeight: '11in',
            srctype: 'dom',
            cssStyle: [{fontFamily: 'Arial'}]
            

        });
    });


   


   
