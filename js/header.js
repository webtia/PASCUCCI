$(document).ready(function () {

  /* 2메뉴-menu8 */
  $("nav, .sub_bgbox").hover(function(){ //주메뉴영역전체에 오버시 
    $('nav').find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){   
    $('nav').find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  //주메뉴 오버시 서브박스 배경색과 왼쪽에 이미지 나오게 함
  $(".main").hover(function () {

    let oldimg = 0; //기존에 보이는 이미지
    let newimg = $(this).index(); //새로 바뀌는 이미지

    $(this).find(".sub_all").css({ "background": "rgba(254, 199, 209, 0.3)"});

    $(".subBoxImg ul li").eq(oldimg).stop().css({display:"none"}); //기존이미지는 숨기기
    $(".subBoxImg ul li").eq(newimg).stop().css({display:"flex"}); //새로 선택된 이미지는 보이기
    oldimg = newimg; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장

  },function(){
    $(this).find(".sub_all").css({ "background": "#fff"});
    $(".subBoxImg ul li").stop().hide();
  });



});