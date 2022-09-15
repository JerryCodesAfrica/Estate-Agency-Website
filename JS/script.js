// Latest properties slide
// Latest-properties
// 
// search-function desktop
// 
//   
// 
var searchbtn = document.querySelector(".searchbtn1");
var searchmenu = document.querySelector(".box-collapse");
var closesearch = document.querySelector(".clickclose");
function displaysearchmenu(){
    searchmenu.style.left = "40pc";
    searchmenu.style.transition = "1s";
}
searchbtn.addEventListener('click',displaysearchmenu);
//
function closesearchmenu(){
    searchmenu.style.left = "88pc";
    searchmenu.style.transition = "1s";
}
closesearch.addEventListener('click',closesearchmenu);




// search function mobile
var searchbtn2 = document.querySelector(".search-mobile");
var searchmenu2 = document.querySelector("#box-collapse");
var closesearch2 = document.querySelector(".clickclose2");
//display menu
function displaysearchmenu2(){
    searchmenu2.style.left = "0";
    searchmenu2.style.transition = "1s";
}
searchbtn2.addEventListener('click',displaysearchmenu2);
//

function closesearchmenu2(){
    searchmenu2.style.left = "40pc";
    searchmenu2.style.transition = "1s";
}

closesearch2.addEventListener('click',closesearchmenu2);





// hamburger menu
var displaysearchmenumobile;
var hm = document.querySelector(".ham-container");
var menu2 = document.querySelector(".list");
var t1 = document.querySelector(".t1");
var t2 = document.querySelector(".t2");
var t3 = document.querySelector(".t3");
$(".ham-container").click(function (e) { 
    e.preventDefault();    
    $(".list").toggleClass("lister");  
    $(".t1").toggleClass("t1-mobile");
    $(".t2").toggleClass("t2-mobile");
    $(".t3").toggleClass("t3-mobile");
    $(".hm-menu").toggleClass("hm-menu-mobile");
});
$(".property-image").hover(function () {
        // over
        $(".end-card").toggleClass("end-card-over");
    }, function () {
        // out
        $(".end-card").removeClass("end-card-over");
    }
);