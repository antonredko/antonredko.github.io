var timezone, humidity, pressure, temperature, windSpeed;

function element(id) {
    return document.getElementById(id);
}

window.onload = function () {
    timezone = element('timezone');
    humidity = element('current-humidity');
    pressure = element('current-pressure');
    temperature = element('current-temperature');
    windSpeed = element('current-wind-speed');
};

function getWeather() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var long = position.coords.longitude,
                lat = position.coords.latitude;
            showWeather(long, lat);
        })
    } 
    else alert('Could not get current weather');
};

function showWeather(long, lat) {
    var url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${lat}, ${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

function displayWeather(object) {
    timezone.innerHTML = 'Ваш регион: ' + object.timezone;
    humidity.innerHTML = 'Влажность: ' + (object.currently.humidity * 100) + ' %';
    pressure.innerHTML = 'Атм. давление: ' + object.currently.pressure + ' мм.р.с.';
  	temperature.innerHTML = 'Температура: ' + Math.round10((object.currently.temperature - 32) * 5/9, -1) + ' &#176;C';
    windSpeed.innerHTML = 'Скорость ветра: ' + object.currently.windSpeed + ' м/с';
};

function decimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};
if (!Math.round10) {
    Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
    };
};
