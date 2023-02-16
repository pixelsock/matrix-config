// This is a jquery plugin that will build the logic for a configuration page for a product customization tool.
// The app will listen for specific events and then build the logic to display the selected options.
// Once the user has selected all of the options the app will export the data in a downloadable pdf. 
const { jsPDF } = window.jspdf;

const doc = new jsPDF();

function updatedStandardRoundSizes() {
    // if the toggle switch is off and the selected style option includes the word "round" 
    if ($('#Toggle-Switch').prop('checked') == false && $('#style-grid').find('input:checked').val().includes('Round')) {
        // clear the height and width values
        $('#height-value').html('');
        $('#width-value').html('');
        $('#quote-height').html('');
        $('#quote-width').html('');
        $('#height-sku').html('');
        $('#width-sku').html('');

        var standardRoundSize = $('#standard-round-sizes').val();
        var selectedOptionValue = $('#standard-round-sizes').find('option:selected').html();
                // split after two characters and store the values in an array
                var standardRoundSizeArray = standardRoundSize.match(/.{1,2}/g);
                var diameter = standardRoundSizeArray[1];
                $('#diameter-value').html(selectedOptionValue.replace(' Diameter', '')); // remove the word "Diameter" from the selected option value
                // need to add logic to update the sku based on this selection
                // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
                $('#quote-diameter').html(diameter);
                $('#height-sku').html(diameter);
                $('#width-sku').html('00'); // set the height sku to 00 since it's not used for diameter
    }
}


function updateStandardSizes() {
    // if the toggle switch is off and the selected style option does not include the word "round" 
    if ($('#Toggle-Switch').prop('checked') == false && !$('#style-grid').find('input:checked').val().includes('Round')) {
        // clear the diameter value
        $('#diameter-value').html('');
        $('#quote-diameter').html('');
        $('#diameter-sku').html('');
        var standardSize = $('#standard-sizes').val();
                // split after two characters and store the values in an array
                var standardSizeArray = standardSize.match(/.{1,2}/g);
                var height = standardSizeArray[1];
                var width = standardSizeArray[0];
                $('#height-value').html(height + '"');
                $('#width-value').html(width + '"');
                // need to add logic to update the sku based on this selection
                // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
                $('#quote-height').html(height);
                $('#quote-width').html(width);
                $('#height-sku').html(height);
                $('#width-sku').html(width);
    }
}

  
// on page load
$(document).ready(function() {

 
      
    // check the option that is selected so the logic can run
      // get the selected style from the url perameter data-sku={sku} if it exists
      var url = window.location.href;
      var urlSku = url.split('data-sku=')[1];
      var baseUrl = url.split('?')[0];
      if (urlSku) {
          
        $(`[data-sku=${urlSku}]`).click();
          // if the url ends (before the ?) with "deco" then check the deco option
            if (baseUrl.endsWith('deco')) {
                $('#specs-diameter').hide();
                // if deco and the url is 02,04,06,08 or 10 the click data-sku="T". Else click data-sku="W"
                if (urlSku == '02' || urlSku == '04' || urlSku == '06' || urlSku == '08' || urlSku == '10') {
                    $('[data-sku="W"]').click();
                    $('[data-sku="W"]').prop('checked', true);
                    // if the url contains a sku, check the option that matches the sku
          $(`[data-sku=${urlSku}]`).click();
                }
                if (baseUrl.endsWith('deco')) {
                    // if deco and the url is 01,03,05,07 or 09 the click data-sku="W".
                    if (urlSku == '01' || urlSku == '03' || urlSku == '05' || urlSku == '07' || urlSku == '09' || urlSku == '11') {
                        $('[data-sku="T"]').click();
                        $('[data-sku="T"]').prop('checked', true);
                        // if the url contains a sku, check the option that matches the sku
            $(`[data-sku=${urlSku}]`).click();
                    }
                }
            }
            


          

      } else {
        $('[data-sku="01"]').hide(); // to keep the page from jumping around.
          $('[data-sku="01"]').click();
          $('[data-sku="01"]').show();
            $('[data-sku="01"]').prop('checked', true);
            $('[data-sku="T"]').hide(); // to keep the page from jumping around.
            $('[data-sku="T"]').click();
            $('[data-sku="T"]').show();
            
      }

      // show .lottieanimation for 1.5 seconds and then hide it
      $('.lottie-animation').show();
      $('#list').animate({
          opacity: 0
      }, 1000);
      
     
      setTimeout(function() {
        getValuesForErrors();
          $('.lottie-animation').hide();
          $('#list').show();
          $('#product-details').show();
          // animate the list opacity
          $('#list').animate({
              opacity: 1
          }, 1000);
  
      }, 1500);

  
    // set the values of the options to the selected values. 
    // each option group has form fields and the group (class="grid-options") which has a unique id's: style-grid, orientation-grid, direction-grid, temp-grid, size-grid (made up of input fields: height, width, diameter, and quantity), accessories-grid, output-grid, and dimming-grid.
    // each time a user selects an option the app will update and display the values of the selected options.
    // each option group has a display area that will display the selected options. These are the divs with the id "{option}-value".
    // for example, the style option group has a display area with the id "style-value" and the orientation option group has a display area with the id "orientation-value".
   
    // set the values for the product line
    var productLine = $('#product-line').html();
    if (productLine == 'Classic') {
          $('#product-line-sku').html('L');
          $('#product-line-value').html('Classic');
      } else if (productLine == 'Future') {
          $('#product-line-sku').html('F');
            $('#product-line-value').html('Future');
      } else if (productLine == 'Deco') {
          // get the data-sku attribute of of the selected frame thickness
          var frameThickness = $('#frame-thickness-grid').find('input:checked').parent().attr('data-sku');
          var frameColorValue = $('#frame-color-grid').find('input:checked').val();
          $('#product-line-sku').html(frameThickness);
            $('#product-line-value').html(frameColorValue);
      }

   
      // change on click if the options are changed
      // if any form element is changed, run the function
       $('form').on('change', function() {
           $('#error-message').addClass('hide');
           checkRequired();
           updateStandardSizes();
           updatedStandardRoundSizes();
           getValuesForErrors();
        
          
       });

 


    


}


); // end of document ready

     
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



