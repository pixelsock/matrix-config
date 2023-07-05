$(document).ready(function() {
    $('#product-configurator').submit(function(e) {
        e.preventDefault();
        generateSKU();
        updateProductImage();
        updateSelectedOptions();
        applyConditionalLogic();
    });

    $('#product-configurator select, #product-configurator input').change(function() {
        generateSKU();
        updateProductImage();
        updateSelectedOptions();
        applyConditionalLogic();
    });
});
