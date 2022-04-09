// 화살표 함수로 변환
window.onload = ()=>{
    // DOM 객체 변수할당
    const ham_btn = document.querySelector('.ham');
    const gnb = document.querySelector('#gnb');

    // 이벤트리스너
    ham_btn.addEventListener('click',()=>{
        // 1. (클릭했을 때)GNB의 class 접근해서 toggle해라 ('active')
        gnb.classList.toggle('active');
    });

    $('#gnb+a').click(function(e){
        e.preventDefault();
    });

    // GO TO TOP BUTTON
    //1. 부드러운 메뉴이동 => ScrollTo 플러그인
    $('#gnb a').click(function(e){
        e.preventDefault();
        $(window).scrollTo(this.hash||0,500);
    });

    //2. 부드러운 스크롤탑 이동 
    $('.top').click(function(e){
        $('html,body').stop().animate({scrollTop:0},1000,'swing');
        e.preventDefault();
    });

    //3. 스크롤이 특정 위치에 왔을 때 스크롤탑 버튼이 나오거나 안 나오도록 코딩
    var SA = 100; // 전역변수 선언[상수]
    $(window).scroll(function(){
        var num = $('html,body').scrollTop(); //동적값
        console.log('스크롤탑값: '+num);
        //SA 100이상일 땐 보이게, 이하는 보이지 않게
        if(num>=SA){
            $('aside div').stop().fadeIn();
        }else{
            $('aside div').stop().fadeOut();
        }
    });


    // ABOUT ME
    setInterval(() => {
        $('.arrowDown').stop().animate({bottom:'-40px'},800,function(){
            $('.home div').eq(-1).appendTo('.arrowDown');
            $('.arrowDown').animate({bottom:'20px'},500);
        });
    }, 1500);

    // SKILLS
    function animatedContents(){
        $('.skillBar div').each(function(i){
            var $this = $(this),
                skills = $this.data('width');
            $this.css({'width':skills+'%'});
        });
    };
        if($().appear){
            $('.skillBar').appear().on('appear',function(){
                animatedContents();
            });
        }else{
            animatedContents();
        }

};