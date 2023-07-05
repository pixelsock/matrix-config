function updateSelectedOptions() {
    // Fetch the values from each form field
    var frameColor = $('#frame-color').val();
    var frameThickness = $('#frame-thickness').val();
    var style = $('#style').val();
    var orientation = $('#orientation').val();
    var lightDirection = $('#light-direction').val();
    var size = $('#size').val();
    var quantity = $('#quantity').val();
    var colorTemperature = $('#color-temperature').val();
    var controls = $('#controls').val();
    var accessories = $('#accessories').val();
    var lightingOutput = $('#lighting-output').val();
    var dimming = $('#dimming').val();

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
