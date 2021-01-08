$(function(){

			var navLink = $('ul li a');
			// console.log(navLink.eq(0));

			// クソコード
           $(window).scroll(function(){
		 //#title
		if ($(window).scrollTop() > $('#title').offset().top &&　$(window).scrollTop() < $('#details').offset().top){
			 $("ul li a .nav1").css("color", "#ff475a");
			 $("ul li a .nav2").css("color", "#83b1ff"); // current
			 $("ul li a .nav3").css("color", "#5f5f5f");
			 $("ul li a .nav4").css("color", "#272727");
		}//#details
				else if ($(window).scrollTop() > $('#details').offset().top  &&　$(window).scrollTop() < $('#artists').offset().top){
					$("ul li a .nav1").css("color", "#ff475a");
					$("ul li a .nav2").css("color", "#60667e");
					$("ul li a .nav3").css("color", "#c7cb9d"); // current
					$("ul li a .nav4").css("color", "#272727");
				}//#artists
				else if ($(window).scrollTop() > $('#artists').offset().top  &&　$(window).scrollTop() < $('#end').offset().top ){
					$("ul li a .nav1").css("color", "#ff475a");
					$("ul li a .nav2").css("color", "#60667e");
					$("ul li a .nav3").css("color", "#5f5f5f");
					$("ul li a .nav4").css("color", "#c6c6c6"); // current
				}//#top
				else if ($(window).scrollTop() > $('#top').offset().top  &&　$(window).scrollTop() < $('#title').offset().top ){
					$("ul li a .nav1").css("color", "#ffa88d"); // current
					$("ul li a .nav2").css("color", "#60667e");
					$("ul li a .nav3").css("color", "#5f5f5f");
					$("ul li a .nav4").css("color", "#272727");
				}

	          });
        });

// $(function() {
// 	// ナビゲーションのリンクを指定
// 	var navLink = $('ul li a');
//
// 	// 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
// 	var contentsArr = new Array();
// 	for (var i = 0; i < navLink.length; i++) {
// 		// コンテンツのIDを取得
// 		var targetContents = navLink.eq(i).attr('href');
// 		// ページ内リンクでないナビゲーションが含まれている場合は除外する
// 		if(targetContents.charAt(0) == '#') {
//             // ページ上部からコンテンツの開始位置までの距離を取得
//             // 小数点以下切り捨て
//             var targetContentsTop = $(targetContents).offset().top;
//             targetContentsTop = Math.floor(targetContentsTop)
//             // console.log(targetContentsTop);
// 			// ページ上部からコンテンツの終了位置までの距離を取得
//             // 小数点以下切り捨て
//             var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
//             targetContentsBottom = Math.floor(targetContentsBottom)
//             // console.log(targetContentsBottom);
//             // 配列に格納
// 			contentsArr[i] = [targetContentsTop, targetContentsBottom];
// 			console.log(contentsArr[1])
// 		}
// 	};
//
// 	// 現在地をチェックする
// 	function currentCheck() {
// 		// 現在のスクロール位置を取得
//         var windowScrolltop = $(window).scrollTop();
// 		for (var i = 0; i < contentsArr.length; i++) {
// 			// 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
// 			if( (contentsArr[i][0]) <= windowScrolltop && (contentsArr[i][1]) >= windowScrolltop) {
// 				// 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
// 				navLink.removeClass('current');
// 				navLink.eq(i).addClass('current');
// 				i == contentsArr.length;
// 			}
// 		};
// 	}
//
// 	// ページ読み込み時スクロール時に、現在地をチェックする
// 	$(window).on('load scroll resize', function() {
//         currentCheck();
//         // console.log('スクロールしました');
//     });
//
// });
//
// // 参考：https://www.tam-tam.co.jp/tipsnote/sample/ishikawa/140528/
