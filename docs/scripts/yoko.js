// 縦横判別して画像差し替え
window.onload = function () {
    if (window.innerHeight > window.innerWidth) {
        /* 縦画面時の処理 */
        $('#main-visual').attr('src', './images/mainvisual_vertical.png');
    }
}