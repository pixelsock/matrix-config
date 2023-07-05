function generateSKU() {
    var sku = '';
    $('#product-configurator select, #product-configurator input').each(function() {
        sku += $(this).val();
    });
    $('#product-details').text('SKU: ' + sku);
}
