//Первое Дз

// var text = document.body.innerText;
// var patternDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
// var patternIndex = /\d{5}/;
// var patternDolar = /\$\d/;
// var patternIp = /\d{3}\.\d{3}\.\d{3}\.\d{3}/;
        
// document.write('<br>' + 'Есть ли в тексте дата в виде 30/12/2016 ' + patternDate.test(text));
// document.write('<br>' + 'Есть ли в тексте ценны в долларах ' + patternDolar.test(text));
// document.write('<br>' + 'Есть ли в тексте индекс(5 цифр) ' + patternIndex.test(text));
// document.write('<br>' + 'Есть ли в тексте Ip адресс ' + patternIp.test(text));


//Второе Дз

window.addEventListener('load', function () {
    var divArr = document.getElementsByTagName('div');

    for(var i = 0; i < divArr.length; i++) {
        divArr[i].onmouseover = function () {
            this.style.backgroundColor = getRandomColor ();
            this.innerHTML = getRandomColor ();
            this.style.color = 'white';
        }
    }
    
    console.log(getRandomColor());

    function getRandomColor () {
        return 'rgb(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ')';
    }

    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})
window.onbeforeunload = function () {
    return 'ERROR'
};