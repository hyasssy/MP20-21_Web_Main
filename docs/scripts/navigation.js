$(function(){

           $(window).scroll(function(){

						 var position = $(window).scrollTop();
						 var top = Math.floor($('#top').offset().top);
						 var title = Math.floor($('#title').offset().top) - 10;
						 var details = Math.floor($('#details').offset().top) -100;
						 var artists = Math.floor($('#artists').offset().top) -100;
						 var end = Math.floor($('#end').offset().top);

						 if(position <= title){
							// TOP
							$("#nav1").attr("class", "nav1-current");
							$("#nav2").attr("class", "nav2");
							$("#nav3").attr("class", "nav3");
							$("#nav4").attr("class", "nav4");
						 }else if(position < details){
							// TITLE
							$("#nav1").attr("class", "nav1");
							$("#nav2").attr("class", "nav2-current");
							$("#nav3").attr("class", "nav3");
							$("#nav4").attr("class", "nav4");
						 }else if(position < artists){
							// DETAILS
							$("#nav1").attr("class", "nav1");
							$("#nav2").attr("class", "nav2");
							$("#nav3").attr("class", "nav3-current");
							$("#nav4").attr("class", "nav4");
						 }else if(position < end){
							// ARTISTS
							$("#nav1").attr("class", "nav1");
							$("#nav2").attr("class", "nav2");
							$("#nav3").attr("class", "nav3");
							$("#nav4").attr("class", "nav4-current");
						 }
					});

});
