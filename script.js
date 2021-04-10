// function myFunction() {
//     var x = document.getElementById("nav-links");
//     if (x.style.display === "inline-block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "flex";
//     }
//   }

// const x = document.getElementsByClassName("nav-links icon").click(function(){
//     var y = document.getElementsByClassName("nav-links").toggleClass("show")
// })

// const nav = document.getElementsByClassName("nav-links")
// const hamburger = document.getElementsByClassName("icon")

function myFunction() {
    var hamburger = document.getElementsByClassName("nav-links");

    hamburger.classList.toggle("icon")
}

