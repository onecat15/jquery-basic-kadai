$(function(){
    $('[name="go-place"]:radio').change( function() {
        if($('[id=none]').prop('checked')) {
            $('#eat').fadeOut();
        }
    });
});

$(function() {
    $('#send').on('click', function() {
        $('#thanks').fadeIn();
    });
});