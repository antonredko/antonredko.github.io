// Сортування масиву даних, з виводом в таблицю. 
// При натисканні на заголовок поля таблиці, таблиця повинна сортуватись по вибраному полю. 
// Порядок сортування повинен мінятись зростаючий/спадаючий.
// Функція заповнення даних:

function fillTestData() {
    keys = ['date', 'number', 'string'];

    let data = [];
    let getRand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let randDate = () => new Date(Math.floor(now + Math.random() * (end_date - now))).toLocaleString();

    let getRandString = function() {

        let ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = "";

        for(let j = 0; j < 10; j += 1) {
            result += ch.charAt(Math.floor(Math.random() * ch.length));
        }

        return result;
    };

    let now = Date.now();
    let end_date = now + (86400000 * 365 * 2);

    for(let i = 0; i < 10; i += 1) {
        data.push(
            [
                randDate(),
                getRand(1111, 99999),
                getRandString()
            ]
        );
    }

    return {
        keys: keys,
        data: data
    };
}

function createTable() {
    let data = fillTestData().data,
        keys = fillTestData().keys,
        table = document.createElement('table');

    table.setAttribute('border', 1);

    let aaa = function() {
        let mainRow = function() {
            let tr = document.createElement('tr');

            for(let i = 0; i < keys.length; i += 1) {
                let th = document.createElement('th');
                th.innerHTML = keys[i];
                tr.appendChild(th);
            }
            table.appendChild(tr);

            return table;
        }
        
        let newRow = function() {
            let tr = document.createElement('tr');

            for(let i = 0; i < data.length; i += 1) {
                let td = document.createElement('td');
                td.innerHTML = data[i];
                tr.appendChild(td);
            }
            table.appendChild(tr);

            return table;
        }
        mainRow();
        newRow();
        return table;
    }

    document.body.appendChild(aaa());
}
createTable();