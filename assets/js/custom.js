$(function () {

    // 새로고침하면 맨앞으로
    history.scrollRestoration = "manual"



    //처음 창켜질때
    gsap.set('body', { overflow: 'hidden'})
    intro = gsap.timeline({
        defaults: {
            duration: 0.7,
        }
    })
    intro
        .to('.containar .dimmed', { yPercent: 0 })
        .addLabel('b')
        .to('.containar .dimmed .dimmed-bg', {  yPercent: -100,stagger:0.1, }, 'b')
        .to('.sc-main .text span', { delay: 0.5, yPercent: -120,stagger:0.1,}, "b")
        .addLabel('a')
        .to('.containar .dimmed', { display: 'none' }, 'a')




    const horiMotion = gsap.to('.horizontal-area .wrapper',{
        scrollTrigger:{
            trigger:".horizontal-area",
            start:"0% 0%",
            end:"600%",
            // markers:true,
            scrub:1,
            pin:true,
            onUpdate:function(self){
               $('.gnb .percent').html(Math.floor(self.progress.toFixed(3)*100)+'%')
            },
        },
        ease:'none',
        xPercent:-600,
        // transform: 'translateX(-500vw)'
        // opacity:0,
    })



    // 
    $('[data-animation="fadeUp"]').each(function(i,a){

        gsap.from(a, {
             scrollTrigger: {
               trigger: a,
               containerAnimation: horiMotion,
               start: "0% 100%",
               end:"100% 50%",
            //    markers:true,
               scrub:1
             },
             opacity:0,
             yPercent:50,
    
       });


    })

    


    $('[data-animation="left"]').each(function(i,a){

        gsap.to(a, {
             scrollTrigger: {
               trigger: a,
               containerAnimation: horiMotion,
               start: "0% 100%",
               end:"100% 50%",
            //    markers:true,
               scrub:1
             },
             transform: 'scale(1.1)',
       });


    })



      




    //메뉴 클릭시
    $('.btn-menu').click(function (e) {
        e.preventDefault();
        $('.header').toggleClass('on');
    })
    $('.dimmed').click(function (e) {
        e.preventDefault();
        $('.header').removeClass('on');
    })




    //메인부터 로고 변경
    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        console.log(curr);
        if (curr > 0) {
            $('body').addClass('hide');
        } else {
            $('body').removeClass('hide');
        }
    })




    //이미지 축소 안됨








})



