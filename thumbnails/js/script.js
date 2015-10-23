$(function() {

    $('.thumbnail').click(function() {
        var imageSrc = $(this).attr('src');
        $('.modal')
            .show()
            .attr({ src: imageSrc })
    });

    $('.modal').click(function() {
        $(this).hide();
    })
});
