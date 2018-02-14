//1) У вас есть большой текст, в котором для обозначения диалогов используются одинарные кавычки.
// Придумать шаблон, который меняет одинарные кавычки на двойные.
//2) Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную кавычку на двойную.
//3) Создать форму обратной связи с полями: Имя, Телефон, e-mail, текст, кнопка «Отправить».

//- При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
//    - Имя содержит только буквы;
//- Телефон подчиняется шаблону +7(000)000-0000;
//- E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
//- Текст произвольный;
//- В случае не прохождения валидации одним из полей необходимо выделять это поле красной рамкой и сообщать пользователю об ошибке.


document.getElementById('format-btn').onclick = function () {
    var basicText = document.getElementById('basic-format').value;
    var formatText = basicText.replace(/\s'|'\s/gi, changeQuotes);

    function changeQuotes(str) {
        //console.log(str);
        var result = '';
        if(str === ' \'') {result = ' "'}
        if(str === '\' ') {result = '" '}
        return result


    }

    console.log(formatText);
    document.getElementById('output-format').innerText = formatText;
};

console.log(document.getElementById('btn'));
document.getElementById('btn').onclick = function () {
    console.log('click');

    var nameInpit = document.getElementById('name');
    var regExpName = nameInpit.value.match(/[а-яА-ЯёЁ]/g);
    console.log(regExpName);
};




