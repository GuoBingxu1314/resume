$(document).ready(function() {

	//获取导航栏位置
	var topScroll = $(".blockTop").offset().top;
	//导航栏固定
	window.onscroll = function() {
		var cusTop = document.body.scrollTop;
//		console.log(cusTop)
		if(cusTop > 360){
			
			$("#navigation-sticky-wrapper").addClass("cusStyle");	
			if(cusTop > 1000){
				$("container").find(".ani").addClass("aniCus");
			}
		}else if( 0< cusTop && cusTop < 360){
			$("#navigation-sticky-wrapper").removeClass("cusStyle");	
		}
		
		//第一部分-----------------------------------------------
		 var aboutMyTop=$("#aboutMy").offset().top;
	     var aboutMyBootom=$("#aboutMy").offset().top+$("#aboutMy").width();
	     var bdScrollTop=document.body.scrollTop;
//	     console.log(aboutMyTop+"-----"+aboutMyBootom)
		 if(document.body.scrollTop >= aboutMyTop-200 && document.body.scrollTop <=1200) {
//			console.log(document.body.scrollTop);
			$(".wow_img").addClass("myfadeInUp");
			$(".wow_img").addClass("animated");
			
			$(".heading").addClass("myfadeInUp2");
			$(".heading").addClass("animated");
			
			$(".wow_p").addClass("myfadeInUp3");
			$(".wow_p").addClass("animated");
			
			
		 } else {
			
			$(".wow_img").removeClass("myfadeInUp");
			$(".heading").removeClass("myfadeInUp2");
			$(".wow_p").removeClass("myfadeInUp3");
		 }
		 
		 //第二部分-----------------------------------------------
		 var blogTop=$("#blog").offset().top;
	     var blogBootom=$("#blog").offset().top+$("#blog").width();
	     
	     console.log(blogTop+"-----"+blogBootom);
	     
		 if(document.body.scrollTop >= blogTop-200 && document.body.scrollTop <=2200) {
			//			console.log(document.body.scrollTop);
			$(".liOne").addClass("fadeInLeft");
			$(".liOne").addClass("animated");
			$(".liTwo").addClass("fadeInLeft2");
			$(".liTwo").addClass("animated");
			
			$(".liTree").addClass("fadeInRight");
			$(".liTree").addClass("animated");
			$(".liFour").addClass("fadeInRight2");
			$(".liFour").addClass("animated");
			
			$(".liFive").addClass("myfadeInUp2");
			$(".liFive").addClass("animated");
			$(".liSix").addClass("myfadeInUp3");
			$(".liSix").addClass("animated");
		 } else {
			
			$(".liOne").removeClass("fadeInLeft");
			$(".liTwo").removeClass("fadeInLeft2");
			$(".liTree").removeClass("fadeInRight");
			$(".liFour").removeClass("fadeInRight2");
			$(".liFive").removeClass("myfadeInUp2");
			$(".liSix").removeClass("myfadeInUp3");
		 }
         //第三部分-----------------------------------------------
		 var jieshaoTop=$("#jieshao").offset().top;
	     var jieshaoBootom=$("#jieshao").offset().top+$("#jieshao").width();
	     
	     console.log(jieshaoTop+"-----"+jieshaoTop);
	     
		 if(document.body.scrollTop >= jieshaoTop-400 && document.body.scrollTop <=2800) {
//			console.log(document.body.scrollTop);			
			$(".wow_h1").addClass("myfadeInUp");
			$(".wow_h1").addClass("animated");
			
			$(".wow_p").addClass("myfadeInUp2");
			$(".wow_p").addClass("animated");
			
			
		 } else {
			
			$(".wow_h1").removeClass("myfadeInUp");
			$(".wow_p").removeClass("myfadeInUp2");
			
		 }
		 
		 
		 if(document.body.scrollTop >= jieshaoTop-100 && document.body.scrollTop <=3300) {
			console.log(document.body.scrollTop);			
			$(".wow_title1").addClass("myfadeInUp3");
			$(".wow_title1").addClass("animated");
			
			$(".wow_title2").addClass("myfadeInUp4");
			$(".wow_title2").addClass("animated");
			
			$(".wow_title3").addClass("myfadeInUp5");
			$(".wow_title3").addClass("animated");
			
			
		 } else {
			
			$(".wow_title1").removeClass("myfadeInUp3");
			$(".wow_title2").removeClass("myfadeInUp4");
			$(".wow_title3").removeClass("myfadeInUp5");
			
		 }
		 if(document.body.scrollTop >= jieshaoTop+300 && document.body.scrollTop <=3800) {
			console.log(document.body.scrollTop);			
			
			
			$(".wow_title4").addClass("myfadeInUp3");
			$(".wow_title4").addClass("animated");
			
			$(".wow_title5").addClass("myfadeInUp4");
			$(".wow_title5").addClass("animated");
			
			$(".wow_title6").addClass("myfadeInUp5");
			$(".wow_title6").addClass("animated");
			
		 } else {
			
			
			$(".wow_title4").removeClass("myfadeInUp3");
			$(".wow_title5").removeClass("myfadeInUp4");
			$(".wow_title6").removeClass("myfadeInUp5");
			
		 }
		 
		 
		 //第四部分-----------------------------------------------
		 var footerTop=$("#footer").offset().top;
	     var footerBootom=$("#footer").offset().top+$("#footer").width();
	     
	     console.log(footerTop);
	     
		 if(document.body.scrollTop >= footerTop-700 ) {
		 	
			console.log(document.body.scrollTop);			
			$(".foot1").addClass("fadeInLeft3");
			$(".foot1").addClass("animated");
			
			$(".foot2").addClass("fadeInLeft");
			$(".foot2").addClass("animated");
			$(".foot3").addClass("myfadeInUp3");
			$(".foot3").addClass("animated");
			
			
		 } else {
			
			$(".foot1").removeClass("fadeInLeft3");
			$(".foot2").removeClass("fadeInLeft");
			$(".foot3").removeClass("myfadeInUp3");
			
		 }
	}
	var timmer;
	var go = true;
	$(".nav li").click(function(){
		
        $(".ss").removeClass("class");
		$(this).children("span").addClass("class");
		
		var that=$(this);
		if(go){
				gogogo(that);
			}
	})

	function gogogo(x){

		var idx = x.index();
		var dc = document.body.scrollTop;
		
		console.log(idx + "下标");
		console.log(document.body.scrollTop + "===当前的scroll");
		console.log($(".box").eq(idx).offset().top + "======dv" + idx + "的offsettop");

		go = false;

		//当滚动轴在div的下面
		//document.body.scrollTop-$(".s").eq(idx).offset().top>0的时候

		if(dc - $(".box").eq(idx).offset().top > 0) {

			var jl = parseFloat((document.body.scrollTop - $(".box").eq(idx).offset().top)) / 100;
			if(!go) {

				timmer = setInterval(function() {
					document.body.scrollTop -= jl;

					if(document.body.scrollTop <= $(".box").eq(idx).offset().top) {
						clearInterval(timmer);
						go = true;
						console.log(11)
					}
				}, 1);
			}
		}

		//当滚动轴在div的上面
		//document.body.scrollTop-$(".s").eq(idx).offset().top《0的时候
		else if(dc - $(".box").eq(idx).offset().top < 0) {

			var jx = parseFloat($(".box").eq(idx).offset().top - document.body.scrollTop);
			var xx = jx / 100;
			//此处有一个不明的bug  移动的距离必须写一个固定的数字
			if(jx < 200) {
				xx = 1;
			}
			if(!go) {
				timmer = setInterval(function() {
					document.body.scrollTop += xx;
					//					console.log(jl+"每次加上的距离");
					if(document.body.scrollTop >= $(".box").eq(idx).offset().top) {
						clearInterval(timmer);
						go = true;
						console.log(11)
					}
				}, 1);
			}
		}

	}

    //輪播聲明
    var mySwiper = new Swiper('.cusSwiper',{
				pagination : '.swiper-pagination',
				paginationClickable :true,
				autoplay: 2000,
				speed: 1000,
				autoplayDisableOnInteraction: false,
			})
   
    //監聽鼠標添加動畫
    
   
    
    

//	window.onscroll = function() {
//	
//			//鼠標滾動事件 好像不能寫？？/？
//		if(document.body.scrollTop>=aboutMyTop){
//		    	console.log('開始動畫');
//		    	
//		    	
//		    	
//		    }
//	
//		}





});