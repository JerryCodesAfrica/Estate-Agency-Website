// Carousel functionality

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn')
let currentSlide = 1;
//
//manual navigation
var manualNav = function(manual){
    slides.forEach((slide)=>{
        slides.classList.remove('active');
        btns.forEach((slide)=>{
            btns.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}


btns.forEach((btn, i)=>{
   manualNav(i);
   currentSlide = i; 
})