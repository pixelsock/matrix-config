function generateSKU() {
    var sku = '';
    var frameColor = $('#frame-color').val();
    var frameThickness = $('#frame-thickness').val();
    var style = $('#style').val();
    var lightDirection = $('#light-direction').val();
    var size = $('#size').val();
    var lightOutput = $('#lighting-output').val();
    var colorTemperature = $('#color-temperature').val();
    var dimming = $('#dimming').val();
    var orientation = $('#orientation').val();
    var controls = $('#controls').val();
    var accessories = $('#accessories').val();

    sku = frameColor + ': ' + frameThickness + style + '-' + lightDirection + '-' + size + '-' + lightOutput + '-' + colorTemperature + '-' + dimming + '-' + orientation + '-' + controls + '-' + accessories;

    $('#product-details').text('SKU: ' + sku);
}
