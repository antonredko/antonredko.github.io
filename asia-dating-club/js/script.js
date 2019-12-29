const nameOfPage = document.querySelector('.nameOfPage'),
    registered = document.querySelector('.registered').getElementsByTagName('p')[0],
    happy = document.querySelector('.happy').getElementsByTagName('p')[0],
    girlsOnline = document.getElementsByClassName('online'),
    firstSlide = document.querySelectorAll('.slide')[0],
    secondSlide = document.querySelectorAll('.slide')[1],
    thirdSlide = document.querySelectorAll('.slide')[2],
    fourthSlide = document.querySelectorAll('.slide')[3],
    fifthSlide = document.querySelectorAll('.slide')[4];
    line = document.querySelector('.line div'),
    menuIcon = document.getElementsByClassName('menuIcon')[0],
    navigation = document.getElementsByClassName("navigation")[0],
    close = document.getElementsByClassName("closeMenu")[0],
    leftArrow = document.getElementById('Right_arrow'),
    rightArrow = document.getElementById('Left_arrow');

menuIcon.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
    
window.onload = function() {
    nameOfPage.style.borderBottom = '2px solid #6866d1';
    localStorage.setItem('oneDay', 86400000);
    localStorage.registered ? registered.innerHTML = localStorage.getItem('registered') : localStorage.setItem('registered', registered.innerHTML);
    localStorage.happy ? happy.innerHTML = localStorage.getItem('happy') : localStorage.setItem('happy', happy.innerHTML);
    let countReg = setInterval(function() {
        registered.innerHTML = localStorage.getItem('registered');
        registered.innerHTML = +registered.innerHTML + 1;
        localStorage.setItem('registered', registered.innerHTML);
    }, 10000)
    let countHap = setInterval(function() {
        happy.innerHTML = localStorage.getItem('happy');
        happy.innerHTML = +happy.innerHTML + 1;
        localStorage.setItem('happy', happy.innerHTML);
    }, 30000)
    setTimeout(function() {
        clearInterval(countReg);
        clearInterval(countHap);
    }, localStorage.getItem('oneDay'))

    for(i = 0; i < girlsOnline.length; i += 1) {
        girlsOnline[i].children[0].innerHTML = Math.floor(Math.random() * Math.floor(9999));
    }

    setTimeout(function() {
        firstSlide.style.display = 'none';
        fourthSlide.style.display = 'block';
        secondSlide.style.display = 'none';
        fifthSlide.style.display = 'block';
        line.style.left = '44.5%';

        function showFirstSlides() {
            firstSlide.style.display = 'block';
            fourthSlide.style.display = 'none';
            secondSlide.style.display = 'block';
            fifthSlide.style.display = 'none';
            line.style.left = '0';
        }
        function showLastSlides() {
            firstSlide.style.display = 'none';
            fourthSlide.style.display = 'block';
            secondSlide.style.display = 'none';
            fifthSlide.style.display = 'block';
            line.style.left = '44.5%';
        }

        leftArrow.addEventListener("click", showFirstSlides);
        rightArrow.addEventListener("click", showLastSlides);
    }, 15000)
}

function showMenu() {
    navigation.style.display = 'block';
    for(let i = 0; i < navigation.getElementsByTagName("a").length; i += 1) {
        navigation.getElementsByTagName("a")[i].onclick = function() {
            navigation.style.display = 'block';
        }
    }
}

function closeMenu() {
    navigation.style.display = 'none';
}
