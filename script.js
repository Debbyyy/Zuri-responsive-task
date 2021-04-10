// function myFunction() {
//     var x = document.getElementsByClassName("nav-links");
//     if (x.style.display === "block") {
//         x.style.display = "none"
//     }
//     else {
//         x.style.display = "block"
//     }
// }

const x = document.getElementsByClassName("nav-links icon").click(function(){
    var y = document.getElementsByClassName("nav-links").toggleClass("show")
})