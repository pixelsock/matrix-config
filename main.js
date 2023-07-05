$(document).ready(function() {
    $('#product-configurator').submit(function(e) {
        e.preventDefault();
        generateSKU();
    });

    $('#product-configurator select, #product-configurator input').change(function() {
        updateProductImage();
        generateSKU();
        updateSelectedOptions();
        applyConditionalLogic();
    });
});
