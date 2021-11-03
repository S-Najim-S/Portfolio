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