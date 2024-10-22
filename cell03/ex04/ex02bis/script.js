$(document).ready(function() {
    $('#inputField').on('input', function() {
        $('#output').text($(this).val());
    });
});
