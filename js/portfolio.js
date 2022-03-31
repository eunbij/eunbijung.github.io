

// 화살표 함수로 변환
window.onload = ()=>{
    // DOM 객체 변수할당
    const ham_btn = document.querySelector('.ham');
    const gnb = document.querySelector('#gnb');
    console.log(gnb);

    // 이벤트리스너
    ham_btn.addEventListener('click',()=>{
        // 1. (클릭했을 때)GNB의 class 접근해서 toggle해라 ('active')
        gnb.classList.toggle('active');
    });

    
    // ABOUT ME
    setInterval(() => {
        $('.am_line').stop().animate({bottom:'-80px'},800,function(){
            $('.aboutme div').eq(-1).appendTo('.am_line');
            $('.am_line').animate({bottom:'20px'},500);
        });
    }, 1000);
};