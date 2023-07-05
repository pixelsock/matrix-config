function generateSKU() {
    var sku = '';
    var styleCodes = {
        'full-frame-inset': '01',
        'full-frame-edge': '02',
        'double-long-side-inset': '03',
        'double-long-side-edge': '04',
        'no-frost': '05',
        'double-short-side-edge': '06',
        'double-short-side-inset': '07',
        'single-long-side-edge': '08',
        'single-short-side-edge': '09',
        'single-short-side-inset': '10',
        'round-full-frame-edge': '11',
        'round-no-frost': '12'
    };
    $('#product-configurator select, #product-configurator input').each(function() {
        if (this.id === 'style') {
            sku += styleCodes[$(this).val()];
        } else if (this.id === 'size') {
            sku += $(this).val().replace('x', '');
        } else {
            sku += $(this).val();
        }
    });
    $('#product-details').text('SKU: ' + sku);
}
