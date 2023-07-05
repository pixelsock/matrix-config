function applyConditionalLogic() {
    // Fetch the values from the form fields
    var style = $('#style').val();
    var lightDirection = $('#light-direction').val();
    var orientation = $('#orientation').val();

    // Apply the conditional logic
    if (style.includes('Inset')) {
        if (lightDirection === 'I') {
            $('#light-direction option[value="I"]').hide();
        } else {
            $('#light-direction option[value="I"]').show();
        }
    }

    if (style.includes('Edge')) {
        if (lightDirection === 'B') {
            $('#light-direction option[value="B"]').hide();
        } else {
            $('#light-direction option[value="B"]').show();
        }
    }

    if (style.includes('Single Short Side')) {
        $('#orientation option[value="2"]').hide();
        $('#orientation').val('1');
    } else {
        $('#orientation option[value="2"]').show();
    }
}
