$(document).ready(function () {

  /* 3.visual   메뉴2번___________________ */ 
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx=0; //기존이미지
  let idx=0; //새로 바뀌는 이미지
  let img_n = $img.length;  // length메서드 -> 1,2,3...이미지의 개수를 세어서 변수를 저장


  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ //매개변수가 있는 함수 --> idx는 선택되는 이미지

    if(oldidx != idx){ //기존의 이미지와 선택된 이미지가 다를때...

      $btn.eq(oldidx).removeClass("active");//기존 하단버튼 비활성화 -> active 클래스를 삭제
      $btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화- > active 클래스를 추가
      $img.eq(oldidx).stop().fadeOut("300");//기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn("300");//기존 이미지 나타남
    
    }

    oldidx = idx;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

  };

  //자동함수 생성
  function changeAuto(){

    idx++;
    //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
    if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx=0;
    };

    changeImg(idx);

  };

  timer=setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생


  //하단버튼 클릭시.....
  $btn.click(function(){

    clearInterval(timer); //자동함수 해지->clearInterval(변수) -> 클릭과 동시에 이것부터 실행(위에 timer 변수를 만든 이유)
    idx=$(this).index(); //0,1,2....
    changeImg(idx);
    timer=setInterval(changeAuto,4000);//버튼을 클릭 안할대는 다시 함수 자동재생

  });


  //좌우버튼 클릭시.....
  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx>img_n-1){ //선택한 이미지가 0,1,2...4 마지막일때 맨처음부터 다시 시작
      idx=0;
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });

  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx<0){ //선택한 이미지가 4,3,2...0 첫번째일때 맨 마지막부터 다시 시작
      idx=img_n-1; //총개수 5-1=4(index 0,1,2,3,4)
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });

  /* circle ______________________________________________ */ 
  let $Cimg = $(".rbox");
  let oldCidx=0;
  let Cidx=0;
  let Cimg_n = $Cimg.length;

  //이미지바뀌는 함수 
  function changeCimg(Cidx){
  if(oldCidx != Cidx){
    $Cimg.eq(oldCidx).removeClass("rbox_main");
    $Cimg.eq(Cidx).addClass("rbox_main")
  }
  oldCidx = Cidx;
  };

  //자동합수 생성
  function changeCauto(){
    Cidx++;
    if(Cidx>Cimg_n-1){
      Cidx=0;
    };
  
     changeCimg(Cidx);
  
  };

  setInterval(changeCauto,2000); //2초 간격으로 함수를 자동재생

  /* tab ____________________________________*/
  let $allTabBGimg = $(".tab_visual .tab_bg") ;
  let $tabBtn = $(".tab li a")
  let data;

  $tabBtn.on('click',function(e){
    e.preventDefault(); //a태그 링크이동 막기 
    $(`.${data}`).stop(false, true); //배경이미지가 바뀌는 중이었다면 움직이기 멈추기 

    $tabBtn.removeClass('on'); // 다른 메뉴들 글자 기본으로 
    $(this).addClass('on'); //클릭한 메뉴 두껍게 

    data = $(this).data('tab'); //data값 가져오기 
    //console.loge(data);

    $(`.${data}`).css('z-index','1'); //선택된 이미지 맨 앞으로 보내기 
    $allTabBGimg.not(`.${data}`).css('z-index','0'); //나머지 이미지 뒤로 보내기 

    //이미지 바뀌는 애니메이션
    $(`.${data}`).animate({
      left: 0,
    },
    1000,
    function(){
      //해당 이미지를 제외한 나머지 이미지들 옆으로 보내서 다음 애니 대기상태로 둠
      $allTabBGimg.not(`.${data}`).css('left','110%');
    });

  });

});