$(document).ready(function() {
    $('.accordion__crew').hide(e);
    $('.accordion__title').click,
        function(e) {
            e.preventDefault()
            var $answer = $(this).next('.accordion__crew');
            if ($answer.is(':hidden')) {
                $answer.slideDown();
                $(this).addClass('active');
            } else {
                $answer.fadeOut();
                $(this).removeClass('active');
            }
        }; // окончание click
}); // окончание ready

$(function() {
    $('.menu-list').on('click', function(e) {


        var elem = $(e.target),
            item = elem.closest('.menu-list__item'),
            content = item.find('.menu-list__hidden'),
            reqHeight = item.find('.menu-list__text').outerHeight(),
            items = item.siblings(),
            otherContent = items.find('.menu-list__item');
        e.preventDefault()

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');


        } else {
            item.removeClass('active')

        }
    })
});