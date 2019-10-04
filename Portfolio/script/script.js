var myName = document.getElementById("name"),
    nameVisitor = document.getElementsByTagName('input')[0],
    email = document.getElementsByTagName('input')[1],
    message = document.getElementsByTagName('textarea')[0],
    social = document.getElementsByClassName('social')[0],
    footer = document.getElementsByTagName('footer')[0],
    menuButton = document.getElementById("menu").getElementsByTagName("span")[0],
    navigation = document.getElementsByClassName("navigation")[0],
    close = document.getElementsByClassName("closeMenu")[0];

myName.addEventListener("click", reloadPage);
window.addEventListener("scroll", scrollPage);
window.addEventListener("load", showAllElements);
window.addEventListener("load", animationHome);
window.addEventListener("load", menuOnBigScreen);
window.addEventListener("load", changeName);
window.addEventListener("resize", changeName);
menuButton.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);

// document.oncontextmenu = function(e) {              // Запрет вызова контекстного меню правой кнопкой мыши
//     e.preventDefault();
// }

// console.log(document.querySelector("#skills").getBoundingClientRect());

function showAllElements() {
    if (window.screen.height !== 768 && window.screen.height !== 1024 && window.screen.height !== 1080) {
        for (let i = 0; i < document.body.children.length; i += 1) {
            document.body.children[i].classList.remove('invis');
            if ( document.body.children[i].classList.contains('navigation') == true) {
                document.body.children[i].classList.add('invis');
            }
            for (let j = 0; j < document.body.children[i].children.length; j += 1) {
                document.body.children[i].children[j].classList.remove('invis');
                for (let k = 0; k < document.body.children[i].children[j].children.length; k += 1) {
                    document.body.children[i].children[j].children[k].classList.remove('invis');
                }
            }
        }
    }
}

function menuOnBigScreen() {
    if (window.screen.height === 1024 || window.screen.height === 1080) {
        menu.classList.remove("invis");
    }
}

function animationHome() {          // Анимация надписей верхнего блока при загрузке страницы
    setTimeout(function() {
        home.children[0].classList.remove("invis");
    }, 500);
    setTimeout(function() {
        home.children[1].classList.remove("invis");
    }, 2000);
}

function reloadPage(){              // Функция перезагрузки страницы
    window.location.reload();
}

function changeName() {             // Изменение имени на инициалы и наоборот при изменении ширины экрана
    if (window.screen.width <= 827) {
        myName.innerHTML = "Р.А.";
    }
    else myName.innerHTML = "Редько Антон";
    if (window.screen.width <= 601) {
        myName.innerHTML = "Редько Антон";
    }
}

function showMenu() {               // Отображение меню для мобильных устройств
    navigation.classList.remove("invis");
    for(let i = 0; i < navigation.getElementsByTagName("a").length; i += 1) {
        navigation.getElementsByTagName("a")[i].onclick = function() {
            navigation.classList.add("invis");
        }
    }
}

function closeMenu() {              // Закрытие меню для мобильных устройств
    navigation.classList.add("invis");
}

