const diplomLink = document.getElementsByClassName('diplomView')[0].
                            getElementsByTagName('a')[0],
    additionLink = document.getElementsByClassName('diplomView')[0].
                            getElementsByTagName('a')[2],
    firstImage = document.getElementsByClassName('first')[0].
                        getElementsByTagName('img')[0],
    secondImage = document.getElementsByClassName('secondBrown')[0].
                        getElementsByTagName('img')[0];

window.addEventListener('load', changeImages);
diplomLink.addEventListener('click', showDiplom);
additionLink.addEventListener('click', showAddition);

function changeImages() {
    window.screen.width <= 414 ? firstImage.src = 'img/DepositSmall.png' : firstImage.src = 'img/Deposit.png';
    window.screen.width <= 414 ? secondImage.src = 'img/manSmall.png' : firstImage.src = 'img/man.png';
}

function hideChildren() {
    for(i = 0; i < document.body.children.length; i += 1) {
        document.body.children[i].style.display = 'none';
    }
}

function showDiplom(e) {
    e.preventDefault();
    hideChildren();
    let image = document.createElement('img');
        image.setAttribute('src', 'img/diplom.jpg');
        image.classList.add('image-js');
    let close = document.createElement('a');
        close.innerText = 'ЗАЧИНИТИ';
        close.href = 'index.html';
        close.classList.add('close-js');
    document.body.style.textAlign = 'center';
    document.body.style.paddingTop = '20px';
    document.body.appendChild(close);
    document.body.appendChild(image);
}

function showAddition(e) {
    e.preventDefault();
    hideChildren();
    let image = document.createElement('img');
        image.src = 'img/addition.png';
        image.classList.add('image-js');
    let close = document.createElement('a');
        close.innerText = 'ЗАЧИНИТИ';
        close.href = 'index.html';
        close.classList.add('close-js');
    let arrowLeft = document.createElement('span');
        arrowLeft.innerHTML = "&lArr;";
        arrowLeft.classList.add('arrow-js');
        arrowLeft.addEventListener('click', function() {
            if(image.src = 'img/addition2.jpg') image.src = 'img/addition.png';
        });
    let arrowRight = document.createElement('span');
        arrowRight.innerHTML = "&rArr;"
        arrowRight.classList.add('arrow-js');
        arrowRight.addEventListener('click', function() {
            if(image.src = 'img/addition.png') image.src = 'img/addition2.jpg';
        });
    let div = document.createElement('div');
        div.classList.add('div-js');
        div.appendChild(arrowLeft);
        div.appendChild(image);
        div.appendChild(arrowRight);
    document.body.style.textAlign = 'center';
    document.body.style.paddingTop = '20px';
    document.body.appendChild(close);
    document.body.appendChild(div);

}