// create a function to update the standard sizes
    


   
 
    // custom logic based off of style selection
    // for data-sku="01" inset lit
    $('[data-sku="01"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click(); // click the vertical orientation
        $('[data-sku="1"]').show(); // show the vertical orientation
        $('[data-sku="2"]').show(); // show the horizontal orientation
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from jumping around.
        $('[data-sku="D"]').click(); // click the direct direction
        $('[data-sku="D"]').show(); // show the direct direction
        $('[data-sku="B"]').show(); // show the both direction
        $('[data-sku="I"]').hide(); // hide the indirect direction
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show(); // show the Night Light Accessory
        $('[data-sku="NT"]').show(); // show night light and touch sensor accessory
        $('[data-sku="TS"]').show(); // show touch sensor accessory
        $('[data-sku="AN"]').show(); // show the anti-fog & night light accessory
    });
    
    // for data-sku="02" edge lit
    $('[data-sku="02"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click(); // click the vertical orientation
        $('[data-sku="1"]').show(); // show the vertical orientation
        $('[data-sku="2"]').show(); // show the horizontal orientation
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from jumping around.
        $('[data-sku="D"]').click(); // click the direct direction
        $('[data-sku="D"]').show(); // show the direct direction
        $('[data-sku="B"]').hide(); // hide the both direction
        $('[data-sku="I"]').show(); // show the indirect direction
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').hide(); // hide the Night Light Accessory
        $('[data-sku="NT"]').hide(); // hide night light and touch sensor accessory
        $('[data-sku="TS"]').hide(); // hide touch sensor accessory
        $('[data-sku="AN"]').hide(); // hide the anti-fog & night light accessory
    });


    // for data-sku="03" inset lit
    $('[data-sku="03"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from jumping around.
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').show();
        $('[data-sku="I"]').hide();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show();
        $('[data-sku="NT"]').show();
        $('[data-sku="TS"]').show();
        $('[data-sku="AN"]').show();
    });


    // for data-sku="04" edge lit
    $('[data-sku="04"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from jumping around.
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
    });



    // for data-sku="05" no frost indirect only
    $('[data-sku="05"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="I"]').hide(); // to keep the page from jumping around.
        $('[data-sku="I"]').click();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show();
        $('[data-sku="NT"]').show();
        $('[data-sku="TS"]').show();
        $('[data-sku="AN"]').show();
    });


    // for data-sku="06" edge lit
    $('[data-sku="06"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide(); // to keep the page from jumping around.
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
    });
