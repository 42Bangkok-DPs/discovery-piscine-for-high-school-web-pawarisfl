$(document).ready(function() {
    $('#box').hover(function() {
        $(this).css('background-color', 'yellow');
    }, function() {
        $(this).css('background-color', '');
    });
});
