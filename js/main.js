/***
 * @preloader
 */
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        setInterval(() => {
            if (document.querySelector(".comming-soon span").innerHTML.length >= 3) {
                document.querySelector(".comming-soon span").innerHTML = "";
            }
            document.querySelector(".comming-soon span").innerHTML += ".";
        }, 300);
    }, 3000);
}