// add the word TEST to the top of the page in bold red header text
    $('body').prepend('<h1 style="color:red; font-weight:bold;">TEST</h1>');

    // for data-sku="07" inset lit
    $('[data-sku="07"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide();
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from jumping around.
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').show();
        $('[data-sku="I"]').hide();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show();
        $('[data-sku="NT"]').show();
        $('[data-sku="TS"]').show();
        $('[data-sku="AN"]').show();
    });

    // for data-sku="08" edge lit single side (horizontal only for now, will add vertical options later)
    $('[data-sku="08"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide();
        $('[data-sku="2"]').hide();
        $('[data-sku="2"]').click();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
    });

    // for data-sku="09" inset lit single side (horizontal only for now, will add vertical options later)
    $('[data-sku="09"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide();
        $('[data-sku="2"]').hide();
        $('[data-sku="2"]').click();
        $('[data-sku="2"]').show();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').show();
        $('[data-sku="I"]').hide();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show();
        $('[data-sku="NT"]').show();
        $('[data-sku="TS"]').show();
        $('[data-sku="AN"]').show();
    });

    // for data-sku="10" edge lit single side (vertical only for now, will add horizontal options later)
    $('[data-sku="10"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide();
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').hide();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
    });

    // for data-sku="11" inset lit single side (vertical only for now, will add horizontal options later)
    $('[data-sku="11"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').show();
        $('[data-sku="1"]').hide();
        $('[data-sku="1"]').click();
        $('[data-sku="1"]').show();
        $('[data-sku="2"]').hide();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').show();
        $('[data-sku="I"]').hide();
        // for sizes
        $('#standard-round-sizes').parent().hide();
        $('#standard-sizes').parent().show();
        $('#diameter').parent().hide();
        $('#width').parent().show();
        $('#height').parent().show();
        $('[specs-data="diameter"]').hide();
        $('[specs-data="width"]').show();
        $('[specs-data="height"]').show();
        // accessories
        $('[data-sku="NL"]').show();
        $('[data-sku="NT"]').show();
        $('[data-sku="TS"]').show();
        $('[data-sku="AN"]').show();
    });

    // for data-sku="21" round edge lit
    $('[data-sku="21"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').hide();
        $('[data-sku="1"]').click();
        // direction
        $('[data-sku="D"]').hide(); // to keep the page from scrolling.
        $('[data-sku="D"]').click();
        $('[data-sku="D"]').show();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().show();
        $('#standard-sizes').parent().hide();
        $('#diameter').parent().show();
        $('#width').parent().hide();
        $('#height').parent().hide();
        $('[specs-data="diameter"]').show();
        $('[specs-data="width"]').hide();
        $('[specs-data="height"]').hide();
        // accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
    });

    // for data-sku="51" round no frost
    $('[data-sku="51"]').on('click', function() {
        // orientation
        $('#single-side-orientation').hide();
        $('#orientation-section').hide();
        $('[data-sku="1"]').click();
        // direction
        $('[data-sku="D"]').hide();
        $('[data-sku="I"]').hide();
        $('[data-sku="I"]').click();
        $('[data-sku="B"]').hide();
        $('[data-sku="I"]').show();
        // for sizes
        $('#standard-round-sizes').parent().show();
        $('#standard-sizes').parent().hide();
        $('#diameter').parent().show();
        $('#width').parent().hide();
        $('#height').parent().hide();
        $('[specs-data="diameter"]').show();
        $('[specs-data="width"]').hide();
        $('[specs-data="height"]').hide();
        // for accessories
        $('[data-sku="NL"]').hide();
        $('[data-sku="NT"]').hide();
        $('[data-sku="TS"]').hide();
        $('[data-sku="AN"]').hide();
        
    });
    

    // for data-sku="T" thin frame
        $('[data-sku="T"]').on('click', function() {
            $('#wide-specsheet').hide();
            $('#thin-specsheet').show();
            // get the currently checked thinkness
            var currentThickness = $('input[name="Modern-Style"]:checked').attr('value');
            console.log(currentThickness)
            $('[data-sku="02"],[data-sku="04"],[data-sku="06"],[data-sku="08"],[data-sku="10"]').hide();
            // if the user selects a wide frame size, then switch to thin frame size 01, otherwise keep the same size
            // if currentThickness contains the word "Edge" then switch to thin frame size 01
            if (currentThickness.indexOf("Edge") >= 0) {
                $('[data-sku="01"]').hide(); // to keep the page from scrolling.
                $('[data-sku="01"]').click();
                $('[data-sku="01"]').show();
            }
              
              
              
              

        });

        // for data-sku="W" wide frame
        $('[data-sku="W"]').on('click', function() {
            $('#thin-specsheet').hide();
            $('#wide-specsheet').show();
            $('[data-sku="02"],[data-sku="04"],[data-sku="06"],[data-sku="08"],[data-sku="10"]').show();
            
        });

        var touchSensorItems = $('[data-sku="TR"],[data-sku="HC"],[data-sku="TS"],[data-sku="NT"],[data-sku="NL"],[data-sku="AL"]');
        var nonTouchSensorItems = $('[data-sku="NA"],[data-sku="NL"],[data-sku="AF"],[data-sku="AN"]');
        var nonAdjustableTemperatureItems = $('[data-sku="27"],[data-sku="30"],[data-sku="35"],[data-sku="40"],[data-sku="50"]');
       
        
        
    // for data-sku="00" accessories
    $('[data-sku="00"]').on('click', function() {
        // light output
        $('[data-sku="H"]').hide(); // to keep the page from scrolling when clicked
        $('[data-sku="H"]').click();
        $('[data-sku="H"]').show();
        $('[data-sku="S"]').hide();
        nonTouchSensorItems.hide();
        touchSensorItems.show();
    });




    // non adjustable temperature items
    nonAdjustableTemperatureItems.on('click', function() {
        touchSensorItems.show();
        nonTouchSensorItems.show();
        $('[data-sku="S"]').show();
        $('[data-sku="H"]').show();
    });


    // touch sensor items
    touchSensorItems.on('click', function() {
        $('[data-sku="N"]').hide(); // to keep the page from scrolling.
        $('[data-sku="N"]').click();
        $('[data-sku="N"]').show();
        $('[data-sku="E"]').hide();
        $('[data-sku="V"]').hide();
    });

    // non touch sensor items
    nonTouchSensorItems.on('click', function() {
        $('[data-sku="N"]').show();
        $('[data-sku="E"]').show();
        $('[data-sku="V"]').show();
    });


    // color temperature
    nonAdjustableTemperatureItems.on('click', function() {
        $('[data-sku="S"],[data-sku="H"]').show();
    });



    // if data-sku = 27,30,35,40  or 50 then show data-sku="S"
    $('[data-sku="27"],[data-sku="30"],[data-sku="35"],[data-sku="40"],[data-sku="50"]').on('click', function() {
        $('[data-sku="S"]').hide();
        $('[data-sku="S"]').click();
        $('[data-sku="S"]').show();
    });

    // if data-sku = AL, AT, NT, TS, TR then show and click data-sku="N". Hide E & V.
    $('[data-sku="AL"],[data-sku="AT"],[data-sku="NT"],[data-sku="TS"],[data-sku="TR"]').on('click', function() {
        $('[data-sku="N"]').hide();
        $('[data-sku="N"]').click();
        $('[data-sku="N"]').show();
        $('[data-sku="E"]').hide();
        $('[data-sku="V"]').hide();
    });








    // for Frame Thickness
    $('#frame-thickness-grid').find('input').on('change', function() {
        
              var frameThickness = $('#frame-thickness-grid').find('input:checked').parent().attr('data-sku');
              $('#product-line-sku').html(frameThickness);
              
          });

        // for Frame Color 
        $('#frame-color-grid').find('input').on('change', function() {
            var frameColor = $(this).val();
            $('#product-line-value').html(frameColor);
        });
            



   // for style
    $('#style-grid').find('input').on('change', function() {
        var style = $(this).val();
        $('#style-value').html(style);
        $('#quote-style').html(style);
        $('#style-name-for-button').html(style);
        // Unless the "Toggle-Switch" is NOT checked, reset the sku values for height, width, and diameter and clear the input fields
        if ($('#Toggle-Switch').is(':checked')) {
        $('#height-sku').html('');
        $('#width-sku').html('');
        $('#diameter-sku').html('');
        $('#height').val('');
        $('#width').val('');
        $('#diameter').val('');
        } 



        
       
        
        // need to add logic to update the sku based on this selection
        // find the element with data-sku attribute and display the value in a div with the id "style-sku"
        
        var styleSku = $(this).parent().attr('data-sku');
        $('#style-sku').html(styleSku);
     
    
        
       

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


        // if Toggle-Switch is checked on change clear the values in the width and height divs
        $('#Toggle-Switch').on('change', function() {
            if ($('#Toggle-Switch').prop('checked') == true) {
                $('#width-value').html('');
                $('#height-value').html('');
                $('#width-sku').html('');
                $('#height-sku').html('');
                $('#quote-height').html('');
                $('#quote-width').html('');
            } else { 
                // if Toggle-Switch is NOT checked on change take the value of the selected option and split it into two values for width and height and display them in the divs with the id's "width-value" and "height-value".
                // if Toggle-Switch is NOT checked STANDARD SIZES is visible.
                if ($('#standard-sizes').is(':visible')) {
                var standardSize = $('#standard-sizes').val();
                // split after two characters and store the values in an array
                var standardSizeArray = standardSize.match(/.{1,2}/g);
                var width = standardSizeArray[0];
                var height = standardSizeArray[1];
                $('#width-value').html(width + '"');
                $('#height-value').html(height + '"');
                // need to add logic to update the sku based on this selection
                // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
                $('#width-sku').html(width);
                $('#height-sku').html(height);
                $('#quote-height').html(height);
                $('#quote-width').html(width);
                } else {
                    // if Toggle-Switch is NOT checked STANDARD ROUND SIZES is visible.
                    var standardRoundSize = $('#standard-round-sizes').val();
                    // split after two characters and store the values in an array
                    var standardRoundSizeArray = standardRoundSize.match(/.{1,2}/g);
                    var diameter = standardRoundSizeArray[0];
                    $('#diameter-value').html(diameter + '"');
                    // need to add logic to update the sku based on this selection
                    // find the element with data-sku attribute and display the value in a div with the id "size-sku" this one is a little simpler
                    $('#quote-diameter').html(diameter);
                    $('#height-sku').html(diameter);
                    $('#width-sku').html('00'); // set the height sku to 00 since it's not used for diameter
                }
            }
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

     
function newFunction() {
    $('[data-sku="N"]').show().get(0).dispatchEvent(event);
    $('[data-sku="E"]').hide();
    $('[data-sku="V"]').hide();
}

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
            // styleName is the #product-line-value + a space + #style-value
            var styleName = $('#product-line-value').html() + ' ' + $('#style-value').html();
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

   // create a footer with the company name and address, logo and current date. Give the footer a light grey background
    doc.setFillColor( 230, 230, 230 );
    doc.rect(0, 280, 210, 20, 'F');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    // all one line centered in the footer
    
    doc.text('5965 Peachtree Corners East, Suite-A1, Norcross, GA, 30071 - (678) 580-5717 - matrixmirrors.com', 105, 290, 'center');
    // get the current date and add it to the footer formatted as mm/dd/yyyy
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    // put the date below the sku number in the header
    doc.text("Date: " + month + "/" + day + "/" + year, 195, 40, 'right');

    

   
    
    var downloadButton = document.getElementById('download-button');
    var submitButton = document.getElementById('submit-button');
    var disabledSubmit = document.getElementById('disabled-submit');

    // create a fuction to get all error messages and add them to a variable
    function getValuesForErrors() {
        // clear the error list
        $('#error-list').html('');
        if (document.getElementById('quantity').value === '') {
            
            $('#error-list').append('<li>Quantity</li>');
        }

        $('.required').each(function() {
            if ($(this).html() === '') {
               
                 // for each required field not filled out, set the pdfStatus to false get the data-error attribute and store it in the error variable.
                 var error = $(this).data('error');
                 // append each error to the error-message div as a list item 
                    $('#error-list').append('<li>' + error + '</li>');
                    
            } 
            
        });
    }

    // var pdfStatus = false;
    
    // // if pdfStatus is false hide the "disabled-submit" button. 
    // if (pdfStatus === false) {
    //     submitButton.classList.add('hide');

    // }
    downloadButton.addEventListener('click', function() {
       
        
        
        
            
            
        // if the pdfStatus is true, create the pdf
        if (pdfStatus === true) {
            getValuesForPDF();
            pdfobjectnewwindow = window.open(doc.output('bloburl'), '_blank');
            pdfobjectnewwindow.focus();
            // then refresh the page
            location.reload();
            
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
            if (pdfStatus === true) {
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
        } else {
            // if the pdfStatus is false, show the error message
            document.getElementById('error-message').classList.remove('hide');
        }
        });

    