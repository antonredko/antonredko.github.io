        var secondsMax = 60,
            secondsMin = 0,
            secondsTimer,
            millisecondsMax = 99,
            millisecondsMin =0,
            millisecondsTimer,
            arrow = 90,
            stop = document.getElementById("stop"),
            reset = document.getElementById("reset"),
            time = document.getElementById("time");
        time.innerText = '00:00';

        document.oncontextmenu = function(e) {              // Запрет вызова контекстного меню правой кнопкой мыши
          e.preventDefault();
        }

        function ReversTimer() {
          secondsTimer = setInterval(function() {
            secondsMax -= 1;
            if(secondsMax < 1) {
              clearInterval(secondsTimer);
            }
            millisecondsTimer = setInterval(function () {
              millisecondsMax -= 1;
              time.innerText = secondsMax + ":" + millisecondsMax;
              if(millisecondsMax < 1) {
                clearInterval(millisecondsTimer);
                millisecondsMax = 99;
              }
                arrow -= 0.06;
                result.style.transform = "rotate(" + arrow + "deg)";
            }, 10);
          }, 1000);
          stop.onclick = function () {
            clearInterval(secondsTimer);
            clearInterval(millisecondsTimer);
          }
          reset.onclick = function () {
            clearInterval(secondsTimer);
            clearInterval(millisecondsTimer);
            secondsMax = 60;
            millisecondsMax = 99;
            arrow = 90;
            result.style.transform = "rotate(90deg)";
            time.innerText = '60:00';
          }
        }
        
        function FrontTimer() {
          secondsTimer = setInterval(function () {
            if (secondsMin >= 60) {
              clearInterval(secondsTimer);
            }
            millisecondsTimer = setInterval(function () {
              millisecondsMin += 1;
              time.innerText = secondsMin + ":" + millisecondsMin;
              if (millisecondsMin >= 99) {
                secondsMin += 1;
                clearInterval(millisecondsTimer);
                millisecondsMin = 0;
              }
                arrow += 0.06;
                result.style.transform = "rotate(" + arrow + "deg)";
            }, 10)
          }, 1000)
          stop.onclick = function () {
            clearInterval(secondsTimer);
            clearInterval(millisecondsTimer);
          }
          reset.onclick = function () {
            clearInterval(secondsTimer);
            clearInterval(millisecondsTimer);
            secondsMin = 0;
            millisecondsMin = 0;
            arrow = 90;
            result.style.transform = "rotate(90deg)";
            time.innerText = '00:00';
          }
        }

        revers.addEventListener('click', ReversTimer);
        front.addEventListener('click', FrontTimer);
