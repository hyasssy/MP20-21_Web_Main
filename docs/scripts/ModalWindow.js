$(function () {
    // var scrollPosition;
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            ArtistPage(_data[target]);
            // メモ
            // https://imasashi.net/modal-window_bg-fixed.html
            $(modal).fadeIn();
            // モーダルウィンドウスクロール位置リセット
            $('.modal-content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});


//モーダルの選択が1回目かチェック
let flags = {
    _osato: false,
    _otaki: false,
    _oka: false,
    _koga: false,
    _kobayashi: false,
    _shiina: false,
    _shishikura: false,
    _shimura: false,
    _seko: false,
    _hirai: false,
    _fukuhara: false,
    _yoshida: false,
    _uchiumi: false,
    _kasajima: false,
    _joyce: false,
    _sun: false,
    _tastumura: false,
    _tanaka: false,
    _nishimura: false,
    _hayashi: false,
    _matsui: false,
    _yamagishi: false
}
function ArtistPage(artistData) {
    //フラグ管理
    var name = artistData.id;
    if (flags[name]) {
        return;
    }
    flags[name] = true;
    //テンプレートを取得
    var content = document.querySelector('#artist-template').content;
    //パーツ入れ
    var fragment = document.createDocumentFragment();
    // テンプレートのノードを複製
    var clone = document.importNode(content, true);
    // 複製されたテンプレートノード内部の要素取得
    // var artisttop_img = clone.querySelector("artist-top_img")
    var artisttop = clone.querySelector("artist-top");
    //書き込む内容作成
    var img = document.createElement("img");
    img.src = artistData.top_image;
    //テンプレートの要素に内容を反映
    artisttop.appendChild(img);
    artisttop.appendChild(ArtistCaption(artistData.top_caption_title, artistData.top_caption_year, artistData.top_caption_media, artistData.top_caption_any, true));

    var artistportrait = clone.querySelector("#artist-portrait");
    artistportrait.src = artistData.portrait;
    var artistname = clone.querySelector("#artist-name");
    var span = document.createElement("span");
    span.textContent = artistData.name_ja + " /";
    span.style = "margin-right:1rem;";/* 名前の横の空白 */
    artistname.appendChild(span);
    var span = document.createElement("span");
    span.textContent = artistData.name_en;
    artistname.appendChild(span);
    var artistinfo = clone.querySelector("#artist-info");
    var p = document.createElement("p");
    p.textContent = artistData.class + " / " + artistData.bachelor;
    artistinfo.appendChild(p);
    var a = document.createElement("a");
    a.href = artistData.website;
    a.style = "text-decoration: none;";
    a.textContent = "WEBサイトをのぞく";
    artistinfo.appendChild(a);
    var artisttheme = clone.querySelector("#artist-theme");
    artisttheme.textContent = artistData.theme;
    var artistcv = clone.querySelector("#artist-cv");

    if(artistData.cv_tenji_year.length > 0){
        var div = document.createElement("div");
        div.className = "cv-subtitle";
        div.textContent = "展示歴";
        artistcv.appendChild(div);
        for (let i = 0; i < artistData.cv_tenji_year.length; i++) {
            var parent = document.createElement("div");
            parent.className = "cv-wrapper";
            var div = document.createElement("div");
            div.className = "cv-year";
            div.textContent = artistData.cv_tenji_year[i];
            parent.appendChild(div);
            var div = document.createElement("div");
            div.className = "cv-text";
            div.textContent = artistData.cv_tenji_text[i];
            parent.appendChild(div);
            artistcv.appendChild(parent);
        }
    }
    
    if(artistData.cv_katsudo_year.length > 0){
    var div = document.createElement("div");
    div.className = "cv-subtitle";
    div.textContent = "活動歴";
    artistcv.appendChild(div);
    for (let i = 0; i < artistData.cv_katsudo_year.length; i++) {
        var parent = document.createElement("div");
        parent.className = "cv-wrapper";
        var div = document.createElement("div");
        div.className = "cv-year";
        div.textContent = artistData.cv_katsudo_year[i];
        parent.appendChild(div);
        var div = document.createElement("div");
        div.className = "cv-text";
        div.textContent = artistData.cv_katsudo_text[i];
        parent.appendChild(div);
        artistcv.appendChild(parent);
    }}

    if(artistData.cv_jusyo_year.length > 0){
    var div = document.createElement("div");
    div.className = "cv-subtitle";
    div.textContent = "受賞歴";
    artistcv.appendChild(div);
    for (let i = 0; i < artistData.cv_jusyo_year.length; i++) {
        var parent = document.createElement("div");
        parent.className = "cv-wrapper";
        var div = document.createElement("div");
        div.className = "cv-year";
        div.textContent = artistData.cv_jusyo_year[i];
        parent.appendChild(div);
        var div = document.createElement("div");
        div.className = "cv-text";
        div.textContent = artistData.cv_jusyo_text[i];
        parent.appendChild(div);
        artistcv.appendChild(parent);
    }}

    var artistworks = clone.querySelector("artist-works");
    for (let i = 0; i < artistData.works_onshow_image.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = artistData.works_onshow_image[i];
        div.appendChild(img);
        div.appendChild(ArtistCaption(artistData.works_onshow_title[i], artistData.works_onshow_year[i], artistData.works_onshow_media[i], artistData.works_onshow_any[i], true));
        artistworks.appendChild(div);
    }
    for (let i = 0; i < artistData.pastworks_image.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = artistData.pastworks_image[i];
        img.style = "width:60%; display:inline-block";
        div.appendChild(img);
        div.appendChild(ArtistCaption(artistData.pastworks_title[i], artistData.pastworks_year[i], artistData.pastworks_media[i], artistData.pastworks_any[i]));
        artistworks.appendChild(div);
    }

    //フラグメント(パーツ入れ)に挿入
    fragment.appendChild(clone);
    document.getElementById(artistData.id).replaceWith(fragment);
}

function ArtistCaption(title, year, media, any = null, isOnShow = false) {
    var div = document.createElement("div");
    div.className = isOnShow ? "artist-caption" : "artist-caption-past";
    var p = document.createElement("p");
    p.textContent = title;
    p.className = "artist-caption-title";
    div.appendChild(p);
    var p = document.createElement("p");
    p.className = "artist-caption-info";
    p.textContent = isOnShow ? "On Show" : "Past Work";
    div.appendChild(p);
    var p = document.createElement("p");
    p.className = "artist-caption-info";
    p.textContent = year;
    div.appendChild(p);
    var p = document.createElement("p");
    p.className = "artist-caption-info";
    p.textContent = media;
    div.appendChild(p);
    if (any != null) {
        var p = document.createElement("p");
        p.className = "artist-caption-info";
        p.textContent = any;
        div.appendChild(p);
    }
    if (isOnShow) {
        var parent = document.createElement("div");
        parent.style = "overflow:hidden;";//floatの高さを出す。
        parent.appendChild(div);
        return parent;
    } else {
        return div;
    }
    /*
    <div class="artist-caption">
    <p class="artist-caption-annotation">出展作品/過去作品</p>
    <p class="artist-caption-title">title</p>
    <p>year/media</p>
    </div>
    */
}
