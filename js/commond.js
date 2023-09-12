$('document').ready(function() {
    var btn = $('.btnNav');

    btn.click(function() {
        if($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).children('.open').show();
        }
        else {
            $(this).addClass('on');
            $(this).children('.open').hide();
        }
    });
});