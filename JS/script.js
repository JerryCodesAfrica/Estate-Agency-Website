// Latest properties slide
// Latest-properties
 var button1 = document.querySelector(".ps1");
 var button2 = document.querySelector(".ps2");
 var slidepageleft = document.querySelector(".p1");
 var slidepageright = document.querySelector(".p4p");
 function slideleft(){
    button2.classList.remove("ps2");
    button2.classList.add("active");
    button1.classList.add("ps2");
    slidepageleft.style.width = "0";
    slidepageright.style.width = "720px"
    //  slidepageleft.style.display = "none";
     slidepageright.style.display = "inline";
    
 } 
 button2.addEventListener('click',slideleft);
//  
function slideright(){
    button1.classList.remove("ps2");
    button1.classList.add("active");
    button2.classList.add("ps2");
    slidepageleft.style.width = "720px";
    slidepageright.style.width = "0";
    //  slidepageleft.style.display = "none";
     slidepageright.style.display = "none";
    
 } 
 button1.addEventListener('click',slideright);
// 