// const _osato_data = `[
// {
//         "top-image":"./images/faces/face-osato.png",
//         "top-caption-title":"これがタイトル",
//         "top-caption-year":"2020",
//         "top-caption-media":"video"
//     }
// ]`;

// $(function () {
//     $('.js-modal-open').on('click', function () {
//         var content = $("#artist-template")[0].content;
//         var fragment = document.createDocumentFragment();
//         var artistData = JSON.parse(_osato_data);
//         //テンプレートのノードを複製
//         var clone = document.importNode(content, true);
//         //複製されたテンプレート内部の要素取得
//         var $artisttop = $("artist-top-image", clone);
//         //書き込む内容
//         var html = `<img src="${_osato_data["top-image"]}" alt="">`;
//         html += ArtistCaption(_osato_data["top-caption-title"],_osato_data["top-caption-year"],_osato_data["top-caption-media"], true);
//         //テンプレートの要素に適用する。
//         $artisttop.text(html);
//         //フラグメントに挿入
//         fragment.appendChild(clone);
//         //
//         $("_osato").append(fragment);
//     });

// });

// function Osato(){
//     var content = $("#artist-template")[0].content;
//         var fragment = document.createDocumentFragment();
//         var artistData = JSON.parse(_osato_data);
//         //テンプレートのノードを複製
//         var clone = document.importNode(content, true);
//         //複製されたテンプレート内部の要素取得
//         var $artisttop = $("artist-top-image", clone);
//         //書き込む内容
//         var html = `<img src="${_osato_data["top-image"]}" alt="">`;
//         html += ArtistCaption(_osato_data["top-caption-title"],_osato_data["top-caption-year"],_osato_data["top-caption-media"], true);
//         //テンプレートの要素に適用する。
//         $artisttop.text(html);
//         //フラグメントに挿入
//         fragment.appendChild(clone);
//         //
//         $("_osato").append(fragment);
// }

// function ArtistCaption(title, year, media, isTop = false){
//     var html = '<div class="artist-caption">';
//     if(isTop) html += '<p style="">出展作品</p>';
//     html +=`<p>${title}</p><p>${year} / ${media}</p>`
//     html += '</div>'
//     return html;
// }



// /*$(function () {

//     $('.js-modal-open').on('click', function () {
//         var template = document.getElementById('__osato');
//         var clone = template.importNode(content, true);
//         document.getElementById('_osato').replaceWith(clone);
//     });
// });*/

// /*$(function () {

//     $('.js-modal-open').on('click', function () {
//         var template = document.getElementById('__otaki');
//         var clone = template.content.cloneNode(true);
//         document.getElementById('_otaki').replaceWith(clone);
//     });

// });*/