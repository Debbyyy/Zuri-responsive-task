
const hamburger = document.querySelector("#icon")
// const close = document.querySelector(".x-icon")
const nav = document.querySelector(".nav-links")

const state = {
    navHidden: true
}

    const toggleNavHandler = () => {
        if (state.navHidden) {
nav.classList.add("show-nav-links");
        }
        else {
            nav.classList.remove("show-nav-links")
        }
        state.navHidden = !
        state.navHidden;
    };



nav.addEventListener("click", toggleNavHandler);
icon.addEventListener("click", toggleNavHandler);
