const menuText = document.getElementById("menu-icons");
const menuLanguage = document.getElementById("language-page");
const languages = document.getElementById("languages");
const languagePage = document.getElementById("language-page");
const up_button = document.querySelector(".up_button");
const fixedIcons = document.querySelector(".fixed-icons");

up_button.style.display = "none";
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    up_button.style.display = "block";
  } else {
    up_button.style.display = "none";
  }
};
menuText.addEventListener("mouseover", function TextChange() {
  document.getElementById("menu-text").innerHTML = "OPEN";

  document.getElementById("bar1").style = "top:10px";
  document.getElementById("bar3").style = "top:10px";
});
menuText.addEventListener("mouseout", function TextChange() {
  document.getElementById("menu-text").innerHTML = "MENU";

  document.getElementById("bar1").style = "top:0";
  document.getElementById("bar3").style = "top:15px";
});
menuLanguage.addEventListener("mouseover", function LanguageOpenMenu() {
  document.getElementById("language-page-txts").style =
    "display: block !important";

  document.getElementById("solid-icon").style = "color:blue !important";
  document.getElementById("language-page").style =
    "background-color:white !important";

  document.getElementById("languages").style = "visibilty:visible";
  document.getElementById("languages").style = "opacity:1";
});
menuLanguage.addEventListener("mouseout", function LanguageOpenMenu() {
  document.getElementById("language-page-txts").style =
    "display: none !important";

  document.getElementById("solid-icon").style = "color:white !important";
  document.getElementById("language-page").style =
    "background-color:none !important";

  document.getElementById("languages").style = "visibilty:hidden";
  document.getElementById("languages").style = "opacity:0";
});

var slider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6, //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//サムネイルスライド
var thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
  },
});

//3系
//slider.params.control = thumbs;
//thumbs.params.control = slider;

//4系～
slider.controller.control = thumbs;

function OpenAboutSection() {
  document.getElementById("about-section");
}
var thumbs = new Swiper(".reference-swiper", {
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
  },
});

function OpenMenuBars() {
  document.getElementById("menu-bars").classList.toggle("active");

  document.querySelector("header").classList.toggle("active");
  fixedIcons.classList.toggle("d-none")
}
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass("active");
    $(".up-header").addClass("active");
  } else {
    $("header").removeClass("active");
    $(".up-header").removeClass("active");

  }
});



$("#up-header").click(function () {
  $(window).scrollTop(0);
});

$(document).ready(function () {
  /// manshet slider ///
  var galleryThumbs = new Swiper("div.manshet_appartment .gallery-thumbs", {
    spaceBetween: 16,
    slidesPerView: 4,
    loop: true,
    allowTouchMove: true,
    freeMode: false,
    loopedSlides: 40, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: "div.manshet_appartment .swiper-button-next",
      prevEl: "div.manshet_appartment .swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      slideSpeed: 3000,
      disableOnInteraction: false,
    },
  });
  var galleryTop = new Swiper("div.manshet_appartment .gallery-top", {
    spaceBetween: 16,
    loop: true,
    loopedSlides: 40, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs,
    },
    effect: "fade",
  });
  $("div.manshet_appartment .swiper-slide").on("click", function (e) {
    e.preventDefault();
    galleryTop.slideTo($(this).index());
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});