function scrollPage() {
    let scrolled = window.pageYOffset;

    // console.log(scrolled);

    // Фиксация меню при скролле
    if (scrolled > 800) {
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.boxShadow = "0 0 10px rgba(122, 122, 122, 0.5)";
        menu.style.background = "rgba(0, 0, 0, 0.7)";
    }
    else menu.removeAttribute("style");
    // Конец фиксации меню

    // Подсвечивание вкладок при скролле
    if (scrolled >= 0 && scrolled <= 600) {
        document.getElementById("menu").getElementsByTagName("a")[1].classList.add("active");
    }
    else document.getElementById("menu").getElementsByTagName("a")[1].classList.remove("active");
    if (scrolled > 600 && scrolled <= 1000) {
        document.getElementById("menu").getElementsByTagName("a")[2].classList.add("active");
    }
    else document.getElementById("menu").getElementsByTagName("a")[2].classList.remove("active");
    if (scrolled > 1000 && scrolled <= 1500) {
        document.getElementById("menu").getElementsByTagName("a")[3].classList.add("active");
    }
    else document.getElementById("menu").getElementsByTagName("a")[3].classList.remove("active");
    if (scrolled > 1500 && scrolled <= 2100) {
        document.getElementById("menu").getElementsByTagName("a")[4].classList.add("active");
    }
    else document.getElementById("menu").getElementsByTagName("a")[4].classList.remove("active");
    if (scrolled > 2100) {
        document.getElementById("menu").getElementsByTagName("a")[5].classList.add("active");
    }
    else document.getElementById("menu").getElementsByTagName("a")[5].classList.remove("active");
    // Конец подсвечивания вкладок
    
    
    if (window.screen.height === 768) {
        if (scrolled >= 200) menu.classList.remove("invis");
        
        if (scrolled >= 300 && scrolled < 1333) {
            portfolio.children[0].classList.remove("invis");
            portfolio.children[1].classList.remove("invis");
        }
        else {
            portfolio.children[0].classList.add("invis");
            portfolio.children[1].classList.add("invis");           
        }
        
        if (scrolled >= 400 && scrolled < 1333) portfolio.children[2].classList.remove("invis");
        else portfolio.children[2].classList.add("invis");
        
        if (scrolled >= 500 && scrolled < 1333) {
            portfolio.children[3].children[1].classList.remove("invis");
            portfolio.children[3].children[2].classList.remove("invis");
            setTimeout(function () {
                portfolio.children[3].children[0].classList.remove("invis");
                portfolio.children[3].children[3].classList.remove("invis");
            }, 500);
        }
        else {
            portfolio.children[3].children[1].classList.add("invis");
            portfolio.children[3].children[2].classList.add("invis");
            portfolio.children[3].children[0].classList.add("invis");
            portfolio.children[3].children[3].classList.add("invis");
        }
        
        if (scrolled >= 850 && scrolled < 1853) {
            skills.children[0].classList.remove("invis");
            setTimeout(function () {
                skills.children[1].classList.remove("invis");
            }, 1000);
        }
        else {
            skills.children[0].classList.add("invis");
            skills.children[1].classList.add("invis");
        }
        
        if (scrolled >= 960 && scrolled < 1853) list.children[0].classList.remove("invis");
        else list.children[0].classList.add("invis");
        
        if (scrolled >= 980 && scrolled < 1853) list.children[1].classList.remove("invis");
        else list.children[1].classList.add("invis");
        
        if (scrolled >= 1000 && scrolled < 1853) list.children[2].classList.remove("invis");
        else list.children[2].classList.add("invis");
        
        if (scrolled >= 1020 && scrolled < 1853) list.children[3].classList.remove("invis");
        else list.children[3].classList.add("invis");
        
        if (scrolled >= 1040 && scrolled < 1853) list.children[4].classList.remove("invis");
        else list.children[4].classList.add("invis");
        
        if (scrolled >= 1060 && scrolled < 1853) list.children[5].classList.remove("invis");
        else list.children[5].classList.add("invis");
        
        if (scrolled >= 1080 && scrolled < 1853) list.children[6].classList.remove("invis");
        else list.children[6].classList.add("invis");
        
        if (scrolled >= 1100 && scrolled < 1853) list.children[7].classList.remove("invis");
        else list.children[7].classList.add("invis");
        
        if (scrolled >= 1120 && scrolled < 1853) list.children[8].classList.remove("invis");
        else list.children[8].classList.add("invis");
        
        if (scrolled >= 1140 && scrolled < 1853) list.children[9].classList.remove("invis");
        else list.children[9].classList.add("invis");
        
        if (scrolled >= 1160 && scrolled < 1853) list.children[10].classList.remove("invis");
        else list.children[10].classList.add("invis");
        
        if (scrolled >= 1242 && scrolled < 2333) {
            about.children[0].classList.remove("invis");
            setTimeout(function () {
                about.children[1].classList.remove("invis");
            }, 1000);
        }
        else{
            about.children[0].classList.add("invis");
            about.children[1].classList.add("invis");
        }
        
        if (scrolled >= 1400 && scrolled < 2333) about.children[2].classList.remove("invis");
        else about.children[2].classList.add("invis");

        if (scrolled >= 1460 && scrolled < 2333) about.children[3].classList.remove("invis");
        else about.children[3].classList.add("invis");

        if (scrolled >= 1520 && scrolled < 2333) about.children[4].classList.remove("invis");
        else about.children[4].classList.add("invis");

        if (scrolled >= 1600 && scrolled < 2333) about.children[5].classList.remove("invis");
        else about.children[5].classList.add("invis");
        
        if (scrolled >= 1794) {
            contacts.children[0].classList.remove("invis");
            setTimeout(function () {
                contacts.children[1].classList.remove("invis");
            }, 1000);
        }
        else {
            contacts.children[0].classList.add("invis");
            contacts.children[1].classList.add("invis");
        }
        
        if (scrolled >= 1914) contacts.children[2].classList.remove("invis");
        else if (scrolled < 1794) contacts.children[2].classList.add("invis");
        
        if (scrolled >= 2002) nameVisitor.classList.remove("invis");
        else if (scrolled < 1794) nameVisitor.classList.add("invis");
        
        if (scrolled >= 2082) email.classList.remove("invis");
        else if (scrolled < 1794) email.classList.add("invis");
        
        if (scrolled >= 2142) message.classList.remove("invis");
        else if (scrolled < 1794) message.classList.add("invis");
        
        if (scrolled >= 2302) document.getElementsByTagName('input')[2].classList.remove("invis");
        else if (scrolled < 1794) document.getElementsByTagName('input')[2].classList.add("invis");
        
        if (scrolled >= 2413) {
            social.children[0].classList.remove("invis");
            social.children[1].classList.remove("invis");
            social.children[2].classList.remove("invis");
            footer.children[1].classList.remove("invis");
        }
        else {
            social.children[0].classList.add("invis");
            social.children[1].classList.add("invis");
            social.children[2].classList.add("invis");
            footer.children[1].classList.add("invis");
        }
    }

    else if (window.screen.height === 1024 || window.screen.height === 1080) {

        if (scrolled > 40 && scrolled < 1348) {
            portfolio.children[0].classList.remove("invis");
            portfolio.children[1].classList.remove("invis");
        }
        else {
            portfolio.children[0].classList.add("invis");
            portfolio.children[1].classList.add("invis");
        }

        if (scrolled > 80 && scrolled < 1348) portfolio.children[2].classList.remove("invis");
        else portfolio.children[2].classList.add("invis");

        if (scrolled > 200 && scrolled < 1348) {
            portfolio.children[3].children[1].classList.remove("invis");
            portfolio.children[3].children[2].classList.remove("invis");
            setTimeout(function () {
                portfolio.children[3].children[0].classList.remove("invis");
                portfolio.children[3].children[3].classList.remove("invis");
            }, 500);
        }
        else {
            portfolio.children[3].children[1].classList.add("invis");
            portfolio.children[3].children[2].classList.add("invis");
            portfolio.children[3].children[0].classList.add("invis");
            portfolio.children[3].children[3].classList.add("invis");
        }

        if (scrolled > 520 && scrolled < 1855) {
            skills.children[0].classList.remove("invis");
            setTimeout(function () {
                skills.children[1].classList.remove("invis");
            }, 1000);
        }
        else {
            skills.children[0].classList.add("invis");
            skills.children[1].classList.add("invis");
        }

        if (scrolled > 640 && scrolled < 1855) list.children[0].classList.remove("invis");
        else list.children[0].classList.add("invis");
        
        if (scrolled > 664 && scrolled < 1855) list.children[1].classList.remove("invis");
        else list.children[1].classList.add("invis");
        
        if (scrolled > 688 && scrolled < 1855) list.children[2].classList.remove("invis");
        else list.children[2].classList.add("invis");

        if (scrolled > 712 && scrolled < 1855) list.children[3].classList.remove("invis");
        else list.children[3].classList.add("invis");

        if (scrolled > 736 && scrolled < 1855) list.children[4].classList.remove("invis");
        else list.children[4].classList.add("invis");

        if (scrolled > 760 && scrolled < 1855) list.children[5].classList.remove("invis");
        else list.children[5].classList.add("invis");

        if (scrolled > 784 && scrolled < 1855) list.children[6].classList.remove("invis");
        else list.children[6].classList.add("invis");

        if (scrolled > 808 && scrolled < 1855) list.children[7].classList.remove("invis");
        else list.children[7].classList.add("invis");

        if (scrolled > 832 && scrolled < 1855) list.children[8].classList.remove("invis");
        else list.children[8].classList.add("invis");

        if (scrolled > 856 && scrolled < 1855) list.children[9].classList.remove("invis");
        else list.children[9].classList.add("invis");

        if (scrolled > 880 && scrolled < 1855) list.children[10].classList.remove("invis");
        else list.children[10].classList.add("invis");
        
        if (scrolled > 985 && scrolled < 2305) {
            about.children[0].classList.remove("invis");
            setTimeout(function () {
                about.children[1].classList.remove("invis");
            }, 1000);
        }
        else {
            about.children[0].classList.add("invis");
            about.children[1].classList.add("invis");
        }

        if (scrolled > 1105 && scrolled < 2305) about.children[2].classList.remove("invis");
        else about.children[2].classList.add("invis");
        
        if (scrolled > 1158 && scrolled < 2305) about.children[3].classList.remove("invis");
        else about.children[3].classList.add("invis");

        if (scrolled > 1210 && scrolled < 2305) about.children[4].classList.remove("invis");
        else about.children[4].classList.add("invis");

        if (scrolled > 1274 && scrolled < 2305) about.children[5].classList.remove("invis");
        else about.children[5].classList.add("invis");

        if (scrolled > 1488 && scrolled < 2305) {
            contacts.children[0].classList.remove("invis");
            setTimeout(function () {
                contacts.children[1].classList.remove("invis");
            }, 1000);
        }
        else {
            contacts.children[0].classList.add("invis");
            contacts.children[1].classList.add("invis");
        }

        if (scrolled > 1539) contacts.children[2].classList.remove("invis");
        else contacts.children[2].classList.add("invis");
        
        if (scrolled > 1645) nameVisitor.classList.remove("invis");
        else nameVisitor.classList.add("invis");

        if (scrolled > 1725) email.classList.remove("invis");
        else email.classList.add("invis");

        if (scrolled > 1765) message.classList.remove("invis");
        else message.classList.add("invis");

        if (scrolled > 1925) document.getElementsByTagName('input')[2].classList.remove("invis");
        else document.getElementsByTagName('input')[2].classList.add("invis");
        
        if (scrolled > 2075) {
            social.children[0].classList.remove("invis");
            social.children[1].classList.remove("invis");
            social.children[2].classList.remove("invis");
            footer.children[1].classList.remove("invis");
        }
        else {
            social.children[0].classList.add("invis");
            social.children[1].classList.add("invis");
            social.children[2].classList.add("invis");
            footer.children[1].classList.add("invis");
        }
    }
}