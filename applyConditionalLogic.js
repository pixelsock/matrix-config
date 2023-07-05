function applyConditionalLogic() {
    // Fetch the values from the form fields
    var style = $('#style').val();
    var lightDirection = $('#light-direction').val();
    var orientation = $('#orientation').val();

    // Apply the conditional logic
    if (style.includes('Inset')) {
        if (lightDirection === 'I') {
            alert('Inset Styles can\'t have an indirect light direction');
        }
    }

    if (style.includes('Edge')) {
        if (lightDirection === 'B') {
            alert('Edge Styles can\'t have Both Direct And Indirect option for light direction');
        }
    }

    if (style.includes('Single Short Side')) {
        if (orientation !== '1') {
            alert('Single Short Side Styles can only have Vertical Orientation');
        }
    }
}
