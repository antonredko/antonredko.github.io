var bottomHeader = document.getElementById("bottomHeader"),
    linksByBottomHeader = bottomHeader.getElementsByTagName("a"),
    linksBySize = document.getElementsByClassName("size")[0].getElementsByTagName("span"),
    linksByQuantity = document.getElementsByClassName("quantity")[0].getElementsByTagName("span"),
    like = document.getElementsByClassName("icons")[0].getElementsByTagName("span")[0],
    shoppingCart = document.getElementsByClassName("searchUserCart")[0].getElementsByTagName("span")[0],
    toCart = document.getElementsByClassName("icons")[0].getElementsByTagName("img")[1],
    image = document.getElementsByClassName("image"),
    backgr = document.getElementsByClassName("backgr"),
    bigProduct = document.getElementsByClassName("bigProduct")[0];
    
    linksBySize[2].style.color = "rgb(255, 89, 18)";
    linksBySize[2].style.fontSize = "16px";
    linksByQuantity[1].innerHTML = 1;
    shoppingCart.innerHTML = 0;
    bigProduct.setAttribute("src", "img/bigProduct.png");
    backgr[2].style.display = "block";

    document.oncontextmenu = function(e) {              // Запрет вызова контекстного меню правой кнопкой мыши
        e.preventDefault();
    }

    for (let i = 0; i < linksByBottomHeader.length; i += 1) {
        linksByBottomHeader[i].addEventListener("click", choosLink);
    }
    for (let i = 0; i < linksBySize.length; i += 1) {
        linksBySize[i].addEventListener("click", choosSize);
    }
    image[0].addEventListener("click", function() {
        backgr[0].style.display = "block";
        backgr[1].style.display = "none";
        backgr[2].style.display = "none";
        bigProduct.setAttribute("src", "");
    });
    image[1].addEventListener("click", function() {
        backgr[1].style.display = "block";
        backgr[0].style.display = "none";
        backgr[2].style.display = "none";
        bigProduct.setAttribute("src", "");
    });
    image[2].addEventListener("click", function() {
        backgr[2].style.display = "block";
        backgr[0].style.display = "none";
        backgr[1].style.display = "none";
        bigProduct.setAttribute("src", "img/bigProduct.png");
    });
    linksByQuantity[0].addEventListener("click", moreQuantity);
    linksByQuantity[2].addEventListener("click", lessQuantity);
    like.addEventListener("click", likeProd);
    toCart.addEventListener("click", addToCart);

    function choosLink() {
        for (let i = 0; i < linksByBottomHeader.length; i += 1) {
            linksByBottomHeader[i].style.color = "black";
        }
        this.style.color = "rgb(255, 89, 18)";
    }
    function choosSize() {
        for (let i = 0; i < linksBySize.length; i += 1) {
            linksBySize[i].style.color = "black";
            linksBySize[i].style.fontSize = "14px";
        }
        this.style.color = "rgb(255, 89, 18)";
        this.style.fontSize = "16px";
    }
    function moreQuantity() {
        linksByQuantity[1].innerHTML = +linksByQuantity[1].innerHTML + 1;
    }
    function lessQuantity() {
        linksByQuantity[1].innerHTML = +linksByQuantity[1].innerHTML - 1;
        if (+linksByQuantity[1].innerHTML < 0) {
            linksByQuantity[1].innerHTML = 0;
        }
    }
    function likeProd() {
        this.style.color = "rgb(255, 89, 18)";
        this.onclick = function() {
            this.style.color = "black";
        }
    }
    function addToCart() {
        shoppingCart.innerHTML = +shoppingCart.innerHTML + 1;
        if(+shoppingCart.innerHTML > 0) {
            document.getElementsByClassName("searchUserCart")[0].getElementsByTagName("a")[2].getElementsByTagName("img")[0].setAttribute("src", "img/cart.png");
        }
    }

