$(function(){

    $('.js-modal-open').on('click', function(){
        // template要素を取得
        var template = document.getElementById('__osato');

        // template要素の内容を複製
        var clone = template.content.cloneNode(true);

        // div#containerの中に追加
        document.getElementById('_osato').replaceWith(clone);
    });

});