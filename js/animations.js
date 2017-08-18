$(function () {
  $('.default__launcher').on('click', function (e) {
    e.preventDefault()

    var elem = $(e.target);
    var animationName = elem.data('animation');
    var content = elem.closest('.default__item').find('.dafault__content');
    var duration = 
      animationName == 'hide' || animationName == 'show'
        ? 0
        : 2000

    content[animationName](duration, 0);
  })
});