$(function(){

  //스크롤시 header
  $(function(){
    var shrinkHeader = 300;
      $(window).scroll(function(){
        var scroll = getCurrentScroll();
          if(scroll >= shrinkHeader){
            $('#header').addClass('active');
          }else{
            $('#header').removeClass('active');
          }
      });
      function getCurrentScroll(){
        return window.pageYOffset || document.documentElement.scrollTop;
      }
  });
  
    var pull    = $('.fas');
      menu    = $('.var');
      menuHeight  = menu.height();
   
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 768 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

      //맨 위로 올라가기
      var sa = 700;
			//스크롤 기본폼 window기억!
			$(window).scroll(function(){
				var num = $('html,body').scrollTop();
				console.log(num);
				if(num>sa){
			   		$('.scroll_show').fadeIn();
			   }else{
			   		$('.scroll_show').fadeOut();
			   }
			});
			$('.top').click(function(e){
				$('html,body').stop().animate({scrollTop:0},1000,'swing');
				e.preventDefault();
			})
     
      //스크롤
      
      $('#nav a, .var a').click(function(){
      var $elem = $($(this).attr("href"));
      var offset = $elem.offset().top - ($(window).height() / 2) + ($elem.height() / 2);
      $('html, body').animate({
        scrollTop: offset
      }, 400);
      return false;
    });
    //배너 화살표 스크롤 
    $('.scroll a').click(function(){
      var $elem = $($(this).attr("href"));
      var offset = $elem.offset().top - ($(window).height() / 2) + ($elem.height() / 2);
    $('html, body').animate({
      scrollTop: offset
    }, 600);
    return false;
  });

 
    //스크롤할때 자연스럽게
    function isElementUnderBottom(elem, triggerDiff) {
      const { top } = elem.getBoundingClientRect();
      const { innerHeight } = window;
      return top > innerHeight + (triggerDiff || 0);
    }
    
    function handleScroll() {
      const elems = document.querySelectorAll('.up-on-scroll');
      elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
          elem.style.opacity = "0";
          elem.style.transform = 'translateY(70px)';
        } else {
          elem.style.opacity = "1";
          elem.style.transform = 'translateY(0px)';
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll);

});