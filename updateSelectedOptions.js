function updateSelectedOptions() {
    // Fetch the text of the selected options
    var frameColor = $('#frame-color option:selected').text();
    var frameThickness = $('#frame-thickness option:selected').text();
    var style = $('#style option:selected').text();
    var orientation = $('#orientation option:selected').text();
    var lightDirection = $('#light-direction option:selected').text();
    var size = $('#size option:selected').text();
    var quantity = $('#quantity').val();
    var colorTemperature = $('#color-temperature option:selected').text();
    var controls = $('#controls option:selected').text();
    var accessories = $('#accessories option:selected').text();
    var lightingOutput = $('#lighting-output option:selected').text();
    var dimming = $('#dimming option:selected').text();

    // Update the corresponding option
    $('#selected-frame-color').text(frameColor);
    $('#selected-frame-thickness').text(frameThickness);
    $('#selected-style').text(style);
    $('#selected-orientation').text(orientation);
    $('#selected-light-direction').text(lightDirection);
    $('#selected-size').text(size);
    $('#selected-quantity').text(quantity);
    $('#selected-color-temperature').text(colorTemperature);
    $('#selected-controls').text(controls);
    $('#selected-accessories').text(accessories);
    $('#selected-lighting-output').text(lightingOutput);
    $('#selected-dimming').text(dimming);
}
