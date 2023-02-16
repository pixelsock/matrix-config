// find the element id="modal-trigger" store it in a variable
var modalTrigger = document.getElementById("modal-trigger");
// find the element id="modal-popup" store it in a variable
var modalPopup = document.getElementById("modal-popup");

$(document).ready(function(){
    // wait 2 seconds after the page loads
    setTimeout(function(){
        // simulate a click on the modal trigger
        if (!Cookies.get('alert')) {
            // simulate a click on the modal trigger
            modalTrigger.click();
         $('.popup-overlay').show();
         Cookies.set('alert', true, { expires: 0 });
        }
    }, 2000);

    
    });
    // Documentation at https://github.com/js-cookie/js-cookie