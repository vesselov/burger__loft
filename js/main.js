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

$(function() {
    $('.accordion__title').on('click', function(e) {
        e.preventDefault()

        var elem = $(e.target),
            item = elem.closest('.accordion__list'),
            content = item.find('.accordion__crew'),
            // reqHeight = item.find('.menu-list__text').outerHeight(),
            items = item.siblings(),
            otherContent = items.find('.accordion__list');


        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');


        } else {
            item.removeClass('active')

        }
    })
});