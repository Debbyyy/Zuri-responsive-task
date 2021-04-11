
const hamburger = document.querySelector("#icon")
const nav = document.querySelector(".nav-links")

const state = {
    navHidden: true
}

    const toggleHamburgerbarHandler = () => {
        if (state.navHidden) {
hamburger.classList.add("nav-links");
        }
        else {
            hamburger.classList.remove("nav-links")
        }
        state.hamburgerBarhidden = !
        state.hamburgerBarhidden;
    };



hamburger.addEventListener("click", toggleHamburgerbarHandler);
icon.addEventListener("click", toggleHamburgerbarHandler);
