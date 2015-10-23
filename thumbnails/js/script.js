$(function() {

    $('.thumbnail').click(function() {
        var imageSrc = $(this).attr('src');
        $('.modal').show();
        $('.content').css({ backgroundImage: 'url(' + imageSrc + ')'})
    });

    $('.close').click(function() {
        $('.modal').hide();
    })
});
