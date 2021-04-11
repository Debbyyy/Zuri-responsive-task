
const hamburger = document.querySelector("#icon")
// const close = document.querySelector(".x-icon")
const nav = document.querySelector(".nav-links")

const state = {
    navHidden: true
}

    const toggleNavHandler = () => {
        if (state.navHidden) {
nav.classList.add("nav-links-mobile");
        }
        else {
            nav.classList.remove("nav-links-mobile")
        }
        state.navHidden = !
        state.navHidden;
    };



nav.addEventListener("click", toggleNavHandler);
icon.addEventListener("click", toggleNavHandler);
