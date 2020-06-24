// Phone mask
const elementsPhone = document.querySelectorAll('.input-phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false,
  placeholderChar: '0'
};
elementsPhone.forEach(element => {
  IMask(element, maskOptions);
});

// Select style
const choices = new Choices('.select', {
  searchEnabled: false
});

// Date&time
flatpickr("#date", {
  dateFormat: "m.d",
  minDate: "today",
});
flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

// Swiper slider
window.onload = function () {

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    autoHeight: true
  });
};

// Tabs
const tabClick = function (idContainer, idElement) {
  let dataAttr = `[data-${idContainer}`;
  for (let item of document.querySelectorAll(`${dataAttr}-name`)) {
    item.classList.remove('active');
  }
  for (let item of document.querySelectorAll(`${dataAttr}-tab`)) {
    item.classList.remove('active');
  }
  document.querySelector(`${dataAttr}-name=${idElement}]`).classList.add('active');
  document.querySelector(`${dataAttr}-tab=${idElement}]`).classList.add('active');
};

let tabsName = document.querySelectorAll('.tab-name');

tabsName.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    tabClick(event.target.parentElement.id, event.target.dataset.menuTabsName);
  });
});

// Lightbox gallery

const lightbox = GLightbox({
  selector: '.gallery-image',
  touchNavigation: true,
  keyboardNavigation: true,
  loop: true,
  openEffect: "fadeIn",
  closeEffect: "fadeOut"
});

// Smooth scroll
const scroll = new SmoothScroll('.header-nav__link[href*="#"], .up[href*="#"]');

// Up arrow

const upButton = document.querySelector('.up');

const scrollShow = function () {
  const scrolled = window.pageYOffset;
  
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    upButton.classList.add('up_show');
  }
  if (scrolled < coords) {
    upButton.classList.remove('up_show');
  }
};
const scrollBack = function () {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(scrollBack, 0);
  }
};

window.addEventListener('scroll', scrollShow);
upButton.addEventListener('click', scrollBack);
// Mob menu

const mobileMenuButton = document.querySelector('.header-nav-menu');
const mobileMenuClose = document.querySelector('.header-nav-close');
const mobileMenu = document.querySelector('.header-nav');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.add('header-nav_active');
});

mobileMenuClose.addEventListener('click', function () {
  mobileMenu.classList.remove('header-nav_active');
});