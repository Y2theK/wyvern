// data aos
AOS.init({ once: true });

// lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

document.getElementById("gallery-grid").addEventListener("click", (e) => {
  const item = e.target.closest(".gallery__item");
  if (!item) return;
  const img = item.querySelector("img");
  const caption = item.getAttribute("data-caption");
  lightboxImg.src = img.src;
  lightboxCaption.textContent = caption || "";
  lightboxImg.classList.remove("lightbox__img--zoomed");
  lightbox.classList.add("lightbox--active");
  document.body.style.overflow = "hidden";
});

function closeLightbox(e) {
  if (
    e.target === lightbox ||
    e.target.classList.contains("lightbox__close") ||
    e.target.classList.contains("lightbox__caption")
  ) {
    lightbox.classList.remove("lightbox--active");
    document.body.style.overflow = "";
  }
}

lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxImg.classList.toggle("lightbox__img--zoomed");
  lightboxImg.style.cursor = lightboxImg.classList.contains("lightbox__img--zoomed") ? "zoom-out" : "zoom-in";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("lightbox--active")) {
    lightbox.classList.remove("lightbox--active");
    document.body.style.overflow = "";
  }
});

//navigation
const navi = document.querySelector("nav");
const pos = navi.offsetTop;
const scrollup = document.querySelector(".scroll-up");
window.onscroll = () => {
  if (window.pageYOffset >= pos + 100) {
    navi.classList.add("sticky");
    scrollup.classList.add("scroll-up--visible");
  } else {
    navi.classList.remove("sticky");
    scrollup.classList.remove("scroll-up--visible");
  }
};

scrollup.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//mobile nav
var x = 0;
var navicon = document.querySelector(".navbar__bars");
var bars_icon = document.querySelector(".fa-bars");
var cross_icon = document.querySelector(".fa-times");
var mobilenav = document.querySelector(".navbar__menu");

navicon.onclick = () => {
  if (x == 0) {
    mobilenav.classList.add("shownav");
    bars_icon.style.display = "none";
    cross_icon.style.display = "block";

    x = 1;
  } else {
    mobilenav.classList.remove("shownav");
    bars_icon.style.display = "block";
    cross_icon.style.display = "none";
    x = 0;
  }
};
closeNav = () => {
  mobilenav.classList.remove("shownav");
  bars_icon.style.display = "block";
  cross_icon.style.display = "none";
  x = 0;
};

//preloader
const loader = document.querySelector(".preloader");
setTimeout(function () {
  loader.classList.add("preloader--hidden");
  setTimeout(function () {
    loader.style.display = "none";
  }, 300);
}, 500);
