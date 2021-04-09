window.addEventListener('load', init);

function init () {
    var div = document.querySelector('#show');
    var butt = document.querySelector('[type="button"]')

    butt.addEventListener('click', dateConvert);

    function dateConvert () {
        var getDate = document.querySelector('#date').value;
        var days = ['7', '1', '2', '3', '4', '5', '6']
        var mainDate = new Date(getDate);
        var findDay = mainDate.getDay();
        var day = days[findDay];

        alert(day)
    }
}