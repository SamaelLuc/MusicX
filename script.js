let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})


let registerButton = document.querySelector('.register')
registerButton.addEventListener('click', Register)
let EnterButton = document.querySelector('.enter')
EnterButton.addEventListener('click', Enter)
let regsButton = document.querySelector('.Regs')
regsButton.addEventListener('click', EntReg)
let escapeButton = document.querySelector('.escape')
escapeButton.addEventListener('click', Escape)

function Register(){
    document.getElementById("Reg").style.display = "flex";
    document.getElementById("Ent").style.display = "none";
}
function Enter(){
    document.getElementById("Reg").style.display = "none";
    document.getElementById("Ent").style.display = "flex";
}
function EntReg(){
    document.getElementById("EnterID").style.display = "flex";
}
function Escape(){
    document.getElementById("EnterID").style.display = "none";
}

$(document).ready(function () {
    $('.Slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});



function forward(){
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}

function backward(){
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true
}
let condition = true;
$('.menu_small_icon').click(function(){
    if (condition) {
        forward()
        anime({
            targets: '.menu_small_icon',
            rotate: 90,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            lopp: false
        })
        anime({
            targets: '.stick',
            rotate: 180,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        })
    }
    else {
        backward()
        anime({
            targets: '.menu_small_icon',
            rotate: -90,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            lopp: false
        })
        anime({
            targets: '.stick',
            rotate: -180,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        })
    }
})

$('.container').on('touchstart', function(event){
    start = event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function(event){
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition){
        backward();
    }
})