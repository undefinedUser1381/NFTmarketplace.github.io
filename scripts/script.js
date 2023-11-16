const $ = document;

const hamburgerMenu = $.querySelector(".header__bars");
const headerMobile = $.querySelector(".header-mobile__menu");
let checkNav = false

hamburgerMenu.addEventListener("click", () => {
    if(checkNav){
        hamburgerMenu.classList.remove("open__btn");
        checkNav = false;
        headerMobile.classList.remove("header-mobile__menu--open");
    } else {
        hamburgerMenu.classList.add("open__btn");
        checkNav = true;
        headerMobile.classList.add("header-mobile__menu--open");
    }
}); 

