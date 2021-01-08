$(function(){

           $(window).scroll(function(){

						 var position = $(window).scrollTop();
						 var top = Math.floor($('#top').offset().top);
						 var title = Math.floor($('#title').offset().top) - 10;
						 var details = Math.floor($('#details').offset().top) -100;
						 var artists = Math.floor($('#artists').offset().top) -100;
						 var end = Math.floor($('#end').offset().top);

						 switch (true) {
						 	case (title >= position):
							// TOP
							  $("#nav1").attr("class", "nav1-current");
								$("#nav2").attr("class", "nav2");
								$("#nav3").attr("class", "nav3");
								$("#nav4").attr("class", "nav4");
								// console.log('top');
								break;
							case (position > title && details > position):
							// TITLE
								$("#nav1").attr("class", "nav1");
								$("#nav2").attr("class", "nav2-current");
								$("#nav3").attr("class", "nav3");
								$("#nav4").attr("class", "nav4");
								// console.log('title');
								break;
							case (position > details && artists > position):
							// DETAILS
								$("#nav1").attr("class", "nav1");
								$("#nav2").attr("class", "nav2");
								$("#nav3").attr("class", "nav3-current");
								$("#nav4").attr("class", "nav4");
								// console.log('details');
								break;
							case (position > artists && end > position):
							// ARTISTS
								$("#nav1").attr("class", "nav1");
								$("#nav2").attr("class", "nav2");
								$("#nav3").attr("class", "nav3");
								$("#nav4").attr("class", "nav4-current");
								// console.log('artists');
								break;

							 default: break;
							//  console.log('error...');

						}
					});

});
