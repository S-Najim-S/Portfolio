// **************Show menu hidden in Y direction -100% bottom

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// **************check if show-menu exsits

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ****************remove mobile menu

const navLink = document.querySelectorAll(".nav__link");

// each time that function runs closes the nav-menu
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //   when click on each link on menu removes the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// *****************Qualification Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      console.log(tabContent);
      tabContent.classList.remove("qualification__active");
      console.log(tabContent);
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

// Scroll section active

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //   document
    //     .querySelector(".nav__menu a[href*=" + sectionId + "]")
    //     .classList.add("active-link");
    // } else {
    //   document.querySelector(".nav__menu a[href=*" + sectionId + "]") +
    //     "]".classList.remove("active-link");
    // }
  });
}

window.addEventListener("scroll", scrollActive);

// Add shadow to header after scroll

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// Scrollup

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 560 viewport height, add show-scroll class to the a tag with scroll

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);
