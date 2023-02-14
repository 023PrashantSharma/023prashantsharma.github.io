/***
 * @preloader
 */
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        // commingSoon()
    }, 3000);
}

function commingSoon() {
    setInterval(() => {
        if (document.querySelector(".comming-soon span").innerHTML.length >= 3) {
            document.querySelector(".comming-soon span").innerHTML = "";
        }
        document.querySelector(".comming-soon span").innerHTML += ".";
    }, 300);
}
