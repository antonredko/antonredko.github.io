var rows = document.querySelectorAll("table tbody tr"),
    cell = document.querySelectorAll("td"),
    canvas_1 = document.getElementById("canvas_1"),
    canvas_2 = document.getElementById("canvas_2"),
    canvas_3 = document.getElementById("canvas_3"),
    ctx_1 = canvas_1.getContext("2d"),
    ctx_2 = canvas_2.getContext("2d"),
    ctx_3 = canvas_3.getContext("2d"),
    position = 0;

    function paintHorizontalLine() {
        ctx_1.fillStyle = "#20bf0f";
        ctx_1.fillRect(position, 0, 5, 5);
        position += 5;
    }
    function paintVerticalLine() {
        ctx_2.fillStyle = "#20bf0f";
        ctx_2.fillRect(0, position, 5, 5);
        position += 5;
    }
    function paintObliqueLine() {
        ctx_3.fillStyle = "#20bf0f";
        ctx_3.fillRect(position, 0, 5, 5);
        position += 5;
    }
    function wonGamer_1() {
        popup_text.innerText = "Выиграл Игрок 1";
        popup.classList.remove("dontShow");
    }
    function wonGamer_2() {
        popup_text.innerText = "Выиграл Игрок 2";
        popup.classList.remove("dontShow");
    }
    function refreshPage(){
        window.location.reload();
    }
    
    function beginNewGame() {
        gamer_1.classList.add("show");
        for (var i = 0; i < rows.length; i++) { 
            var cols = rows[i].querySelectorAll('td'); 
            for (var j = 0; j < cols.length; j++) { 
                cols[j].onclick = function() {
                    var img = document.createElement("img");
                    if(gamer_1.classList.contains("show") == true) {
                        img.setAttribute("src", "img/vote.png");
                        this.appendChild(img);
                    }
                    else if(gamer_2.classList.contains("show") == true) {
                        img.setAttribute("src", "img/circle.png");
                        this.appendChild(img);
                    }
                    gamer_1.classList.toggle("show");
                    gamer_2.classList.toggle("show");
                    if(col_1.innerHTML == col_2.innerHTML && col_1.innerHTML == col_3.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "275px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_1.innerHTML == col_2.innerHTML && col_1.innerHTML == col_3.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "275px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_4.innerHTML == col_5.innerHTML && col_4.innerHTML == col_6.innerHTML && col_4.innerHTML !== "" && col_4.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "425px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_4.innerHTML == col_5.innerHTML && col_4.innerHTML == col_6.innerHTML && col_4.innerHTML !== "" && col_4.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "425px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_7.innerHTML == col_8.innerHTML && col_7.innerHTML == col_9.innerHTML && col_7.innerHTML !== "" && col_7.innerHTML == "<img src=\"img/vote.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "575px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_7.innerHTML == col_8.innerHTML && col_7.innerHTML == col_9.innerHTML && col_7.innerHTML !== "" && col_7.innerHTML == "<img src=\"img/circle.png\">") {
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_1.style.display = "block";
                        canvas_1.style.top = "575px";
                        canvas_1.style.left = "50%";
                        canvas_1.style.marginLeft = "-230px";
                        setInterval(paintHorizontalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_1.innerHTML == col_4.innerHTML && col_1.innerHTML == col_7.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "-150px";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_1.innerHTML == col_4.innerHTML && col_1.innerHTML == col_7.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "-150px";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_2.innerHTML == col_5.innerHTML && col_2.innerHTML == col_8.innerHTML && col_2.innerHTML !== "" && col_2.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "0";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_2.innerHTML == col_5.innerHTML && col_2.innerHTML == col_8.innerHTML && col_2.innerHTML !== "" && col_2.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "0";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_3.innerHTML == col_6.innerHTML && col_3.innerHTML == col_9.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "150px";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_3.innerHTML == col_6.innerHTML && col_3.innerHTML == col_9.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_2.style.display = "block";
                        canvas_2.style.top = "195px";
                        canvas_2.style.left = "50%";
                        canvas_2.style.marginLeft = "150px";
                        setInterval(paintVerticalLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_1.innerHTML == col_5.innerHTML && col_1.innerHTML == col_9.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_3.style.transform = "rotate(45deg)";
                        canvas_3.style.display = "block";
                        canvas_3.style.top = "430px";
                        canvas_3.style.left = "50%";
                        canvas_3.style.marginLeft = "-310px";
                        setInterval(paintObliqueLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_1.innerHTML == col_5.innerHTML && col_1.innerHTML == col_9.innerHTML && col_1.innerHTML !== "" && col_1.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_3.style.transform = "rotate(45deg)";
                        canvas_3.style.display = "block";
                        canvas_3.style.top = "430px";
                        canvas_3.style.left = "50%";
                        canvas_3.style.marginLeft = "-310px";
                        setInterval(paintObliqueLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_3.innerHTML == col_5.innerHTML && col_3.innerHTML == col_7.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/vote.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_3.style.transform = "rotate(-45deg)";
                        canvas_3.style.display = "block";
                        canvas_3.style.top = "430px";
                        canvas_3.style.left = "50%";
                        canvas_3.style.marginLeft = "-310px";
                        setInterval(paintObliqueLine, 5);
                        setTimeout(wonGamer_1, 1000);
                    }
                    else if(col_3.innerHTML == col_5.innerHTML && col_3.innerHTML == col_7.innerHTML && col_3.innerHTML !== "" && col_3.innerHTML == "<img src=\"img/circle.png\">") { 
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        canvas_3.style.transform = "rotate(-45deg)";
                        canvas_3.style.display = "block";
                        canvas_3.style.top = "430px";
                        canvas_3.style.left = "50%";
                        canvas_3.style.marginLeft = "-310px";
                        setInterval(paintObliqueLine, 5);
                        setTimeout(wonGamer_2, 1000);
                    }
                    else if(col_1.innerHTML !== "" && col_2.innerHTML !== "" && col_3.innerHTML !== "" && col_4.innerHTML !== "" && col_5.innerHTML !== "" && col_6.innerHTML !== "" && col_7.innerHTML !== "" && col_8.innerHTML !== "" && col_9.innerHTML !== ""){
                        gamer_1.classList.remove("show");
                        gamer_2.classList.remove("show");
                        table.style.border = "5px solid #20bf0f";
                        setTimeout(function() {
                            popup_text.innerText = "Ничья";
                            popup.classList.remove("dontShow");
                        }, 1000);
                    }
                }
            }
        }
        begin.addEventListener("click", refreshPage);
    }

    begin.addEventListener("click", beginNewGame);
    newGame.addEventListener("click", refreshPage);
