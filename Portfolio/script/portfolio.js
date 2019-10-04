var navbar = document.getElementById("menu").getElementsByTagName("span")[0],
    navigation = document.getElementsByClassName("navigation")[0],
    close = document.getElementsByClassName("closeMenu")[0],
    examples = document.getElementsByClassName("example");

window.addEventListener("scroll", scrollPage);
window.addEventListener("load", loadExamples);
navbar.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);

// document.oncontextmenu = function(e) {              // Запрет вызова контекстного меню правой кнопкой мыши
//     e.preventDefault();
// }

if (window.screen.width <= 815) {
    document.getElementById("name").innerHTML = "Р.А.";
}

if (window.screen.width <= 601) {
    document.getElementById("name").innerHTML = "Редько Антон";
}

function showMenu() {
    navigation.classList.remove("invis");
    for(let i = 0; i < navigation.getElementsByTagName("a").length; i += 1) {
        navigation.getElementsByTagName("a")[i].onclick = function() {
            navigation.classList.add("invis");
        }
    }
}
function closeMenu() {
    navigation.classList.add("invis");
}

function scrollPage() {
    let scrolled = window.pageYOffset;
    if (scrolled > 0) {
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.boxShadow = "0 0 10px rgba(122, 122, 122, 0.5)";
        menu.style.background = "rgba(0, 0, 0, 0.6)";
    }
    else menu.removeAttribute("style");
}

function loadExamples() {
    for(let i = 0; i < examples.length; i += 1) {
        examples[i].classList.remove("invis");
    }
}