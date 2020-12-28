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
    },
    otaki: {
        id:"_otaki",//htmlの入れ込む先のid
        top_image:"./images/faces/face_otaki.png",
        top_caption_title:"大滝タイトル",
        top_caption_year:"2020",
        top_caption_media:"video",
        portrait:"./images/faces/face_otaki.png",
        name:"大滝彩加 / Ayaka Otaki",
        theme:"制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ制作テーマ",
        cv_year:["2018", "2018", "2020"],
        // cv_text:["2018のテキスト", "2018のテキスト2", "2020のテキスト"]
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
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = artistData.top_image;
    div.appendChild(img);
    //テンプレートの要素に内容を反映
    artisttop.appendChild(div);
    artisttop.appendChild(ArtistCaption(artistData.top_caption_title, artistData.top_caption_year, artistData.top_caption_media));

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
    var arttisttheme = clone.querySelector("#artist-theme");
    var div = document.createElement("div");
    var span = document.createElement("span");
    // span.textContent = artistData.cv_year[1];
    div.appendChild(span);
    arttisttheme.appendChild(div);

    //フラグメント(パーツ入れ)に挿入
    fragment.appendChild(clone);
    document.getElementById(artistData.id).replaceWith(fragment);
}

function ArtistCaption(title, year, media, isTop = false){
    var div = document.createElement("div");
    div.className = "artist-caption";
    if(isTop){
        var p = document.createElement("p");
        p.textContent = "出展作品";
        p.className = "artist-caption-annotation";
        div.appendChild(p);
    }
    var p = document.createElement("p");
    p.textContent = title;
    p.className = "artist-caption-title";
    div.appendChild(p);
    var p = document.createElement("p");
    p.textContent = year + " / " + media;
    div.appendChild(p);
    return div;
}