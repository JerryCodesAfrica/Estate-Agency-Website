// Latest properties slide
// Latest-properties
// 
// search-function desktop
// 
function autoplayCarousel() {
    const carouselEl = document.getElementById("carousel");
    const slideContainerEl = carouselEl.querySelector("#slide-container");
    const slideEl = carouselEl.querySelector(".slide");
    let slideWidth = slideEl.offsetWidth;
    // Add click handlers
    document.querySelector("#back-button")
        .addEventListener("click", () => navigate("backward"));
    document.querySelector("#forward-button")
        .addEventListener("click", () => navigate("forward"));
    document.querySelectorAll(".slide-indicator")
        .forEach((dot, index) => {
            dot.addEventListener("click", () => navigate(index));
            dot.addEventListener("mouseenter", () => clearInterval(autoplay));
        });
    // Add keyboard handlers
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') {
            clearInterval(autoplay);
            navigate("backward");
        } else if (e.code === 'ArrowRight') {
            clearInterval(autoplay);
            navigate("forward");
        }
    });
    // Add resize handler
    window.addEventListener('resize', () => {
        slideWidth = slideEl.offsetWidth;
    });
    // Autoplay
    const autoplay = setInterval(() => navigate("forward"), 3000);
    slideContainerEl.addEventListener("mouseenter", () => clearInterval(autoplay));
    // Slide transition
    const getNewScrollPosition = (arg) => {
        const gap = 10;
        const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth;
        if (arg === "forward") {
            const x = slideContainerEl.scrollLeft + slideWidth + gap;
            return x <= maxScrollLeft ? x : 0;
        } else if (arg === "backward") {
            const x = slideContainerEl.scrollLeft - slideWidth - gap;
            return x >= 0 ? x : maxScrollLeft;
        } else if (typeof arg === "number") {
            const x = arg * (slideWidth + gap);
            return x;
        }
    }
    const navigate = (arg) => {
        slideContainerEl.scrollLeft = getNewScrollPosition(arg);
    }
    // Slide indicators
    const slideObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slideIndex = entry.target.dataset.slideindex;
                carouselEl.querySelector('.slide-indicator.active').classList.remove('active');
                carouselEl.querySelectorAll('.slide-indicator')[slideIndex].classList.add('active');
            }
        });
    }, { root: slideContainerEl, threshold: .1 });
    document.querySelectorAll('.slide').forEach((slide) => {
        slideObserver.observe(slide);
    });
}
autoplayCarousel();
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