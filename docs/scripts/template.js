$(function () {

    $('.js-modal-open').on('click', function () {
        var template = document.getElementById('__osato');
        var clone = template.content.cloneNode(true);
        document.getElementById('_osato').replaceWith(clone);
    });

});

$(function () {

    $('.js-modal-open').on('click', function () {
        var template = document.getElementById('__otaki');
        var clone = template.content.cloneNode(true);
        document.getElementById('_otaki').replaceWith(clone);
    });

});