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
            $('.modal__content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});

const _data = {
    osato: {
        id: "_osato",//htmlの入れ込む先のid
        top_image: "./images/works/1_osato/1_1.jpg",
        top_caption_title: "セルフィーくん",
        top_caption_year: "2020",
        top_caption_media: "Video, Mixed Media",
        portrait: "./images/faces/M2/osato_f.jpg",
        name_ja: "大里淳",
        name_en: "Jun Osato",
        class: "畠山直哉研究室",
        bachelor: "東京藝術大学美術学部デザイン科 卒業",
        theme: "消費者であることの同時代性を引き受けながら、現代の特定の環境下において支配的な思考・感情・行動の型をまさぐるような介入をしている。",
        website: "https://www.instagram.com/jun_osato/",
        cv_year: ["2016", "2017", "2017", "2018", "2018", "2019", "　", "2018~2019", "2020~", "　", "2015", "2015"],
        cv_text: [
                      "「ゆううつをゆうえつしてしまった。」（アートスペースココノカ／東京）",
                      "「Boogie Nights」（特火点-tochka／東京）",
                      "「AFTERALL」（ケーララ州コチ／インド）",
                      "「秋山佑太＋布施琳太郎『モデルルーム』」秋山佑太とのコラボレーションで出展（SNOW Contemporary／東京）",
                      "「ゲンロン カオス*ラウンジ 新芸術校 第3期 最終成果展 2018『サードパーティ』」龍村景一との共同制作で出展（ゲンロンカフェ／東京）",
                      "「Beyond the Telling」（東京藝術大学芸術情報センター／東京）" ,
                      "　",
                      "リトルプレス「爆竹書房」として無審査合同漫画雑誌『超漫パンゲア』制作",
                      "リトルプレス「アロョイ文庫」として『烏合読本』制作",
                      "　",
                      "ターナーアワード 2015優秀賞",
                      "JAGDA学生グランプリ2015入選"
                      ],
        works_onshow_image: ["./images/works/1_osato/2_1.jpg", "./images/works/1_osato/2_2.jpg"],//トップ以外の展示作品写真
        works_onshow_title: ["マクドナルド・オーダー", "マクドナルド・オーダー"],
        works_onshow_year: ["2020", "2020"],
        works_onshow_media: ["Video", "Video"],
        pastworks_image: ["./images/works/1_osato/past_1_フレンドリースペース.jpg", "./images/works/1_osato/past_2_mixed.jpg", "./images/works/1_osato/past_3_prototyping.jpg"],
        pastworks_title: ["フレンドリースペース", "mixed", "prototyping"],
        pastworks_year: ["", "", ""],
        pastworks_media: ["", "", ""]

    },
    otaki: {
        id: "_otaki",//htmlの入れ込む先のid
        top_image: "./images/works/2_otaki/1_1.jpg",
        top_caption_title: "石神井川",
        top_caption_year: "2020",
        top_caption_media: "Single-channel Video",
        portrait: "./images/faces/M2/otaki_f.jpg",
        name_ja: "大滝彩加",
        name_en: "Ayaka Otaki",
        class: "佐藤雅彦研究室",
        bachelor: "多摩美術大学美術学部絵画学科油画専攻 卒業",
        theme: "撮影行為を、イメージを獲得するだけではなく、対象と関わるための仕草として捉える。カメラを介することで生まれる事象に着目して映像を制作している。",
        website: "https://otakiayaka.tumblr.com",
        cv_year: ["2019", "2019"],
        cv_text: ["「平成30年度 第42回 東京五美術大学連合卒業・修了制作展」（国立新美術館／東京）",
                        "「2018年度 多摩美術大学美術学部卒業制作展」（多摩美術大学八王子キャンパス／東京）"],
        works_onshow_image: ["./images/works/2_otaki/2_1.jpg", "./images/works/2_otaki/2_2.jpg"],//トップ以外の展示作品写真
        works_onshow_title: ["坂と鮭", "坂と鮭"],
        works_onshow_year: ["2020", "2020"],
        works_onshow_media: ["Single-channel Video", "Single-channel Video"],
        pastworks_image: ["./images/works/2_otaki/past_03_繰り返し_2019 - 大滝彩加.jpg"],
        pastworks_title: ["繰り返し"],
        pastworks_year: ["2019"],
        pastworks_media: ["Single-channel Video"],
    },
    oka: {
        id: "_oka",//htmlの入れ込む先のid
        top_image: "./images/works/3_oka/1_4.jpg",
        top_caption_title: "Manipulating Automated Manipulated Automation",
        top_caption_year: "2020",
        top_caption_media: "Performance",
        portrait: "./images/faces/M2/oka_f.jpg",
        name_ja: "岡千穂",
        name_en: "Chiho Oka",
        class: "桂英史研究室",
        bachelor: "東京藝術大学音楽学部音楽環境創造科 卒業",
        theme: "コンピューターミュージックや実験音楽の領域での経験から、ソフトウェアやフォーマット、それらを/が形作るコミュニティなどの環境、ルール、人間の身体を操作するインストラクション等々を愛好したり破壊したりする遊びを考える。",
        website: "",
        cv_year: ["2017", "2018", "2019", "2019", "2019", "2020", "　", "2018~", "2019~", "　", "2019"],
        cv_text: [
                      "「Ensemble for Experimental Music and Theater ロンドン・ベルリンツアー2017: 日本実験音楽 1962-2017」（Hundred Years Gallery／イギリス、IKLECTIK／イギリス、SPKTRUM／ドイツ）",
                      "「Global Algorithmic Dance Culture/Algorave Hackney/London/Sheffield/Osaka/Tokyo」各関連企画への参加",
                      "「Leeds International Festival ''Automation and Me''」（リーズ／イギリス）",
                      "「Sound::Gender::Feminism::Activism – TOKYO」（東京藝術大学大学美術館 陳列館／東京） ",
                      "「バトルフィールド2」（Room_412／東京）",
                      "「groove 12」outlinesよりカセットテープ/デジタル・オーディオリリース（ポーランド）" ,
                      "　",
                      "「Algorave」シリーズ ",
                      "Computer Music Party",
                      "　",
                      " 平成30年度 東京藝術大学アカンサス音楽賞"
                      ],
        works_onshow_image: ["./images/works/3_oka/1_3.jpg", "./images/works/3_oka/2_2.jpg"],//トップ以外の展示作品写真
        works_onshow_title: ["Manipulating Automated Manipulated Automation", "YouTubeロボ"],
        works_onshow_year: ["2020", "2020"],
        works_onshow_media: ["Performance", "Mixed Media"],
        pastworks_image: ["./images/works/3_oka/past_1_I-am-publishing-all-the-names-exits-in-the-whole-world_2019_chihooka - Chiho Oka", "./images/works/3_oka/past_3_groove 12_2020_chihooka - Chiho Oka.jpg", "./images/works/3_oka/past_4_Full-Speed-最強元気連合_2019_chihooka - Chiho Oka.jpg"],
        pastworks_title: ["I am publishing all the names exits in the whole world", "groove 12", "Full Speed 最強元気連合"],
        pastworks_year: ["2019", "2020", "2019"],
        pastworks_media: ["Mixed Media", "Digital Audio/Cassetle", "Project"]

    },

    koga: {
        id: "_koga",//htmlの入れ込む先のid
        top_image: "./images/works/4_koga/1_2.jpg",
        top_caption_title: "ONTHEDEADCOALMINE",
        top_caption_year: "2020",
        top_caption_media: "Video, Mixed Media",
        portrait: "./images/faces/M2/koga_f.jpg",
        name_ja: "古閑慶治",
        name_en: "Cage Koga",
        class: "畠山直哉研究室",
        bachelor: "東京藝術大学美術学部先端芸術表現科 卒業",
        theme: "2018〜2019年の日雇い労働者の街・西成での制作をきっかけに、西成と炭鉱の関連性を見つけ九州へ移住。主に炭鉱の廃墟などでパフォーマンスやリサーチを行い、かつてあったものと現在の私達との関係性を考察し、過去を現在進行形のものとして接する試みを行っている。",
        website: "",
        cv_year: ["2019", "2020"],
        cv_text: [
                      "「第67回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                      "「九州フラグメンツvol.01　ワイ、ノット？」（art space tetra／福岡）"
                      ],
        works_onshow_image: ["./images/works/4_koga/1_3.jpg", "./images/works/4_koga/1_7.jpg"],//トップ以外の展示作品写真
        works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
        works_onshow_year: ["2020", "2020"],
        works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
        pastworks_image: ["./images/works/4_koga/past_1古閑慶治_ONTHE DEAD COALMINE 住む_2020_銀塩プリント_サイズ可変7枚 - KOGA CAGE.jpg",
        "./images/works/4_koga/past_2古閑慶治_ONTHE DEAD COALMINE 掃除_2020_映像_13分 - KOGA CAGE.jpg",
        "./images/works/4_koga/past_3古閑慶治_ONTHE DEAD COALMINE 掃除_2020_映像_13分 - KOGA CAGE.jpg"],
        pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
        pastworks_year: ["2020", "2020", "2020"],
        pastworks_media: ["銀塩プリント", "Video", "Video"]
    },


        kobayashi: {
            id: "_kobayashi",//htmlの入れ込む先のid
            top_image: "./images/works/5_kobayashi/1_2.jpg",
            top_caption_title: "朝を待つ",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/kobayashi_f.jpg",
            name_ja: "小林舞衣",
            name_en: "Mai Kobayashi",
            class: "畠山直哉研究室",
            bachelor: "東京藝術大学美術学部先端芸術表現科 卒業",
            theme: "ずっとそこにあったはずなのに、今はじめて見たような気がする。他人の話なのに、妙なリアリティをもって胸に迫ってくる。それまで単なる知識や情報だったものが、あるとき妙な切実さやリアリティをもつ。
                            何気ない日常や取るに足らない話の中に現れる、そのような瞬間を心待ちにしながら、映像の制作やチームでのメディア制作を行なっている。",
            website: "",
            cv_year: ["2018", "2019~"],
            cv_text: [
                          "「第66回 東京藝術大学 卒業・修了作品展」（東京都美術館／東京）",
                          "メディア制作グループ「屋上」"
                          ],
            works_onshow_image: ["./images/works/5_kobayashi/1_3.jpg", "./images/works/5_kobayashi/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/5_kobayashi/",
            "./images/works/5_kobayashi/",
            "./images/works/5_kobayashi/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        shiina: {
            id: "_shiina",//htmlの入れ込む先のid
            top_image: "./images/works/6_shiina/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/shiina_f.jpg",
            name_ja: "椎名悠香",
            name_en: "Yuka Shiina",
            class: "桐山孝司研究室",
            bachelor: "東京藝術大学美術学部先端芸術表現科 卒業",
            theme: "「展示空間」という場所への興味から、とは不思議な場所で、鑑賞者同士がもつ奇妙な関係性を追求してきた。近年では実空間から仮想空間へと表現の場を広げてきた。実体験が生み出す想像や肉体の動きを仮想空間に付与させ、独特の映像体験の具現化を試みる。",
            website: "",
            cv_year: ["2017", "2019", "2020", "2020"],
            cv_text: [
                          "「彩邂」（東京藝術大学上野キャンパス美術学部中央棟／東京）",
                          "「第67回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                          "「GEIDAI GAMES 01 東京藝術大学大学院映像研究科ゲームコース展」（オンライン展示）",
                          "「馬車道プロジェクション2020」（神奈川県立歴史博物館／神奈川）"
                          ],
            works_onshow_image: ["./images/works/6_shiina/1_3.jpg", "./images/works/6_shiina/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/6_shiina/",
            "./images/works/6_shiina/",
            "./images/works/6_shiina/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        shishikura: {
            id: "_shishikura",//htmlの入れ込む先のid
            top_image: "./images/works/7_shishikura/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/shishikura_f.jpg",
            name_ja: "宍倉志信",
            name_en: "Shinobu Shishikura",
            class: "桂英史研究室",
            bachelor: "東京藝術大学美術学部絵画科油画専攻 卒業",
            theme: "現代美術家。主に儀式的な形式を用いた作品を作っている。一説には、ある団体の仲介人をしているという噂も…？",
            website: "",
            cv_year: ["2017", "2017", "2018", "2018", "2019"],
            cv_text: [
                          "「Boogie Nights」（特火点-tochka／東京）",
                          "「AFTERALL」（ケーララ州コチ、インド）",
                          "個展「不能の時間遡行者」（東京藝術大学上野キャンパス美術学部絵画棟701教室 B.O.P gallery／東京）",
                          "個展「不完全な密室」（東京藝術大学上野キャンパス美術学部絵画棟1階 Yuga Gallery／東京）",
                          "「第67回 東京藝術大学 卒業・修了作品展」"
                          ],
            works_onshow_image: ["./images/works/7_shishikura/1_3.jpg", "./images/works/7_shishikura/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/7_shishikura/",
            "./images/works/7_shishikura/",
            "./images/works/7_shishikura/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        shimura: {
            id: "_shimura",//htmlの入れ込む先のid
            top_image: "./images/works/8_shimura/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/shimura_f.jpg",
            name_ja: "志村茉那美",
            name_en: "Manami Shimura",
            class: "桐山孝司研究室",
            bachelor: "京都造形芸術大学美術工芸学科現代美術・写真コース 卒業",
            theme: "現代社会において娯楽性や不真面目さが持つ新たな可能性に着目し、特定の土地や人物のリサーチに基づき制作した物語をユーモラスかつ批評的に展開していくことで、あらゆる社会問題の背景に潜む構造の対象化を試みている。",
            website: "https://shimura-manami.com",
            cv_year: ["2016", "2016", "2017", "2017", "2017", "2017", "2018", "2019", "2019", "2020", "2020", "2020", "2020", "2020", "2018~2020"],
            cv_text: [
                          "マームとジプシー 藤田貴大演出舞台「A-S」映像補佐（京都）",
                          "「HAPii＋2016プロジェクト」（ホスピタルアートプロジェクト）（京都府立医科大学附属病院／京都）",
                          "「第16回京都現代写真作家展 京都写真ビエンナーレ2017 」（京都文化博物館／京都）",
                          "個展「水中花」（Café Verdi京都造形大前店／京都）",
                          "個展「-emerge-」（Café Verdi京都造形大前店／京都）",
                          "「旅と文学」（ART ZONE／京都）",
                          "「ON THE ROAD」（京都造形芸術大学／京都）",
                          "「KUAD ANNUAL 2019 宇宙船地球号」（東京都美術館／東京）",
                          "「馬車道プロジェクション2019」（神奈川県立歴史博物館／神奈川）",
                          "「表層と深層 | Surface and Depths」（Gallery PARC／京都）",
                          "「通過 -3つの部屋と1つのテキスト-」（オンライン展示）",
                          "芸術公社主催「みちのくアート巡礼キャンプ」参加（福島）",
                          "共同プロジェクト「東京藝大×南カルフォルニア大学（USC）ゲーム共同制作」参加（アメリカ）",
                          "「馬車道プロジェクション2020」（神奈川県立歴史博物館／神奈川）",
                          "マームとジプシー「ひび」プロジェクト参加"
                          ],
            works_onshow_image: ["./images/works/8_shimura/1_3.jpg", "./images/works/8_shimura/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/8_shimura/",
            "./images/works/8_shimura/",
            "./images/works/8_shimura/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        seko: {
            id: "_seko",//htmlの入れ込む先のid
            top_image: "./images/works/9_seko/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/seko_f.jpg",
            name_ja: "瀬古瑞歩",
            name_en: "Mizuho Seko",
            class: "桂英史研究室",
            bachelor: "日本大学芸術学部デザイン学科インタラクションデザイン専攻 卒業",
            theme: "知覚、記憶、自己、存在、時間、メディアなど、生活の中で無意識に了解しているものを新鮮な視点で問い直すための方法を模索している。",
            website: "",
            cv_year: ["2018", "2018"],
            cv_text: [
                          "個展「monologue」（ギャラリー世田谷233／東京）",
                          "「Tokyo Düsseldorf 展」（日本大学芸術学部江古田校舎／東京）"
                          ],
            works_onshow_image: ["./images/works/9_seko/1_3.jpg", "./images/works/9_seko/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/9_seko/",
            "./images/works/9_seko/",
            "./images/works/9_seko/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        hirai: {
            id: "_hirai",//htmlの入れ込む先のid
            top_image: "./images/works/10_hirai/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/hirai_f.jpg",
            name_ja: "平井亨季",
            name_en: "Koki Hirai",
            class: "佐藤雅彦研究室",
            bachelor: "東京藝術大学美術学部先端芸術表現科 卒業",
            theme: "個人的な身振りや類推を軸として、人が意味を生じさせる過程を映像、本、インスタレーションなどで表現している。今回は場所の持っている性質を汲み、その背景にある歴史や仕組みをスポーツのフォームを通して語り直す作品を制作した。",
            website: "http://www.kokihirai.com/",
            cv_year: ["2017", "2018", "2018", "2019", "　", "2018"],
            cv_text: [
                          "「美術と教育 全国リサーチプロジェクト 2017」（東京藝術大学大学美術館／東京）",
                          "「1940's フジタ・トリビュート」（東京藝術大学大学美術館 陳列館／東京）",
                          "「先端芸術表現科『先端PRIZE 2018』」（東京藝術大学取手キャンパス／茨城）",
                          "「第67回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                          "　",
                          "平山郁夫奨学金賞"
                          ],
            works_onshow_image: ["./images/works/10_hirai/1_3.jpg", "./images/works/10_hirai/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/10_hirai/",
            "./images/works/10_hirai/",
            "./images/works/10_hirai/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        fukuhara: {
            id: "_fukuhara",//htmlの入れ込む先のid
            top_image: "./images/works/11_fukuhara/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/fukuhara_f.jpg",
            name_ja: "福原翼",
            name_en: "Tsubasa Fukuhara",
            class: "佐藤雅彦研究室",
            bachelor: "東京藝術大学美術学部絵画科油画専攻 卒業",
            theme: "映像の編集や合成技術によって生まれる、ある種の可笑しさ（私はそれをコント的状況と呼んでいる）についての作品を制作している。",
            website: "https://fukuharaot.tumblr.com/",
            cv_year: ["2017", "2018", "2019"],
            cv_text: [
                          "個展「道の夢~the street dream~」（634展示室／東京）",
                          "「東京藝術大学 油画専攻3年 展覧会『蜃気楼』」（3331 Arts Chiyoda／東京）",
                          "「第67回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）"
                          ],
            works_onshow_image: ["./images/works/11_fukuhara/1_3.jpg", "./images/works/11_fukuhara/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/11_fukuhara/",
            "./images/works/11_fukuhara/",
            "./images/works/11_fukuhara/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },


        yoshida: {
            id: "_yoshida",//htmlの入れ込む先のid
            top_image: "./images/works/12_yoshida/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M2/yoshida_f.jpg",
            name_ja: "吉田真也",
            name_en: "Shinya Yoshida",
            class: "畠山直哉研究室",
            bachelor: "秋田公立美術大学美術学部美術学科ビジュアルアーツ専攻 卒業",
            theme: "静的な連続する風景の背後に潜む不可視な存在土地固有の記憶を、独自に構築された物語によって鑑賞者に想像させる映像作品を制作しています。",
            website: "https://shinyayoshida.tumblr.com/",
            cv_year: ["2017", "2018", "2019", "2020", "　", "2015", "2018"],
            cv_text: [
                          "「インターミッション」（秋田市にぎわい交流館ＡＵ／秋田） ",
                          "「須賀亮平・吉田真也『よくある話 ありきたりな風景』」（ココラボラトリー／秋田）",
                          "「岸に立つ」（横浜市民ギャラリーあざみ野／神奈川）",
                          "「札幌国際芸術祭2020　Of Roots and Clouds: ここで生きようとする」（Web上での作品公開）",
                          "　",
                          "ISCA2015佳作",
                          "MEC Award 2018入選"
                          ],
            works_onshow_image: ["./images/works/12_yoshida/1_3.jpg", "./images/works/12_yoshida/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/12_yoshida/",
            "./images/works/12_yoshida/",
            "./images/works/12_yoshida/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        uchiumi: {
            id: "_uchiumi",//htmlの入れ込む先のid
            top_image: "./images/works/M1_1_uchiumi/1_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/uchiumi_f.jpg",
            name_ja: "内海拓",
            name_en: "Taku Uchiumi",
            class: "高山明研究室",
            bachelor: "東京藝術大学美術学部絵画科油画専攻 卒業",
            theme: "視座をYouTubeにセッティング。低俗の森を発見。",
            website: "https://www.instagram.com/takurinbo/",
            cv_year: ["2017", "2018", "2018", "2018", "2018", "2019", "2019", "2020", "2020", "　", "2018"],
            cv_text: [
                          "藝大アーツイン丸の内展示企画「優美な死骸−未知なる住宅−」（新丸ビル3階アトリウム／東京）",
                          "「平成29年度 東京藝術大学美術学部絵画科油画 学部2年生展覧会『あの動脈とこの静脈－時と空間の旅－』」（東京藝術大学上野キャンパス美術学部絵画棟／東京）",
                          "「LOCI 内海拓 林裕人 二人展」（国分寺くるみギャラリー／東京）",
                          "「桃源郷芸術祭2018」（茨城）",
                          "「安宅賞『星のフィラメント』」（東京藝術大学上野キャンパス美術学部絵画棟2階 211演習室／東京）",
                          "「東京藝術大学 油画専攻3年 展覧会『NI/O』」（3331 Arts Chiyoda／東京）",
                          "「禁足地－space:403」（コートヤードガロウ／東京）",
                          "「令和元年度 東京藝術大学美術学部絵画科油画専攻 4年生卒業制作学内展」（東京藝術大学上野キャンパス美術学部絵画棟5, 6, 7階アトリエほか／東京）",
                          "「第68回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                          "　",
                          "東京藝術大学安宅賞奨学基金"
                          ],
            works_onshow_image: ["./images/works/M1_1_uchiumi/1_3.jpg", "./images/works/M1_1_uchiumi/1_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_1_uchiumi/",
            "./images/works/M1_1_uchiumi/",
            "./images/works/M1_1_uchiumi/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        kasajima: {
            id: "_kasajima",//htmlの入れ込む先のid
            top_image: "./images/works/M1_2_kasajima/2_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/kasajima_f.jpg",
            name_ja: "笠島久美子",
            name_en: "Kumiko Kasajima",
            class: "桂英史研究室",
            bachelor: "東京藝術大学美術学部先端芸術表現科 卒業",
            theme: "おじいちゃん",
            website: "https://www.instagram.com/got_grand_father/",
            cv_year: ["2016", "2018", "2018", "2019", "2020", "2020"],
            cv_text: [
                          "「先端○展」（東京藝術大学上野キャンパス絵画棟1階 アートスペース／東京）",
                          "「WIP展」（東京藝術大学取手キャンパス／茨城）",
                          "「『みっける365日』展」（生活工房3階 生活工房ギャラリー・4階 ワークショップルームA・B／東京）",
                          "「PREVIEW」カタルシスの岸辺に映像提供（EUKARYOTE／東京）",
                          "「おじいちゃんホストクラブ Paradise」（American BAR&CAFE REN／東京）",
                          "「モォオオオオオオ（牛）展」（東京藝術大学上野キャンパス大学会館／東京）",
                          "「第68回東京藝術大学卒業・修了作品展」（東京藝術大学上野キャンパス／東京）",
                          "「よういちお別れ展」（Dummy Space・おじいちゃんのお家／東京）"
                          ],
            works_onshow_image: ["./images/works/M1_2_kasajima/2_3.jpg", "./images/works/M1_2_kasajima/2_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_2_kasajima/",
            "./images/works/M1_2_kasajima/",
            "./images/works/M1_2_kasajima/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        joyce: {
            id: "_joyce",//htmlの入れ込む先のid
            top_image: "./images/works/M1_3_joyce/3_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/joyce_f.jpg",
            name_ja: "ジョイス・ラム",
            name_en: "Joyce Lam",
            class: "佐藤雅彦研究室",
            bachelor: "ロンドン大学東洋アフリカ研究学院（SOAS）日本語・経済学科卒業、慶應義塾大学大学院政策・メディア研究科修了",
            theme: "香港、トロント、ロンドンそして東京で暮らした経験から、「ホーム」という概念を常に変化し続ける流動的、多義的なものとして捉え直そうとしながら、ドキュメンタリー的な映像を制作する。",
            website: "https://www.joycetsin.com/",
            cv_year: ["2019", "2020"],
            cv_text: [
                          "イメージフォーラム映像研究所2018年度卒業制作展",
                          "イメージフォーラム映像研究所2019年度卒業制作展"
                          ],
            works_onshow_image: ["./images/works/M1_3_joyce/3_3.jpg", "./images/works/M1_3_joyce/3_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_3_joyce/",
            "./images/works/M1_3_joyce/",
            "./images/works/M1_3_joyce/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        sun: {
            id: "_sun",//htmlの入れ込む先のid
            top_image: "./images/works/M1_4_sun/4_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/sun_f.jpg",
            name_ja: "孫奎星",
            name_en: "Sun Kuixing",
            class: "高山明研究室",
            bachelor: "天津美術大学実験アート学 卒業",
            theme: "主に演劇、パフォーマンスアート、インスタレーションを制作し、公演企画や展示等を行っている。",
            website: "https://www.instagram.com/sssssswimming/",
            cv_year: ["2017", "2018", "2018", "2018", "2018", "2018", "2018", "2019", "2019", "2019", "2019", "2019", "2020", "2020", "2020"],
            cv_text: [
                          "第17回 平遥国際写真展（PIP）「原始のカーネル」（平遥、中国）",
                          "「LONGXIAGライブアート藝術祭」（南京、中国） ",
                          "「kill young people」（sowerart搜我藝術空间／上海、中国）",
                          "「Yangtze現代芸術博覧会」（南京国際展覧センター／南京、中国）",
                          "「Should be puzzled」（u-special派／天津、中国）",
                          "「異化」（上海万博展覧館 ／上海、中国）",
                          "「原始スープ」（DT空间／上海、中国）",
                          "「スペクタクル」（中国美術学院／杭州、中国）",
                          "「Last Minute Live Art 2019 video program」（Monohouse／南京、中国）",
                          "「吊 · 眼」（中国美術学院 銅场T-project／杭州、中国）",
                          "「蔡錦奨受賞作品展」（天津、中国）",
                          "「第五回国際行為芸術巡回展—跡を追う旅」（天津、中国）",
                          "「2020: Twenty Years towards A World Theatre」（OCAT／深圳、中国）",
                          "「Prophecy #1」（東京ドイツ文化センター／東京）",
                          "2019年度蔡錦奨受賞"
                          ],
            works_onshow_image: ["./images/works/M1_4_sun/4_3.jpg", "./images/works/M1_4_sun/4_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_4_sun/",
            "./images/works/M1_4_sun/",
            "./images/works/M1_4_sun/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        tatsumura: {
            id: "_tatsumura",//htmlの入れ込む先のid
            top_image: "./images/works/M1_5_tatsumura/5_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/tatsumura_f.jpg",
            name_ja: "龍村景一 ",
            name_en: "Keiichi Tatsumura",
            class: "桂英史研究室",
            bachelor: "東京藝術大学美術学部絵画科油画専攻 卒業",
            theme: "映像とグラフィックノベルを制作。編集を通して現実も編集。",
            website: "",
            cv_year: ["2016", "2016", "2016", "2017", "2017", "2017", "2017", "2018", "2018", "2018", "2019", "2019", "2019", "2020", "2020", "2020", "2020"
                            "　", "2018~", "2019", "2019", "2020", "2020", "2020", "　", "2018", "2018"],
            cv_text: [
                          "「奥村直樹ノ友達展」（DESK/ okumura／東京）",
                          "個展「お猿流るは悲しゅもないが 女郎の嘆きは愛しや」（小金井アートスポット シャトー2F／東京） ",
                          "「INITIATION 2016」（カフェ てぃ～えむ／東京）",
                          "「Boogie Nights」（特火点-tochka／東京）",
                          "「Approach to the Front」 / COCONANI左←→右／東京）",
                          "「AFTERALL」（ケーララ州コチ／インド）",
                          "「其コは此コ」（ゲンロン カオス*ラウンジ五反田アトリエ／東京）",
                          "「平成29年度 東京藝術大学美術学部絵画科油画 学部2年生展覧会『あの動脈とこの静脈－時と空間の旅－』」（東京藝術大学上野キャンパス美術学部絵画棟／東京）",
                          "「石橋財団国際交流 油画奨学生成果報告展」（東京藝術大学上野キャンパス美術学部絵画棟／東京）",
                          "「ゲンロン カオス*ラウンジ 新芸術校 第3期 最終成果展 2018『サードパーティ』」（ゲンロンカフェ／東京）",
                          "「東京藝術大学 油画専攻3年 展覧会『NI/O』」（3331 Arts Chiyoda／東京）",
                          "「グッバイ・ララバイ」（東京藝術大学上野キャンパス美術学部中央棟／東京）",
                          "「わたしはパイプではないのですか？」（芸宿／石川）",
                          "「令和元年度 東京藝術大学美術学部絵画科油画専攻 4年生卒業制作展」（東京藝術大学 上野キャンパス美術学部絵画棟5, 6, 7階アトリエほか／東京）",
                          "「第68回 東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                          "「UGO祭2020」（新大久保UGO/東京）",
                          "「ほっこりバザール」（新大久保UGO/東京）",
                          "　",
                          "無審査合同漫画雑誌『超漫パンゲア』企画・編集",
                          "革命アイドル暴走ちゃん豪公演「Berserker×Berserker」映像製作（OzAsia Festival／アデレード、オーストラリア）",
                          "革命アイドル暴走ちゃん松竹コラボ公演「暴走ちゃんの暴走」映像製作（花まる学習会王子小劇場／東京）",
                          "オンラインショップ「純喫茶バイオレンスバズーカ」開店",
                          "共同スタジオ「新大久保UGO」に運営メンバーとして参加",
                          "『まぼろしのインディーズゲーム Peeping Pension 完全攻略本』出版、販売",
                          "　",
                          "石橋財団国際交流奨学金",
                          "ロサンゼルスへ短期留学。カリフォルニア芸術大学（Cal Arts）に聴講生として参加。"
                          ],
            works_onshow_image: ["./images/works/M1_5_tatsumura/5_3.jpg", "./images/works/M1_5_tatsumura/5_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_5_tatsumura/",
            "./images/works/M1_5_tatsumura/",
            "./images/works/M1_5_tatsumura/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        tanaka: {
            id: "_tanaka",//htmlの入れ込む先のid
            top_image: "./images/works/M1_6_tanaka/6_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/tanaka_f.jpg",
            name_ja: "田中彩",
            name_en: "Aya Tanaka",
            class: "桂英史研究室",
            bachelor: "横浜国立大学教育人間科学部学校教育課程 卒業",
            theme: "身体感覚を探ることに興味がある。3DCGを媒介させながら、身体について考えたい。",
            website: "",
            cv_year: ["2016~2020", "2019", "2020", "　", "2015"],
            cv_text: [
                          "横浜国立大学モダンダンス部自主公演",
                          "「OrganWorks presents コンテンポラリーダンス振付家育成講座 Terra Co. 成果公演『Period #1』」（セッションハウス／東京）",
                          "「DANCE×Scrum!!! 2020」中村蓉 振り付け作品出演（あうるすぽっと／東京）",
                          "　",
                          "第28回 全日本高校・大学ダンスフェスティバル 文部科学大臣賞を始め、6度の受賞を経験。"
                          ],
            works_onshow_image: ["./images/works/M1_6_tanaka/6_3.jpg", "./images/works/M1_6_tanaka/6_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_6_tanaka/",
            "./images/works/M1_6_tanaka/",
            "./images/works/M1_6_tanaka/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        nishimura: {
            id: "_nishimura",//htmlの入れ込む先のid
            top_image: "./images/works/M1_7_nishimura/7_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/nishimura_f.jpg",
            name_ja: "西村梨緒葉",
            name_en: "Rioha Nishimura",
            class: "桂英史研究室",
            bachelor: "多摩美術大学美術学部情報デザイン学科メディア芸術コース 卒業",
            theme: "鑑賞／上演／再生をキーワードに、物語（のような空間）の鑑賞プロセスについて考えている。また、キャラクター論に関する勉強会を主催し、視覚文化や物語作品に依存しないキャラクターの存在単位を模索している。",
            website: "https://rioha-nishimura.com/",
            cv_year: ["2017", "2018", "2018", "2018", "2018", "2019", "2019", "2020", "2020"],
            cv_text: [
                          "個展「期末テストの前に会いたい」（Gallery Kazane／東京）",
                          "「bombyx mori と第 3 の目のためのスタディ」キュレーターとして参加（多摩美術大学八王子キャンパス／東京）",
                          "「終終終〜の終」出展・展覧会ステートメント執筆（多摩美術大学八王子キャンパス／東京）",
                          "「Round on Laundry on Land」企画構成・作家紹介文執筆（多摩美術大学八王子キャンパス／東京）",
                          "「#OC_HACK project」企画ステートメント執筆（多摩美術大学八王子キャンパス／東京）",
                          "「『ESCAPE』多摩美のメディア芸術祭 vol.2」出展・企画代表・ゲストトーク企画キュレーター（gallery LE DECO）",
                          "「ボールプール」タイトル提供・作家紹介テキスト執筆（多摩美術大学八王子キャンパス／東京）",
                          "多摩美術大学美術学部情報デザイン学科メディア芸術コース2019年度卒業制作展「Skippp…p」出展・企画代表・ゲストトーク企画キュレーター（新型コロナウィルス感染症流行拡大のため中止）",
                          "「Emergency Call」（電話で聞く展覧会）"
                          ],
            works_onshow_image: ["./images/works/M1_7_nishimura/7_3.jpg", "./images/works/M1_7_nishimura/7_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_7_nishimura/",
            "./images/works/M1_7_nishimura/",
            "./images/works/M1_7_nishimura/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        hayashi: {
            id: "_hayashi",//htmlの入れ込む先のid
            top_image: "./images/works/M1_8_hayashi/8_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/hayashi_f.jpg",
            name_ja: "林裕人",
            name_en: "Yuto Hayashi",
            class: "桐山孝司研究室",
            bachelor: "東京藝術大学美術学部絵画科油画専攻 卒業",
            theme: "高度に複雑化した社会の中で、それぞれが知覚するリアリティが全く異なってしまっていることについて考えています。今回は、Googleストリートビューを彷徨って人と出会うゲームを展示します。バーチャル空間を介したやりとりと、人との出会い、そしてそこでちぐはぐにされた身体について扱います。",
            website: "https://hyasssy.tokyo/",
            cv_year: ["2016", "2017", "2018", "2018", "2019", "2019", "2019", "2019", "2020", "2020"],
            cv_text: [
                          "東京藝術大学藝祭2016内の企画 上野商店街展示（上野駅周辺／東京）",
                          "東京藝術大学絵画科油画専攻有志5人展（ターナーギャラリー／東京）",
                          "「平成29年度 東京藝術大学美術学部絵画科油画 学部2年生展覧会『あの動脈とこの静脈－時と空間の旅－』」（東京藝術大学上野キャンパス美術学部絵画棟／東京）",
                          "「LOCI 内海拓 林裕人 二人展」（国分寺くるみギャラリー／東京）",
                          "「東京藝術大学 油画専攻３年 展覧会『NI/O』」（3331 Arts Chiyoda／東京）",
                          "「禁足地－space:403」（コートヤードガロウ／東京）",
                          "「石橋財団国際交流 油画奨学生成果報告展」（東京藝術大学上野キャンパス美術学部絵画棟／東京）",
                          "「はやしとかずま」（東京藝術大学上野キャンパス美術学部絵画棟1階 Yuga Gallery／東京）",
                          "「令和元年度 東京藝術大学美術学部絵画科油画専攻 4年生卒業制作学内展」（東京藝術大学上野キャンパス美術学部絵画棟5, 6, 7階アトリエほか／東京）",
                          "「第68回東京藝術大学卒業・修了作品展」（東京都美術館／東京）",
                          "　",
                          "石橋財団国際交流奨学金"
                          "プログラムの助成によりユーラシア大陸横断を達成。"
                          ],
            works_onshow_image: ["./images/works/M1_8_hayashi/8_3.jpg", "./images/works/M1_8_hayashi/8_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_8_hayashi/",
            "./images/works/M1_8_hayashi/",
            "./images/works/M1_8_hayashi/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        matsui: {
            id: "_matsui",//htmlの入れ込む先のid
            top_image: "./images/works/M1_9_matsui/9_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/matsui_f.jpg",
            name_ja: "松井靖果",
            name_en: "Shizuka Matsui",
            class: "桐山孝司研究室",
            bachelor: "女子美術大学短期大学部専攻科造形専攻創造デザインコース（メディア） 卒業",
            theme: "個人的な感情・生きた軌跡を顕在化させ、残す事を目的とした映像を用いたインスタレーションを制作。今回は、女人禁制時代の富士登山というテーマで、CGシミュレーション作品として展開する。",
            website: "https://mtiszks.myportfolio.com/top",
            cv_year: ["2013", "2014", "2015", "2016", "　", "2012", "2013", "2014"],
            cv_text: [
                          "「女子美スタイル2012 −113年 愛と誇りを抱いて−」（東京都美術館／東京）",
                          "「シェル美術賞展」（国立新美術館／東京）",
                          "「未来展−美大の競演−展」（銀座日動画廊／東京）",
                          "「茨城県北芸術祭」（茨城）",
                          "　",
                          "第18回 学生CGコンテストノミネート",
                          "「女子美スタイル2012 −113年 愛と誇りを抱いて−」住友文彦賞 受賞",
                          "シェル美術賞2014 入選"
                          ],
            works_onshow_image: ["./images/works/M1_9_matsui/9_3.jpg", "./images/works/M1_9_matsui/9_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_9_matsui/",
            "./images/works/M1_9_matsui/",
            "./images/works/M1_9_matsui/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        },

        yamagishi: {
            id: "_yamagishi",//htmlの入れ込む先のid
            top_image: "./images/works/M1_10_yamagishi/10_2.jpg",
            top_caption_title: "ONTHEDEADCOALMINE",
            top_caption_year: "2020",
            top_caption_media: "Video, Mixed Media",
            portrait: "./images/faces/M1/yamagishi_f.jpg",
            name_ja: "山岸耕輔",
            name_en: "Kosuke Yamagishi",
            class: "畠山直哉研究室",
            bachelor: "金沢美術工芸大学大学院美術工芸研究科絵画専攻油画コース 卒業",
            theme: "水平器や金属探知機といったツールと、それらを扱う身体によって生まれる行為を、日常にある些細な関心事にあてがう。そこに生じるズレを等身大のスケールで見つめ、映像を用いて他者との距離を描写する。",
            website: "",
            cv_year: ["2015", "2015", "2015", "2015", "2016", "2016", "2017", "2017", "2017", "2018", "2019", "2019", "2020", "2020"],
            cv_text: [
                          "「芸宿アンデパンダン展 『バカ賞』」（芸宿／石川）",
                          "「百夜の歩み展」（アートベース石引／石川）",
                          "「oterart オテラート金澤2015」（常松寺／石川）",
                          "「F(L)ocking BiRDs 群鳥」（芸宿／石川）",
                          "「百夜の歩み」（アートベース石引／石川）",
                          "「まだ帰りたくない」（ギャラリー知／京都）",
                          "「境界線と夜」（芸宿／石川）",
                          "「奥能登国際芸術祭」KINOURA MEETINGプロジェクトメンバーとして参加（石川）",
                          "「延岡アーティストインレジデンス『東海さるく』」（宮崎）",
                          "「内灘闘争 −風と砂の記憶−」（風と砂の館／石川・アートベース 石引／石川）",
                          "個展「Weekly one-man show」（金沢美大油画専攻外部アトリエ／石川）",
                          "個展「習慣と週間」（金沢美大油画専攻外部アトリエ／石川）",
                          "個展「OVERWORK」（問屋まちスタジオ／石川）",
                          "「レンタルハウスツアー」（横浜三溪園 旧燈明寺本堂／神奈川・CRISPY EGG Gallery／神奈川・北石坂工芸（仮）／石川）"
                          ],
            works_onshow_image: ["./images/works/M1_10_yamagishi/10_3.jpg", "./images/works/M1_10_yamagishi/10_7.jpg"],//トップ以外の展示作品写真
            works_onshow_title: ["ONTHEDEADCOALMINE", "ONTHEDEADCOALMINE"],
            works_onshow_year: ["2020", "2020"],
            works_onshow_media: ["Video, Mixed Media", "Video, Mixed Media"],
            pastworks_image: ["./images/works/M1_10_yamagishi/",
            "./images/works/M1_10_yamagishi/",
            "./images/works/M1_10_yamagishi/"],
            pastworks_title: ["ONTHE DEAD COALMINE 住む", "ONTHE DEAD COALMINE 掃除", "ONTHE DEAD COALMINE 掃除"],
            pastworks_year: ["2020", "2020", "2020"],
            pastworks_media: ["銀塩プリント", "Video", "Video"]
        }





};

//モーダルの選択が1回目かチェック
let flags = {
    _osato: false,
    _otaki: false
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
    artisttop.appendChild(ArtistCaption(artistData.top_caption_title, artistData.top_caption_year, artistData.top_caption_media, true));

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
    p.textContent = artistData.class;
    artistinfo.appendChild(p);
    var p = document.createElement("p");
    p.textContent = artistData.bachelor;
    artistinfo.appendChild(p);
    var artisttheme = clone.querySelector("#artist-theme");
    artisttheme.textContent = artistData.theme;
    var artistcv = clone.querySelector("#artist-cv");
    for (let i = 0; i < artistData.cv_year.length; i++) {
        var parent = document.createElement("div");
        parent.className = "cv-wrapper";
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
    for (let i = 0; i < artistData.works_onshow_image.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = artistData.works_onshow_image[i];
        div.appendChild(img);
        div.appendChild(ArtistCaption(artistData.works_onshow_title[i], artistData.works_onshow_year[i], artistData.works_onshow_media[i], true));
        artistworks.appendChild(div);
    }
    for (let i = 0; i < artistData.pastworks_image.length; i++) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = artistData.pastworks_image[i];
        img.style = "width:70%; display:inline-block";
        div.appendChild(img);
        div.appendChild(ArtistCaption(artistData.pastworks_title[i], artistData.pastworks_year[i], artistData.pastworks_media[i]));
        artistworks.appendChild(div);
    }

    //フラグメント(パーツ入れ)に挿入
    fragment.appendChild(clone);
    document.getElementById(artistData.id).replaceWith(fragment);
}

function ArtistCaption(title, year, media, isOnShow = false) {
    var parent = document.createElement("div");
    parent.style = "overflow:hidden;";
    var div = document.createElement("div");
    div.className = isOnShow ? "artist-caption" : "artist-caption-past";
    // var p = document.createElement("p");
    // p.textContent = isOnShow ? "出展作品" : "過去作品";
    // p.className = "artist-caption-annotation";
    // div.appendChild(p);
    var p = document.createElement("p");
    p.textContent = title;
    p.className = "artist-caption-title";
    div.appendChild(p);
    var p = document.createElement("p");
    p.className = "artist-caption-info";
    p.textContent = year + " / " + media;
    div.appendChild(p);
    var p = document.createElement("p");
    p.className = "artist-caption-info";
    p.textContent = isOnShow ? "On Show" : "Past Work";
    div.appendChild(p);
    if (isOnShow) {
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
