$(function () {
    // var scrollPosition;
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            ArtistPage(_data[target]);
            // document.body.style.position = 'fixed';
            // document.body.style.top = '-${window.scrollY}px';
            // scrollPosition = $(window).scrollTop();
            // $('.middle').css({'z-index': -1});
            // メモ
            // https://imasashi.net/modal-window_bg-fixed.html
            $(modal).fadeIn();
            // モーダルウィンドウスクロール位置リセット
            $('.modal__content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        // $('.middle').removeClass('fixed').css();
        // window.scrollTo( 0 , scrollPosition);
        $('.js-modal').fadeOut();
        return false;
    });
});

const _data = {
    osato: {
        id:"_osato",//htmlの入れ込む先のid
        top_image:"./images/faces/face_osato.png",
        top_caption_title:"これがタイトル",
        top_caption_year:"2020",
        top_caption_media:"video",
        portrait:"./images/faces/face_osato.png",
        name:"大里淳 / Jun Osato",
        class:"畠山直哉研究室",
        bachelor:"東京藝術大学美術学部デザイン科 卒業",
        theme:"制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ",
        cv_year:["2018", "2018", "2020"],
        cv_text:["2018のテキスト", "2018のテキスト2", "2020のテキスト"],
        works_onshow_image:["./images/faces/face_osato.png"],//トップ以外の展示作品写真
        works_onshow_title:["title"],
        works_onshow_year:["year"],
        works_onshow_media:["media"],
        pastworks_image:["./images/faces/face_osato.png"],
        pastworks_title:["title"],
        pastworks_year:["2020"],
        pastworks_media:["media"],

    },
    otaki: {
        id:"_otaki",//htmlの入れ込む先のid
        top_image:"./images/faces/face_otaki.png",
        top_caption_title:"大滝タイトル",
        top_caption_year:"2020",
        top_caption_media:"video",
        portrait:"./images/faces/face_otaki.png",
        name:"大滝彩加 / Ayaka Otaki",
        class:"研究室",
        bachelor:"卒業",
        theme:"制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ",
        cv_year:["2018", "2018", "2020"],
        cv_text:["2018のテキスト", "2018のテキスト2", "2020のテキスト"],
        works_onshow_image:["./images/faces/face_otaki.png"],//トップ以外の展示作品写真
        works_onshow_title:["title"],
        works_onshow_year:["year"],
        works_onshow_media:["media"],
        pastworks_image:["./images/faces/face_otaki.png"],
        pastworks_title:["title"],
        pastworks_year:["2020"],
        pastworks_media:["media"],
    }
};

//モーダルの選択が1回目かチェック
let flags = {
    _osato:false,
    _otaki:false
}
function ArtistPage(artistData){
    //フラグ管理
    var name = artistData.id;
    if(flags[name]){
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
    var artisttop = clone.querySelector("artist-top");
    //書き込む内容作成
    var img = document.createElement("img");
    img.src = artistData.top_image;
    //テンプレートの要素に内容を反映
    artisttop.appendChild(img);
    artisttop.appendChild(ArtistCaption(artistData.top_caption_title, artistData.top_caption_year, artistData.top_caption_media, true));

    var artistportrait = clone.querySelector("#artist-portrait");
    artistportrait.src = artistData.portrait;
    var artistname = clone.querySelector("#artist-name");
    artistname.textContent = artistData.name;
    var artistinfo = clone.querySelector("#artist-info");
    var p = document.createElement("p");
    p.textContent = artistData.class;
    artistinfo.appendChild(p);
    var p = document.createElement("p");
    p.textContent = artistData.bachelor;
    artistinfo.appendChild(p);
    var artisttheme = clone.querySelector("#artist-theme");
    artisttheme.textContent = artistData.theme;
    var artistcv = clone.querySelector("#artist-cv");
    for(let i=0;i<artistData.cv_year.length;i++){
        var parent = document.createElement("div");
        var div = document.createElement("div");
        div.className = "cv-year";
        div.textContent = artistData.cv_year[i];
        parent.appendChild(div);
        var div = document.createElement("div");
        div.className = "cv-text";
        div.textContent = artistData.cv_text[i];
        parent.appendChild(div);
        artistcv.appendChild(parent);
    }
    var artistworks = clone.querySelector("artist-works");
    for(let i=0;i<artistData.works_onshow_image.length;i++){
        var img = document.createElement("img");
        img.src = artistData.works_onshow_image[i];
        artistworks.appendChild(img);
        artistworks.appendChild(ArtistCaption(artistData.works_onshow_title, artistData.works_onshow_year, artistData.works_onshow_media, true));
    }
    for(let i=0;i<artistData.pastworks_image.length;i++){
        var img = document.createElement("img");
        img.src = artistData.pastworks_image[i];
        artistworks.appendChild(img);
        artistworks.appendChild(ArtistCaption(artistData.pastworks_title, artistData.pastworks_year, artistData.pastworks_media));
    }

    //フラグメント(パーツ入れ)に挿入
    fragment.appendChild(clone);
    document.getElementById(artistData.id).replaceWith(fragment);
}

function ArtistCaption(title, year, media, isOnShow = false){
    var div = document.createElement("div");
    div.className = "artist-caption";
    var p = document.createElement("p");
    p.textContent = isOnShow ? "出展作品" : "過去作品";
    p.className = "artist-caption-annotation";
    div.appendChild(p);
    var p = document.createElement("p");
    p.textContent = title;
    p.className = "artist-caption-title";
    div.appendChild(p);
    var p = document.createElement("p");
    p.textContent = year + " / " + media;
    div.appendChild(p);
    return div;
}