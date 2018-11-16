;
(function () {
    "use strict";
    var buttonSubmit = document.querySelector('.ba-button__js'),
        buttonSubmitBar = document.querySelector('.ba-button__oyster');

    buttonSubmit.addEventListener('click', askJavaScriptName);
    buttonSubmitBar.addEventListener('click', askAdmin);

    function askJavaScriptName() {
        var answer,
            question = document.querySelector('.ba-js-name').value,
            specification = 'ECMAScript';

        if (question === specification) {
            answer = 'Верно!';
        } else {
            answer = 'Не знаете?';
        }
        alert(answer);
    }

    function askAdmin() {
        var name = prompt('Кто пришел?', 'Имя?'),
            trueName = "Админ",
            password = prompt('Пароль?', 'Password'),
            truePassword = 'Черный Властелин',
            image = document.querySelector('.ba-black-master');

        if (name == null) {
            alert('Вход отменен');
        } else if (name != trueName) {
            alert('Я вас не знаю!');
        } else {
            alert(password);
        }
        if (password == null) {
            alert('Вход отменен!');
        } else if (password != truePassword) {
            alert('Пароль неверен');
        } else {
            alert('Добро пожаловать!');
            image.style.display = "block";
            document.querySelector('.ba-music').play();
        }

    }


})();