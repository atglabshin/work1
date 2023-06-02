$(function(){ //시작

//scroll
  $(window).scroll(function(){
    curr = $(window).scrollTop();//현재 윈도우창에 내 스크롤바 위치 
    
    if(curr > 0){ 
      $('.header').addClass('fixed')
    }else{
      $('.header').removeClass('fixed')
    }
  })
  
  $(window).trigger('scroll')

  $('.gnb .btn-all').click(function(){
    $('.gnb').toggleClass('open');
    $('.gnb .group-all').slideToggle();
  })

//side menu
//열리고 닫히는 모드
$('.chk').click(function(e){
  e.preventDefault();
 
  $(this).toggleClass('on').siblings('.depth2').slideToggle();//열려라
})  
  
// ** main evnet-ad slide*** //
const adSlide = new Swiper('.ad-slide',{
  effect:"fade",
  //오토플레이
  autoplay:{
    delay:3000,
    disableOnInteraction: false, 
   }
})
// ** main-visual slide*** //
//const재할당 불가능한 변수 
  const mainSlide = new Swiper('.main-slide',{
    effect:"fade",
    pagination:{
      el:".pagination"
    },
    //오토플레이
    autoplay:{
      delay:2000,
      disableOnInteraction: false,
    }
  })
//@@ 돋보기 서치페이지 @@@
$('.btn-search').click(function(){
  // e.preventDefault();
  $('.popup-search').addClass('active');
  $('header, footer, main, event-ad').show()
})

$('.btn-search').click(function(){
  // e.preventDefault();
  $('.popup-search').removeClass('active');
  $('header, footer, main, event-ad').hide()
  $('.btn-back').click().history.back();

})


//햄버거메뉴
$('.btn-menu').click(function(e){
  e.preventDefault();
  $('.side-nav').addClass('on');
  $('body').addClass('hidden')
})

$('.side-nav .btn-close, .dimmed').click(function(e){
  e.preventDefault();
  $('.side-nav').removeClass('on');
  $('body').removeClass('hidden')
})

// 메뉴 열리고 닫히는 모드
$('.nav').click(function(e){
  e.preventDefault();
  if($(this).hasClass('on')){
    $('.nav').removeClass('on').siblings('.sub-list').slideUp();//닫혀라
    return false; //스크립트 밑 소스는 없어짐
  }
  $('.nav').removeClass('on').siblings('.sub-list').slideUp();//닫혀라
  $(this).addClass('on').siblings('.sub-list').slideToggle();//열려라
})


  const cateSlide = new Swiper('.sc-cate .swiper',{
    slidesPerView:2.2,
    spaceBetween:10,
  })

// 상단으로 바로가기 버튼

  let lastScroll=0;

  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr >= 20){

    if(curr > lastScroll){
      $('.fix-btn').removeClass('show');
    }else{
      $('.fix-btn').addClass('show');
    }

    lastScroll = curr;
  
    }else{
      $('.fix-btn').removeClass('show')
    }
  })
    


  $('.fix-btn .btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
  })


  // 메인 tab menu

    $('.nav-list a').click(function(e){
      e.preventDefault();

      target = $(this).attr('href');

      // console.log(target);
      $('.nav-list a').removeClass('active');
      $(this).addClass('active')
      $(target).addClass('active').siblings().removeClass('active');
    })

    
      /*
      * @search page  
      */
      $('header .btn-search').click(function(e){
        e.preventDefault();

        target = $(this).data('target');

        $(this).addClass('active').siblings().removeClass('active');

        $(target).addClass('active').siblings().removeClass('active');
      })
      
})//지우지마세요
